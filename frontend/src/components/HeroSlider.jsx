import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { PRACTICE_CATEGORIES, CATEGORY_IMAGES } from "@/data/site";

const AUTOPLAY_MS = 5500;

export const HeroSlider = () => {
  const slides = PRACTICE_CATEGORIES;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [manual, setManual] = useState(false);
  const [loaded, setLoaded] = useState(() => new Set([0, 1]));
  const reducedMotion = useReducedMotion();

  // Keep the active and the upcoming slide's image loaded; defer the rest
  useEffect(() => {
    setLoaded((prev) => {
      const nextIndex = (index + 1) % count;
      if (prev.has(index) && prev.has(nextIndex)) return prev;
      const next = new Set(prev);
      next.add(index);
      next.add(nextIndex);
      return next;
    });
  }, [index, count]);

  const autoplayOn = !reducedMotion && !manual && !hovering;

  useEffect(() => {
    if (!autoplayOn) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [autoplayOn, count]);

  const goTo = (i) => {
    setIndex(i);
    setManual(true);
  };

  return (
    <div
      data-testid="hero-slider"
      className="relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocusCapture={() => setHovering(true)}
      onBlurCapture={() => setHovering(false)}
    >
      <div className="absolute -left-4 -top-4 h-full w-full border border-gold/50" aria-hidden="true" />
      <div
        className="relative aspect-[4/5] w-full overflow-hidden bg-navy"
        role="region"
        aria-roledescription="carousel"
        aria-label="Practice areas"
      >
        {slides.map((cat, i) => {
          const active = i === index;
          return (
            <div
              key={cat.id}
              data-testid={`hero-slide-${cat.id}`}
              aria-hidden={!active}
              className={`absolute inset-0 ${
                reducedMotion ? "" : "transition-opacity duration-1000 ease-out"
              } ${active ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              {loaded.has(i) && (
                <img
                  src={CATEGORY_IMAGES[cat.id]}
                  alt={`${cat.title} — Aditya Gaur & Associates, Faridabad`}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  className="h-full w-full object-cover"
                />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/10"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                  Practice Area 0{i + 1}
                </span>
                <h2
                  data-testid={`hero-slide-title-${cat.id}`}
                  className="mt-2 font-serif text-2xl leading-snug text-ivory lg:text-[1.7rem]"
                >
                  {cat.title}
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/75">{cat.description}</p>
                <Link
                  to={`/${cat.pages[0].slug}`}
                  data-testid={`hero-slide-learn-more-${cat.id}`}
                  tabIndex={active ? 0 : -1}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
                >
                  Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="mt-5 flex items-center justify-center gap-2.5"
        role="tablist"
        aria-label="Choose practice area slide"
      >
        {slides.map((cat, i) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show ${cat.title}`}
            data-testid={`hero-slider-dot-${i}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-500 ${
              i === index ? "w-8 bg-gold" : "w-1.5 bg-navy/25 hover:bg-navy/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
