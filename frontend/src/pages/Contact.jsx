import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { Reveal, Overline, GoldRule } from "@/components/Motion";
import { SITE } from "@/data/site";

const Contact = () => (
  <div data-testid="contact-page">
    <Seo
      title="Contact — Discuss Your Legal Matter | Aditya Gaur, Advocate, Faridabad"
      siteName="Aditya Gaur, Advocate"
      description="Schedule a consultation with Aditya Gaur, Advocate. Chamber opposite the District & Sessions Court, Faridabad. Matters across Delhi NCR and Pan-India."
    />
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <Reveal>
        <Overline>Contact</Overline>
        <GoldRule className="mt-3 w-16" />
        <h1 className="mt-5 font-serif text-4xl text-navy sm:text-5xl">Discuss Your Legal Matter</h1>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* LEFT — CONSULTATION FORM */}
        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <h2 className="font-serif text-2xl text-navy sm:text-3xl">Schedule a Consultation</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-charcoal/75">
              Share your details and a brief description of your legal matter. The information provided will help us
              understand your enquiry.
            </p>
            <div className="mt-8 border border-navy/10 bg-white p-8 shadow-sm lg:p-10" data-testid="contact-form-card">
              <ContactForm />
            </div>
            <p className="mt-5 text-xs italic leading-relaxed text-charcoal/50">
              Please do not share confidential or privileged information through this form. An advocate-client
              relationship is formed only upon formal engagement.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — CONTACT DETAILS */}
        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="relative bg-navy p-8 grain lg:p-10" data-testid="contact-details-card">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-gold">Contact Details</p>
              <ul className="mt-9 space-y-9">
                <li>
                  <p className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-gold">
                    <MapPin className="h-4 w-4" strokeWidth={1.5} /> Chamber
                  </p>
                  <p className="mt-2.5 text-base leading-relaxed text-ivory/85" data-testid="contact-chamber-address">
                    Opposite District &amp; Sessions Court
                    <br />
                    Faridabad, Haryana – 121002
                  </p>
                </li>
                <li>
                  <p className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-gold">
                    <Mail className="h-4 w-4" strokeWidth={1.5} /> Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    data-testid="contact-email-link"
                    className="mt-2.5 inline-block text-base text-ivory/85 underline-offset-4 transition-colors hover:text-gold hover:underline"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="border border-gold/40 bg-navy-deep/60 p-5">
                  <p className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-gold">
                    <Phone className="h-4 w-4" strokeWidth={1.5} /> Emergency Contact
                  </p>
                  <a
                    href={SITE.phoneHref}
                    data-testid="contact-phone-link"
                    className="mt-2 inline-block font-serif text-2xl text-ivory transition-colors hover:text-gold"
                  >
                    {SITE.phoneDisplay}
                  </a>
                  <p className="mt-1.5 text-xs leading-relaxed text-ivory/55">
                    For urgent matters — an arrest, a custody deadline or a time-barred notice.
                  </p>
                </li>
                <li>
                  <p className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-gold">
                    <Clock className="h-4 w-4" strokeWidth={1.5} /> Office Hours
                  </p>
                  <p className="mt-2.5 text-base text-ivory/85" data-testid="contact-office-hours">
                    {SITE.officeHours}
                  </p>
                </li>
              </ul>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 border border-gold/60 px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-navy"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp the Chamber
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
