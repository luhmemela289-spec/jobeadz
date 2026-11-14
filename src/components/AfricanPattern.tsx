import { useState } from 'react';
import { Gem } from 'lucide-react';

interface GeometricDividerProps {
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Refined African geometric diamond-and-triangle band inspired by traditional beadwork lattice.
 */
export function GeometricDivider({ variant = 'light', className = '' }: GeometricDividerProps) {
  const strokeColor = variant === 'dark' ? '#C29438' : '#B84B2A';
  const accentFill = variant === 'dark' ? '#DEC078' : '#6E1E28';
  const mutedLine = variant === 'dark' ? 'rgba(222, 192, 120, 0.25)' : 'rgba(95, 74, 64, 0.2)';

  return (
    <div className={`w-full overflow-hidden py-3 ${className}`} aria-hidden="true">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6">
        <div className="h-px flex-1" style={{ backgroundColor: mutedLine }} />
        <svg
          width="116"
          height="18"
          viewBox="0 0 116 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <path d="M2 9L10 2L18 9L10 16L2 9Z" stroke={strokeColor} strokeWidth="1.4" />
          <circle cx="10" cy="9" r="2" fill={accentFill} />
          <path d="M24 9L32 2L40 9L32 16L24 9Z" stroke={accentFill} strokeWidth="1.4" />
          <path d="M48 9L58 1.5L68 9L58 16.5L48 9Z" stroke={strokeColor} strokeWidth="1.6" />
          <path d="M54 9L58 5.5L62 9L58 12.5L54 9Z" fill={accentFill} />
          <path d="M76 9L84 2L92 9L84 16L76 9Z" stroke={accentFill} strokeWidth="1.4" />
          <path d="M98 9L106 2L114 9L106 16L98 9Z" stroke={strokeColor} strokeWidth="1.4" />
          <circle cx="106" cy="9" r="2" fill={accentFill} />
        </svg>
        <div className="h-px flex-1" style={{ backgroundColor: mutedLine }} />
      </div>
    </div>
  );
}

interface BeadImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  imagePosition?: string;
  imageScaleClass?: string;
}

/**
 * Resilient image frame with styled fallback so no broken image icon can ever appear.
 */
export function BeadImage({
  src,
  alt,
  title,
  className = '',
  imagePosition = 'center center',
  imageScaleClass = '',
}: BeadImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#EFE6D8] via-[#FAF6F0] to-[#E5D5C0] p-6 text-center text-[#5F4A40] ${className}`}
      >
        <Gem className="mb-2 h-8 w-8 text-[#B84B2A]" strokeWidth={1.5} />
        <span className="font-display text-lg font-semibold text-[#2A1A14]">
          {title || 'JOBEADZ Beadwork'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      style={{ objectPosition: imagePosition }}
      className={`h-full w-full object-cover transition-transform duration-500 ease-out ${imageScaleClass} ${className}`}
    />
  );
}
