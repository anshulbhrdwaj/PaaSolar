'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Building2, CheckCircle2, DollarSign, ShieldCheck, Zap, Layers } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function B2BPage() {
  const t = useTranslations('B2BSolutions');

  const models = [
    {
      title: t('model1Title'),
      desc: t('model1Desc'),
      badge: 'Zero Upfront CAPEX',
      icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: t('model2Title'),
      desc: t('model2Desc'),
      badge: 'Grid Open Access',
      icon: <Zap className="w-6 h-6 text-accent-solar" />,
    },
    {
      title: t('model3Title'),
      desc: t('model3Desc'),
      badge: 'Guaranteed Performance (PR)',
      icon: <ShieldCheck className="w-6 h-6 text-accent-sky" />,
    },
    {
      title: t('model4Title'),
      desc: t('model4Desc'),
      badge: 'Peak Demand Shaving',
      icon: <Layers className="w-6 h-6 text-accent-gold" />,
    },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-solar/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
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
                Request Enterprise PPA Proposal
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">CAPEX MODEL</span>
                <span className="font-serif text-3xl font-bold text-emerald-500">{t('stat1')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">COST REDUCTION</span>
                <span className="font-serif text-2xl font-bold text-accent-solar">{t('stat2')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">ESG COMPLIANCE</span>
                <span className="font-serif text-2xl font-bold text-text-primary">{t('stat3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Financial & Contract Models */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            B2B Commercial Contracting Frameworks
          </span>
          <h2 className="font-serif text-4xl font-bold text-text-primary mt-2">
            Flexible Solar Power Purchase Models
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {models.map((mod, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-bg-secondary/60 border border-line hover:border-accent-solar/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent-solar/10 text-accent-solar text-xs font-mono font-bold">
                    {mod.badge}
                  </span>
                  <div className="p-3 rounded-2xl bg-bg-primary border border-line">
                    {mod.icon}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-text-primary mb-3">
                  {mod.title}
                </h3>

                <p className="text-text-secondary text-xs leading-relaxed mb-6">
                  {mod.desc}
                </p>
              </div>

              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 text-xs font-semibold text-accent-solar hover:underline"
              >
                <span>Request Custom Tariff Matrix</span>
              </Link>
            </div>
          ))}
        </div>

        {/* ESG & Compliance Callout */}
        <div className="p-8 rounded-3xl bg-bg-secondary/50 border border-line space-y-6">
          <h3 className="font-serif text-3xl font-bold text-text-primary mb-4">Corporate ESG & Sustainability Guarantees</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-text-secondary">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>{t('feature2')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>{t('feature3')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>{t('feature4')}</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
