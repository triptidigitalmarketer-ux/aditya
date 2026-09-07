import { Link } from "react-router-dom";
import { Building2, Landmark, Scale, Globe2, ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import CtaSection from "@/components/CtaSection";

const CHAPTERS = [
  {
    icon: Building2,
    num: "01",
    title: "District Courts",
    body: [
      "The foundation of the practice is trial-level litigation before the District Courts — with the chamber located opposite the District & Sessions Court, Faridabad, and matters handled before district courts across Delhi NCR, including the Delhi court complexes, Gurugram, and Surajpur (Greater Noida), as the jurisdiction of each matter requires.",
      "District Courts hear the bulk of Indian litigation: criminal trials and bail, matrimonial and family matters, civil suits for property, recovery and injunctions, and proceedings under special statutes. Effective trial work — the pleadings, the evidence, the cross-examination — is where most cases are truly decided.",
    ],
  },
  {
    icon: Landmark,
    num: "02",
    title: "High Courts",
    body: [
      "High Court matters are undertaken subject to the jurisdiction of the matter — the Punjab & Haryana High Court for matters arising in Haryana, the Delhi High Court for Delhi matters, and the Allahabad High Court for matters arising in the UP districts of NCR, among others as the case requires.",
      "Typical High Court work includes anticipatory bail and regular bail, petitions for quashing of FIRs and complaints, writ petitions, and appeals and revisions against orders of the lower courts. High Court practice is record-driven: the petition and its annexures are prepared with the same care as the oral argument.",
    ],
  },
  {
    icon: Scale,
    num: "03",
    title: "Supreme Court of India",
    body: [
      "Matters before the Supreme Court of India — special leave petitions, appeals and transfer petitions — are handled subject to jurisdiction and applicable procedure. Where the engagement requires an Advocate-on-Record or coordination with designated counsel, the engagement is structured accordingly and transparently.",
      "Clients are advised candidly at the outset on whether a matter is suited for the Supreme Court, what it involves, and what realistic timelines look like — because not every adverse order should travel upwards, and knowing that is part of good counsel.",
    ],
  },
  {
    icon: Globe2,
    num: "04",
    title: "Pan-India Matters",
    body: [
      "Beyond Delhi NCR, legal matters may be handled across India depending on the nature and jurisdiction of the case. Multi-state disputes, matters before High Courts outside the NCR, and execution or enforcement in other states are assessed individually.",
      "Consultation, strategy, drafting and much procedural work is conducted remotely as a matter of course; appearances are coordinated as each forum requires. A matter is taken up only where it can be handled effectively — that assessment is made honestly at the first consultation.",
    ],
  },
];

const Courts = () => (
  <div data-testid="courts-page">
    <Seo
      title="Courts & Jurisdiction | District Courts, High Courts, Supreme Court — Aditya Gaur"
      siteName="Aditya Gaur, Advocate"
      description="Courts and jurisdiction: District Courts at Faridabad and across Delhi NCR, High Court matters, Supreme Court of India, and Pan-India legal matters — subject to jurisdiction and the nature of the case."
    />
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Courts & Jurisdiction" }]} />
      <Reveal>
        <Overline>Courts & Jurisdiction</Overline>
        <GoldRule className="mt-3 w-16" />
        <h1 className="mt-5 max-w-3xl font-serif text-4xl text-navy sm:text-5xl">Where Your Matter Can Be Heard</h1>
        <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-charcoal/80">
          Indian litigation moves through a hierarchy of forums, each with its own jurisdiction, procedure and
          demands. The practice handles matters across this hierarchy — from the District Courts at Faridabad to the
          Supreme Court of India — with the forum for every engagement determined by law, not by convenience.
        </p>
      </Reveal>

      <div className="mt-16 space-y-0">
        {CHAPTERS.map((c, i) => (
          <Reveal key={c.num} delay={0.05}>
            <div className="grid grid-cols-1 gap-6 border-t border-navy/10 py-12 lg:grid-cols-12 lg:gap-10">
              <div className="flex items-start gap-5 lg:col-span-4">
                <c.icon className="mt-1 h-7 w-7 shrink-0 text-gold-dark" strokeWidth={1.25} />
                <div>
                  <span className="font-serif text-sm italic text-gold-dark">{c.num}</span>
                  <h2 className="mt-1 font-serif text-2xl text-navy sm:text-3xl">{c.title}</h2>
                </div>
              </div>
              <div className="lg:col-span-8">
                {c.body.map((p, j) => (
                  <p key={j} className="mt-4 text-base leading-relaxed text-charcoal/85 first:mt-1">{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 border border-gold/40 bg-cream p-8" data-testid="jurisdiction-note">
          <p className="text-sm leading-relaxed text-charcoal/75">
            <span className="font-semibold text-navy">A note on accuracy:</span> the forums described above reflect the
            scope of the practice. The court before which any specific matter is filed or heard depends on the
            jurisdiction, nature and stage of that matter, and is confirmed with the client at the outset of the
            engagement.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-6">
          <Link
            to="/supreme-court-criminal-lawyer"
            data-testid="courts-sc-criminal-link"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-navy transition-colors hover:text-gold-dark"
          >
            Criminal Matters in the Supreme Court <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/advocate-faridabad"
            data-testid="courts-faridabad-link"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-navy transition-colors hover:text-gold-dark"
          >
            About the Faridabad Chamber <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
    <CtaSection title="Not Sure Which Court Has Jurisdiction Over Your Matter?" text="That is exactly what the first consultation establishes. Share the outline of your matter and receive a clear answer." />
  </div>
);

export default Courts;
