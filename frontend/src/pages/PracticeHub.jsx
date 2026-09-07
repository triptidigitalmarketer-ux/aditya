import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import CtaSection from "@/components/CtaSection";
import { PRACTICE_CATEGORIES } from "@/data/site";

const PracticeHub = () => (
  <div data-testid="practice-hub-page">
    <Seo
      title="Practice Areas | Aditya Gaur, Advocate — Faridabad & Delhi NCR"
      siteName="Aditya Gaur, Advocate"
      description="Practice areas: criminal defence, bail & anticipatory bail, FIR quashing, divorce & family law, property & civil disputes, RERA, cheque bounce, debt recovery and corporate-commercial law."
    />
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Practice Areas" }]} />
      <Reveal>
        <Overline>Practice Areas</Overline>
        <GoldRule className="mt-3 w-16" />
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-navy sm:text-5xl">
          Practice Areas
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-charcoal/80">
          The practice is organised around five areas of law, each handled before the District Courts of Delhi NCR,
          the High Courts and — where the matter warrants — the Supreme Court of India. Each area below links to
          detailed pages explaining the law, the process and how such matters are handled.
        </p>
      </Reveal>

      <div className="mt-16 space-y-16">
        {PRACTICE_CATEGORIES.map((cat, i) => (
          <Reveal key={cat.id} delay={0.05}>
            <div className="grid grid-cols-1 gap-8 border-t border-navy/10 pt-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="font-serif text-sm italic text-gold-dark">0{i + 1}</span>
                <h2 className="mt-2 font-serif text-2xl text-navy sm:text-3xl">{cat.title}</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/75">{cat.description}</p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {cat.pages.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/${p.slug}`}
                      data-testid={`hub-link-${p.slug}`}
                      className="group flex items-center justify-between border border-navy/10 bg-cream px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md"
                    >
                      <span className="text-sm font-medium text-navy">{p.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-gold-dark transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
    <CtaSection title="Unsure Which Practice Area Fits Your Matter?" text="Describe your situation briefly — the chamber will review your enquiry and direct it appropriately." />
  </div>
);

export default PracticeHub;
