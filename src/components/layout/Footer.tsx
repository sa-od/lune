import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="font-display text-2xl font-light tracking-[0.2em] text-text-light"
            >
              LUNE
            </Link>
            <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-text-muted">
              {SITE.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light tracking-[0.1em] uppercase text-text-muted transition-colors hover:text-text-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs font-light tracking-[0.1em] text-text-muted/60">
            &copy; {new Date().getFullYear()} {SITE.name} Perfumes. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
