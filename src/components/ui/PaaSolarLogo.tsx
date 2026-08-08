'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

interface PaaSolarLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  align?: 'left' | 'center';
  customTagline?: string;
}

export function PaaSolarLogo({
  className = '',
  size = 'md',
  showTagline = true,
  align = 'left',
  customTagline,
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

  // Dimensions based on size prop
  const titleSizeClass =
    size === 'sm'
      ? 'text-2xl md:text-3xl'
      : size === 'hero'
      ? 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
      : size === 'lg'
      ? 'text-4xl md:text-5xl'
      : 'text-3xl md:text-4xl';

  const taglineSizeClass =
    size === 'sm'
      ? 'text-[9px] md:text-[10px]'
      : size === 'hero'
      ? 'text-xs sm:text-sm md:text-base tracking-[0.25em]'
      : size === 'lg'
      ? 'text-xs md:text-sm'
      : 'text-[10px] md:text-xs';

  return (
    <div
      className={`inline-flex flex-col ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      } leading-none select-none ${className}`}
    >
      {/* Main Logo Text with Solar Panel Pattern */}
      <span
        className={`font-black uppercase tracking-tight ${titleSizeClass}`}
        style={{
          margin: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #0ea5e9 100%)
          `,
          backgroundSize: '12px 24px, 12px 24px, 100% 100%',
          color: 'transparent',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          letterSpacing: '-0.03em',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
        }}
      >
        PAA SOLAR
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
  );
}
