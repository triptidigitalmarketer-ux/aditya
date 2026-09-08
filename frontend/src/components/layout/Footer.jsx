import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { SITE, PRACTICE_CATEGORIES, LOCATIONS, NAV_LINKS } from "@/data/site";

const Footer = () => (
  <footer data-testid="site-footer" className="bg-navy-deep text-ivory">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-semibold tracking-wide">{SITE.brandLine1}</span>
            <span className="mt-1.5 text-[10px] font-mono uppercase tracking-[0.4em] text-gold">{SITE.brandLine2}</span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">
            Professional legal representation across Faridabad, Delhi NCR and India — before District Courts,
            High Courts and the Supreme Court of India.
          </p>
          {SITE.socials && (
            <div className="mt-6 flex gap-3" data-testid="footer-socials">
              {[
                { icon: Linkedin, href: SITE.socials.linkedin, id: "footer-linkedin", label: "LinkedIn (placeholder link)", external: true },
                { icon: Mail, href: `mailto:${SITE.socials.email}`, id: "footer-email-icon", label: "Email", external: false },
              ].map(({ icon: Icon, href, id, label, external }) => (
                <a
                  key={id}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  data-testid={id}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-ivory/20 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-gold">Practice Areas</h3>
          <ul className="mt-6 space-y-3">
            {PRACTICE_CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/${c.pages[0].slug}`}
                  data-testid={`footer-practice-${c.id}`}
                  className="text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/practice-areas" data-testid="footer-all-practice-areas" className="text-sm text-ivory/70 transition-colors hover:text-gold">
                All Practice Areas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-gold">Locations</h3>
          <ul className="mt-6 space-y-3">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link to={`/${l.slug}`} data-testid={`footer-location-${l.slug}`} className="text-sm text-ivory/70 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-gold">Chamber</h3>
          <ul className="mt-6 space-y-4 text-sm text-ivory/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span data-testid="footer-chamber-address">{SITE.chamber}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={SITE.phoneHref} data-testid="footer-phone" className="transition-colors hover:text-gold">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} data-testid="footer-email" className="transition-colors hover:text-gold">{SITE.email}</a>
            </li>
          </ul>
          <ul className="mt-8 space-y-2.5">
            {NAV_LINKS.filter((n) => n.to !== "/").map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-xs uppercase tracking-wider text-ivory/50 transition-colors hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center">
        <p className="text-xs text-ivory/40">
          © {new Date().getFullYear()} Aditya Gaur & Associates. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-5 text-xs uppercase tracking-wider text-ivory/50">
          <Link to="/disclaimer" data-testid="footer-disclaimer-link" className="transition-colors hover:text-gold">Disclaimer</Link>
          <Link to="/privacy-policy" data-testid="footer-privacy-link" className="transition-colors hover:text-gold">Privacy Policy</Link>
          <Link to="/terms-of-use" data-testid="footer-terms-link" className="transition-colors hover:text-gold">Terms of Use</Link>
        </div>
      </div>
      <p className="mt-6 text-[11px] leading-relaxed text-ivory/35">
        The contents of this website are for general informational purposes only and do not constitute legal advice.
        Use of this website, or contact made through it, does not create an advocate-client relationship.
      </p>
    </div>
  </footer>
);

export default Footer;
