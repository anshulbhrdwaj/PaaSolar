import React from 'react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PartnerLogosSection, batteryPartnerBrands } from '@/components/sections/PartnerLogosSection';
import { BatteryCharging, CheckCircle2, Download } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

import { constructMetadata } from '@/lib/seo';
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'LiFePO4 Energy Storage Systems & Lithium Batteries | 10,000+ Cycles',
    description:
      '10,000+ cycle Lithium Iron Phosphate (LiFePO4) solar battery storage systems. Modular scalability from 5kWh to 1MWh+ with sub-10ms automatic blackout transfer.',
    path: '/products/battery',
    locale,
  });
}

export default function BatteryPage() {
  const t = useTranslations('ProductDetails.battery');


  const specs = [
    { label: 'Chemistry', val: 'LiFePO4 (Lithium Iron Phosphate)' },
    { label: 'Cycle Lifespan', val: '10,000+ Cycles @ 80% EOL' },
    { label: 'Depth of Discharge (DoD)', val: '100% Usable Capacity' },
    { label: 'Scalability', val: '5 kWh to 50+ kWh Stackable' },
    { label: 'Backup Switch Speed', val: '< 10 Milliseconds' },
    { label: 'Warranty Standard', val: '10 Years Full Replacement' },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Lithium Battery Storage', url: '/products/battery' },
        ]}
      />
      <ProductJsonLd
        name="PAA SOLAR LiFePO4 Lithium Solar Battery Storage"
        description="10,000+ cycle Lithium Iron Phosphate (LiFePO4) energy storage banks with sub-10ms automatic blackout transfer."
        category="Solar Batteries"
        url="/products/battery"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-gold/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-gold/30 bg-accent-gold/10 text-accent-gold text-xs font-semibold uppercase tracking-wider">
              <BatteryCharging className="w-4 h-4" />
              <span>{t('tag')}</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary leading-tight">
              {t('title')}
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              {t('subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/get-a-quote"
                className="px-8 py-4 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all"
              >
                Quote Paa Vault Storage
              </Link>
              <a
                href="/Paa_Solar_Product_Catalogue_2026.pdf"
                download="Paa_Solar_Product_Catalogue_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full border border-line bg-bg-secondary hover:bg-bg-secondary/80 text-text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-accent-gold" />
                <span>Download Catalogue (PDF)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">CYCLE LIFE</span>
                <span className="font-serif text-3xl font-bold text-accent-gold">{t('spec1')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">DOD CAPACITY</span>
                <span className="font-serif text-2xl font-bold text-emerald-500">{t('spec2')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">SCALABILITY</span>
                <span className="font-serif text-2xl font-bold text-text-primary">{t('spec3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-gold font-semibold">
            Paa Vault Technical Parameters
          </span>
          <h2 className="font-serif text-4xl font-bold text-text-primary mt-2">
            Energy Storage Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specs.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-bg-secondary/60 border border-line flex flex-col justify-between">
              <span className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">{item.label}</span>
              <span className="font-serif text-2xl font-bold text-text-primary">{item.val}</span>
            </div>
          ))}
        </div>

        {/* Lithium-Ion & BESS Category Showcase */}
        <div className="mt-16 space-y-12">
          {/* Lithium-Ion Battery Card */}
          <div id="lithium-ion" className="scroll-mt-28 p-8 lg:p-10 rounded-3xl bg-bg-secondary/70 border border-accent-gold/40 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent-gold font-bold">SMART ENERGY VAULT</span>
                <h3 className="font-serif text-3xl font-bold text-text-primary mt-1">Lithium-Ion & LiFePO4 Battery Banks</h3>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs font-mono font-bold">10,000+ Deep Cycles</span>
            </div>

            <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden bg-white border border-line p-3 flex items-center justify-center shadow-inner">
              <Image
                src="/products/lithium_battery.png"
                alt="LiFePO4 Lithium Battery Storage Vault"
                fill
                className="object-contain p-2"
              />
            </div>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Ultra-safe Lithium Iron Phosphate (LiFePO4) & Lithium-Ion battery modules engineered for maximum thermal stability and zero fire risk. Features AI active cell balancing, 100% usable depth of discharge, integrated smart BMS telemetry, and modular stackable wall-mount or floor-stand enclosures for home rooftop, commercial, and hybrid solar setups.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-line/60 text-xs font-medium text-text-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                <span>0% Thermal Runaway Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                <span>AI Active Cell Balancing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                <span>100% Usable DoD Capacity</span>
              </div>
            </div>
          </div>

          {/* BESS Industrial Storage Card */}
          <div id="bess" className="scroll-mt-28 p-8 lg:p-10 rounded-3xl bg-bg-secondary/70 border border-emerald-500/40 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-bold">MEGAWATT SCALE BESS</span>
                <h3 className="font-serif text-3xl font-bold text-text-primary mt-1">Containerized BESS Energy Storage</h3>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-bold">500 kWh - 10 MWh+ Utility Scale</span>
            </div>

            <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden bg-white border border-line p-3 flex items-center justify-center shadow-inner">
              <Image
                src="/products/bess_ess.png"
                alt="Containerized BESS Lithium Battery Rack"
                fill
                className="object-contain p-2"
              />
            </div>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Turnkey IP65 containerized Battery Energy Storage Systems (BESS) for commercial microgrids, PM-KUSUM agricultural feeders, and utility-scale solar parks. Features liquid-cooled HVAC thermal management, sub-10ms islanding fallback speed, and peak shaving load shifting logic.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-line/60 text-xs font-medium text-text-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sub-10ms Islanding Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>IP65 Weatherproof Container</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Peak Load Shaving & Grid Sync</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Battery Hardware Catalogue Grid */}
        <div className="mt-16 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-accent-gold font-bold">STORAGE LINEUP</span>
            <h3 className="font-serif text-3xl font-bold text-text-primary">Battery Storage Models</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'LiFePO4 Wall Mount 5.12kWh', img: '/products/lithium_battery.png', tag: '10,000+ Cycles' },
              { title: 'LiFePO4 Server Rack 10.24kWh', img: '/products/lithium_battery.png', tag: 'Smart BMS' },
              { title: 'Containerized BESS 500kWh+', img: '/products/bess_ess.png', tag: 'Industrial' },
              { title: 'Li UPS 1250 Backup Vault', img: '/products/bess_li_ups.png', tag: 'Zero Transfer' },
            ].map((item, idx) => (
              <div key={idx} className="group rounded-2xl bg-bg-primary border border-line p-4 shadow-md hover:border-accent-gold transition-all flex flex-col justify-between hover:-translate-y-1">
                <div className="relative h-40 w-full rounded-xl overflow-hidden bg-white border border-line p-2 flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="pt-3 text-center">
                  <span className="text-[10px] font-mono font-bold text-accent-gold uppercase block">{item.tag}</span>
                  <h4 className="font-serif text-sm font-bold text-text-primary mt-0.5">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-bg-secondary/50 border border-line space-y-4 mt-16">
          <h3 className="font-serif text-2xl font-bold text-text-primary mb-4">Battery Safety & Performance Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-text-secondary">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span>{t('feature2')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span>{t('feature3')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span>{t('feature4')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Brand & Supply Partners */}
      <PartnerLogosSection
        brands={batteryPartnerBrands}
        title="Authorized Battery Storage Supply Partners & Brands"
        subtitle="We supply and distribute leading smart LiFePO4, Lithium-Ion, and containerized BESS battery storage brands across India."
      />

      <Footer />
    </main>
  );
}
