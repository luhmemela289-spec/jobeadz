import { MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/beadworkData';

export function WhatsAppFloat() {
  return (
    <a
      href={BRAND_INFO.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JOBEADZ on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex h-12 items-center gap-2 rounded-full border border-[#FAF6F0]/25 bg-[#1D6B42] px-4 text-xs font-semibold tracking-wider text-[#FAF6F0] uppercase shadow-lg transition-transform duration-150 hover:scale-[1.03] hover:bg-[#175736] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84B2A] sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
