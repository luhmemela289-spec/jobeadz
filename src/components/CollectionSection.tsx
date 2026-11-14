import { useState } from 'react';
import { Expand, MessageSquare, Phone, X } from 'lucide-react';
import {
  BRAND_INFO,
  PRODUCT_CATEGORIES,
  PRODUCTS,
  type BeadProduct,
  type ProductCategory,
} from '../data/beadworkData';
import { BeadImage } from './AfricanPattern';

interface CollectionSectionProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export function CollectionSection({ onSelectProductForEnquiry }: CollectionSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');
  const [selectedProduct, setSelectedProduct] = useState<BeadProduct | null>(null);

  const filteredProducts =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === activeCategory);

  const handleEnquireForm = (productName: string) => {
    setSelectedProduct(null);
    onSelectProductForEnquiry(productName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collection" className="bg-[#FAF6F0] py-16 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#2A1A14]/12 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#B84B2A] uppercase">
              Curated Showcase
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#2A1A14] text-balance sm:text-4xl lg:text-[2.75rem]">
              Our Collection
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5F4A40]">
              Explore handcrafted African beadwork collars, fringed waistpieces, geometric
              necklaces, and coordinated sets. Call us directly for sizing, colour
              availability, and ordering details.
            </p>
          </div>

          <p className="text-xs font-medium tracking-wider text-[#5F4A40] uppercase tabular-nums">
            Showing {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? 'Design' : 'Designs'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter collection by category"
          className="mt-7 flex gap-2 overflow-x-auto pb-2"
        >
          {PRODUCT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[40px] rounded-sm px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84B2A] ${
                  isActive
                    ? 'bg-[#6E1E28] text-[#FAF6F0]'
                    : 'border border-[#2A1A14]/15 bg-[#FFFFFF]/70 text-[#5F4A40] hover:border-[#B84B2A]/50 hover:text-[#2A1A14]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Uniform Product Grid */}
        <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-sm border border-[#2A1A14]/12 bg-[#FFFFFF] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Product Photograph */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE6D8]">
                <BeadImage
                  src={product.image}
                  alt={product.imageAlt}
                  title={product.name}
                  imagePosition={product.imagePosition}
                  imageScaleClass={product.imageScaleClass}
                  className="group-hover:scale-[1.03]"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  aria-label={`Inspect ${product.name}`}
                  className="absolute right-3 bottom-3 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#2A1A14]/80 text-[#FAF6F0] backdrop-blur-xs transition-colors hover:bg-[#6E1E28] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF6F0]"
                >
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-[#B84B2A] uppercase">
                  {product.category}
                </p>

                <h3 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-[#2A1A14]">
                  {product.name}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#5F4A40]">
                  {product.description}
                </p>

                <div className="mt-6 flex flex-col gap-2.5 border-t border-[#2A1A14]/10 pt-5">
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-sm bg-[#6E1E28] px-4 py-2.5 text-xs font-semibold tracking-[0.14em] text-[#FAF6F0] uppercase whitespace-nowrap transition-colors duration-150 hover:bg-[#4F131B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84B2A]"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>CALL FOR MORE INFO</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleEnquireForm(product.name)}
                    className="inline-flex min-h-[38px] w-full items-center justify-center gap-1.5 text-xs font-medium text-[#5F4A40] underline decoration-[#2A1A14]/25 underline-offset-4 transition-colors hover:text-[#B84B2A]"
                  >
                    <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Send Enquiry About This Piece</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Product Detail Inspection Modal */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A1A14]/75 p-4 backdrop-blur-xs"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm border border-[#C29438]/35 bg-[#FAF6F0] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product preview"
              className="absolute top-3 right-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-[#2A1A14]/85 text-[#FAF6F0] transition-colors hover:bg-[#6E1E28]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="aspect-[4/3] bg-[#EFE6D8] md:col-span-7 md:aspect-auto md:min-h-[380px]">
                <BeadImage
                  src={selectedProduct.image}
                  alt={selectedProduct.imageAlt}
                  title={selectedProduct.name}
                  imagePosition={selectedProduct.imagePosition}
                  imageScaleClass={selectedProduct.imageScaleClass}
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#B84B2A] uppercase">
                    {selectedProduct.category}
                  </p>
                  <h3
                    id="modal-product-title"
                    className="mt-2 font-display text-3xl font-bold leading-tight text-[#2A1A14]"
                  >
                    {selectedProduct.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5F4A40]">
                    {selectedProduct.description}
                  </p>
                  <p className="mt-4 border-t border-[#2A1A14]/10 pt-4 text-xs leading-relaxed text-[#5F4A40]">
                    Call JOBEADZ directly on{' '}
                    <span className="font-semibold text-[#2A1A14]">
                      {BRAND_INFO.phoneDisplay}
                    </span>{' '}
                    for full details, colour options, and availability.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-sm bg-[#6E1E28] px-5 py-3 text-xs font-semibold tracking-[0.14em] text-[#FAF6F0] uppercase transition-colors hover:bg-[#4F131B]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>CALL FOR MORE INFO</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleEnquireForm(selectedProduct.name)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center rounded-sm border border-[#2A1A14]/25 px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[#2A1A14] uppercase transition-colors hover:bg-[#EFE6D8]"
                  >
                    Enquire via Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
