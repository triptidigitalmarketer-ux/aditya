import { CRIMINAL_PAGES } from "./practice-criminal";
import { FAMILY_PAGES } from "./practice-family";
import { CIVIL_PAGES } from "./practice-civil";
import { FINANCIAL_PAGES, CORPORATE_PAGES } from "./practice-financial-corporate";
import { SUPREME_COURT_PAGES } from "./practice-supreme-court";

const HIGH_COURT_PAGE = {
  slug: "high-court-lawyer",
  category: "High Court Matters",
  seoTitle: "High Court Lawyer & Advocate in India | Aditya Gaur & Associates",
  h1: "High Court Lawyer & Advocate in India",
  metaDescription:
    "High Court lawyer & advocate for writs, bail, quashing, appeals and revisions. High Court legal services across Delhi NCR and Pan-India, subject to the jurisdiction of the matter.",
  intro:
    "Between the trial courts and the Supreme Court stands the High Court — the forum where writs are issued, bail and quashing are decided, and the orders of lower courts are corrected. The chambers provides High Court legal services for matters across Delhi NCR and, depending on the nature and jurisdiction of the case, Pan-India — every brief prepared for the record-driven scrutiny that High Court practice demands.",
  takeaways: [
    "Writs, bail, quashing, appeals and revisions before High Courts",
    "The correct High Court is determined by the matter's jurisdiction",
    "Petitions built for admission-stage scrutiny — record first, rhetoric last",
    "High Court legal services coordinated remotely for outstation clients",
  ],
  sections: [
    {
      heading: "High Court Legal Representation",
      body: [
        "A High Court is not merely an appellate forum. Under Articles 226 and 227 of the Constitution it exercises writ jurisdiction and superintendence over courts and tribunals; under its inherent powers it can quash proceedings that amount to an abuse of process; and its benches hear appeals and revisions against the orders of the District Courts. Effective representation by a High Court lawyer therefore begins with choosing the right remedy — writ, appeal, revision or quashing petition — because each has its own scope, standard and limitation.",
        "High Court work is record-driven. The petition and its annexures are read by the bench before a word is spoken, and many matters are substantially decided at the admission stage. An advocate in High Court practice earns the hearing on paper: a precise synopsis, a complete list of dates, and grounds that isolate the genuine error in the order under challenge.",
      ],
    },
    {
      heading: "High Court Litigation Matters",
      body: [
        "The litigation handled before High Courts spans the chambers' practice areas: anticipatory bail and regular bail after refusal by the Sessions Court; petitions for quashing of FIRs and criminal complaints; appeals and revisions in criminal and civil matters; writ petitions against administrative and quasi-judicial action; and matrimonial appeals from the Family Courts. Where a matter lies outside Delhi NCR, the petition goes to the High Court of that jurisdiction, with the engagement structured accordingly.",
        "Every engagement begins with the certified record of the proceedings below — the impugned order, the pleadings and the evidence — because a High Court examines what the record shows, not what the parties remember.",
      ],
    },
    {
      heading: "Types of Matters",
      body: [
        "Criminal remedies — anticipatory bail, bail, quashing of FIRs and complaints, criminal appeals and revisions, and transfer petitions.",
        "Civil remedies — writ petitions, civil appeals and revisions, and challenges to interim orders that cause irreparable prejudice.",
        "Matrimonial and family matters — appeals against Family Court orders, transfer petitions, and connected quashing proceedings.",
        "Which of these fits a given matter is decided on the facts and the stage of the case, and the client is advised candidly where a High Court remedy is unlikely to help — an unnecessary petition costs money and can close doors.",
      ],
    },
    {
      heading: "How a High Court Engagement Works",
      body: [
        "The first step is the record: the order under challenge, the proceedings below, and the limitation position. On that record the client receives a written assessment — the remedies available, the realistic prospects, the timeline and the cost. Clients outside Delhi NCR are served remotely as a matter of course: consultation, drafting and strategy travel; only the hearing requires the courtroom.",
        "For matters that must travel further — after an adverse High Court order — the record is already in shape for the Supreme Court, where the chambers handles criminal SLPs, appeals and bail proceedings.",
      ],
    },
  ],
  faqs: [
    {
      q: "Which High Court will my matter go to?",
      a: "Jurisdiction follows the matter, not the client: Haryana matters lie before the Punjab & Haryana High Court, Delhi matters before the Delhi High Court, and matters from Noida and Greater Noida before the Allahabad High Court. For matters in other states, the High Court of that jurisdiction applies. The correct forum is confirmed before anything is filed.",
    },
    {
      q: "What is the difference between a writ petition and an appeal?",
      a: "An appeal challenges a judicial order on its merits before a higher court, as provided by statute. A writ petition invokes the High Court's constitutional jurisdiction against State or administrative action — for enforcement of fundamental and legal rights. They serve different wrongs; choosing between them is the first strategic question in the matter.",
    },
    {
      q: "How long does a High Court matter take?",
      a: "Admission-stage matters — bail, quashing with interim protection — can move within weeks. Full appeals and writs take longer, depending on the bench and the roster. Interim relief is where early, well-prepared filing pays, and timelines are estimated honestly at the outset.",
    },
    {
      q: "Can I engage a High Court advocate if I live outside Delhi NCR?",
      a: "Yes. Consultation, document review, drafting and strategy are handled remotely; the petition is filed before the High Court having jurisdiction, and appearances are coordinated as the matter requires. Send the order or FIR details through the enquiry form for an assessment.",
    },
  ],
  related: ["supreme-court-criminal-lawyer", "fir-quashing-lawyer", "anticipatory-bail-lawyer", "civil-lawyer"],
};

export const PRACTICE_PAGES = [
  ...CRIMINAL_PAGES,
  ...FAMILY_PAGES,
  ...CIVIL_PAGES,
  ...FINANCIAL_PAGES,
  ...CORPORATE_PAGES,
  ...SUPREME_COURT_PAGES,
  HIGH_COURT_PAGE,
];

export const getPracticePage = (slug) => PRACTICE_PAGES.find((p) => p.slug === slug);
