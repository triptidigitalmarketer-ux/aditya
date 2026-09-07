import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";
import { Overline, GoldRule } from "@/components/Motion";

const CtaSection = ({ title = "Discuss Your Legal Matter", text }) => (
  <section data-testid="cta-section" className="relative overflow-hidden bg-navy grain">
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <Overline className="text-gold">Consultation</Overline>
      <GoldRule className="mt-3 w-16" />
      <h2 className="mt-5 max-w-2xl font-serif text-3xl text-ivory sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/70">
        {text ||
          "Share the outline of your matter and the chamber will respond to schedule a consultation. Every enquiry is read and answered."}
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link
          to="/contact"
          data-testid="cta-book-consultation-btn"
          className="bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy shadow-sm transition-all duration-300 hover:bg-gold-dark hover:text-white active:scale-95"
        >
          Book a Consultation
        </Link>
        <a
          href={SITE.phoneHref}
          data-testid="cta-call-btn"
          className="inline-flex items-center gap-2 border border-ivory/40 px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-navy"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a
          href={SITE.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="cta-whatsapp-btn"
          className="inline-flex items-center gap-2 border border-ivory/40 px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-navy"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;
