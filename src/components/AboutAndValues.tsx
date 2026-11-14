import { Compass, Eye, Gem, Palette, Phone, Sparkles } from 'lucide-react';
import { BRAND_INFO, WHY_CHOOSE_ITEMS, type WhyChooseItem } from '../data/beadworkData';
import { BeadImage, GeometricDivider } from './AfricanPattern';

function PillarIcon({ iconName }: { iconName: WhyChooseItem['iconName'] }) {
  const iconProps = { className: 'h-5 w-5 text-[#B84B2A]', strokeWidth: 1.75 };
  switch (iconName) {
    case 'compass':
      return <Compass {...iconProps} />;
    case 'palette':
      return <Palette {...iconProps} />;
    case 'gem':
      return <Gem {...iconProps} />;
    case 'eye':
      return <Eye {...iconProps} />;
    case 'sparkles':
      return <Sparkles {...iconProps} />;
    case 'phone':
      return <Phone {...iconProps} />;
  }
}

export function AboutAndValues() {
  return (
    <>
      <GeometricDivider />

      {/* About JOBEADZ */}
      <section id="about" className="bg-[#FAF6F0] py-16 sm:py-22">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="h-full overflow-hidden rounded-sm border border-[#2A1A14]/12 bg-[#EFE6D8] shadow-sm">
                <div className="aspect-[4/5] h-full w-full">
                  <BeadImage
                    src="/assets/aistudio/Screenshot_20261110_002631_WhatsApp_0318dc0e.jpg"
                    alt="Monochrome black and white African geometric beaded neckpiece and headband by JOBEADZ"
                    title="Geometric Beadwork Craft"
                    className="hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#B84B2A] uppercase">
                About {BRAND_INFO.name}
              </p>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#2A1A14] text-balance sm:text-4xl lg:text-[2.75rem]">
                A CELEBRATION OF AFRICAN CREATIVITY
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5F4A40]">
                <p>
                  {BRAND_INFO.name} specializes in African beads and beadwork, bringing
                  colour, creativity, and cultural inspiration together through beautiful
                  bead designs.
                </p>
                <p>
                  Each piece reflects the expressive beauty of African visual artistry—from
                  bold, radiating beaded collars and fringed waistpieces to geometric
                  necklaces, cuffs, and coordinated accessories. Whether vibrant with
                  crimson, sunburst orange, gold, and fuchsia or timeless in crisp
                  monochrome contrast, every creation is crafted to be worn and admired
                  with pride.
                </p>
                <p>
                  We believe choosing beadwork should feel personal. Reach out to us
                  directly to learn more about our designs, discuss colour combinations,
                  or enquire about a specific piece in our showcase.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#2A1A14]/12 pt-6">
                <a
                  href={BRAND_INFO.phoneHref}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-sm bg-[#6E1E28] px-6 py-3 text-xs font-semibold tracking-[0.14em] text-[#FAF6F0] uppercase transition-colors hover:bg-[#4F131B]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>CALL FOR MORE INFO</span>
                </a>
                <a
                  href="#gallery"
                  className="inline-flex min-h-[46px] items-center justify-center px-3 text-xs font-semibold tracking-[0.14em] text-[#2A1A14] uppercase underline decoration-[#B84B2A] underline-offset-4 transition-colors hover:text-[#B84B2A]"
                >
                  View Beadwork Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose JOBEADZ */}
      <section className="border-y border-[#2A1A14]/10 bg-[#F3ECE1] py-16 sm:py-22">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#B84B2A] uppercase">
              Our Craft &amp; Promise
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#2A1A14] text-balance sm:text-4xl">
              Why Choose {BRAND_INFO.name}?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5F4A40]">
              Thoughtful artistry, vibrant colour harmony, and personal attention on every
              enquiry.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-sm border border-[#2A1A14]/12 bg-[#FAF6F0] p-7 transition-colors duration-150 hover:border-[#B84B2A]/40"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#C29438]/35 bg-[#F3ECE1]">
                  <PillarIcon iconName={item.iconName} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#2A1A14]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5F4A40]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
