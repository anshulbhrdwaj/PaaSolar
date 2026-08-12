import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { Footer } from '@/components/sections/Footer';
import { Sun, CheckCircle2, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'PM-SSY (PM Saurya Yojana) Solar Scheme Projects | PAA SOLAR',
    description:
      'Turnkey execution for PM-SSY (PM Saurya Yojana / State Subsidy) rooftop solar projects. Enjoy up to 60% government subsidy, DISCOM net-metering, and 25-year performance warranty.',
    path: '/projects/pm-ssy',
    locale,
  });
}

export default function PMSSYPage() {
  const t = useTranslations('ProjectSectors.pmSsy');

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: 'PM-SSY Scheme', url: '/projects/pm-ssy' },
        ]}
      />
      <ServiceJsonLd
        name="PM-SSY (PM Saurya Yojana) Solar EPC Services"
        description="State-subsidized residential, institutional, and agricultural solar rooftop installations under the PM-SSY scheme."
        serviceType="Government Subsidized Solar EPC"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-amber-500/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-semibold uppercase tracking-wider">
              <Sun className="w-4 h-4" />
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
                className="px-8 py-4 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-amber-500/30 hover:bg-amber-600 transition-all"
              >
                Apply for PM-SSY Subsidy Project
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">GOVT SUBSIDY</span>
                <span className="font-serif text-3xl font-bold text-amber-500">{t('stat1')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">DISCOM APPROVAL</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-emerald-500">{t('stat2')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">FINANCING OPTIONS</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-text-primary">{t('stat3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheme Components */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="p-8 rounded-3xl bg-bg-secondary/50 border border-line space-y-6">
          <h3 className="font-serif text-3xl font-bold text-text-primary mb-4">PM-SSY Scheme Engineering Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-text-secondary">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>{t('feature2')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>{t('feature3')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
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
