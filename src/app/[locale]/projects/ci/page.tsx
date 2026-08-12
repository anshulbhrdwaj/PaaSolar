import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { Footer } from '@/components/sections/Footer';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Commercial & Industrial (C&I) Rooftop Solar EPC | PAA SOLAR',
    description:
      'Turnkey Commercial & Industrial rooftop solar EPC services for factories, warehouses, institutional campuses, and commercial complexes across India.',
    path: '/projects/ci',
    locale,
  });
}

export default function CIPage() {
  const t = useTranslations('ProjectSectors.ci');

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: 'Commercial & Industrial', url: '/projects/ci' },
        ]}
      />
      <ServiceJsonLd
        name="Commercial & Industrial (C&I) Solar Rooftop EPC"
        description="Turnkey solar engineering, procurement, and construction for industrial plants and commercial buildings."
        serviceType="C&I Solar Engineering"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-sky/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-sky/30 bg-accent-sky/10 text-accent-sky text-xs font-semibold uppercase tracking-wider">
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
                className="px-8 py-4 rounded-full bg-accent-sky text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-accent-sky/30 hover:bg-accent-sky/90 transition-all"
              >
                Request C&I Energy Audit
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">ESTIMATED ROI</span>
                <span className="font-serif text-3xl font-bold text-accent-solar">3.2 - 4.5 Years</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">CAPACITY RANGE</span>
                <span className="font-serif text-2xl font-bold text-text-primary">100 kW to 25 MW+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">WARRANTY</span>
                <span className="font-serif text-2xl font-bold text-emerald-500">30 Year Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Details */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-bg-secondary border border-line space-y-4">
          <div className="p-3 rounded-2xl bg-accent-solar/10 text-accent-solar w-fit">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-text-primary">OPEX / RESCO Models</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Zero upfront capital expenditure models with PPA (Power Purchase Agreements) ensuring immediate operational cost reduction.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-bg-secondary border border-line space-y-4">
          <div className="p-3 rounded-2xl bg-accent-sky/10 text-accent-sky w-fit">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-text-primary">CAPEX Turnkey EPC</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Direct ownership EPC with accelerated depreciation benefits, tier-1 TOPCon modules, and DISCOM net-metering approvals.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-bg-secondary border border-line space-y-4">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-text-primary">Zero Blackout Storage</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Integrated high-discharge LFP battery storage preventing assembly line interruptions during peak load surges.
          </p>
        </div>
      </section>

      <CaseStudies />
      <SolarCalculator />
      <Footer />
    </main>
  );
}
