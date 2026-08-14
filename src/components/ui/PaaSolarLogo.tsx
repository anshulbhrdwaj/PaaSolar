'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface PaaSolarLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  align?: 'left' | 'center';
  customTagline?: string;
  showImage?: boolean;
  layout?: 'row' | 'col';
}

export function PaaSolarLogo({
  className = '',
  size = 'md',
  showTagline = true,
  align = 'left',
  customTagline,
  showImage = true,
  layout = 'row',
}: PaaSolarLogoProps) {
  let taglineText = customTagline;
  
  try {
    const t = useTranslations('Navbar');
    if (!taglineText) {
      taglineText = t('tagline');
    }
  } catch {
    if (!taglineText) {
      taglineText = 'Blessing from this generation to next generation';
    }
  }

  // Image dimensions based on size prop
  const imgSizeClass =
    size === 'sm'
      ? 'h-7 sm:h-9 w-auto'
      : size === 'hero'
      ? 'h-20 sm:h-32 md:h-44 w-auto'
      : size === 'lg'
      ? 'h-12 sm:h-16 md:h-22 w-auto'
      : 'h-9 sm:h-12 md:h-16 w-auto';

  // Dimensions based on size prop
  const titleSizeClass =
    size === 'sm'
      ? 'text-lg md:text-xl'
      : size === 'hero'
      ? 'text-4xl sm:text-5xl md:text-6xl'
      : size === 'lg'
      ? 'text-2xl md:text-3xl'
      : 'text-xl md:text-2xl';

  const taglineSizeClass =
    size === 'sm'
      ? 'text-[8px] md:text-[9px]'
      : size === 'hero'
      ? 'text-[10px] sm:text-xs md:text-sm tracking-[0.2em]'
      : size === 'lg'
      ? 'text-[10px] md:text-xs'
      : 'text-[9px] md:text-[10px]';

  const isCol = layout === 'col';

  return (
    <div
      className={`inline-flex ${
        isCol
          ? align === 'center'
            ? 'flex-col items-center gap-3'
            : 'flex-col items-start gap-3'
          : 'items-center gap-0.5 sm:gap-0.5'
      } shrink-0 whitespace-nowrap ${className}`}
    >
      {/* Brand Transparent Logo Emblem */}
      {showImage && (
        <img
          src="/logo_transparent.png"
          alt="PAA SOLAR Logo"
          className={`${imgSizeClass} object-contain shrink-0 filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
        />
      )}

      {/* Main Logo Text with Solar Pattern & Blue-to-Orange 'O' */}
      <div
        className={`inline-flex flex-col shrink-0 whitespace-nowrap ${
          align === 'center' ? 'items-center text-center' : 'items-start text-left'
        } leading-none select-none`}
      >
        <span className="inline-flex items-baseline font-black uppercase tracking-tight whitespace-nowrap shrink-0">
          <span
            className={titleSizeClass}
            style={{
              margin: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px),
                linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)
              `,
              backgroundSize: '12px 24px, 12px 24px, 100% 100%',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              letterSpacing: '-0.03em',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            }}
          >
            PAA&nbsp;S
          </span>
          <span
            className={titleSizeClass}
            style={{
              margin: 0,
              backgroundImage: 'linear-gradient(90deg, #2563eb 0%, #0284c7 48%, #f97316 52%, #ff6b00 100%)',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              letterSpacing: '-0.03em',
              filter: 'drop-shadow(0 2px 6px rgba(249,115,22,0.5))',
            }}
          >
            O
          </span>
          <span
            className={titleSizeClass}
            style={{
              margin: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px),
                linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)
              `,
              backgroundSize: '12px 24px, 12px 24px, 100% 100%',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              letterSpacing: '-0.03em',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            }}
          >
            LAR
          </span>
        </span>

        {/* Localized Tagline */}
        {showTagline && (
          <span
            className={`font-semibold uppercase tracking-[0.2em] text-accent-solar mt-1 ${taglineSizeClass}`}
          >
            {taglineText}
          </span>
        )}
      </div>
    </div>
  );
}

