'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { GetAQuoteCTA } from '@/components/sections/GetAQuoteCTA';
import { Footer } from '@/components/sections/Footer';
import { Wrench, CheckCircle2, Cpu, ShieldCheck, Activity, Layers, Compass } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function WorkingMethodologyPage() {
  const t = useTranslations('CorporatePages.methodology');

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc'), icon: <Compass className="w-6 h-6 text-accent-solar" /> },
    { title: t('step2Title'), desc: t('step2Desc'), icon: <Cpu className="w-6 h-6 text-accent-sky" /> },
    { title: t('step3Title'), desc: t('step3Desc'), icon: <Layers className="w-6 h-6 text-emerald-500" /> },
    { title: t('step4Title'), desc: t('step4Desc'), icon: <Wrench className="w-6 h-6 text-accent-gold" /> },
    { title: t('step5Title'), desc: t('step5Desc'), icon: <Activity className="w-6 h-6 text-accent-solar" /> },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-bg-secondary/60 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            {t('tag')}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mt-3 mb-4">
            {t('title')}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* 5-Stage Roadmap Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-6">
          {steps.map((st, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-bg-secondary/60 border border-line hover:border-accent-solar/50 transition-all flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="p-4 rounded-2xl bg-bg-primary border border-line flex-shrink-0">
                {st.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-2xl font-bold text-text-primary mb-2">{st.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GetAQuoteCTA />
      <Footer />
    </main>
  );
}
