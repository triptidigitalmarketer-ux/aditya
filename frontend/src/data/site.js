export const SITE = {
  name: "Aditya Gaur & Associates",
  brandLine1: "ADITYA GAUR",
  brandLine2: "& ASSOCIATES",
  tagline: "Legal Representation Across Delhi NCR & India",
  chamber: "Opposite District & Sessions Court, Faridabad, Haryana – 121002",
  chamberShort: "Opposite District & Sessions Court, Faridabad",
  phoneDisplay: "+91 95828 85482",
  phoneHref: "tel:+919582885482",
  whatsappHref: "https://wa.me/919582885482",
  email: "contact@adityagaurassociates.com",
  officeHours: "Monday – Saturday · 10:00 AM – 7:00 PM",
  emergencyLine: "Emergency Legal Assistance — Available Anytime",
  socials: null,
  siteName: "Aditya Gaur & Associates",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-aditya-gaur" },
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Courts & Jurisdiction", to: "/courts-jurisdiction" },
  { label: "Legal Insights", to: "/legal-insights" },
  { label: "Contact", to: "/contact" },
];

export const PRACTICE_CATEGORIES = [
  {
    id: "criminal",
    title: "Criminal Law & Defence",
    description:
      "Defence and prosecution-side representation in criminal litigation — from FIR-stage intervention to trial, bail and quashing proceedings.",
    pages: [
      { slug: "criminal-law-lawyer", label: "Criminal Law & Defence" },
      { slug: "bail-lawyer", label: "Bail Matters" },
      { slug: "anticipatory-bail-lawyer", label: "Anticipatory Bail" },
      { slug: "fir-quashing-lawyer", label: "FIR Quashing" },
    ],
  },
  {
    id: "supreme-court",
    title: "Supreme Court Criminal Practice",
    description:
      "Criminal matters before the Supreme Court of India — special leave petitions, criminal appeals, bail after High Court refusal, and challenges to High Court orders.",
    pages: [
      { slug: "supreme-court-criminal-lawyer", label: "Supreme Court Criminal Lawyer" },
      { slug: "supreme-court-bail-lawyer", label: "Bail in the Supreme Court" },
      { slug: "supreme-court-criminal-appeal-lawyer", label: "Criminal Appeals" },
      { slug: "supreme-court-criminal-slp-lawyer", label: "Criminal SLPs" },
    ],
  },
  {
    id: "family",
    title: "Matrimonial & Family Law",
    description:
      "Divorce, maintenance, child custody and family court matters handled with discretion, clarity and a focus on workable outcomes.",
    pages: [
      { slug: "divorce-family-lawyer", label: "Divorce & Family Law" },
      { slug: "divorce-lawyer", label: "Divorce" },
      { slug: "mutual-consent-divorce-lawyer", label: "Mutual Consent Divorce" },
      { slug: "contested-divorce-lawyer", label: "Contested Divorce" },
      { slug: "maintenance-alimony-lawyer", label: "Maintenance & Alimony" },
      { slug: "child-custody-lawyer", label: "Child Custody" },
    ],
  },
  {
    id: "civil",
    title: "Property & Civil Law",
    description:
      "Property disputes, civil litigation, injunctions, landlord-tenant matters and RERA complaints across Delhi NCR.",
    pages: [
      { slug: "property-civil-lawyer", label: "Property & Civil Law" },
      { slug: "property-dispute-lawyer", label: "Property Disputes" },
      { slug: "civil-lawyer", label: "Civil Litigation" },
    ],
  },
  {
    id: "financial",
    title: "Cheque Bounce, Debt & Financial Disputes",
    description:
      "Section 138 NI Act complaints and defence, legal notices, recovery suits and commercial financial disputes.",
    pages: [
      { slug: "cheque-bounce-lawyer", label: "Cheque Bounce (Sec. 138 NI Act)" },
      { slug: "debt-recovery-lawyer", label: "Debt Recovery" },
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    description:
      "Commercial litigation, contract drafting, business disputes, corporate advisory and MSME legal support.",
    pages: [
      { slug: "corporate-commercial-lawyer", label: "Corporate & Commercial" },
      { slug: "contract-lawyer", label: "Contracts & Agreements" },
    ],
  },
];

// Shown only on the Practice Areas hub page (homepage keeps the six main categories)
export const RERA_CATEGORY = {
  id: "rera",
  title: "RERA & Real Estate",
  description:
    "Complaints before the RERA authorities, builder-buyer disputes and real estate litigation across Delhi NCR — delay, refund, interest and compensation claims.",
  pages: [{ slug: "rera-lawyer", label: "RERA Matters" }],
};

// Sub-services listed under each category on the hub page. Items marked
// pending are awaiting confirmation that the service is actually handled.
export const CATEGORY_SUBS = {
  criminal: [
    { label: "Regular Bail", to: "/bail-lawyer" },
    { label: "FIR & Criminal Complaints", to: "/criminal-law-lawyer" },
    { label: "Criminal Appeals", to: "/criminal-law-lawyer" },
  ],
  family: [
    { label: "Annulment of Marriage", to: "/divorce-family-lawyer" },
    { label: "Judicial Separation", to: "/divorce-lawyer" },
    { label: "498A & Allied Criminal Proceedings", to: "/criminal-law-lawyer" },
    { label: "NRI Matrimonial Matters", to: "/divorce-family-lawyer", pending: true },
  ],
  civil: [
    { label: "Ancestral Property Disputes", to: "/property-dispute-lawyer" },
    { label: "Injunction Matters", to: "/civil-lawyer" },
    { label: "Landlord-Tenant & Eviction Matters", to: "/property-civil-lawyer" },
    { label: "Recovery Matters", to: "/debt-recovery-lawyer" },
    { label: "Property Documentation", to: "/property-civil-lawyer" },
  ],
  rera: [
    { label: "Builder-Buyer Disputes", to: "/rera-lawyer" },
    { label: "Real Estate Disputes", to: "/property-dispute-lawyer" },
  ],
  financial: [
    { label: "Section 138 NI Act", to: "/cheque-bounce-lawyer" },
    { label: "DRT Matters", to: "/debt-recovery-lawyer", pending: true },
    { label: "SARFAESI Matters", to: "/debt-recovery-lawyer", pending: true },
  ],
  corporate: [
    { label: "Corporate Advisory", to: "/corporate-commercial-lawyer" },
    { label: "Business Disputes", to: "/corporate-commercial-lawyer" },
    { label: "MSME & Business Legal Matters", to: "/corporate-commercial-lawyer" },
  ],
};

export const CATEGORY_IMAGES = {
  criminal:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
  "supreme-court":
    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80",
  family:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  civil:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  financial:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  corporate:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
};

export const INSIGHT_IMAGES = {
  criminal: [
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=75&fm=webp",
    "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=800&q=75&fm=webp",
  ],
  family: [
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=75&fm=webp",
    "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=800&q=75&fm=webp",
  ],
  property: [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=75&fm=webp",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75&fm=webp",
  ],
  financial: [
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=75&fm=webp",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=75&fm=webp",
  ],
  corporate:
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=75&fm=webp",
  court: [
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=75&fm=webp",
    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=75&fm=webp",
  ],
  default:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=75&fm=webp",
};

const INSIGHT_TOPICS = [
  { keys: ["bail", "anticipatory"], img: "criminal", label: "Criminal Law" },
  { keys: ["divorce", "matrimonial", "custody", "maintenance", "alimony", "family"], img: "family", label: "Matrimonial & Family Law" },
  { keys: ["rera", "property", "builder", "real estate", "ancestral"], img: "property", label: "Property & RERA" },
  { keys: ["cheque", "138", "recovery", "debt", "drt", "sarfaesi"], img: "financial", label: "Financial Disputes" },
  { keys: ["corporate", "contract", "msme", "business", "commercial", "agreement"], img: "corporate", label: "Corporate & Commercial" },
  { keys: ["supreme court", "slp", "high court", "appeal", "quashing", "fir"], img: "court", label: "Courts & Procedure" },
  { keys: ["criminal", "cyber"], img: "criminal", label: "Criminal Law" },
];

export const insightVisual = (text) => {
  const t = (text || "").toLowerCase();
  const hit = INSIGHT_TOPICS.find((topic) => topic.keys.some((k) => t.includes(k)));
  const key = hit ? hit.img : "default";
  const label = hit ? hit.label : "Legal Insight";
  const pool = INSIGHT_IMAGES[key];
  const seed = [...t].reduce((s, c) => s + c.charCodeAt(0), 0);
  const img = Array.isArray(pool) ? pool[seed % pool.length] : pool;
  return {
    img,
    label,
    alt: (title) => `${label} article — ${title}`,
  };
};

export const LOCATIONS = [
  { slug: "advocate-faridabad", label: "Faridabad", primary: true },
  { slug: "advocate-delhi", label: "Delhi" },
  { slug: "advocate-noida", label: "Noida" },
  { slug: "advocate-greater-noida", label: "Greater Noida" },
  { slug: "advocate-gurugram", label: "Gurugram" },
  { slug: "delhi-ncr-lawyer", label: "Delhi NCR" },
  { slug: "pan-india-legal-services", label: "Pan-India" },
];

export const MARQUEE_ITEMS = [
  "Faridabad Chamber",
  "Delhi NCR",
  "Pan-India Matters",
  "District Courts",
  "High Courts",
  "Supreme Court of India",
];

export const PORTRAIT_URL =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBzdWl0JTIwb2ZmaWNlJTIwcG9ydHJhaXQlMjBjb25zdWx0YXRpb258ZW58MHx8fHwxNzg4Nzk5MzgzfDA&ixlib=rb-4.1.0&q=85";

export const COURT_IMAGE_URL =
  "https://images.pexels.com/photos/6077091/pexels-photo-6077091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
