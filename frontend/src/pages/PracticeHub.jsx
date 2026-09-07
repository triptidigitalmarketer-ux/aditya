import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import CtaSection from "@/components/CtaSection";
import { PRACTICE_CATEGORIES, CATEGORY_IMAGES, CATEGORY_SUBS, RERA_CATEGORY } from "@/data/site";

const PracticeHub = () => (
  <div data-testid="practice-hub-page">
    <Seo
      title="Practice Areas | Aditya Gaur & Associates — Faridabad & Delhi NCR"
      siteName="Aditya Gaur & Associates"
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
        {[...PRACTICE_CATEGORIES, RERA_CATEGORY].map((cat, i) => (
          <Reveal key={cat.id} delay={0.05}>
            <div className="grid grid-cols-1 gap-8 border-t border-navy/10 pt-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="overflow-hidden border border-navy/10">
                  <img
                    src={CATEGORY_IMAGES[cat.id]}
                    alt={`${cat.title} — Aditya Gaur & Associates, Faridabad`}
                    data-testid={`hub-image-${cat.id}`}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <span className="mt-5 block font-serif text-sm italic text-gold-dark">0{i + 1}</span>
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
                {CATEGORY_SUBS[cat.id]?.length > 0 && (
                  <div className="mt-6">
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-dark">Also Handled</p>
                    <ul className="mt-3 flex flex-wrap gap-2.5">
                      {CATEGORY_SUBS[cat.id].map((s) => (
                        <li key={s.label}>
                          <Link
                            to={s.to}
                            data-testid={`sub-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            className={`inline-flex items-center gap-1.5 border px-3.5 py-2 text-xs font-medium tracking-wide transition-colors duration-300 ${
                              s.pending
                                ? "border-dashed border-navy/25 text-charcoal/55 hover:border-gold/60 hover:text-navy"
                                : "border-navy/15 text-charcoal/75 hover:border-gold hover:bg-navy hover:text-ivory"
                            }`}
                          >
                            {s.label}
                            {s.pending && (
                              <span className="text-[9px] uppercase tracking-wider text-gold-dark">
                                · confirmation pending
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
