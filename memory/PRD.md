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

### Update 2026-09-07 (night 3) — Hub sub-services
- Practice Areas hub now lists detailed sub-services as chips under each category ("Also Handled"), linking to the closest existing page — no new thin pages, no cannibalization. Added: Regular Bail, FIR & Criminal Complaints, Criminal Appeals (criminal); Annulment, Judicial Separation, 498A & Allied (family); Ancestral Property, Injunctions, Landlord-Tenant, Recovery, Property Documentation (civil); Section 138 NI Act (financial); Corporate Advisory, Business Disputes, MSME (corporate).
- New hub-only group "RERA & Real Estate" (RERA Matters + Builder-Buyer Disputes + Real Estate Disputes) — homepage still shows the six main categories only.
- UNVERIFIED services shown as dashed "confirmation pending" placeholders, not published as fact: NRI Matrimonial Matters, DRT Matters, SARFAESI Matters — flip `pending: false` in site.js CATEGORY_SUBS once Aditya confirms.

### Update 2026-09-07 (night 4) — Bug-fix pass (user-reported)
- Fade-out bug: Reveal now uses viewport amount:0.12 (negative rootMargin removed), stagger delay capped at 0.3s, duration 0.55s, and renders fully visible when prefers-reduced-motion — content can no longer stay hidden. Verified 0 low-opacity text elements at 390/768/1290px across all reported sections.
- Placeholders gated: FLAGS in site.js (showTestimonials / showJudgments, both false) — homepage judgments + testimonials sections hidden until real content arrives. /judgments page now shows a clean "Entries in Preparation" state (no bracketed placeholders).
- Both testimonial/commitments disclaimer lines removed from homepage per user.
- Insights cards: image containers hardened (shrink-0 + bg fallback) — verified no title/image overlap on all 6 cards at 1290px.
- Duplicate ticker fixed: marquee now scrolls practice-area names; the navy trust strip keeps the location items (no duplicated content).
- Note: testing_agent tool is not available in this environment; verification was done via automated multi-breakpoint browser checks (opacity sweep + geometry overlap checks + screenshots).

### Update 2026-09-08 (session 2) — Hero practice slider + team photo + shared USP
- Hero right-side static portrait replaced with auto-playing practice-area slider (components/HeroSlider.jsx): 6 slides from PRACTICE_CATEGORIES + CATEGORY_IMAGES (same images/descriptions as the practice grid — content stays consistent), 5.5s autoplay, opacity crossfade, pause on hover/focus, dot navigation (any manual click stops autoplay permanently), progressive image loading (slides 0/1 eager, rest deferred), prefers-reduced-motion disables autoplay + transitions. Hero left column (h1, subtext, both CTAs) untouched.
- About team: user-provided B&W photo (/team-member.webp, 864×1184, 37KB) applied to ALL 3 team-member cards per explicit user instruction; name/designation/qualification lines remain "to be updated" until verified details arrive. Founder card unchanged.
- "Why Aditya Gaur" 4-card USP extracted to shared components/UspSection.jsx — rendered on Home (original position) and About (after Professional Philosophy, before The Team). Identical markup/testids (usp-section, usp-1..4).
- Code health: fetchpriority → fetchPriority (React warning fixed); portraitY renamed sliderY.
- Testing: testing_agent full frontend pass 100% (autoplay, hover pause/resume, dot jump + permanent manual pause, Learn More routes, reduced-motion, mobile 390px, team photos, zero console errors). About USP placement verified by DOM order check + desktop/mobile screenshots.

### Update 2026-09-08 (session 2, contd.) — USP moved off homepage + social links live
- "Why Aditya Gaur" USP section REMOVED from homepage per user request — it now lives only on the About page (after Professional Philosophy, before The Team), via the shared components/UspSection.jsx. Homepage flow verified: hero slider → jurisdiction marquee/quick-contact strip → "A practice built on…" preview with 0px gaps (DOM geometry check).
- Footer socials enabled: SITE.socials = { linkedin, email } in site.js — footer renders LinkedIn icon (external, new tab) + Mail icon (mailto:contact@adityagaurassociates.com). data-testids: footer-linkedin, footer-email-icon.
- About team section: small subtle LinkedIn icon link under each photo — founder featured profile (team-founder-linkedin) + all 3 member cards (team-member-linkedin-1/2/3).
- IMPORTANT: ALL LinkedIn URLs are TEMPORARY PLACEHOLDERS (currently https://www.linkedin.com/in/tripti-rajput-performance-marketer/) — marked with code comments in site.js and About.jsx; swap for each person's real profile once provided. (Asked user for real URLs 2026-09-08 — not yet provided.)

### Update 2026-09-08 (session 2, contd. 3) — Deployment readiness: PASS
- Deployment health check initially FAILED on one blocker: CORS origins hardcoded in server.py (missing Emergent domain pattern). Fixed: CORS now reads CORS_ORIGINS from backend/.env ('*'); unused FRONTEND_URL code removed.
- Verified live: OPTIONS preflight returns access-control-allow-origin correctly, GET /api/articles 200, both services running under supervisor.
- Re-run health check: PASS — no hardcoded secrets/URLs, env-only config, valid supervisor config, idempotent seeding, ready for Kubernetes deployment on Emergent.

### Update 2026-09-08 (session 2, contd. 2) — WhatsApp float live
- Floating WhatsApp chat button (components/WhatsAppFloat.jsx) rendered globally via Layout, hidden on /admin routes. Fixed bottom-right, #25D366, official glyph SVG, opens wa.me/919582885482 with prefilled message. data-testid: whatsapp-float-btn. Verified on mobile 390px + confirmed absent on /admin/login.
- Resend enquiry email alerts: backend code already wired (notify_enquiry in server.py; needs RESEND_API_KEY + SENDER_EMAIL + NOTIFY_EMAIL in backend/.env, then `sudo supervisorctl restart backend`). Playbook confirmed. BLOCKED: user has not yet provided the Resend API key.

### Update 2026-09-08 — Photo live + final breakpoint sweep
- Aditya Gaur's real professional photo live: uploaded PNG cropped to 4:5, optimized to WebP (122KB, 960×1200) at /aditya-gaur-advocate.webp; used in hero, About bio, team featured profile, and as the homepage OG share image.
- Top bars restructured: jurisdiction marquee (top, single deduplicated loop) + quick-contact strip (bottom: chamber address + phone + Book a Consultation link), each with its own reserved height — verified zero overlap.
- Fade-bug sweep completed at all requested widths (390/768/1024/1290/1440/1920/2560): 0 low-opacity elements in every reported section.

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
1. User supplies verified team member names/designations/qualifications (photos currently the same B&W image in all 3 slots per user instruction) + founder bio fields + socials.
2. User provides Resend API key (resend.com) to activate enquiry email notifications.
3. Admin drafts first 3–5 Legal Insights articles from the planned-topics list.
4. Genuine judgments/testimonials data → unhide gated sections (FLAGS.showJudgments / showTestimonials in site.js).
