import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import CtaSection from "@/components/CtaSection";
import NotFound from "@/pages/NotFound";
import { API } from "@/api";
import { insightVisual, SITE } from "@/data/site";

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [missing, setMissing] = useState(false);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    setArticle(null);
    setMissing(false);
    API.get(`/articles/${slug}`)
      .then(({ data }) => setArticle(data))
      .catch(() => setMissing(true));
    API.get("/articles")
      .then(({ data }) => setRelated(data.filter((a) => a.slug !== slug).slice(0, 3)))
      .catch(() => {});
  }, [slug]);

  if (missing) return <NotFound />;
  if (!article)
    return (
      <div className="mx-auto max-w-3xl px-4 py-24">
        <div className="h-8 w-2/3 animate-pulse bg-navy/10" />
        <div className="mt-8 space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 animate-pulse bg-navy/5" />
          ))}
        </div>
      </div>
    );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.meta_description || article.excerpt,
    author: { "@type": "Person", name: "Aditya Gaur" },
    datePublished: article.created_at,
    dateModified: article.updated_at,
  };

  const vis = insightVisual(`${article.title} ${article.excerpt || ""}`);
  const CONTEXT_LINES = {
    "Criminal Law": "Need Help With a Criminal or Bail Matter?",
    "Matrimonial & Family Law": "Need Assistance With a Matrimonial Matter?",
    "Property & RERA": "Need Help With a Property Matter?",
    "Financial Disputes": "Need Help With a Cheque Bounce or Recovery Matter?",
    "Corporate & Commercial": "Need Help With a Business or Contract Matter?",
    "Courts & Procedure": "Need Help With a Supreme Court or High Court Matter?",
  };
  const contextLine = CONTEXT_LINES[vis.label] || "Share your matter — the chamber responds to every enquiry.";

  return (
    <div data-testid="article-page">
      <Seo
        title={`${article.title} | Legal Insights — Aditya Gaur & Associates`}
        siteName="Aditya Gaur & Associates"
        description={article.meta_description || article.excerpt}
        type="article"
        jsonLd={jsonLd}
      />
      <article className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Legal Insights", to: "/legal-insights" }, { label: article.title }]} />
        <Reveal>
          <Overline>
            {new Date(article.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </Overline>
          <GoldRule className="mt-3 w-16" />
          <h1 className="mt-5 font-serif text-4xl leading-tight text-navy sm:text-5xl">{article.title}</h1>
          {article.excerpt && (
            <p className="mt-6 border-l-2 border-gold pl-6 font-serif text-xl italic leading-relaxed text-navy-light">
              {article.excerpt}
            </p>
          )}
          <img
            src={article.image || insightVisual(`${article.title} ${article.excerpt || ""}`).img}
            alt={insightVisual(`${article.title} ${article.excerpt || ""}`).alt(article.title)}
            data-testid="article-image"
            loading="lazy"
            className="mt-10 aspect-[16/8] w-full border border-navy/10 object-cover"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
        <Reveal delay={0.1}>
          <div
            data-testid="article-content"
            className="article-content mt-10"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-navy/10 pt-8">
            <Link to="/legal-insights" data-testid="article-back-link" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-navy hover:text-gold-dark">
              <ArrowLeft className="h-4 w-4" /> All Insights
            </Link>
            <Link to="/contact" data-testid="article-consult-link" className="inline-flex items-center gap-2 bg-navy px-6 py-3 text-xs font-medium uppercase tracking-wider text-ivory transition-colors hover:bg-navy-light">
              Consult on This Topic <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-8 text-xs italic leading-relaxed text-charcoal/50">
            This article is for general informational purposes only and does not constitute legal advice. Reading it
            does not create an advocate-client relationship. For advice on your specific matter, please consult the
            chamber.
          </p>
        </Reveal>
          </div>

          {/* CONTACT SIDEBAR — sticky on desktop, follows content on mobile */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28" data-testid="article-sidebar">
              <div className="relative border border-navy/10 bg-navy p-7 grain">
                <h2 className="font-serif text-2xl text-ivory">Need Legal Assistance?</h2>
                <p
                  className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold"
                  data-testid="sidebar-context-line"
                >
                  {contextLine}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  Discuss your legal matter with Aditya Gaur, Advocate.
                </p>
                <div className="sidebar-dark mt-6">
                  <ContactForm compact />
                </div>
                <ul className="mt-8 space-y-5 border-t border-ivory/10 pt-7">
                  <li>
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold">Call</p>
                    <a
                      href={SITE.phoneHref}
                      data-testid="sidebar-call-link"
                      className="mt-1 inline-block text-base font-semibold text-ivory transition-colors hover:text-gold"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      data-testid="sidebar-email-link"
                      className="mt-1 inline-block break-all text-sm text-ivory/85 transition-colors hover:text-gold"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li>
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold">Chamber</p>
                    <p className="mt-1 text-sm leading-relaxed text-ivory/85">
                      Opposite District &amp; Sessions Court, Faridabad, Haryana – 121002
                    </p>
                  </li>
                  <li>
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold">Office Hours</p>
                    <p className="mt-1 text-sm text-ivory/85">{SITE.officeHours}</p>
                    <p className="mt-1 text-xs font-medium text-gold/90">{SITE.emergencyLine}</p>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* RELATED LEGAL INSIGHTS */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-navy/10 pt-12" data-testid="related-insights">
            <Overline>Related Legal Insights</Overline>
            <GoldRule className="mt-3 w-16" />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((r) => {
                const rv = insightVisual(`${r.title} ${r.excerpt || ""}`);
                return (
                  <Link
                    key={r.id}
                    to={`/legal-insights/${r.slug}`}
                    data-testid={`related-insight-${r.slug}`}
                    className="group flex h-full flex-col overflow-hidden border border-navy/10 bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={r.image || rv.img}
                        alt={rv.alt(r.title)}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-dark">{rv.label}</p>
                      <h3 className="mt-2 font-serif text-lg leading-snug text-navy transition-colors group-hover:text-navy-light">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </article>
      <CtaSection />
    </div>
  );
};

export default ArticlePage;
