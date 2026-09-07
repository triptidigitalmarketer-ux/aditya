import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
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
      description="Discuss your legal matter with Aditya Gaur, Advocate. Chamber at District Courts, Sector 12, Faridabad. Consultations for matters across Delhi NCR and Pan-India."
    />
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Overline>Contact</Overline>
            <GoldRule className="mt-3 w-16" />
            <h1 className="mt-5 font-serif text-4xl text-navy sm:text-5xl">Discuss Your Legal Matter</h1>
            <p className="mt-6 text-lg font-light leading-relaxed text-charcoal/80">
              Every matter begins with a conversation. Share a brief, non-confidential outline through the form, or
              reach the chamber directly — every enquiry is read and answered.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-6">
              <li className="flex gap-4 border-b border-navy/10 pb-6">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-dark" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-gold-dark">Chamber</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/85" data-testid="contact-chamber-address">
                    District Courts, Sector 12,<br />Faridabad, Haryana
                  </p>
                </div>
              </li>
              <li className="flex gap-4 border-b border-navy/10 pb-6">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-dark" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-gold-dark">Call / WhatsApp</p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-4">
                    <a href={SITE.phoneHref} data-testid="contact-phone-link" className="text-sm font-medium text-navy transition-colors hover:text-gold-dark">
                      {SITE.phoneDisplay}
                    </a>
                    <a
                      href={SITE.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-whatsapp-btn"
                      className="inline-flex items-center gap-1.5 border border-navy/20 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-navy transition-colors hover:border-gold hover:bg-navy hover:text-ivory"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-4 border-b border-navy/10 pb-6">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold-dark" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-gold-dark">Email</p>
                  <a href={`mailto:${SITE.email}`} data-testid="contact-email-link" className="mt-1.5 block text-sm font-medium text-navy transition-colors hover:text-gold-dark">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-dark" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-gold-dark">Consultations</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/85">
                    By prior appointment — at the chamber, or remotely for clients outside Faridabad. Mention urgent
                    deadlines (court dates, notice periods) in your enquiry.
                  </p>
                </div>
              </li>
            </ul>
            <p className="mt-8 text-xs italic leading-relaxed text-charcoal/50">
              Please do not share confidential or privileged information through this form. An advocate-client
              relationship is formed only upon formal engagement.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="border border-navy/10 bg-white p-8 shadow-sm lg:p-12" data-testid="contact-form-card">
              <h2 className="font-serif text-2xl text-navy">Book a Consultation</h2>
              <p className="mt-2 text-sm text-charcoal/60">Fields marked by the form are required.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
