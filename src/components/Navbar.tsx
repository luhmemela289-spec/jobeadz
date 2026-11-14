import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { BRAND_INFO } from '../data/beadworkData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Collection', href: '#collection' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#2A1A14]/10 bg-[#FAF6F0]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-[0.14em] text-[#2A1A14] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B84B2A]"
        >
          {BRAND_INFO.name}
        </a>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5F4A40]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#6E1E28] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B84B2A] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B84B2A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BRAND_INFO.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-sm bg-[#6E1E28] px-4 py-2 text-xs font-semibold tracking-wider text-[#FAF6F0] uppercase whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#4F131B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84B2A]"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Call {BRAND_INFO.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#2A1A14]/15 text-[#2A1A14] transition-colors hover:bg-[#EFE6D8] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-[#2A1A14]/10 bg-[#FAF6F0] px-4 py-4 md:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center border-b border-[#2A1A14]/8 px-2 text-base font-medium text-[#2A1A14] transition-colors hover:text-[#6E1E28]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BRAND_INFO.phoneHref}
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex min-h-[46px] items-center justify-center gap-2 rounded-sm bg-[#6E1E28] px-5 py-3 text-sm font-semibold tracking-wider text-[#FAF6F0] uppercase transition-colors hover:bg-[#4F131B]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call {BRAND_INFO.phoneDisplay}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
