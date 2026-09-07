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

      <Reveal delay={0.05}>
        <div
          className="mt-14 border border-dashed border-navy/25 bg-cream/60 p-12 text-center"
          data-testid="judgments-coming-soon"
        >
          <Scale className="mx-auto h-8 w-8 text-gold-dark" strokeWidth={1.25} />
          <h2 className="mt-5 font-serif text-2xl text-navy">Entries in Preparation</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-charcoal/70">
            Judgments and legal matters are published here after verification against the public record. Each entry
            will state the court, year, case number and the legal issue in neutral terms, with a link to the
            publicly available judgment.
          </p>
        </div>
      </Reveal>

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
