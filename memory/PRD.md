# PRD — Aditya Gaur, Advocate — Premium Legal Practice Website

## Original Problem Statement (summary)
Build a premium, professional, SEO-focused website for Aditya Gaur, Advocate — an individual advocate with a chamber at District Courts, Sector 12, Faridabad, Haryana, and a Delhi NCR + Pan-India practice (District Courts, High Courts, Supreme Court of India). Goals: professional credibility, genuine consultation enquiries, organic rankings for legal + location keywords, topical authority via detailed service pages and legal articles. Premium boutique-lawyer aesthetic (Deep Navy #0B1F33 / Navy #163A59 / Muted Gold #B89B5E / Warm Ivory #F8F6F1 / Charcoal #222222, ~70/25/5). Serif headings (Cormorant Garamond), Inter body. Strict ethics: no fake testimonials, no guaranteed-result claims, no invented qualifications — all unverified professional details are editable placeholders. No keyword cannibalization — one topic per page.

## Architecture
- Frontend: React (CRA) + Tailwind + framer-motion + lenis, shadcn/ui, react-router v7. SEO per page via `src/components/Seo.jsx` (canonical, OG, JSON-LD: LegalService / Service+FAQPage / Article).
- Backend: FastAPI + MongoDB (motor). Auth: JWT httpOnly cookies (access 60min + refresh 7d), bcrypt, admin seeded from env, brute-force lockout (5 tries / 15 min). Enquiries CRUD, Articles CRUD (draft/published). Resend email notification on new enquiry (guarded: only when RESEND_API_KEY set).
- Content: data-driven pages — `src/data/practice-*.js` (18 service pages), `src/data/locations.js` (7 location pages), `src/data/site.js` (brand, contacts, nav).
- SEO infra: `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`.

## User Personas
- Potential client (Faridabad/NCR/India) seeking counsel, using search or referral.
- Aditya Gaur (admin): reviews enquiries, publishes Legal Insights articles.

## Core Requirements (static)
Home, About, Practice Areas hub + detailed service pages, Courts & Jurisdiction, Location pages, Legal Insights blog, Contact/enquiry, Disclaimer, Privacy Policy, Terms of Use, admin dashboard, technical SEO.

## Implemented (2026-09-07)
- Award-grade homepage: masked line-by-line hero reveal, portrait in clipped gold-offset frame with parallax, navy trust strip, slow editorial marquee, practice bento, courts strip, numbered manifesto chapters, locations grid, insights preview, CTA.
- 18 unique practice-area pages (criminal, bail, anticipatory bail, FIR quashing, divorce & family, divorce, mutual consent, contested, maintenance/alimony, child custody, property & civil, property disputes, civil litigation, RERA, cheque bounce, debt recovery, corporate-commercial, contracts) — each with unique H1/title/meta, sections, FAQs + FAQ schema, related links, sidebar enquiry form.
- 7 unique location pages (Faridabad strongest, Delhi, Noida, Greater Noida, Gurugram, Delhi NCR, Pan-India).
- Courts & Jurisdiction page; About page with editable placeholder bio fields; Legal Insights hub with elegant empty state + admin-published article pages; Contact page with working enquiry form.
- Disclaimer / Privacy Policy / Terms of Use.
- Admin dashboard at /admin (login: admin@adityagauradvocate.in) — enquiries inbox with status management, article editor (draft/publish).
- Verified: admin login + cookie session, enquiry submit → admin list → status update, article publish → public listing/detail, unauthenticated /admin APIs return 401, all major pages render.

### Update 2026-09-07 (later) — Rebrand, Team, Typography
- Rebrand to "Aditya Gaur & Associates" sitewide (brand lockup, SEO titles, siteName, schema, footer, llms.txt, admin header). Domain adityagaurassociates.in: sitemap.xml + robots.txt now point to it; backend CORS allows it (domain mapping at deployment still pending).
- Homepage hero H1 is now a real <h1> (MaskedLines el prop).
- About page: "Our Team" section added — Founder card (Aditya Gaur) + Associates & Assisting Counsel card (profiles published when announced; no invented team members).
- Contact: "Sunday · Emergency Only" replaced by "Emergency Legal Assistance — Available Anytime" with the emergency number directly below (merged into one gold-accented block, no duplicate numbers).
- TYPOGRAPHY: Roboto only, site-wide — via Roboto Flex (variable Roboto, supports exact 800/700/600). Global unlayered CSS in index.css enforces H1 800 / H2 700 / H3-4 600 / body 400 / nav+labels 500 / buttons-CTA 600. Playfair Display & JetBrains Mono fully removed. Hero "& India" no longer italic. Practice category images added (home bento + hub) inspired by reference-site pattern.

### Update 2026-09-07 (evening) — Testimonials + Insights images
- Homepage "What Our Clients Say" testimonials section (before final CTA) with 3 clearly-marked PLACEHOLDER cards — no fake names/ratings/results; replaced when genuine consented feedback is supplied.
- Legal Insights cards (home + /legal-insights + article pages) now have topic-specific images via keyword-inference helper `insightVisual()` in site.js (criminal/family/property/financial/corporate/court), WebP + lazy loading + descriptive alt text + consistent 16:9. Articles support an optional admin-set image URL (ArticleIn.image); topic image used as fallback.

### Update 2026-09-07 (night) — Insights library + pagination
- 12 full Legal Insights articles published (seeded via /app/scripts/seed_articles.py + seed_articles_2.py, admin API): anticipatory bail, mutual consent divorce, cheque bounce notice, bail vs anticipatory bail, FIR quashing, Section 138 NI Act, property dispute remedies, RERA complaint process, maintenance & alimony, child custody, civil vs criminal case, criminal SLP. All carry internal links to matching service pages + disclaimer note.
- /legal-insights now paginates (6/page) with ?page=N deep-linkable URLs, prev/next + numbered controls.
- Homepage "Selected Judgments & Legal Matters" section added (before testimonials) with 3 clearly-marked placeholder rows + required neutral-outcome note; "View Judgment" links disabled until verified judgments are supplied.
- insightVisual now rotates 2 image variants per topic so same-topic articles don't repeat images.

### Update 2026-09-07 (night 2) — High Court SEO page
- Dedicated /high-court-lawyer page (single page for the whole cluster — no separate "High Court Advocate" page, per instruction). H1: "High Court Lawyer & Advocate in India". H2s: High Court Legal Representation, High Court Litigation Matters, Types of Matters, How a High Court Engagement Works, FAQ. Keywords (lawyer/advocate/legal services variants) woven naturally; jurisdiction framing kept verified-safe.
- Homepage Courts & Jurisdiction "High Courts" card now links to /high-court-lawyer with "High Court Legal Services →" CTA; /courts-jurisdiction bottom links include the HC page. Sitemap updated.

### Update 2026-09-07 — Supreme Court Criminal Law topical cluster
- New pillar page /supreme-court-criminal-lawyer (primary keyword "Supreme Court Criminal Lawyer"; natural coverage of criminal advocate/SC defence clusters).
- Supporting pages: /supreme-court-bail-lawyer (bail cluster incl. anticipatory/interim/cancellation), /supreme-court-criminal-appeal-lawyer (appeals cluster), /supreme-court-criminal-slp-lawyer (Article 136 SLP cluster). Each targets a distinct search intent — no cannibalization.
- Specialised statutes (PMLA/ED/NDPS/POCSO/UAPA/cyber/economic offences) mentioned only with hedged, non-claiming language (unverified — do not assert experience until confirmed).
- New "Supreme Court Criminal Practice" category added to nav data (home bento, hub, footer); cross-links from criminal-law/bail/anticipatory-bail/fir-quashing pages and Courts & Jurisdiction page; sitemap updated.

## Pending / Blockers
- RESEND_API_KEY not set → enquiry email notifications skipped (dashboard works regardless). Need Resend key + verified sender + recipient email.
- Verified contact details now live sitewide (2026-09-07): Chamber — Opposite District & Sessions Court, Faridabad, Haryana – 121002; Emergency Contact — +91 95828 85482; Email — contact@adityagaurassociates.com; Office hours — Mon–Sat 10:00 AM–7:00 PM. Social links remain placeholders.
- Typography switched to Playfair Display (headings) + Roboto (body) per user direction; "Why Aditya Gaur" 4-USP section added below hero; Contact page rebuilt to two-column spec (Schedule a Consultation form left, contact details right with gold-accented Emergency Contact).
- Placeholder portrait photo (user to upload real one).
- Keyword Excel file was referenced but not actually attached — SEO mapping built from the brief.
- Google Search Console / Analytics not connected (awaiting credentials).

## Backlog
- P0: Real contact details + portrait; Resend key for enquiry emails.
- P1: Write and publish first Legal Insights articles (admin can now do this); Google Search Console + sitemap submission after domain is final.
- P2: Additional practice pages (DRT/SARFAESI/NCLT/insolvency) only if those services are genuinely offered; testimonials section once genuine reviews are supplied; Google Business Profile for local SEO.

## Next Tasks
1. User supplies verified phone/WhatsApp/email/social + portrait + bio fields.
2. User provides Resend API key (resend.com) to activate enquiry email notifications.
3. Admin drafts first 3–5 Legal Insights articles from the planned-topics list.
