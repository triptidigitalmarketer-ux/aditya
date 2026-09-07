import { Link } from "react-router-dom";
import { ArrowUpRight, Scale } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import CtaSection from "@/components/CtaSection";

const Judgments = () => (
  <div data-testid="judgments-page">
    <Seo
      title="Selected Judgments & Legal Matters | Aditya Gaur & Associates"
      siteName="Aditya Gaur & Associates"
      description="Publicly available judgments and legal matters in which Aditya Gaur & Associates has been involved — presented with neutral descriptions of the legal issues and links to the public record."
    />
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Judgments" }]} />
      <Reveal>
        <Overline>Judgments</Overline>
        <GoldRule className="mt-3 w-16" />
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-navy sm:text-5xl">
          Selected Judgments &amp; Legal Matters
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-charcoal/80">
          Publicly available judgments and legal matters in which the chambers has been involved. Each entry states
          the court, the year, the case number and the legal issue in neutral terms, with a link to the public
          record.
        </p>
      </Reveal>

      <div className="mt-14 border-t border-navy/10">
        {[1, 2, 3, 4].map((n) => (
          <Reveal key={n} delay={n * 0.05}>
            <div
              data-testid={`judgment-row-${n}`}
              className="grid grid-cols-1 gap-6 border-b border-navy/10 py-8 transition-colors duration-300 hover:bg-cream/60 lg:grid-cols-12 lg:px-4"
            >
              <div className="lg:col-span-7">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-dark">
                  Placeholder — to be updated with a verified judgment
                </span>
                <h2 className="mt-2 font-serif text-xl text-navy">[Case Title — Party v. Party]</h2>
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
                    data-testid={`judgment-row-link-${n}`}
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
        <div className="mt-10 flex items-start gap-4 border border-gold/40 bg-cream p-7">
          <Scale className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" strokeWidth={1.5} />
          <p className="text-sm leading-relaxed text-charcoal/75">
            The judgments and legal matters presented are provided for informational purposes. Past case outcomes
            depend on the facts and circumstances of each matter and do not guarantee similar outcomes in future
            cases. Entries are published only after verification against the public record.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <Link
          to="/contact"
          data-testid="judgments-contact-link"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-navy transition-colors hover:text-gold-dark"
        >
          Discuss Your Legal Matter <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
    <CtaSection />
  </div>
);

export default Judgments;
