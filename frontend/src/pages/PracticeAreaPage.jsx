import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import { getPracticePage } from "@/data/practiceAreas";

const PracticeAreaPage = ({ slug }) => {
  const page = getPracticePage(slug);
  if (!page) return null;

  const related = (page.related || []).map(getPracticePage).filter(Boolean);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      provider: { "@type": "LegalService", name: "Aditya Gaur & Associates" },
      areaServed: ["Faridabad", "Delhi NCR", "India"],
      description: page.metaDescription,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div data-testid={`practice-page-${slug}`}>
      <Seo title={page.seoTitle} siteName="Aditya Gaur & Associates" description={page.metaDescription} jsonLd={jsonLd} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Practice Areas", to: "/practice-areas" }, { label: page.category }]} />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <Overline>{page.category}</Overline>
              <GoldRule className="mt-3 w-16" />
              <h1 className="mt-5 font-serif text-4xl leading-tight text-navy sm:text-5xl">{page.h1}</h1>
              <p className="mt-6 text-lg font-light leading-relaxed text-charcoal/85">{page.intro}</p>
            </Reveal>

            {page.sections.map((s, i) => (
              <Reveal key={i} delay={0.05}>
                <h2 className="mt-14 font-serif text-2xl text-navy sm:text-3xl">{s.heading}</h2>
                {s.body.map((p, j) => (
                  <p key={j} className="mt-4 text-base leading-relaxed text-charcoal/85">{p}</p>
                ))}
              </Reveal>
            ))}

            <Faq faqs={page.faqs} />
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-8">
              <Reveal delay={0.1}>
                <div className="bg-navy p-8" data-testid="takeaways-card">
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-gold">At a Glance</p>
                  <ul className="mt-5 space-y-3.5">
                    {page.takeaways.map((t) => (
                      <li key={t} className="flex gap-3 text-sm leading-relaxed text-ivory/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {related.length > 0 && (
                <Reveal delay={0.15}>
                  <div className="border border-navy/10 bg-cream p-8">
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-gold-dark">Related Practice Areas</p>
                    <ul className="mt-5 space-y-3">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link
                            to={`/${r.slug}`}
                            data-testid={`related-${r.slug}`}
                            className="group flex items-center justify-between text-sm text-charcoal/80 transition-colors hover:text-navy"
                          >
                            {r.h1.length > 44 ? r.category + " — " + r.seoTitle.split("|")[0].trim().slice(0, 40) : r.h1}
                            <ArrowRight className="h-3.5 w-3.5 text-gold-dark transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              <Reveal delay={0.2}>
                <div className="border border-gold/40 bg-white p-8" data-testid="sidebar-enquiry-card">
                  <h2 className="font-serif text-xl text-navy">Discuss This Matter</h2>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal/60">
                    Brief, confidential outline — the chamber responds to every enquiry.
                  </p>
                  <div className="mt-5">
                    <ContactForm compact />
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreaPage;
