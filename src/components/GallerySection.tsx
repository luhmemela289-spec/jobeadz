import { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, Phone, X } from 'lucide-react';
import { BRAND_INFO, GALLERY_ITEMS, type GalleryItem } from '../data/beadworkData';
import { BeadImage } from './AfricanPattern';

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    activeIndex !== null ? GALLERY_ITEMS[activeIndex] : null;

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % GALLERY_ITEMS.length);
  };

  return (
    <section id="gallery" className="bg-[#FAF6F0] py-16 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 border-b border-[#2A1A14]/12 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#B84B2A] uppercase">
              Visual Showcase
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#2A1A14] text-balance sm:text-4xl lg:text-[2.75rem]">
              Beadwork Gallery
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5F4A40]">
              An editorial look at our traditional bead patterns, coordinated ensembles,
              and close-up beadwork craftsmanship. Click any photograph to inspect the
              details.
            </p>
          </div>

          <a
            href={BRAND_INFO.phoneHref}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-sm border border-[#6E1E28] px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-[#6E1E28] uppercase whitespace-nowrap shrink-0 transition-colors hover:bg-[#6E1E28] hover:text-[#FAF6F0] md:self-auto"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>CALL FOR MORE INFO</span>
          </a>
        </div>

        {/* Editorial Bento / Asymmetric Grid */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {GALLERY_ITEMS.map((item, index) => {
            const spanClass =
              item.layout === 'featured'
                ? 'sm:col-span-2 lg:col-span-7 lg:row-span-2'
                : item.layout === 'wide'
                  ? 'sm:col-span-2 lg:col-span-7'
                  : 'lg:col-span-5';

            const aspectClass =
              item.layout === 'featured'
                ? 'aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[460px]'
                : item.layout === 'wide'
                  ? 'aspect-[16/9]'
                  : 'aspect-[4/3]';

            return (
              <figure
                key={item.id}
                className={`group relative overflow-hidden rounded-sm border border-[#2A1A14]/12 bg-[#EFE6D8] ${spanClass}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${item.title} in full screen`}
                  className={`relative block w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84B2A] ${aspectClass}`}
                >
                  <BeadImage
                    src={item.image}
                    alt={item.imageAlt}
                    title={item.title}
                    imagePosition={item.imagePosition}
                    imageScaleClass={item.imageScaleClass}
                    className="group-hover:scale-[1.03]"
                  />

                  {/* Measured Contrast Scrim for Caption */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1D110C]/85 via-[#1D110C]/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#FAF6F0] sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#EFE6D8]/90 sm:text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#FAF6F0]/15 text-[#FAF6F0] backdrop-blur-xs transition-colors group-hover:bg-[#B84B2A]">
                      <Expand className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox Viewer */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D110C]/88 p-4 backdrop-blur-xs"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-sm border border-[#C29438]/40 bg-[#FAF6F0] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#2A1A14]/12 px-5 py-3.5">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2A1A14] sm:text-2xl">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-[#5F4A40] sm:text-sm">{activeItem.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close gallery lightbox"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-[#2A1A14] transition-colors hover:bg-[#EFE6D8]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex-1 overflow-hidden bg-[#EFE6D8]">
              <div className="aspect-[4/3] max-h-[62vh] w-full">
                <BeadImage
                  src={activeItem.image}
                  alt={activeItem.imageAlt}
                  title={activeItem.title}
                  imagePosition={activeItem.imagePosition}
                  imageScaleClass={activeItem.imageScaleClass}
                />
              </div>

              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous gallery image"
                className="absolute top-1/2 left-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-[#2A1A14]/75 text-[#FAF6F0] transition-colors hover:bg-[#6E1E28]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next gallery image"
                className="absolute top-1/2 right-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-[#2A1A14]/75 text-[#FAF6F0] transition-colors hover:bg-[#6E1E28]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t border-[#2A1A14]/12 bg-[#FAF6F0] px-5 py-4 sm:flex-row">
              <p className="text-xs text-[#5F4A40] tabular-nums">
                Image {activeIndex! + 1} of {GALLERY_ITEMS.length} · Call{' '}
                <span className="font-semibold text-[#2A1A14]">
                  {BRAND_INFO.phoneDisplay}
                </span>{' '}
                to enquire
              </p>
              <a
                href={BRAND_INFO.phoneHref}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-sm bg-[#6E1E28] px-6 py-2.5 text-xs font-semibold tracking-[0.14em] text-[#FAF6F0] uppercase transition-colors hover:bg-[#4F131B] sm:w-auto"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>CALL FOR MORE INFO</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
