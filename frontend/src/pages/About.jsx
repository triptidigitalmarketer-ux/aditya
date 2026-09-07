import { Link } from "react-router-dom";
import { ArrowUpRight, User } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import CtaSection from "@/components/CtaSection";
import { SITE, PORTRAIT_URL, PRACTICE_CATEGORIES } from "@/data/site";

const BIO_FIELDS = [
  { label: "Qualification", value: "B.Tech | LL.B. | LL.M." },
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
          <Overline>The Team</Overline>
          <GoldRule className="mt-3 w-16" />
          <h2 className="mt-5 font-serif text-3xl text-navy sm:text-4xl">Aditya Gaur &amp; Associates</h2>
        </Reveal>

        {/* Featured profile */}
        <Reveal delay={0.08}>
          <div
            className="mt-12 grid grid-cols-1 gap-10 border border-navy/10 bg-cream p-8 sm:grid-cols-12 lg:p-12"
            data-testid="team-featured"
          >
            <div className="sm:col-span-4">
              <div className="relative">
                <div className="absolute -left-3 -top-3 h-full w-full border border-gold/50" aria-hidden="true" />
                <img
                  src={PORTRAIT_URL}
                  alt="Aditya Gaur — Advocate, Aditya Gaur & Associates"
                  data-testid="team-founder-photo"
                  loading="lazy"
                  className="relative aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center sm:col-span-8">
              <p className="font-serif text-3xl text-navy" data-testid="team-founder-name">
                Aditya Gaur
              </p>
              <p className="mt-1.5 text-xs font-mono uppercase tracking-[0.25em] text-gold-dark">Advocate</p>
              <p className="mt-4 text-sm font-semibold tracking-wide text-navy" data-testid="team-founder-quals">
                B.Tech&nbsp;|&nbsp;LL.B.&nbsp;|&nbsp;LL.M.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/80">
                Chamber opposite the District &amp; Sessions Court, Faridabad. Practice across Delhi NCR and
                Pan-India — before District Courts, High Courts and the Supreme Court of India, subject to the
                jurisdiction and nature of each matter.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Team members */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <Reveal key={n} delay={0.1 + n * 0.06}>
              <div
                data-testid={`team-member-${n}`}
                className="flex h-full flex-col border border-dashed border-navy/20 bg-cream/60"
              >
                <div className="flex aspect-[16/10] items-center justify-center bg-navy/5">
                  <div className="flex h-16 w-16 items-center justify-center border border-gold/40 text-gold-dark">
                    <User className="h-7 w-7" strokeWidth={1.25} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-dark">
                    Awaiting verified profile
                  </span>
                  <p className="mt-3 font-serif text-xl text-navy">Team Member {n}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-charcoal/50">
                    Designation — to be updated
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-charcoal/50">
                    Qualification — to be updated
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-charcoal/50">
                    Role / Practice Area — to be updated
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/60">
                    Photo, designation, qualification and a short professional description will be published here
                    once the member's verified details are formally provided.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <CtaSection title="Consult Aditya Gaur About Your Matter" />
  </div>
);

export default About;
