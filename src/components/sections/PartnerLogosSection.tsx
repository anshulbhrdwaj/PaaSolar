'use client';

import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, SunMedium, ShieldCheck, Zap } from 'lucide-react';

interface PartnerBrand {
  name: string;
  tagline: string;
  badge: string;
  accent: string;
  logoBg: string;
  logoText: string;
  description: string;
}

export const partnerBrands: PartnerBrand[] = [
  {
    name: 'PAA SOLAR',
    tagline: 'Flagship Hardware & BESS Storage',
    badge: 'DIRECT DISTRIBUTOR',
    accent: 'border-amber-500/40 text-amber-500 bg-amber-500/10',
    logoBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    logoText: 'PAA',
    description: 'N-Type TOPCon panels, smart string inverters, LiFePO4 battery banks, and containerized BESS 3532 storage.',
  },
  {
    name: 'ADANI SOLAR',
    tagline: 'Tier-1 High-Efficiency Modules',
    badge: 'ALMM LIST-1 APPROVED',
    accent: 'border-blue-500/40 text-blue-500 bg-blue-500/10',
    logoBg: 'bg-gradient-to-br from-blue-600 to-indigo-700',
    logoText: 'ADANI',
    description: 'Shine Series N-Type TOPCon & Mono PERC solar modules for utility power plants and commercial rooftops.',
  },
  {
    name: 'WAAREE (VARI)',
    tagline: 'India’s Largest Solar Manufacturer',
    badge: 'MNRE COMPLIANT DCR',
    accent: 'border-emerald-500/40 text-emerald-500 bg-emerald-500/10',
    logoBg: 'bg-gradient-to-br from-emerald-500 to-teal-700',
    logoText: 'VARI',
    description: 'DCR & Non-DCR solar PV modules engineered for PM Surya Ghar Yojana subsidies and enterprise IPP projects.',
  },
  {
    name: 'VIKRAM SOLAR',
    tagline: 'High-Yield Photovoltaic Modules',
    badge: 'TIER-1 BRAND',
    accent: 'border-purple-500/40 text-purple-500 bg-purple-500/10',
    logoBg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    logoText: 'VIKRAM',
    description: 'Hypersol & Somera bifacial glass-glass solar panels with 30-year linear performance warranty.',
  },
  {
    name: 'LOOM SOLAR',
    tagline: 'Premium Residential & Commercial Kits',
    badge: 'INNOVATION LEADER',
    accent: 'border-orange-500/40 text-orange-500 bg-orange-500/10',
    logoBg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    logoText: 'LOOM',
    description: 'High-efficiency Shark series bifacial panels and plug-and-play complete solar kit packages.',
  },
  {
    name: 'SAATTVIK SOLAR',
    tagline: 'High-Wattage Solar PV Modules',
    badge: 'GOVT APPROVED DCR',
    accent: 'border-sky-500/40 text-sky-500 bg-sky-500/10',
    logoBg: 'bg-gradient-to-br from-sky-500 to-blue-600',
    logoText: 'SATVIK',
    description: 'Monofacial and bifacial TOPCon modules optimized for high ambient temperature resilience across India.',
  },
  {
    name: 'INA SOLAR',
    tagline: 'Insolation Energy Limited',
    badge: 'BSE LISTED MANUFACTURER',
    accent: 'border-rose-500/40 text-rose-500 bg-rose-500/10',
    logoBg: 'bg-gradient-to-br from-rose-500 to-red-700',
    logoText: 'INA',
    description: 'BIS & ALMM certified high-output solar modules and solar power conditioning units for PM SGY dealers.',
  },
];

export function PartnerLogosSection() {
  // Duplicate partnerBrands to create seamless infinite auto-scroll loop
  const marqueeList = [...partnerBrands, ...partnerBrands, ...partnerBrands];

  return (
    <section className="py-24 bg-gradient-to-b from-bg-secondary/40 via-bg-primary to-bg-secondary/30 border-t border-line relative overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>AUTHORISED BRAND & SUPPLY PARTNERS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-primary">
            Authorized Supply Partners & Brands
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-medium">
            We partner with and distribute Tier-1 ALMM-approved solar manufacturers, delivering certified N-Type TOPCon panels, smart inverters, and complete PM SGY dealer kits.
          </p>
        </div>

        {/* Featured Solar Panel Hardware Banner Showcase */}
        <div className="rounded-3xl bg-bg-secondary border border-line p-6 sm:p-8 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative group">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-solar/10 border border-accent-solar/30 text-accent-solar font-mono text-xs font-bold">
              <SunMedium className="w-4 h-4" />
              <span>N-TYPE TOPCON & ALMM DCR MODULES</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary">
              High-Yield Bifacial Solar Modules & Supply Chain
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed font-medium">
              Equipped with 22.8%+ peak cell efficiency, dual-glass anti-PID degradation shields, and 30-year linear power performance guarantees across all authorized partner brands.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-bg-primary border border-line text-center">
                <span className="block font-serif text-xl font-bold text-emerald-500">22.8%+</span>
                <span className="text-[10px] font-mono text-text-secondary uppercase">Module Yield</span>
              </div>
              <div className="p-3 rounded-2xl bg-bg-primary border border-line text-center">
                <span className="block font-serif text-xl font-bold text-accent-solar">30 Years</span>
                <span className="text-[10px] font-mono text-text-secondary uppercase">Performance</span>
              </div>
              <div className="p-3 rounded-2xl bg-bg-primary border border-line text-center">
                <span className="block font-serif text-xl font-bold text-sky-500">ALMM List-1</span>
                <span className="text-[10px] font-mono text-text-secondary uppercase">Govt Approved</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-line shadow-lg">
            <Image
              src="/solar-topcon-banner.png"
              alt="Tier-1 High Efficiency TOPCon Solar Panels"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
              <div className="flex items-center gap-2 text-white text-xs font-bold font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certified High-Density PV Module Array</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Auto-Scrolling Partner Logos Ticker */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-text-secondary">
              LIVE AUTHORIZED LOGO TICKER (PAUSE ON HOVER)
            </span>
            <span className="text-[11px] font-mono text-emerald-500 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>7 National Brand Partners</span>
            </span>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-bg-secondary/70 border border-line py-5 shadow-inner">
            {/* Left and Right Fade Gradient Overlay Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg-secondary to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-secondary to-transparent z-20 pointer-events-none" />

            <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
              {marqueeList.map((brand, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-bg-primary border border-line hover:border-emerald-500/50 transition-all duration-300 shadow-md group cursor-pointer shrink-0"
                >
                  <div className={`w-9 h-9 rounded-xl ${brand.logoBg} flex items-center justify-center text-white font-serif font-bold text-xs tracking-wider shadow-sm group-hover:scale-110 transition-transform`}>
                    {brand.logoText}
                  </div>
                  <div className="text-left">
                    <span className="font-serif font-bold text-sm text-text-primary group-hover:text-emerald-500 transition-colors block">
                      {brand.name}
                    </span>
                    <span className="text-[10px] font-mono text-text-secondary block">
                      {brand.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Logos & Brand Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {partnerBrands.map((brand, i) => (
            <div
              key={i}
              className="group rounded-3xl p-8 bg-bg-primary border border-line hover:border-emerald-500/60 transition-all duration-500 shadow-xl flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  {/* Styled Brand Company Emblem Logo Badge */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${brand.logoBg} flex items-center justify-center text-white font-serif font-bold text-sm tracking-wider shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {brand.logoText}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-emerald-500 transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-[11px] font-mono text-accent-solar font-semibold">
                        {brand.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inline-block">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${brand.accent}`}>
                    {brand.badge}
                  </span>
                </div>

                <p className="text-text-secondary text-xs leading-relaxed font-medium">
                  {brand.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-line/60 flex items-center gap-2 text-xs font-semibold text-text-primary relative z-10">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Authorized Supply & Dealer Network</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
