import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import CtaSection from "@/components/CtaSection";
import { SITE, PORTRAIT_URL, PRACTICE_CATEGORIES } from "@/data/site";

const BIO_FIELDS = [
  { label: "Qualification", value: "Verified details will be published here shortly." },
  { label: "Bar Enrollment", value: "Verified details will be published here shortly." },
  { label: "Experience", value: "Verified details will be published here shortly." },
  { label: "Courts", value: "District Courts (Faridabad and across Delhi NCR), High Courts, and the Supreme Court of India — subject to jurisdiction and the nature of the matter." },
  { label: "Professional Focus", value: "Criminal defence, matrimonial and family law, property and civil disputes, cheque bounce and debt recovery, and corporate-commercial matters." },
  { label: "Practice Areas", value: "Criminal Law & Defence · Supreme Court Criminal Practice · Matrimonial & Family Law · Property & Civil Law · Cheque Bounce & Debt Recovery · Corporate & Commercial Law" },
];

const About = () => (
  <div data-testid="about-page">
    <Seo
      title="About Aditya Gaur | Advocate, Faridabad & Delhi NCR"
      siteName="Aditya Gaur & Associates"
      description="About Aditya Gaur & Associates — chamber at District Courts, Sector 12, Faridabad. Legal practice across Delhi NCR and Pan-India, before District Courts, High Courts and the Supreme Court of India."
    />
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "About" }]} />
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full border border-gold/50" aria-hidden="true" />
              <img
                src={PORTRAIT_URL}
                alt="Aditya Gaur & Associates"
                data-testid="about-portrait"
                className="relative aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <p className="mt-5 flex items-start gap-2 border-l-2 border-gold pl-4 text-xs leading-relaxed text-charcoal/60">
              Chamber: {SITE.chamber}
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <Overline>About</Overline>
            <GoldRule className="mt-3 w-16" />
            <h1 className="mt-5 font-serif text-4xl text-navy sm:text-5xl">About Aditya Gaur</h1>
            <p className="mt-7 max-w-3xl text-lg font-light leading-relaxed text-charcoal/85">
              Aditya Gaur is an advocate with a chamber opposite the District &amp; Sessions Court, Faridabad, and a
              practice that extends across Delhi, Noida, Greater Noida, Gurugram and the wider National Capital
              Region — and, depending on the nature and jurisdiction of the matter, across India.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-charcoal/80">
              The practice is built on a simple discipline: understand the record completely before advising, tell
              the client the truth about their position, and prepare every appearance thoroughly. Matters are handled
              personally and clients are kept informed at every stage — what happened, what it means, and what comes
              next.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-12 divide-y divide-navy/10 border-y border-navy/10" data-testid="bio-fields">
              {BIO_FIELDS.map((f) => (
                <div key={f.label} className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-4">
                  <dt className="text-xs font-mono uppercase tracking-[0.2em] text-gold-dark">{f.label}</dt>
                  <dd className="text-sm leading-relaxed text-charcoal/80 sm:col-span-3">{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs italic text-charcoal/50">
              Professional details are published here once verified.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="mt-14 font-serif text-2xl text-navy sm:text-3xl">Professional Philosophy</h2>
            <blockquote className="mt-5 border-l-2 border-gold pl-6 font-serif text-xl italic leading-relaxed text-navy-light">
              "An advocate's first duty is candour — to the court, and to the client. Good counsel begins with an
              honest reading of the case, not with promises."
            </blockquote>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-charcoal/80">
              No outcome in litigation can be guaranteed, and this website makes no such claim. What clients can
              expect is preparation, presence, straight advice, and respect for their time and confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {PRACTICE_CATEGORIES.map((c) => (
                <Link
                  key={c.id}
                  to={`/${c.pages[0].slug}`}
                  data-testid={`about-practice-${c.id}`}
                  className="group flex items-center gap-1.5 border border-navy/15 px-4 py-2 text-xs uppercase tracking-wider text-navy transition-colors hover:border-gold hover:bg-navy hover:text-ivory"
                >
                  {c.title}
                  <ArrowUpRight className="h-3 w-3 text-gold-dark transition-colors group-hover:text-gold" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
    {/* TEAM */}
    <section className="border-t border-navy/10 bg-white" data-testid="team-section">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <Overline>The Chambers</Overline>
          <GoldRule className="mt-3 w-16" />
          <h2 className="mt-5 font-serif text-3xl text-navy sm:text-4xl">Our Team</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full border border-gold/50" aria-hidden="true" />
              <img
                src={PORTRAIT_URL}
                alt="Aditya Gaur — Founder & Managing Advocate, Aditya Gaur & Associates"
                data-testid="team-founder-photo"
                loading="lazy"
                className="relative aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="mt-6">
              <p className="font-serif text-2xl text-navy" data-testid="team-founder-name">Aditya Gaur</p>
              <p className="mt-1.5 text-xs font-mono uppercase tracking-[0.25em] text-gold-dark">
                Founder &amp; Managing Advocate
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal/70">
                Chamber opposite the District &amp; Sessions Court, Faridabad. Practice across Delhi NCR and
                Pan-India.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-8">
            <div className="flex h-full flex-col justify-center border border-navy/10 bg-cream p-8 lg:p-12" data-testid="team-associates-card">
              <h3 className="font-serif text-2xl text-navy">Associates &amp; Assisting Counsel</h3>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80">
                Aditya Gaur &amp; Associates works with a network of associates and assisting counsel across Delhi
                NCR, so that every matter — whether before a District Court, a High Court or the Supreme Court of
                India — is attended with preparation and presence.
              </p>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80">
                Individual profiles of team members are published here as they are formally announced.
              </p>
              <Link
                to="/contact"
                data-testid="team-contact-link"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-navy transition-colors hover:text-gold-dark"
              >
                Work With The Chambers <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
    <CtaSection title="Consult Aditya Gaur About Your Matter" />
  </div>
);

export default About;
