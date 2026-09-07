from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

import os
import re
import uuid
import logging
import asyncio
from datetime import datetime, timezone, timedelta

import bcrypt
import jwt
import resend
from fastapi import FastAPI, APIRouter, HTTPException, Request, Response, Depends
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

app = FastAPI()
api_router = APIRouter(prefix="/api")

JWT_ALGORITHM = "HS256"

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)


# ---------- Auth helpers ----------

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))


def create_access_token(user_id: str, email: str) -> str:
    payload = {"sub": user_id, "email": email, "type": "access",
               "exp": datetime.now(timezone.utc) + timedelta(minutes=60)}
    return jwt.encode(payload, os.environ["JWT_SECRET"], algorithm=JWT_ALGORITHM)


def create_refresh_token(user_id: str) -> str:
    payload = {"sub": user_id, "type": "refresh",
               "exp": datetime.now(timezone.utc) + timedelta(days=7)}
    return jwt.encode(payload, os.environ["JWT_SECRET"], algorithm=JWT_ALGORITHM)


def set_auth_cookies(response: Response, access: str, refresh: str):
    response.set_cookie("access_token", access, httponly=True, secure=True, samesite="none", max_age=3600, path="/")
    response.set_cookie("refresh_token", refresh, httponly=True, secure=True, samesite="none", max_age=604800, path="/")


async def get_current_user(request: Request) -> dict:
    token = request.cookies.get("access_token")
    if not token:
        auth_header = request.headers.get("Authorization", "")
        if auth_header.startswith("Bearer "):
            token = auth_header[7:]
    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        payload = jwt.decode(token, os.environ["JWT_SECRET"], algorithms=[JWT_ALGORITHM])
        if payload.get("type") != "access":
            raise HTTPException(status_code=401, detail="Invalid token type")
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")
    user = await db.users.find_one({"id": payload["sub"]}, {"_id": 0, "password_hash": 0})
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user


# ---------- Models ----------

class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class EnquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=6, max_length=20)
    email: EmailStr
    matter: str = Field(min_length=2, max_length=200)
    message: str = Field(min_length=5, max_length=5000)


class EnquiryStatusUpdate(BaseModel):
    status: str


class ArticleIn(BaseModel):
    title: str = Field(min_length=3, max_length=300)
    slug: Optional[str] = None
    excerpt: str = ""
    content: str = ""
    meta_description: str = ""
    status: str = "draft"


def slugify(text: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s or uuid.uuid4().hex[:8]


# ---------- Auth endpoints ----------

@api_router.post("/auth/login")
async def login(body: LoginRequest, request: Request, response: Response):
    email = body.email.lower()
    identifier = f"{request.client.host}:{email}"
    attempts = await db.login_attempts.find_one({"identifier": identifier})
    if attempts and attempts.get("count", 0) >= 5:
        locked_since = attempts.get("updated_at")
        if locked_since and datetime.now(timezone.utc) - locked_since < timedelta(minutes=15):
            raise HTTPException(status_code=429, detail="Too many failed attempts. Try again in 15 minutes.")

    user = await db.users.find_one({"email": email})
    if not user or not verify_password(body.password, user["password_hash"]):
        await db.login_attempts.update_one(
            {"identifier": identifier},
            {"$inc": {"count": 1}, "$set": {"updated_at": datetime.now(timezone.utc)}},
            upsert=True,
        )
        raise HTTPException(status_code=401, detail="Invalid email or password")

    await db.login_attempts.delete_one({"identifier": identifier})
    set_auth_cookies(response, create_access_token(user["id"], email), create_refresh_token(user["id"]))
    return {"id": user["id"], "email": email, "name": user.get("name", "Admin"), "role": user.get("role", "admin")}


@api_router.post("/auth/logout")
async def logout(response: Response):
    response.delete_cookie("access_token", path="/")
    response.delete_cookie("refresh_token", path="/")
    return {"message": "Logged out"}


@api_router.get("/auth/me")
async def me(user: dict = Depends(get_current_user)):
    return user


@api_router.post("/auth/refresh")
async def refresh(request: Request, response: Response):
    token = request.cookies.get("refresh_token")
    if not token:
        raise HTTPException(status_code=401, detail="No refresh token")
    try:
        payload = jwt.decode(token, os.environ["JWT_SECRET"], algorithms=[JWT_ALGORITHM])
        if payload.get("type") != "refresh":
            raise HTTPException(status_code=401, detail="Invalid token type")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid refresh token")
    user = await db.users.find_one({"id": payload["sub"]})
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    access = create_access_token(user["id"], user["email"])
    response.set_cookie("access_token", access, httponly=True, secure=True, samesite="none", max_age=3600, path="/")
    return {"message": "refreshed"}


# ---------- Enquiries ----------

def enquiry_html(d: dict) -> str:
    rows = "".join(
        f'<tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold">{k}</td>'
        f'<td style="padding:8px 12px;border:1px solid #ddd">{v}</td></tr>'
        for k, v in [("Name", d["name"]), ("Phone", d["phone"]), ("Email", d["email"]),
                     ("Legal Matter", d["matter"]), ("Message", d["message"])]
    )
    return (f'<div style="font-family:Arial,sans-serif"><h2 style="color:#0B1F33">New Consultation Enquiry</h2>'
            f'<table style="border-collapse:collapse">{rows}</table></div>')


async def notify_enquiry(doc: dict):
    key = os.environ.get("RESEND_API_KEY")
    if not key:
        logger.info("RESEND_API_KEY not set; skipping enquiry email notification")
        return
    resend.api_key = key
    params = {
        "from": os.environ.get("SENDER_EMAIL", "onboarding@resend.dev"),
        "to": [os.environ.get("NOTIFY_EMAIL", "")],
        "subject": f"New Enquiry: {doc['matter']} — {doc['name']}",
        "html": enquiry_html(doc),
    }
    try:
        await asyncio.to_thread(resend.Emails.send, params)
    except Exception as e:
        logger.error(f"Failed to send enquiry email: {e}")


@api_router.post("/enquiries")
async def create_enquiry(body: EnquiryCreate):
    doc = body.model_dump()
    doc.update({"id": str(uuid.uuid4()), "status": "new",
                "created_at": datetime.now(timezone.utc).isoformat()})
    await db.enquiries.insert_one(doc)
    doc.pop("_id", None)
    asyncio.create_task(notify_enquiry(doc))
    return {"message": "Enquiry received. The chamber will get in touch with you shortly.", "id": doc["id"]}


@api_router.get("/enquiries")
async def list_enquiries(user: dict = Depends(get_current_user)):
    return await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)


@api_router.patch("/enquiries/{enquiry_id}")
async def update_enquiry(enquiry_id: str, body: EnquiryStatusUpdate, user: dict = Depends(get_current_user)):
    if body.status not in ("new", "contacted", "in-progress", "archived"):
        raise HTTPException(status_code=400, detail="Invalid status")
    result = await db.enquiries.update_one({"id": enquiry_id}, {"$set": {"status": body.status}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Enquiry not found")
    return {"message": "updated"}


@api_router.delete("/enquiries/{enquiry_id}")
async def delete_enquiry(enquiry_id: str, user: dict = Depends(get_current_user)):
    result = await db.enquiries.delete_one({"id": enquiry_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Enquiry not found")
    return {"message": "deleted"}


# ---------- Articles ----------

@api_router.get("/articles")
async def list_published_articles():
    return await db.articles.find({"status": "published"}, {"_id": 0, "content": 0}).sort("created_at", -1).to_list(200)


@api_router.get("/articles/{slug}")
async def get_article(slug: str):
    article = await db.articles.find_one({"slug": slug, "status": "published"}, {"_id": 0})
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return article


@api_router.get("/admin/articles")
async def admin_list_articles(user: dict = Depends(get_current_user)):
    return await db.articles.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)


@api_router.post("/admin/articles")
async def admin_create_article(body: ArticleIn, user: dict = Depends(get_current_user)):
    doc = body.model_dump()
    doc["slug"] = slugify(doc["slug"] or doc["title"])
    if await db.articles.find_one({"slug": doc["slug"]}):
        raise HTTPException(status_code=400, detail="An article with this slug already exists")
    now = datetime.now(timezone.utc).isoformat()
    doc.update({"id": str(uuid.uuid4()), "created_at": now, "updated_at": now})
    await db.articles.insert_one(doc)
    doc.pop("_id", None)
    return doc


@api_router.put("/admin/articles/{article_id}")
async def admin_update_article(article_id: str, body: ArticleIn, user: dict = Depends(get_current_user)):
    doc = body.model_dump()
    doc["slug"] = slugify(doc["slug"] or doc["title"])
    doc["updated_at"] = datetime.now(timezone.utc).isoformat()
    result = await db.articles.update_one({"id": article_id}, {"$set": doc})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"message": "updated"}


@api_router.delete("/admin/articles/{article_id}")
async def admin_delete_article(article_id: str, user: dict = Depends(get_current_user)):
    result = await db.articles.delete_one({"id": article_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"message": "deleted"}


@api_router.get("/")
async def root():
    return {"message": "Aditya Gaur, Advocate — API"}


app.include_router(api_router)

frontend_url = os.environ.get("FRONTEND_URL", "http://localhost:3000")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_url, "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    await db.users.create_index("email", unique=True)
    await db.login_attempts.create_index("identifier")
    await db.enquiries.create_index("created_at")
    await db.articles.create_index("slug", unique=True)
    await db.articles.create_index("status")

    admin_email = os.environ.get("ADMIN_EMAIL", "admin@example.com").lower()
    admin_password = os.environ.get("ADMIN_PASSWORD", "admin123")
    existing = await db.users.find_one({"email": admin_email})
    if existing is None:
        await db.users.insert_one({
            "id": str(uuid.uuid4()), "email": admin_email,
            "password_hash": hash_password(admin_password),
            "name": "Aditya Gaur", "role": "admin",
            "created_at": datetime.now(timezone.utc).isoformat(),
        })
        logger.info(f"Admin user seeded: {admin_email}")
    elif not verify_password(admin_password, existing["password_hash"]):
        await db.users.update_one({"email": admin_email},
                                  {"$set": {"password_hash": hash_password(admin_password)}})
        logger.info("Admin password updated from env")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
