import { ArrowDownRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_INFO } from '../data/beadworkData';
import { BeadImage } from './AfricanPattern';

export function Hero() {
  return (
    <section
      id="home"
      className="bead-pattern-bg relative overflow-hidden border-b border-[#2A1A14]/10 bg-[#FAF6F0] pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#B84B2A] uppercase">
              African Beads &amp; Beadwork
            </p>

            <h1 className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-[#2A1A14] text-balance sm:text-5xl lg:text-[3.65rem]">
              AFRICAN CRAFTSMANSHIP. TIMELESS BEAUTY.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5F4A40] sm:text-lg">
              Discover the beauty of African beads and beadwork. Explore unique designs
              inspired by African creativity, culture and craftsmanship.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#collection"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-[#B84B2A] px-7 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#FAF6F0] uppercase whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#983B1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6E1E28]"
              >
                <span>EXPLORE OUR COLLECTION</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={BRAND_INFO.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border border-[#6E1E28] bg-[#FAF6F0] px-7 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#6E1E28] uppercase whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#6E1E28] hover:text-[#FAF6F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84B2A]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>CALL FOR MORE INFO</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#2A1A14]/12 pt-5 text-sm text-[#5F4A40]">
              <span>
                Direct Enquiries:{' '}
                <a
                  href={BRAND_INFO.phoneHref}
                  className="font-semibold text-[#2A1A14] underline decoration-[#C29438] decoration-1 underline-offset-4 hover:text-[#6E1E28]"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </span>
              <span aria-hidden="true" className="text-[#C29438]">
                ·
              </span>
              <span>Beaded Collars, Sets &amp; Custom Designs</span>
            </div>
          </motion.div>

          {/* Hero Photography Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="grid h-full grid-cols-12 gap-3 sm:gap-4">
              {/* Primary Hero Beadwork Frame */}
              <div className="col-span-8 overflow-hidden rounded-sm border border-[#2A1A14]/12 bg-[#EFE6D8] shadow-sm">
                <div className="aspect-[4/5] h-full w-full">
                  <BeadImage
                    src="/assets/aistudio/Screenshot_20261110_002701_WhatsApp_8184e83e.jpg"
                    alt="Colourful ruby red, gold, and white starburst African beaded collar and matching fringed belt set by JOBEADZ"
                    title="Ruby & Gold Starburst Beadwork"
                    className="hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Complementary Vertical Beadwork Pair */}
              <div className="col-span-4 flex flex-col gap-3 sm:gap-4">
                <div className="flex-1 overflow-hidden rounded-sm border border-[#2A1A14]/12 bg-[#EFE6D8] shadow-sm">
                  <BeadImage
                    src="/assets/aistudio/Screenshot_20261110_002709_WhatsApp_80e21d5e.jpg"
                    alt="Orange pom-pom African beaded collar and geometric fringe belt"
                    title="Sunburst Orange Collar"
                    className="hover:scale-[1.04]"
                  />
                </div>
                <div className="flex-1 overflow-hidden rounded-sm border border-[#2A1A14]/12 bg-[#EFE6D8] shadow-sm">
                  <BeadImage
                    src="/assets/aistudio/Screenshot_20261110_002631_WhatsApp_0318dc0e.jpg"
                    alt="Black and white geometric diamond beaded neckpiece and headband"
                    title="Diamond Geometric Neckpiece"
                    className="hover:scale-[1.04]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
