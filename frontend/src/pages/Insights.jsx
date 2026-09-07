import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import CtaSection from "@/components/CtaSection";
import { API } from "@/api";
import { insightVisual } from "@/data/site";

const PLANNED_TOPICS = [
  "What Is Anticipatory Bail? — and how it differs from regular bail",
  "Mutual Consent Divorce Procedure in India, step by step",
  "What to Do After Receiving a Cheque Bounce Notice",
  "Section 138 NI Act Explained",
  "Property Dispute Legal Remedies in India",
  "Maintenance and Alimony in Matrimonial Matters",
  "Child Custody Laws in India",
  "What Is FIR Quashing?",
  "RERA Complaint Process for Homebuyers",
  "Civil Case vs Criminal Case — the practical difference",
];

const Insights = () => {
  const [articles, setArticles] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
  const PAGE_SIZE = 6;
  const totalPages = articles ? Math.max(1, Math.ceil(articles.length / PAGE_SIZE)) : 1;
  const paged = articles ? articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) : [];
  const goTo = (p) => {
    const next = Math.min(Math.max(1, p), totalPages);
    setSearchParams(next === 1 ? {} : { page: String(next) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    API.get("/articles").then(({ data }) => setArticles(data)).catch(() => setArticles([]));
  }, []);

  return (
    <div data-testid="insights-page">
      <Seo
        title="Legal Insights | Articles on Indian Law — Aditya Gaur & Associates"
        siteName="Aditya Gaur & Associates"
        description="Clear, responsible articles on Indian legal procedure — bail, divorce, property disputes, cheque bounce, RERA and more. Written for clients, not for search engines."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Legal Insights" }]} />
        <Reveal>
          <Overline>Legal Insights</Overline>
          <GoldRule className="mt-3 w-16" />
          <h1 className="mt-5 max-w-3xl font-serif text-4xl text-navy sm:text-5xl">Legal Insights</h1>
          <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-charcoal/80">
            Plain-language writing on Indian legal process — what a remedy is, how a procedure works, and what to
            expect. These articles are general information, not legal advice on any specific matter.
          </p>
        </Reveal>

        {articles && articles.length > 0 ? (
          <>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paged.map((a, i) => {
              const vis = insightVisual(`${a.title} ${a.excerpt || ""}`);
              return (
                <Reveal key={a.id} delay={i * 0.06}>
                  <Link
                    to={`/legal-insights/${a.slug}`}
                    data-testid={`insight-card-${a.slug}`}
                    className="group flex h-full flex-col overflow-hidden border border-navy/10 bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
                  >
                    <div className="aspect-[16/9] shrink-0 overflow-hidden bg-navy/5">
                      <img
                        src={a.image || vis.img}
                        alt={vis.alt(a.title)}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-dark">{vis.label}</p>
                      <h2 className="mt-3 font-serif text-xl leading-snug text-navy transition-colors group-hover:text-navy-light">
                        {a.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">{a.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
                        Read Article <ArrowUpRight className="h-3.5 w-3.5 text-gold-dark" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          {totalPages > 1 && (
            <nav data-testid="insights-pagination" aria-label="Articles pagination" className="mt-14 flex flex-wrap items-center justify-center gap-2">
              <button
                data-testid="pagination-prev"
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                className="flex h-10 w-10 items-center justify-center border border-navy/15 text-navy transition-colors hover:border-gold hover:bg-navy hover:text-ivory disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  data-testid={`pagination-page-${i + 1}`}
                  onClick={() => goTo(i + 1)}
                  aria-current={page === i + 1 ? "page" : undefined}
                  className={`h-10 w-10 text-sm font-semibold transition-colors ${
                    page === i + 1
                      ? "bg-navy text-ivory"
                      : "border border-navy/15 text-navy hover:border-gold hover:bg-navy hover:text-ivory"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                data-testid="pagination-next"
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
                className="flex h-10 w-10 items-center justify-center border border-navy/15 text-navy transition-colors hover:border-gold hover:bg-navy hover:text-ivory disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
          </>
        ) : articles && articles.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="mt-14 border border-dashed border-navy/25 bg-cream/60 p-10 lg:p-14" data-testid="insights-empty-state">
              <BookOpen className="h-8 w-8 text-gold-dark" strokeWidth={1.25} />
              <h2 className="mt-5 font-serif text-2xl text-navy">Articles in preparation</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal/75">
                The Insights section is being written — each article is drafted carefully rather than published
                quickly. Topics currently in preparation:
              </p>
              <ul className="mt-7 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                {PLANNED_TOPICS.map((t) => (
                  <li key={t} className="flex gap-3 border-b border-navy/10 pb-3 text-sm text-charcoal/75">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-56 animate-pulse border border-navy/10 bg-cream" />
            ))}
          </div>
        )}
      </section>
      <CtaSection title="Have a Question an Article Cannot Answer?" text="Articles explain the law in general; your matter has specific facts. Send an enquiry for advice that applies to them." />
    </div>
  );
};

export default Insights;
