import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import CtaSection from "@/components/CtaSection";
import NotFound from "@/pages/NotFound";
import { API } from "@/api";

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    setArticle(null);
    setMissing(false);
    API.get(`/articles/${slug}`)
      .then(({ data }) => setArticle(data))
      .catch(() => setMissing(true));
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

  return (
    <div data-testid="article-page">
      <Seo
        title={`${article.title} | Legal Insights — Aditya Gaur, Advocate`}
        siteName="Aditya Gaur, Advocate"
        description={article.meta_description || article.excerpt}
        type="article"
        jsonLd={jsonLd}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
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
        </Reveal>
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
      </article>
      <CtaSection />
    </div>
  );
};

export default ArticlePage;
