import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Globe2, CheckCircle2, Award, ShieldCheck, Ship } from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Global Solar Exports | 8 International Markets | PAA SOLAR',
    description:
      'PAA SOLAR exports high-efficiency TOPCon solar modules, smart inverters & LiFePO4 battery storage through EKCHAKRA International Pvt. Ltd. to Singapore, Oman, South Africa, Morocco, Brazil, New Zealand, Nepal & Bangladesh.',
    path: '/export',
    locale,
  });
}

export default function ExportPage() {
  const t = useTranslations('CorporatePages.export');

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Global Solar Exports', url: '/export' },
        ]}
      />
      <ServiceJsonLd
        name="Global Solar Hardware & Module Export"
        description="International export and shipping of TOPCon solar modules, smart string inverters, and LFP storage kits to 8 global markets."
        serviceType="International Solar Module Export"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-sky/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-sky/30 bg-accent-sky/10 text-accent-sky text-xs font-semibold uppercase tracking-wider">
              <Globe2 className="w-4 h-4" />
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
                Inquire Global Export Orders
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">EXPORT MARKETS</span>
                <span className="font-serif text-3xl font-bold text-accent-sky">{t('stat1')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">SHIPPED VOLUME</span>
                <span className="font-serif text-2xl font-bold text-emerald-500">{t('stat2')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">LOGISTICS</span>
                <span className="font-serif text-2xl font-bold text-text-primary">{t('stat3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Export Features */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-bg-secondary/60 border border-line flex items-center gap-4">
            <Award className="w-8 h-8 text-accent-solar flex-shrink-0" />
            <div>
              <h4 className="font-serif text-lg font-bold text-text-primary">{t('cert1')}</h4>
              <p className="text-xs text-text-secondary">Global Quality Certification</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-bg-secondary/60 border border-line flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-accent-sky flex-shrink-0" />
            <div>
              <h4 className="font-serif text-lg font-bold text-text-primary">{t('cert2')}</h4>
              <p className="text-xs text-text-secondary">European Union Safety Standard</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-bg-secondary/60 border border-line flex items-center gap-4">
            <Ship className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div>
              <h4 className="font-serif text-lg font-bold text-text-primary">{t('cert3')}</h4>
              <p className="text-xs text-text-secondary">UN Hazardous Cargo Approved</p>
            </div>
          </div>
        </div>

        {/* 8 Global Export Markets Section from PAA Solar PDF */}
        <div className="mb-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
              Our 8 International Export Destinations
            </h3>
            <p className="text-text-secondary text-sm">
              PAA SOLAR exports high-efficiency TOPCon solar modules, smart inverters, and LFP storage kits through EKCHAKRA International Pvt. Ltd. to 8 global markets.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'Singapore', flag: '🇸🇬', region: 'Southeast Asia' },
              { name: 'Oman', flag: '🇴🇲', region: 'Middle East' },
              { name: 'South Africa', flag: '🇿🇦', region: 'Southern Africa' },
              { name: 'Morocco', flag: '🇲🇦', region: 'North Africa' },
              { name: 'Brazil', flag: '🇧🇷', region: 'South America' },
              { name: 'New Zealand', flag: '🇳🇿', region: 'Oceania' },
              { name: 'Nepal', flag: '🇳🇵', region: 'South Asia' },
              { name: 'Bangladesh', flag: '🇧🇩', region: 'South Asia' },
            ].map((country, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-bg-secondary/70 border border-line flex flex-col items-center text-center gap-2 hover:border-accent-solar/50 hover:bg-bg-secondary transition-all">
                <span className="text-3xl">{country.flag}</span>
                <h4 className="font-bold text-sm text-text-primary">{country.name}</h4>
                <span className="text-[10px] font-mono text-text-secondary">{country.region}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-bg-secondary/50 border border-line space-y-6">
          <h3 className="font-serif text-3xl font-bold text-text-primary mb-4">Export Hardware Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-text-secondary">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-accent-sky flex-shrink-0" />
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-accent-sky flex-shrink-0" />
              <span>{t('feature2')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-accent-sky flex-shrink-0" />
              <span>{t('feature3')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line">
              <CheckCircle2 className="w-5 h-5 text-accent-sky flex-shrink-0" />
              <span>{t('feature4')}</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
