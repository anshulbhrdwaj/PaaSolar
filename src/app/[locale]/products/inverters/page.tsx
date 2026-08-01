'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { GetAQuoteCTA } from '@/components/sections/GetAQuoteCTA';
import { Footer } from '@/components/sections/Footer';
import { Zap, CheckCircle2, ShieldCheck, Cpu, RefreshCw, Activity, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function InvertersPage() {
  const t = useTranslations('ProductDetails.inverters');

  const specs = [
    { label: 'MPPT Efficiency', val: '99.2%' },
    { label: 'Islanding Transfer', val: '< 10 Milliseconds' },
    { label: 'Protection Rating', val: 'IP65 Weatherproof' },
    { label: 'Grid Tie Compatibility', val: 'Net-Metering Ready' },
    { label: 'App Monitoring', val: 'WiFi / 4G Real-Time Cloud' },
    { label: 'Warranty Standard', val: '10 Years Replacement' },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-sky/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-sky/30 bg-accent-sky/10 text-accent-sky text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
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
                Inquire Smart Inverters
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">MPPT EFFICIENCY</span>
                <span className="font-serif text-3xl font-bold text-accent-sky">{t('spec1')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">ISLANDING SPEED</span>
                <span className="font-serif text-2xl font-bold text-emerald-500">{t('spec2')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">ENCLOSURE</span>
                <span className="font-serif text-2xl font-bold text-text-primary">{t('spec3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-sky font-semibold">
            Inverter Performance Data
          </span>
          <h2 className="font-serif text-4xl font-bold text-text-primary mt-2">
            Smart Power Intelligence Capabilities
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
          <h3 className="font-serif text-2xl font-bold text-text-primary mb-4">Inverter Feature Matrix</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-text-secondary">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-sky flex-shrink-0" />
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-sky flex-shrink-0" />
              <span>{t('feature2')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-sky flex-shrink-0" />
              <span>{t('feature3')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-sky flex-shrink-0" />
              <span>{t('feature4')}</span>
            </div>
          </div>
        </div>
      </section>

      <GetAQuoteCTA />
      <Footer />
    </main>
  );
}
