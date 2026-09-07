import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 28 }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: Math.min(delay, 0.3), ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const MaskedLines = ({ lines, className = "", lineClassName = "", baseDelay = 0.15, el = "div" }) => {
  const Tag = el;
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span
            className={`block ${lineClassName} ${line.className || ""}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: baseDelay + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const GoldRule = ({ className = "" }) => (
  <motion.span
    className={`block h-px bg-gold ${className}`}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    style={{ transformOrigin: "left" }}
  />
);

export const Overline = ({ children, className = "" }) => (
  <p className={`text-xs font-mono uppercase tracking-[0.25em] text-gold-dark font-semibold ${className}`}>
    {children}
  </p>
);

export const Marquee = ({ items, dark = false }) => (
  <div
    data-testid="editorial-marquee"
    className={`overflow-hidden border-y ${dark ? "border-ivory/10" : "border-navy/10 bg-ivory"} py-4 select-none`}
    aria-hidden="true"
  >
    <div className="animate-marquee flex w-max items-center gap-14 pr-14">
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-14">
          <span className={`text-[11px] font-mono uppercase tracking-[0.35em] ${dark ? "text-ivory/50" : "text-navy/50"}`}>
            {item}
          </span>
          <span className="h-1 w-1 rotate-45 bg-gold" />
        </span>
      ))}
    </div>
  </div>
);
