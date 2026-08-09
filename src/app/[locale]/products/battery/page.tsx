import React from 'react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { Footer } from '@/components/sections/Footer';
import { BatteryCharging, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'LiFePO4 Energy Storage Systems & BESS | PAA SOLAR',
  description:
    '10,000+ cycle Lithium Iron Phosphate (LiFePO4) solar battery storage systems. Modular scalability from 5kWh to 1MWh+ with sub-10ms automatic blackout transfer.',
  openGraph: {
    title: 'LiFePO4 Energy Storage Systems & BESS | PAA SOLAR',
    description:
      'Long-life LFP battery storage ecosystems for residential kits, C&I microgrids, and PM-KUSUM BESS.',
  },
};

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
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
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

        <div className="p-8 rounded-3xl bg-bg-secondary/50 border border-line space-y-4">
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

      <SolarCalculator />
      <Footer />
    </main>
  );
}
