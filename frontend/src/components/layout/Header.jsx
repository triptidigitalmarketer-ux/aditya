import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, NAV_LINKS } from "@/data/site";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-navy/10 bg-ivory/90 backdrop-blur-md shadow-sm" : "border-transparent bg-ivory"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" data-testid="header-brand-link" className="group flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-wide text-navy transition-colors group-hover:text-navy-light">
            {SITE.brandLine1}
          </span>
          <span className="mt-1 text-[10px] font-mono uppercase tracking-[0.4em] text-gold-dark">
            {SITE.brandLine2}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className={({ isActive }) =>
                `relative text-[13px] font-medium uppercase tracking-wider transition-colors hover:text-navy ${
                  isActive ? "text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-gold" : "text-charcoal/70"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid="nav-book-consultation-btn"
            className="bg-navy px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-ivory transition-all duration-300 hover:bg-navy-light active:scale-95"
          >
            Book a Consultation
          </Link>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          className="p-2 text-navy lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy/10 bg-ivory lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  data-testid={`mobile-nav-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className={({ isActive }) =>
                    `border-b border-navy/5 py-3.5 text-sm font-medium uppercase tracking-wider ${
                      isActive ? "text-gold-dark" : "text-charcoal/80"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                data-testid="mobile-book-consultation-btn"
                className="mt-4 bg-navy px-5 py-3.5 text-center text-xs font-medium uppercase tracking-wider text-ivory"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
