import React from 'react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PartnerLogosSection } from '@/components/sections/PartnerLogosSection';
import { SunMedium, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'TOPCon, HJT & Mono Bifacial Solar Panels | PAA SOLAR',
  description:
    '24%+ ultra-high efficiency N-Type TOPCon, Heterojunction (HJT), and Mono Bifacial solar modules. Engineered for maximum multi-decade energy yield and zero light-induced degradation.',
  openGraph: {
    title: 'TOPCon, HJT & Mono Bifacial Solar Panels | PAA SOLAR',
    description:
      'Tier-1 24%+ Solar Panels with 30-Year Performance Warranty from PAA SOLAR (EKCHAKRA GROUP).',
  },
};

export default function SolarPanelsPage() {
  const t = useTranslations('ProductDetails.solarPanels');

  const specs = [
    { label: 'Cell Technology', val: 'Mono Bifacial, TOPCon & HJT Cells' },
    { label: 'Module Efficiency', val: '22.8% Peak' },
    { label: 'Power Rating Range', val: '580W – 650W' },
    { label: 'Glass Type', val: '2.0mm Dual Tempered Anti-Reflective' },
    { label: 'Temperature Coefficient', val: '-0.29% / °C' },
    { label: 'Performance Warranty', val: '30 Years Linear (87.4% Output)' },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-solar/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-xs font-semibold uppercase tracking-wider">
              <SunMedium className="w-4 h-4" />
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
                Configure System Panels
              </Link>
              <a
                href="/Paa_Solar_Product_Catalogue_2026.pdf"
                download="Paa_Solar_Product_Catalogue_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full border border-line bg-bg-secondary hover:bg-bg-secondary/80 text-text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-accent-solar" />
                <span>Download Catalogue (PDF)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">EFFICIENCY</span>
                <span className="font-serif text-3xl font-bold text-accent-solar">{t('spec1')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">WATTAGE</span>
                <span className="font-serif text-2xl font-bold text-text-primary">{t('spec2')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">WARRANTY</span>
                <span className="font-serif text-2xl font-bold text-emerald-500">{t('spec3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase: TOPCon & DCR Solar Panels */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-line">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-bold px-3 py-1 rounded-full bg-accent-solar/10 border border-accent-solar/30">
            PRODUCT LINEUP
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-primary mt-4">
            Next-Gen TOPCon & MNRE DCR Panels
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 font-medium">
            Explore our flagship N-Type TOPCon bifacial modules for high-yield commercial & utility projects and ALMM-approved DCR modules for PM Surya Ghar subsidy schemes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* PRODUCT 1: N-Type TOPCon Panels */}
          <div id="topcon" className="rounded-3xl bg-bg-secondary border-2 border-accent-solar/40 p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-accent-solar transition-all scroll-mt-28">
            <div className="absolute top-0 right-0 p-6 text-accent-solar/10 group-hover:text-accent-solar/20 transition-colors pointer-events-none">
              <SunMedium className="w-32 h-32" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-accent-solar/15 border border-accent-solar/30 text-accent-solar text-xs font-mono font-bold uppercase">
                  {t('topcon.badge')}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {t('topcon.eff')}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-text-primary">
                  {t('topcon.title')}
                </h3>
                <p className="text-xs font-mono text-text-secondary mt-1 uppercase tracking-wider">
                  {t('topcon.subtitle')}
                </p>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed font-medium">
                {t('topcon.desc')}
              </p>

              {/* TOPCon Key Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-line/60">
                <h4 className="text-xs font-mono font-bold uppercase text-text-primary tracking-wider">Key Specifications & Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-text-primary">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-bg-primary border border-line">
                    <CheckCircle2 className="w-4 h-4 text-accent-solar shrink-0" />
                    <span>{t('topcon.spec1')}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-bg-primary border border-line">
                    <CheckCircle2 className="w-4 h-4 text-accent-solar shrink-0" />
                    <span>{t('topcon.spec2')}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-bg-primary border border-line">
                    <CheckCircle2 className="w-4 h-4 text-accent-solar shrink-0" />
                    <span>{t('topcon.spec3')}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-bg-primary border border-line">
                    <CheckCircle2 className="w-4 h-4 text-accent-solar shrink-0" />
                    <span>{t('topcon.spec4')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-line/60 flex items-center justify-between gap-4 relative z-10">
              <div>
                <span className="text-[10px] font-mono text-text-secondary uppercase block">{t('topcon.idealLabel')}</span>
                <span className="text-xs font-bold text-text-primary">{t('topcon.idealVal')}</span>
              </div>
              <Link
                href="/calculator"
                className="px-5 py-2.5 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-accent-solar/90 transition-all shrink-0"
              >
                {t('topcon.cta')}
              </Link>
            </div>
          </div>

          {/* PRODUCT 2: DCR Solar Panels (Domestic Content Requirement) */}
          <div id="dcr" className="rounded-3xl bg-bg-secondary border-2 border-emerald-500/40 p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500 transition-all scroll-mt-28">
            <div className="absolute top-0 right-0 p-6 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors pointer-events-none">
              <SunMedium className="w-32 h-32" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-bold uppercase">
                  {t('dcr.badge')}
                </span>
                <span className="text-xs font-mono font-bold text-accent-solar bg-accent-solar/10 px-3 py-1 rounded-full border border-accent-solar/20">
                  {t('dcr.eff')}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-text-primary">
                  {t('dcr.title')}
                </h3>
                <p className="text-xs font-mono text-text-secondary mt-1 uppercase tracking-wider">
                  {t('dcr.subtitle')}
                </p>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed font-medium">
                {t('dcr.desc')}
              </p>

              {/* DCR Key Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-line/60">
                <h4 className="text-xs font-mono font-bold uppercase text-text-primary tracking-wider">Key Specifications & Compliance</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-text-primary">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-bg-primary border border-line">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{t('dcr.spec1')}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-bg-primary border border-line">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{t('dcr.spec2')}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-bg-primary border border-line">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{t('dcr.spec3')}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-bg-primary border border-line">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{t('dcr.spec4')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-line/60 flex items-center justify-between gap-4 relative z-10">
              <div>
                <span className="text-[10px] font-mono text-text-secondary uppercase block">{t('dcr.idealLabel')}</span>
                <span className="text-xs font-bold text-text-primary">{t('dcr.idealVal')}</span>
              </div>
              <Link
                href="/calculator"
                className="px-5 py-2.5 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-emerald-600 transition-all shrink-0"
              >
                {t('dcr.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            Engineering Parameters
          </span>
          <h2 className="font-serif text-4xl font-bold text-text-primary mt-2">
            Technical Specification Datasheet
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

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-bg-secondary/50 border border-line space-y-4">
            <h3 className="font-serif text-2xl font-bold text-text-primary mb-4">Core Architectural Features</h3>
            <div className="space-y-3 text-xs font-medium text-text-secondary">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent-solar flex-shrink-0" />
                <span>{t('feature1')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent-solar flex-shrink-0" />
                <span>{t('feature2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent-solar flex-shrink-0" />
                <span>{t('feature3')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent-solar flex-shrink-0" />
                <span>{t('feature4')}</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-accent-solar/10 to-bg-secondary border border-accent-solar/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent-solar font-bold block mb-2">30-YEAR GUARANTEE</span>
              <h3 className="font-serif text-3xl font-bold text-text-primary mb-4">Zero Degradation Assurance</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Our N-type TOPCon cell architecture eliminates Potential Induced Degradation (PID) and Light Induced Degradation (LID), retaining 87.4% performance even after 3 decades.
              </p>
            </div>
            <Link
              href="/get-a-quote"
              className="mt-6 inline-block py-3 px-6 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider text-center"
            >
              Request Datasheet & Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Authorized Brand & Supply Partners */}
      <PartnerLogosSection />

      <Footer />
    </main>
  );
}
