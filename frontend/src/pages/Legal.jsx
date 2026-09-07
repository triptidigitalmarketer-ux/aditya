import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal, Overline, GoldRule } from "@/components/Motion";

const PAGES = {
  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer",
    seoTitle: "Disclaimer | Aditya Gaur & Associates",
    metaDescription: "Disclaimer for the website of Aditya Gaur & Associates — general information only, no legal advice, no advocate-client relationship through this website.",
    sections: [
      {
        h: "General Information Only",
        p: [
          "The contents of this website are intended solely for general informational purposes. Nothing on this website constitutes, or should be construed as, legal advice, a legal opinion, or a solicitation or advertisement of legal services.",
          "The information provided here is general in nature and may not reflect the most current legal developments. It must not be acted upon without obtaining specific professional advice on the facts and circumstances of your matter.",
        ],
      },
      {
        h: "No Advocate-Client Relationship",
        p: [
          "Accessing this website, or contacting the chamber through it — including by the enquiry form, email, telephone or WhatsApp — does not create an advocate-client relationship. Such a relationship arises only upon a formal engagement agreed between the parties.",
          "Visitors are requested not to share confidential or privileged information through this website. Information shared prior to a formal engagement may not be protected by privilege.",
        ],
      },
      {
        h: "No Guaranteed Outcomes",
        p: [
          "Litigation outcomes depend on facts, evidence and judicial discretion. This website makes no representation, warranty or guarantee — express or implied — regarding the outcome of any legal matter. Any descriptions of practice areas, procedures or remedies are general explanations of the law and not predictions of result.",
        ],
      },
      {
        h: "Bar Council of India Rules",
        p: [
          "In compliance with the rules of the Bar Council of India, this website is not intended to advertise or solicit work. It exists to provide information about the practice to those who seek it of their own accord. By continuing to use this website, the visitor acknowledges that they are seeking information voluntarily and that no invitation, advertisement or inducement of any kind has been made.",
        ],
      },
      {
        h: "Acceptance",
        p: [
          "By using this website, the visitor accepts this disclaimer in full. This disclaimer is subject to review and approval by Aditya Gaur & Associates, and may be updated from time to time.",
        ],
      },
    ],
  },
  privacy: {
    slug: "privacy-policy",
    title: "Privacy Policy",
    seoTitle: "Privacy Policy | Aditya Gaur & Associates",
    metaDescription: "Privacy policy for the website of Aditya Gaur & Associates — how enquiry information is collected, used and protected.",
    sections: [
      {
        h: "Information We Collect",
        p: [
          "When you submit an enquiry through this website, we collect the information you provide: your name, phone number, email address, the nature of your legal matter, and your message. We do not collect any other personal data automatically beyond standard, anonymised server logs.",
        ],
      },
      {
        h: "How Your Information Is Used",
        p: [
          "Information submitted through the enquiry form is used solely to respond to your enquiry, assess whether the chamber can assist with your matter, and — where you proceed — to establish and manage a professional engagement. Your information is not sold, rented or shared with third parties for marketing purposes.",
        ],
      },
      {
        h: "Confidentiality",
        p: [
          "Communications made in the course of a formal engagement are protected by professional confidentiality obligations. However, information submitted through this website before a formal engagement exists should not be assumed to be privileged — please avoid sending confidential details through the enquiry form.",
        ],
      },
      {
        h: "Data Security and Retention",
        p: [
          "Enquiry data is stored securely and access is restricted. Enquiries are retained only for as long as needed to respond to them and to meet professional record-keeping obligations, after which they may be deleted.",
        ],
      },
      {
        h: "Your Rights",
        p: [
          "You may request access to, correction of, or deletion of the personal information you have submitted, by writing to the chamber using the contact details published on the Contact page. This policy may be updated from time to time; the version on this page is the current one.",
        ],
      },
    ],
  },
  terms: {
    slug: "terms-of-use",
    title: "Terms of Use",
    seoTitle: "Terms of Use | Aditya Gaur & Associates",
    metaDescription: "Terms of use for the website of Aditya Gaur & Associates — conditions governing the use of this website and its content.",
    sections: [
      {
        h: "Acceptance of Terms",
        p: [
          "By accessing and using this website, you accept these Terms of Use together with the Disclaimer and Privacy Policy published here. If you do not agree with any part of these terms, please discontinue use of the website.",
        ],
      },
      {
        h: "Nature of Content",
        p: [
          "All content on this website — including practice area descriptions, articles and answers to frequently asked questions — is general legal information written for a lay audience. It is not legal advice, does not account for the facts of any specific matter, and must not be relied upon as a substitute for consultation with a qualified advocate.",
        ],
      },
      {
        h: "Intellectual Property",
        p: [
          "The text, design and structure of this website are the property of the chamber and may not be reproduced, republished or distributed without prior written consent, except for personal, non-commercial reference.",
        ],
      },
      {
        h: "Third-Party Links and Tools",
        p: [
          "This website may contain links to third-party services (such as WhatsApp or map services). The chamber is not responsible for the content, accuracy or privacy practices of third-party sites and services.",
        ],
      },
      {
        h: "Limitation of Liability and Jurisdiction",
        p: [
          "To the fullest extent permitted by law, the chamber accepts no liability for any loss arising from reliance on information published on this website. Any dispute relating to the use of this website is subject to the jurisdiction of the courts at Faridabad, Haryana.",
        ],
      },
    ],
  },
};

const Legal = ({ page }) => {
  const data = PAGES[page];
  if (!data) return null;
  return (
    <div data-testid={`legal-page-${page}`}>
      <Seo title={data.seoTitle} siteName="Aditya Gaur & Associates" description={data.metaDescription} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: data.title }]} />
        <Reveal>
          <Overline>Legal</Overline>
          <GoldRule className="mt-3 w-16" />
          <h1 className="mt-5 font-serif text-4xl text-navy sm:text-5xl">{data.title}</h1>
        </Reveal>
        {data.sections.map((s, i) => (
          <Reveal key={i} delay={0.03}>
            <h2 className="mt-12 font-serif text-2xl text-navy">{s.h}</h2>
            {s.p.map((para, j) => (
              <p key={j} className="mt-4 text-base leading-relaxed text-charcoal/85">{para}</p>
            ))}
          </Reveal>
        ))}
      </section>
    </div>
  );
};

export default Legal;
