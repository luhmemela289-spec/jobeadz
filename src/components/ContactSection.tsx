import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, MessageCircle, Phone, Send } from 'lucide-react';
import { BRAND_INFO, PRODUCTS } from '../data/beadworkData';
import { GeometricDivider } from './AfricanPattern';

interface ContactSectionProps {
  selectedProductName: string;
}

interface EnquiryFormState {
  fullName: string;
  contactNumber: string;
  email: string;
  productOfInterest: string;
  message: string;
}

export function ContactSection({ selectedProductName }: ContactSectionProps) {
  const [formData, setFormData] = useState<EnquiryFormState>({
    fullName: '',
    contactNumber: '',
    email: '',
    productOfInterest: selectedProductName || 'General Beadwork Enquiry',
    message: '',
  });
  const [submittedData, setSubmittedData] = useState<EnquiryFormState | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedProductName) {
      setFormData((prev) => ({
        ...prev,
        productOfInterest: selectedProductName,
      }));
      setSubmittedData(null);
    }
  }, [selectedProductName]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.contactNumber.trim()) {
      setErrorMessage('Please enter your full name and contact number.');
      return;
    }
    setErrorMessage('');
    setSubmittedData({ ...formData });
  };

  const buildWhatsAppSummaryUrl = (data: EnquiryFormState) => {
    const lines = [
      `Hello JOBEADZ, I would like to enquire about: ${data.productOfInterest}.`,
      `Name: ${data.fullName}`,
      `Contact Number: ${data.contactNumber}`,
      data.email ? `Email: ${data.email}` : '',
      data.message ? `Message: ${data.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    return `${BRAND_INFO.whatsappHref}?text=${encodeURIComponent(lines)}`;
  };

  return (
    <>
      <GeometricDivider />

      <section id="contact" className="bead-pattern-bg bg-[#FAF6F0] py-16 sm:py-22">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#B84B2A] uppercase">
              Direct Enquiries
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#2A1A14] text-balance sm:text-4xl lg:text-[2.75rem]">
              LOVE WHAT YOU SEE? LET&apos;S TALK.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5F4A40]">
              Interested in our African bead collections? Contact JOBEADZ directly for
              more information about our products and designs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            {/* Direct Call Card */}
            <div className="flex flex-col justify-between rounded-sm border border-[#C29438]/40 bg-[#5B1822] p-8 text-[#FAF6F0] shadow-sm sm:p-10 lg:col-span-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-[#DEC078] uppercase">
                  Speak With Us Directly
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-wide text-[#FAF6F0]">
                  {BRAND_INFO.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#EFE6D8]/90">
                  Have a question about a beaded collar, full ceremonial set, or custom
                  colour combination? Call us directly for personal assistance.
                </p>

                <div className="mt-8 border-y border-[#DEC078]/25 py-6">
                  <p className="text-xs font-medium tracking-[0.16em] text-[#DEC078] uppercase">
                    Direct Contact Number
                  </p>
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="mt-2 block font-display text-3xl font-bold tracking-wide text-[#FAF6F0] transition-colors hover:text-[#DEC078] sm:text-4xl"
                  >
                    Call: {BRAND_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={BRAND_INFO.phoneHref}
                  className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-sm bg-[#B84B2A] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-[#FAF6F0] uppercase transition-colors hover:bg-[#983B1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DEC078]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>CALL FOR MORE INFO</span>
                </a>

                <a
                  href={BRAND_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-sm border border-[#DEC078]/50 bg-transparent px-6 py-3 text-xs font-semibold tracking-[0.14em] text-[#FAF6F0] uppercase transition-colors hover:bg-[#4F131B]"
                >
                  <MessageCircle className="h-4 w-4 text-[#DEC078]" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Enquiry Form Card */}
            <div className="rounded-sm border border-[#2A1A14]/14 bg-[#FFFFFF] p-7 shadow-sm sm:p-10 lg:col-span-7">
              {submittedData ? (
                <div className="flex h-full flex-col justify-center py-4">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[#F3ECE1] text-[#6E1E28]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-[#2A1A14]">
                    Enquiry Ready to Send
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5F4A40]">
                    Thank you, <span className="font-semibold text-[#2A1A14]">{submittedData.fullName}</span>.
                    Your enquiry for{' '}
                    <span className="font-semibold text-[#6E1E28]">
                      {submittedData.productOfInterest}
                    </span>{' '}
                    has been prepared. Send it straight to JOBEADZ on WhatsApp or call us
                    directly at {BRAND_INFO.phoneDisplay}.
                  </p>

                  <div className="mt-6 rounded-sm border border-[#2A1A14]/12 bg-[#FAF6F0] p-4 text-sm text-[#5F4A40]">
                    <p>
                      <strong className="text-[#2A1A14]">Contact:</strong>{' '}
                      {submittedData.contactNumber}
                    </p>
                    {submittedData.email && (
                      <p className="mt-1">
                        <strong className="text-[#2A1A14]">Email:</strong>{' '}
                        {submittedData.email}
                      </p>
                    )}
                    {submittedData.message && (
                      <p className="mt-1">
                        <strong className="text-[#2A1A14]">Message:</strong>{' '}
                        {submittedData.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppSummaryUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-sm bg-[#6E1E28] px-5 py-3 text-xs font-semibold tracking-[0.14em] text-[#FAF6F0] uppercase transition-colors hover:bg-[#4F131B]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <a
                      href={BRAND_INFO.phoneHref}
                      className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-sm border border-[#2A1A14]/25 px-5 py-3 text-xs font-semibold tracking-[0.14em] text-[#2A1A14] uppercase transition-colors hover:bg-[#FAF6F0]"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span>Call {BRAND_INFO.phoneDisplay}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedData(null);
                      setFormData({
                        fullName: '',
                        contactNumber: '',
                        email: '',
                        productOfInterest: 'General Beadwork Enquiry',
                        message: '',
                      });
                    }}
                    className="mt-5 self-start text-xs font-semibold tracking-wider text-[#B84B2A] uppercase underline underline-offset-4 hover:text-[#6E1E28]"
                  >
                    Prepare Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#2A1A14]">
                      Product Enquiry Form
                    </h3>
                    <p className="mt-1 text-sm text-[#5F4A40]">
                      Share the design you are interested in and how we can reach you.
                    </p>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="rounded-sm border border-[#6E1E28]/30 bg-[#6E1E28]/8 px-4 py-3 text-sm font-medium text-[#6E1E28]"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enquiry-full-name"
                        className="mb-1.5 block text-xs font-semibold tracking-wider text-[#2A1A14] uppercase"
                      >
                        Full Name *
                      </label>
                      <input
                        id="enquiry-full-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                        }
                        placeholder="Your full name"
                        className="min-h-[44px] w-full rounded-sm border border-[#2A1A14]/20 bg-[#FAF6F0]/60 px-3.5 py-2.5 text-sm text-[#2A1A14] placeholder:text-[#5F4A40]/60 focus:border-[#B84B2A] focus:bg-[#FFFFFF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-phone"
                        className="mb-1.5 block text-xs font-semibold tracking-wider text-[#2A1A14] uppercase"
                      >
                        Contact Number *
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        value={formData.contactNumber}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            contactNumber: e.target.value,
                          }))
                        }
                        placeholder="+27 ..."
                        className="min-h-[44px] w-full rounded-sm border border-[#2A1A14]/20 bg-[#FAF6F0]/60 px-3.5 py-2.5 text-sm text-[#2A1A14] placeholder:text-[#5F4A40]/60 focus:border-[#B84B2A] focus:bg-[#FFFFFF] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enquiry-email"
                        className="mb-1.5 block text-xs font-semibold tracking-wider text-[#2A1A14] uppercase"
                      >
                        Email Address
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        className="min-h-[44px] w-full rounded-sm border border-[#2A1A14]/20 bg-[#FAF6F0]/60 px-3.5 py-2.5 text-sm text-[#2A1A14] placeholder:text-[#5F4A40]/60 focus:border-[#B84B2A] focus:bg-[#FFFFFF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-product"
                        className="mb-1.5 block text-xs font-semibold tracking-wider text-[#2A1A14] uppercase"
                      >
                        Product of Interest
                      </label>
                      <select
                        id="enquiry-product"
                        value={formData.productOfInterest}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            productOfInterest: e.target.value,
                          }))
                        }
                        className="min-h-[44px] w-full rounded-sm border border-[#2A1A14]/20 bg-[#FAF6F0]/60 px-3.5 py-2.5 text-sm text-[#2A1A14] focus:border-[#B84B2A] focus:bg-[#FFFFFF] focus:outline-none"
                      >
                        <option value="General Beadwork Enquiry">
                          General Beadwork Enquiry
                        </option>
                        {PRODUCTS.map((product) => (
                          <option key={product.id} value={product.name}>
                            {product.name}
                          </option>
                        ))}
                        <option value="Custom Beadwork Order">
                          Custom Beadwork Order
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="mb-1.5 block text-xs font-semibold tracking-wider text-[#2A1A14] uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      placeholder="Tell us which beadwork design or colour palette you are interested in..."
                      className="w-full rounded-sm border border-[#2A1A14]/20 bg-[#FAF6F0]/60 px-3.5 py-2.5 text-sm text-[#2A1A14] placeholder:text-[#5F4A40]/60 focus:border-[#B84B2A] focus:bg-[#FFFFFF] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm bg-[#6E1E28] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-[#FAF6F0] uppercase transition-colors hover:bg-[#4F131B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84B2A]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>SUBMIT ENQUIRY</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
