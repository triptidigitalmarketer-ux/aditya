import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Landmark } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import { getLocationPage, LOCATION_PAGES } from "@/data/locations";
import { PRACTICE_CATEGORIES, SITE } from "@/data/site";

const LocationPage = ({ slug }) => {
  const page = getLocationPage(slug);
  if (!page) return null;

  const others = LOCATION_PAGES.filter((l) => l.slug !== slug).slice(0, 6);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: `Aditya Gaur & Associates — ${page.city}`,
      description: page.metaDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Opposite District & Sessions Court",
        addressLocality: "Faridabad",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      areaServed: page.city,
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
    <div data-testid={`location-page-${slug}`}>
      <Seo title={page.seoTitle} siteName="Aditya Gaur & Associates" description={page.metaDescription} jsonLd={jsonLd} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Locations" }, { label: page.city }]} />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <Overline>Location — {page.city}</Overline>
              <GoldRule className="mt-3 w-16" />
              <h1 className="mt-5 font-serif text-4xl leading-tight text-navy sm:text-5xl">{page.h1}</h1>
              <p className="mt-6 text-lg font-light leading-relaxed text-charcoal/85">{page.intro}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-14 font-serif text-2xl text-navy sm:text-3xl">Presence in {page.city}</h2>
              {page.presence.map((p, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-charcoal/85">{p}</p>
              ))}
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-14 font-serif text-2xl text-navy sm:text-3xl">Legal Services in {page.city}</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/85">{page.servicesNote}</p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PRACTICE_CATEGORIES.map((c) => (
                  <Link
                    key={c.id}
                    to={`/${c.pages[0].slug}`}
                    data-testid={`location-service-${c.id}`}
                    className="group flex items-center justify-between border border-navy/10 bg-cream px-5 py-4 transition-all duration-300 hover:border-gold/60 hover:shadow-md"
                  >
                    <span className="text-sm font-medium text-navy">{c.title}</span>
                    <ArrowRight className="h-4 w-4 text-gold-dark transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </Reveal>

            <Faq faqs={page.faqs} heading={`FAQs — Legal Matters in ${page.city}`} />
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-8">
              <Reveal delay={0.1}>
                <div className="bg-navy p-8" data-testid="courts-covered-card">
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-gold">Courts & Forums</p>
                  <ul className="mt-5 space-y-4">
                    {page.courts.map((c) => (
                      <li key={c} className="flex gap-3 text-sm leading-relaxed text-ivory/80">
                        <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="border border-gold/40 bg-cream p-8">
                  <p className="flex items-start gap-2 text-sm leading-relaxed text-charcoal/80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                    <span>
                      <span className="font-semibold text-navy">Chamber:</span> {SITE.chamber}
                    </span>
                  </p>
                  <Link
                    to="/contact"
                    data-testid="location-enquire-btn"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-navy px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-ivory transition-all duration-300 hover:bg-navy-light active:scale-95"
                  >
                    Enquire About Your Matter <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="border border-navy/10 bg-white p-8">
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-gold-dark">Other Locations</p>
                  <ul className="mt-5 space-y-3">
                    {others.map((l) => (
                      <li key={l.slug}>
                        <Link to={`/${l.slug}`} data-testid={`other-location-${l.slug}`} className="text-sm text-charcoal/75 transition-colors hover:text-navy">
                          Advocate in {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>
      <CtaSection title={`Discuss Your ${page.city} Matter`} />
    </div>
  );
};

export default LocationPage;
