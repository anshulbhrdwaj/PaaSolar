import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { Footer } from '@/components/sections/Footer';
import { Sprout, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'PM-KUSUM Scheme Solar Projects (Component A, B & C) | PAA SOLAR',
    description:
      'Turnkey EPC engineering for PM-KUSUM Component A, B, and C feeder solarization. Empowering farmers with solar pumps, grid feeder solar plants, and long-term land income.',
    path: '/projects/pm-kusum',
    locale,
  });
}

export default function PMKusumPage() {
  const t = useTranslations('ProjectSectors.pmKusum');

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: 'PM-KUSUM Scheme', url: '/projects/pm-kusum' },
        ]}
      />
      <ServiceJsonLd
        name="PM-KUSUM Solar Feeder & Agricultural EPC"
        description="Agricultural feeder solarization and decentralized solar power plants under PM-KUSUM Component A, B, and C."
        serviceType="PM-KUSUM Agricultural Solar EPC"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-emerald-500/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-semibold uppercase tracking-wider">
              <Sprout className="w-4 h-4" />
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
                Apply for PM KUSUM Project
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">GRID FEEDER CAPABILITY</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-emerald-500">{t('stat1')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">SCHEME SCOPE</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-accent-solar">{t('stat2')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">AGRICULTURAL FEEDER</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-text-primary">{t('stat3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Detail */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="p-8 rounded-3xl bg-bg-secondary/50 border border-line space-y-6">
          <h3 className="font-serif text-3xl font-bold text-text-primary mb-4">PM KUSUM Scheme Components</h3>
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

      <CaseStudies />
      <SolarCalculator />
      <Footer />
    </main>
  );
}
