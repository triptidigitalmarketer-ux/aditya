import { Reveal, Overline, GoldRule } from "@/components/Motion";

const USPS = [
  {
    num: "01",
    title: "Focused on Resolution",
    text: "A practical and focused approach towards achieving effective resolution of legal matters.",
  },
  {
    num: "02",
    title: "Strategic Case Handling",
    text: "Careful analysis of the facts, documents and applicable law to develop an appropriate legal strategy.",
  },
  {
    num: "03",
    title: "Strong Legal Representation",
    text: "Professional representation across relevant courts and legal proceedings.",
  },
  {
    num: "04",
    title: "Clear Legal Guidance",
    text: "Clear communication and practical guidance throughout the legal process.",
  },
];

export const UspSection = () => (
  <section data-testid="usp-section" className="border-b border-navy/10 bg-white">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <Reveal>
        <Overline>Why Aditya Gaur</Overline>
        <GoldRule className="mt-3 w-16" />
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {USPS.map((u, i) => (
          <Reveal key={u.title} delay={i * 0.08}>
            <div
              data-testid={`usp-${i + 1}`}
              className="border-l border-navy/10 pl-6 transition-colors duration-300 hover:border-gold"
            >
              <span className="font-serif text-2xl italic text-gold/80">{u.num}</span>
              <span className="mt-3 block h-px w-8 bg-gold/70" />
              <h2 className="mt-4 font-serif text-xl text-navy">{u.title}</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-charcoal/70">{u.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
