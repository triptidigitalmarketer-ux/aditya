import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Scale, Landmark, Building2, Globe2, ChevronLeft, ChevronRight } from "lucide-react";
import Seo from "@/components/Seo";
import { MaskedLines, Reveal, GoldRule, Overline, Marquee } from "@/components/Motion";
import CtaSection from "@/components/CtaSection";
import { SITE, PRACTICE_CATEGORIES, LOCATIONS, MARQUEE_ITEMS, PORTRAIT_URL, CATEGORY_IMAGES, INSIGHT_IMAGES, insightVisual, FLAGS } from "@/data/site";
import { API } from "@/api";

const TRUST_ITEMS = ["Faridabad Chamber", "Delhi NCR", "Pan-India Matters", "High Courts", "Supreme Court"];

const USPS = [
  {
    num: "01",
    title: "Focused on Resolution",
    text: "A practical and focused approach towards achieving effective resolution of legal matters.",
  },
  {
    num: "02",
    title: "Strategic Case Handling",
    text: "Careful analysis of the facts, documents and applicable law to develop an appropriate legal strategy.",
  },
  {
    num: "03",
    title: "Strong Legal Representation",
    text: "Professional representation across relevant courts and legal proceedings.",
  },
  {
    num: "04",
    title: "Clear Legal Guidance",
    text: "Clear communication and practical guidance throughout the legal process.",
  },
];

const CHAPTERS = [
  {
    num: "01",
    title: "Understanding the Matter",
    text: "Every engagement begins with the facts and the documents — what has happened, what stage the matter is at, and what the law realistically permits. No matter proceeds on assumptions.",
  },
  {
    num: "02",
    title: "Honest Strategy",
    text: "Clients receive a candid assessment: the strengths, the weaknesses, the likely timeline and the cost. Where settlement serves better than litigation, that advice is given plainly.",
  },
  {
    num: "03",
    title: "Prepared Representation",
    text: "Appearances before District Courts, High Courts and the Supreme Court are backed by preparation — the record read end to end, the precedents assembled, the argument rehearsed.",
  },
  {
    num: "04",
    title: "Clear Communication",
    text: "Clients know what happened on every date and what happens next. Legal process is confusing enough without counsel who cannot be reached.",
  },
];

const COURT_PILLARS = [
  { icon: Building2, title: "District Courts", text: "Trial-level litigation at Faridabad and district courts across Delhi NCR." },
  { icon: Landmark, title: "High Courts", text: "High Court lawyer and advocate services — bail, quashing, writs and appeals before the High Court having jurisdiction over the matter.", to: "/high-court-lawyer" },
  { icon: Scale, title: "Supreme Court", text: "Matters before the Supreme Court of India, per applicable procedure." },
  { icon: Globe2, title: "Pan-India", text: "Matters across India, depending on nature and jurisdiction." },
];

const Home = () => {
  const heroRef = useRef(null);
  const testimonialsRef = useRef(null);
  const scrollTestimonials = (dir) => {
    const el = testimonialsRef.current;
    if (!el) return;
    const perView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    el.scrollBy({ left: dir * (el.clientWidth / perView), behavior: "smooth" });
  };
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    API.get("/articles").then(({ data }) => setArticles(data.slice(0, 3))).catch(() => {});
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Aditya Gaur & Associates",
    description:
      "Professional legal representation across Faridabad, Delhi NCR and India — criminal defence, matrimonial, property, financial and commercial matters.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opposite District & Sessions Court",
      addressLocality: "Faridabad",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    areaServed: ["Faridabad", "Delhi", "Noida", "Greater Noida", "Gurugram", "Delhi NCR", "India"],
  };

  return (
    <div data-testid="home-page">
      <Seo
        title="Aditya Gaur & Associates | Lawyer in Faridabad, Delhi NCR & Pan-India"
        siteName="Aditya Gaur & Associates"
        description="Professional legal representation across Faridabad, Delhi, Noida, Greater Noida, Gurugram and India. District Courts, High Courts & Supreme Court matters. Chamber: District Courts, Sector 12, Faridabad."
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section ref={heroRef} data-testid="hero-section" className="relative overflow-hidden bg-ivory grain">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xs font-mono uppercase tracking-[0.35em] text-gold-dark font-semibold"
              data-testid="hero-overline"
            >
              {SITE.brandLine1} {SITE.brandLine2}
            </motion.p>
            <MaskedLines
              el="h1"
              className="mt-7"
              lineClassName="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight text-navy"
              lines={[
                { text: "Legal Representation" },
                { text: "Across Delhi NCR" },
                { text: "& India", className: "text-navy-light" },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-charcoal/80" data-testid="hero-subtext">
                Professional legal representation and practical legal guidance for clients across Faridabad, Delhi,
                Noida, Greater Noida, Gurugram and other jurisdictions across India.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  data-testid="hero-book-consultation-btn"
                  className="inline-flex items-center gap-2 bg-navy px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-ivory shadow-md transition-all duration-300 hover:bg-navy-light active:scale-95"
                >
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/practice-areas"
                  data-testid="hero-explore-practice-btn"
                  className="inline-flex items-center gap-2 border border-navy px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-navy transition-all duration-300 hover:bg-navy hover:text-ivory"
                >
                  Explore Practice Areas
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative mx-auto max-w-sm lg:max-w-none"
            >
              <div className="absolute -left-4 -top-4 h-full w-full border border-gold/50" aria-hidden="true" />
              <motion.div style={{ y: portraitY }} className="relative overflow-hidden bg-navy/5">
                <img
                  src={PORTRAIT_URL}
                  alt="Aditya Gaur & Associates"
                  data-testid="hero-portrait"
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold">Chamber</p>
                  <p className="mt-1 text-sm text-ivory">Opposite District &amp; Sessions Court, Faridabad</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USP — WHY ADITYA GAUR */}
      <section data-testid="usp-section" className="border-b border-navy/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <Overline>Why Aditya Gaur</Overline>
            <GoldRule className="mt-3 w-16" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {USPS.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.08}>
                <div
                  data-testid={`usp-${i + 1}`}
                  className="border-l border-navy/10 pl-6 transition-colors duration-300 hover:border-gold"
                >
                  <span className="font-serif text-2xl italic text-gold/80">{u.num}</span>
                  <span className="mt-3 block h-px w-8 bg-gold/70" />
                  <h2 className="mt-4 font-serif text-xl text-navy">{u.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/70">{u.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section data-testid="trust-strip" className="bg-navy">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6 sm:px-6 lg:justify-between lg:px-8">
          {TRUST_ITEMS.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <span className="flex items-center gap-8">
                <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-ivory/85">{item}</span>
                {i < TRUST_ITEMS.length - 1 && <span className="hidden h-1 w-1 rotate-45 bg-gold lg:block" />}
              </span>
            </Reveal>
          ))}
        </div>
        <div className="border-t border-ivory/10 bg-navy-deep">
          <p data-testid="chamber-line" className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-3 text-center text-xs text-ivory/60 sm:px-6 lg:px-8">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" />
            Chamber: Opposite District &amp; Sessions Court, Faridabad, Haryana – 121002
          </p>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* ABOUT PREVIEW */}
      <section data-testid="about-preview" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Overline>01 — The Practice</Overline>
              <GoldRule className="mt-3 w-16" />
              <h2 className="mt-5 font-serif text-3xl text-navy sm:text-4xl">
                A practice built on preparation and plain speaking
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.15}>
              <p className="text-lg font-light leading-relaxed text-charcoal/85">
                Aditya Gaur is an advocate practising from his chamber opposite the District &amp; Sessions Court,
                Faridabad, with a practice that extends across Delhi, Noida, Greater Noida, Gurugram and the wider
                National Capital Region — and, depending on the nature and jurisdiction of the matter, across India.
                The work spans criminal defence, matrimonial and family law, property and civil
                disputes, cheque bounce and debt recovery, and corporate-commercial matters.
              </p>
              <p className="mt-5 text-lg font-light leading-relaxed text-charcoal/85">
                The approach is consistent: read the record fully, advise honestly, and prepare every appearance as
                though the matter turns on it — because it often does.
              </p>
              <Link
                to="/about-aditya-gaur"
                data-testid="about-preview-link"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-navy transition-colors hover:text-gold-dark"
              >
                About Aditya Gaur <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MANIFESTO CHAPTERS */}
      <section data-testid="approach-chapters" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <Reveal>
          <Overline>02 — How Matters Are Handled</Overline>
          <GoldRule className="mt-3 w-16" />
        </Reveal>
        <div className="mt-12 space-y-0">
          {CHAPTERS.map((ch, i) => (
            <Reveal key={ch.num} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-4 border-t border-navy/10 py-10 transition-colors duration-300 hover:bg-white/60 sm:grid-cols-12 sm:gap-8 sm:px-4">
                <span className="font-serif text-5xl italic text-gold/70 sm:col-span-2">{ch.num}</span>
                <h3 className="font-serif text-2xl text-navy sm:col-span-4">{ch.title}</h3>
                <p className="text-base leading-relaxed text-charcoal/75 sm:col-span-6">{ch.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLIENT COMMITMENTS */}
      <section data-testid="client-commitments" className="border-y border-navy/10 bg-cream grain relative">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Overline className="text-center">What Clients Can Expect</Overline>
              <GoldRule className="mx-auto mt-3 w-16" style={{}} />
              <h2 className="mt-5 font-serif text-3xl text-navy sm:text-4xl">
                A standard of practice, kept on every matter
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Every Enquiry Answered",
                text: "Each consultation request is read personally and answered — with a clear next step.",
              },
              {
                title: "Honest Case Assessment",
                text: "The strengths and the weaknesses of your matter, told plainly, before any filing.",
              },
              {
                title: "Updates After Every Date",
                text: "What happened in court, what it means and what comes next — after every appearance.",
              },
              {
                title: "Complete Confidentiality",
                text: "Your matter is discussed with no one. Professional confidence is absolute.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div data-testid={`commitment-${i + 1}`} className="relative bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="absolute -top-4 left-6 font-serif text-6xl italic leading-none text-gold/60 select-none" aria-hidden="true">&ldquo;</span>
                  <h3 className="mt-3 font-serif text-lg text-navy">{c.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/70">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS BENTO */}
      <section data-testid="practice-bento" className="border-y border-navy/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Overline>03 — Practice Areas</Overline>
            <GoldRule className="mt-3 w-16" />
            <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
              <h2 className="max-w-xl font-serif text-3xl text-navy sm:text-4xl">
                Focused practice across six areas of law
              </h2>
              <Link to="/practice-areas" data-testid="view-all-practice-areas" className="text-sm font-medium uppercase tracking-wider text-navy underline-offset-4 hover:text-gold-dark hover:underline">
                View All Practice Areas
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {PRACTICE_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.08} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
                <div className="group h-full overflow-hidden border border-navy/10 border-l-2 border-l-transparent bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-l-gold hover:shadow-xl">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={CATEGORY_IMAGES[cat.id]}
                      alt={`${cat.title} — Aditya Gaur & Associates, Faridabad`}
                      data-testid={`practice-image-${cat.id}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                  <span className="font-serif text-sm italic text-gold-dark">0{i + 1}</span>
                  <h3 className="mt-3 font-serif text-2xl text-navy">{cat.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{cat.description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-navy/10 pt-5">
                    {cat.pages.slice(0, 4).map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/${p.slug}`}
                          data-testid={`practice-link-${p.slug}`}
                          className="flex items-center justify-between text-sm text-charcoal/80 transition-colors hover:text-navy"
                        >
                          {p.label}
                          <ArrowUpRight className="h-3.5 w-3.5 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.45} className="md:col-span-2 lg:col-span-3">
              <Link
                to="/contact"
                data-testid="practice-cta-card"
                className="flex flex-col justify-between gap-8 bg-navy p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-light hover:shadow-xl sm:flex-row sm:items-center lg:px-12"
              >
                <div>
                  <h3 className="font-serif text-2xl text-ivory">Not sure which area fits your matter?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/70">
                    Describe the situation briefly and the chamber will direct your enquiry appropriately.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-wider text-gold">
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COURTS STRIP */}
      <section data-testid="courts-strip" className="bg-navy grain relative">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <Overline className="text-gold">04 — Courts & Jurisdiction</Overline>
            <GoldRule className="mt-3 w-16" />
            <h2 className="mt-5 max-w-2xl font-serif text-3xl text-ivory sm:text-4xl">
              From the District Court at Faridabad to the Supreme Court of India
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {COURT_PILLARS.map((c, i) => {
              const inner = (
                <>
                  <c.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-5 font-serif text-xl text-ivory">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{c.text}</p>
                  {c.to && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                      High Court Legal Services <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </>
              );
              return (
                <Reveal key={c.title} delay={i * 0.1}>
                  {c.to ? (
                    <Link
                      to={c.to}
                      data-testid="court-pillar-high-courts"
                      className="block h-full bg-navy p-8 transition-colors duration-300 hover:bg-navy-light"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className="h-full bg-navy p-8 transition-colors duration-300 hover:bg-navy-light">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.3}>
            <Link
              to="/courts-jurisdiction"
              data-testid="courts-strip-link"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
            >
              Courts & Jurisdiction <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SELECTED JUDGMENTS & LEGAL MATTERS — hidden until verified judgments are provided */}
      {FLAGS.showJudgments && (
      <section data-testid="judgments-section" className="border-y border-navy/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <Overline>Judgments</Overline>
            <GoldRule className="mt-3 w-16" />
            <h2 className="mt-5 font-serif text-3xl text-navy sm:text-4xl">Selected Judgments &amp; Legal Matters</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/75">
              Publicly available judgments and legal matters in which the chambers has been involved. Each entry
              states the legal issue in neutral terms and links to the public record.
            </p>
          </Reveal>
          <div className="mt-14 border-t border-navy/10">
            {[1, 2, 3].map((n) => (
              <Reveal key={n} delay={n * 0.06}>
                <div
                  data-testid={`judgment-${n}`}
                  className="grid grid-cols-1 gap-6 border-b border-navy/10 py-8 transition-colors duration-300 hover:bg-cream/60 lg:grid-cols-12 lg:px-4"
                >
                  <div className="lg:col-span-7">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-dark">
                      Placeholder — to be updated with a verified judgment
                    </span>
                    <h3 className="mt-2 font-serif text-xl text-navy">[Case Title — Party v. Party]</h3>
                    <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-charcoal/70">
                      A brief, neutral description of the legal issue decided in the matter will appear here — the
                      question of law or subject matter, stated factually and without reference to outcome.
                    </p>
                  </div>
                  <div className="lg:col-span-5">
                    <dl className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm lg:justify-items-end lg:text-right">
                      <div>
                        <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-dark">Court</dt>
                        <dd className="mt-1 text-charcoal/80">[Court Name]</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-dark">Year</dt>
                        <dd className="mt-1 text-charcoal/80">[Year]</dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-dark">Case No.</dt>
                        <dd className="mt-1 text-charcoal/80">[Case Number]</dd>
                      </div>
                    </dl>
                    <p className="mt-4 lg:text-right">
                      <span
                        data-testid={`judgment-link-${n}`}
                        className="inline-flex cursor-not-allowed items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-dark/60"
                        title="Link will be activated with the verified public judgment"
                      >
                        View Judgment <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <Link
              to="/judgments"
              data-testid="view-all-judgments"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-navy transition-colors hover:text-gold-dark"
            >
              View All Judgments <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-xs italic leading-relaxed text-charcoal/55">
              The judgments and legal matters presented are provided for informational purposes. Past case outcomes
              depend on the facts and circumstances of each matter and do not guarantee similar outcomes in future
              cases.
            </p>
          </Reveal>
        </div>
      </section>
      )}

      {/* INSIGHTS PREVIEW */}
      <section data-testid="insights-preview" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <Overline>05 — Legal Insights</Overline>
          <GoldRule className="mt-3 w-16" />
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">Clear writing on Indian legal process</h2>
            <Link to="/legal-insights" data-testid="view-all-insights" className="text-sm font-medium uppercase tracking-wider text-navy underline-offset-4 hover:text-gold-dark hover:underline">
              All Insights
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.length > 0
            ? articles.map((a, i) => {
                const vis = insightVisual(`${a.title} ${a.excerpt || ""}`);
                return (
                  <Reveal key={a.id} delay={i * 0.08}>
                    <Link
                      to={`/legal-insights/${a.slug}`}
                      data-testid={`insight-card-${a.slug}`}
                      className="group flex h-full flex-col overflow-hidden border border-navy/10 bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
                    >
                      <div className="aspect-[16/9] shrink-0 overflow-hidden bg-navy/5">
                        <img
                          src={a.image || vis.img}
                          alt={vis.alt(a.title)}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-dark">{vis.label}</p>
                        <h3 className="mt-3 font-serif text-xl leading-snug text-navy transition-colors group-hover:text-navy-light">
                          {a.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">{a.excerpt}</p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
                          Read Article <ArrowUpRight className="h-3.5 w-3.5 text-gold-dark" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })
            : [
                {
                  title: "What Is Anticipatory Bail?",
                  label: "Criminal Law",
                  img: INSIGHT_IMAGES.criminal[0],
                  alt: "Courtroom interior relating to anticipatory bail in criminal matters",
                },
                {
                  title: "Mutual Consent Divorce Procedure in India",
                  label: "Matrimonial & Family Law",
                  img: INSIGHT_IMAGES.family[0],
                  alt: "Signing legal documents in a mutual consent divorce matter",
                },
                {
                  title: "What to Do After a Cheque Bounce Notice",
                  label: "Financial Disputes",
                  img: INSIGHT_IMAGES.financial[0],
                  alt: "Financial documents relating to a cheque bounce notice under Section 138 NI Act",
                },
              ].map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="h-full overflow-hidden border border-dashed border-navy/20 bg-cream/50">
                    <div className="aspect-[16/9] shrink-0 overflow-hidden bg-navy/5 opacity-70">
                      <img src={f.img} alt={f.alt} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <div className="p-7">
                      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-dark">
                        Forthcoming — {f.label}
                      </p>
                      <h3 className="mt-3 font-serif text-xl text-navy/70">{f.title}</h3>
                      <p className="mt-3 text-sm text-charcoal/50">In preparation — check back soon.</p>
                    </div>
                  </div>
                </Reveal>
              ))}
        </div>
      </section>

      {/* CLIENT TESTIMONIALS — hidden until genuine client feedback is provided */}
      {FLAGS.showTestimonials && (
      <section data-testid="testimonials-section" className="bg-navy grain relative">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Overline className="text-gold">Client Testimonials</Overline>
                <GoldRule className="mt-3 w-16" />
                <h2 className="mt-5 font-serif text-3xl text-ivory sm:text-4xl">What Our Clients Say</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/70">
                  Client experiences and feedback reflect the professional approach to handling legal matters.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  data-testid="testimonials-prev"
                  onClick={() => scrollTestimonials(-1)}
                  aria-label="Previous testimonials"
                  className="flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  data-testid="testimonials-next"
                  onClick={() => scrollTestimonials(1)}
                  aria-label="Next testimonials"
                  className="flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              ref={testimonialsRef}
              data-testid="testimonials-track"
              className="mt-12 flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {[
                {
                  text: "This space is reserved for a genuine client testimonial. Feedback from a real client engagement will be published here with the client's consent.",
                  name: "Client Name",
                  matter: "Practice Area",
                },
                {
                  text: "This space is reserved for a genuine client testimonial. Only verified feedback from actual matters will be featured here.",
                  name: "Client Name",
                  matter: "Practice Area",
                },
                {
                  text: "This space is reserved for a genuine client testimonial. Feedback is published as received — never edited, never invented.",
                  name: "Client Name",
                  matter: "Practice Area",
                },
                {
                  text: "This space is reserved for a genuine client testimonial. Client identity and matter details are shared only with consent.",
                  name: "Client Name",
                  matter: "Practice Area",
                },
              ].map((t, i) => (
                <figure
                  key={i}
                  data-testid={`testimonial-${i + 1}`}
                  className="flex h-auto min-w-full snap-start flex-col border border-ivory/15 bg-navy-light/60 p-8 transition-colors duration-300 hover:border-gold/40 sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
                >
                  <blockquote className="flex-1 text-base italic leading-relaxed text-ivory/85">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ivory/10 pt-4">
                    <p className="font-semibold text-ivory">{t.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-ivory/50">{t.matter}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-xs italic leading-relaxed text-ivory/45">
              Sample cards shown above — genuine client feedback will be published here with consent.
            </p>
          </Reveal>
        </div>
      </section>
      )}

      {/* LOCATIONS */}
      <section data-testid="locations-grid" className="border-y border-navy/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <Overline>06 — Where the Practice Reaches</Overline>
            <GoldRule className="mt-3 w-16" />
            <h2 className="mt-5 font-serif text-3xl text-navy sm:text-4xl">Faridabad chamber. NCR practice. Pan-India reach.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 0.05}>
                <Link
                  to={`/${loc.slug}`}
                  data-testid={`location-card-${loc.slug}`}
                  className={`group flex h-full flex-col justify-between border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    loc.primary ? "border-gold/60 bg-navy text-ivory" : "border-navy/10 bg-cream text-navy hover:border-gold/50"
                  }`}
                >
                  <MapPin className={`h-5 w-5 ${loc.primary ? "text-gold" : "text-gold-dark"}`} strokeWidth={1.5} />
                  <div className="mt-8">
                    <p className="font-serif text-xl">{loc.label}</p>
                    {loc.primary && <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-gold">Chamber Location</p>}
                  </div>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <Link
                to="/contact"
                data-testid="locations-contact-card"
                className="group flex h-full flex-col justify-between border border-dashed border-navy/25 p-6 transition-all duration-300 hover:border-gold hover:bg-cream"
              >
                <ArrowUpRight className="h-5 w-5 text-gold-dark" />
                <p className="mt-8 font-serif text-xl text-navy">Your city, your matter</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default Home;
