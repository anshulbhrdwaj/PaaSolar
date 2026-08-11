'use client';

import React from 'react';
import Image from 'next/image';
import { Award } from 'lucide-react';

export interface PartnerBrand {
  name: string;
  logoUrl: string;
  tagline: string;
  badge: string;
}

export const defaultPartnerBrands: PartnerBrand[] = [
  {
    name: 'ADANI SOLAR',
    logoUrl: '/partner-logos/adani-solar.svg',
    tagline: 'Tier-1 High-Efficiency Modules',
    badge: 'ALMM LIST-1 APPROVED',
  },
  {
    name: 'WAAREE (VARI)',
    logoUrl: '/partner-logos/waaree-solar.svg',
    tagline: 'India’s Largest Solar Manufacturer',
    badge: 'MNRE COMPLIANT DCR',
  },
  {
    name: 'VIKRAM SOLAR',
    logoUrl: '/partner-logos/vikram-solar.svg',
    tagline: 'High-Yield Photovoltaic Modules',
    badge: 'TIER-1 BRAND',
  },
  {
    name: 'LOOM SOLAR',
    logoUrl: '/partner-logos/loom-solar.svg',
    tagline: 'Premium Residential & Commercial Kits',
    badge: 'INNOVATION LEADER',
  },
  {
    name: 'SAATTVIK SOLAR',
    logoUrl: '/partner-logos/saattvik-solar.svg',
    tagline: 'High-Wattage Solar PV Modules',
    badge: 'GOVT APPROVED DCR',
  },
  {
    name: 'INA SOLAR',
    logoUrl: '/partner-logos/ina-solar.svg',
    tagline: 'Insolation Energy Limited',
    badge: 'BSE LISTED MANUFACTURER',
  },
  {
    name: 'GREW SOLAR',
    logoUrl: '/partner-logos/grew-solar.svg',
    tagline: 'High-Efficiency TOPCon & DCR Modules',
    badge: 'ALMM LIST-1 APPROVED',
  },
  {
    name: 'RENEW SOLAR',
    logoUrl: '/partner-logos/renew-solar.svg',
    tagline: 'Clean Energy & High-Yield PV Modules',
    badge: 'TIER-1 RENEWABLE LEADER',
  },
];

export const inverterPartnerBrands: PartnerBrand[] = [
  {
    name: 'SUNGROW',
    logoUrl: '/partner-logos/sungrow.svg',
    tagline: 'Global Solar Inverter Leader',
    badge: '99.2% MPPT EFFICIENCY',
  },
  {
    name: 'WATTPOWER',
    logoUrl: '/partner-logos/wattpower.svg',
    tagline: 'Smart String & Utility Inverters',
    badge: 'TIER-1 INVERTER BRAND',
  },
  {
    name: 'K SOLAR',
    logoUrl: '/partner-logos/ksolar.svg',
    tagline: 'High-Performance Solar Inverters',
    badge: 'DISCOM APPROVED',
  },
  {
    name: 'DAY TRUE POWER',
    logoUrl: '/partner-logos/daytruepower.svg',
    tagline: 'Heavy Duty Solar Power Conditioning',
    badge: 'PURE SINE WAVE',
  },
  {
    name: 'INVERGY',
    logoUrl: '/partner-logos/invergy.svg',
    tagline: 'Smart Hybrid & On-Grid Inverters',
    badge: 'SUB-10MS TRANSFER',
  },
  {
    name: 'LOOM SOLAR',
    logoUrl: '/partner-logos/loom-solar.svg',
    tagline: 'Smart Rooftop Solar Inverters',
    badge: 'HIGH-EFFICIENCY',
  },
  {
    name: 'MICROTEK',
    logoUrl: '/partner-logos/microtek.svg',
    tagline: 'Trusted Power & Solar Inverters',
    badge: 'NATIONWIDE SERVICE',
  },
  {
    name: 'GENUS',
    logoUrl: '/partner-logos/genus.svg',
    tagline: 'Smart Grid & Solar Inverter Systems',
    badge: 'ISO CERTIFIED',
  },
];

export const batteryPartnerBrands: PartnerBrand[] = [
  {
    name: 'PAA SOLAR',
    logoUrl: '/Paa.png',
    tagline: 'Flagship Lithium-Ion & LiFePO4 Vault',
    badge: 'DIRECT DISTRIBUTOR',
  },
  {
    name: 'TECHFINE',
    logoUrl: '/partner-logos/techfine.svg',
    tagline: 'High-Performance Battery Storage',
    badge: 'SMART LITHIUM BESS',
  },
  {
    name: 'LITION',
    logoUrl: '/partner-logos/lition.svg',
    tagline: 'Advanced LiFePO4 Cell Technology',
    badge: '10,000+ DEEP CYCLES',
  },
  {
    name: 'ARTEK',
    logoUrl: '/partner-logos/artek.svg',
    tagline: 'Energy Storage Systems & Pack Manufacturer',
    badge: 'THERMAL STABILITY',
  },
  {
    name: 'EVA',
    logoUrl: '/partner-logos/eva.svg',
    tagline: 'Commercial & High-Discharge Batteries',
    badge: '100% USABLE DOD',
  },
  {
    name: 'ISHTMAN',
    logoUrl: '/partner-logos/ishtman.svg',
    tagline: 'Heavy-Duty Industrial Battery Bank',
    badge: 'SAFE CHEMISTRY',
  },
];

interface PartnerLogosSectionProps {
  brands?: PartnerBrand[];
  title?: string;
  subtitle?: string;
}

export function PartnerLogosSection({
  brands = defaultPartnerBrands,
  title = 'Authorized Supply Partners & Brands',
  subtitle = 'We partner with and distribute Tier-1 ALMM-approved solar manufacturers, delivering certified N-Type TOPCon panels, smart inverters, and complete PM SGY dealer kits.',
}: PartnerLogosSectionProps) {
  const marqueeList = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-gradient-to-b from-bg-secondary/40 via-bg-primary to-bg-secondary/30 border-t border-line relative overflow-hidden">
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>AUTHORISED BRAND & SUPPLY PARTNERS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-primary">
            {title}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>

        {/* Animated Auto-Scrolling Partner Logos Ticker */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-text-secondary">
              OFFICIAL PARTNER LOGOS (PAUSE ON HOVER)
            </span>
            <span className="text-[11px] font-mono text-emerald-500 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{brands.length} Tier-1 Brand Partners</span>
            </span>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-bg-secondary/80 border border-line py-8 shadow-xl">
            {/* Fade Gradient Mask Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-secondary to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-secondary to-transparent z-20 pointer-events-none" />

            <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
              {marqueeList.map((brand, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center justify-center h-20 px-8 py-4 rounded-2xl bg-white border border-line shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer shrink-0"
                >
                  <div className="relative w-44 h-12 flex items-center justify-center">
                    <Image
                      src={brand.logoUrl}
                      alt={`${brand.name} Official Logo`}
                      fill
                      className="object-contain filter group-hover:brightness-105 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
