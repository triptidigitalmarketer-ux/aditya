import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const NotFound = () => (
  <div data-testid="not-found-page" className="mx-auto flex max-w-3xl flex-col items-center px-4 py-28 text-center">
    <Seo title="Page Not Found | Aditya Gaur & Associates" siteName="Aditya Gaur & Associates" description="The page you are looking for could not be found." />
    <p className="font-serif text-7xl italic text-gold/70">404</p>
    <h1 className="mt-6 font-serif text-3xl text-navy sm:text-4xl">This page could not be found</h1>
    <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/70">
      The page may have moved, or the link may be incorrect. The main sections of the website are below.
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/" data-testid="notfound-home-btn" className="bg-navy px-6 py-3 text-xs font-medium uppercase tracking-wider text-ivory transition-colors hover:bg-navy-light">
        Home
      </Link>
      <Link to="/practice-areas" data-testid="notfound-practice-btn" className="border border-navy px-6 py-3 text-xs font-medium uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-ivory">
        Practice Areas
      </Link>
      <Link to="/contact" data-testid="notfound-contact-btn" className="border border-navy px-6 py-3 text-xs font-medium uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-ivory">
        Contact
      </Link>
    </div>
  </div>
);

export default NotFound;
