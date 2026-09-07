import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = ({ trail }) => (
  <nav aria-label="Breadcrumb" data-testid="breadcrumbs" className="mb-8">
    <ol className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-charcoal/50">
      {trail.map((item, i) => (
        <li key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight className="h-3 w-3 text-gold" />}
          {item.to ? (
            <Link to={item.to} data-testid={`breadcrumb-${i}`} className="transition-colors hover:text-navy">
              {item.label}
            </Link>
          ) : (
            <span className="text-navy/70">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
