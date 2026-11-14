import { Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/beadworkData';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Collection', href: '#collection' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bead-pattern-dark border-t border-[#C29438]/30 bg-[#241611] text-[#FAF6F0]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="#home"
              className="font-display text-3xl font-bold tracking-[0.14em] text-[#FAF6F0]"
            >
              {BRAND_INFO.name}
            </a>
            <p className="mt-2 font-display text-lg italic text-[#DEC078]">
              &ldquo;{BRAND_INFO.tagline}&rdquo;
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#EFE6D8]/75">
              African beads and beadwork celebrating creativity, vibrant colour, and
              traditional bead designs.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-[#DEC078] uppercase">
              Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#EFE6D8]/85 transition-colors hover:text-[#DEC078]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-[#DEC078] uppercase">
              Direct Contact
            </h3>
            <a
              href={BRAND_INFO.phoneHref}
              className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-[#FAF6F0] transition-colors hover:text-[#DEC078]"
            >
              <Phone className="h-4 w-4 text-[#C29438]" aria-hidden="true" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>
            <div className="mt-4">
              <a
                href={BRAND_INFO.phoneHref}
                className="inline-flex min-h-[42px] items-center justify-center rounded-sm bg-[#B84B2A] px-5 py-2 text-xs font-semibold tracking-[0.14em] text-[#FAF6F0] uppercase transition-colors hover:bg-[#983B1F]"
              >
                CALL FOR MORE INFO
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#EFE6D8]/12 pt-6 text-xs text-[#EFE6D8]/65 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.
          </p>
          <p>African Beads &amp; Beadwork</p>
        </div>
      </div>
    </footer>
  );
}
