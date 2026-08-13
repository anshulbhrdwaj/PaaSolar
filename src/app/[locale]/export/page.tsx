import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import {
  Globe2,
  CheckCircle2,
  Award,
  ShieldCheck,
  Ship,
  Factory,
  Briefcase,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-accent-sky/10 via-bg-secondary/50 to-bg-primary border-b border-line relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-accent-sky/30 bg-accent-sky/10 text-accent-sky text-sm sm:text-base font-bold uppercase tracking-wider shadow-md">
              <Globe2 className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>{t('tag')}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-[1.15]">
              {t('title')}
            </h1>

            {/* Structured Points in Hero Header */}
            <div className="w-full space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-bg-secondary/80 border border-line shadow-sm hover:border-accent-sky/30 transition-all">
                <div className="p-2 rounded-xl bg-accent-sky/10 text-accent-sky shrink-0 mt-0.5">
                  <Ship className="w-4 h-4" />
                </div>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium">
                  {t('heroPoint1')}
                </p>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-bg-secondary/80 border border-line shadow-sm hover:border-accent-solar/30 transition-all">
                <div className="p-2 rounded-xl bg-accent-solar/10 text-accent-solar shrink-0 mt-0.5">
                  <Factory className="w-4 h-4" />
                </div>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium">
                  {t('heroPoint2')}
                </p>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-bg-secondary/80 border border-line shadow-sm hover:border-emerald-500/30 transition-all">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                  <Briefcase className="w-4 h-4" />
                </div>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium">
                  {t('heroPoint3')}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all group"
              >
                <span>Inquire Global Export Orders</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Global Export Shipping Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-accent-sky/30 shadow-2xl group">
              <Image
                src="/global-export-shipping.png"
                alt="Global Solar Equipment Container Shipping Logistics"
                width={800}
                height={500}
                className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-accent-sky/90 text-white text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <Ship className="w-4 h-4" />
                  <span>International Cargo Logistics</span>
                </span>
                <span className="text-xs font-mono font-bold text-sky-200 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-accent-sky/30">
                  Global Supply
                </span>
              </div>
            </div>

            {/* Stats Card */}
            <div className="rounded-3xl p-8 bg-bg-secondary/90 border border-line shadow-2xl space-y-6 backdrop-blur-sm">
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

      {/* Certifications Bar */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-bg-secondary/60 border border-line flex items-center gap-4 hover:border-accent-solar/40 transition-all shadow-sm">
            <Award className="w-8 h-8 text-accent-solar flex-shrink-0" />
            <div>
              <h4 className="font-serif text-lg font-bold text-text-primary">{t('cert1')}</h4>
              <p className="text-xs text-text-secondary">Global Quality Certification</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-bg-secondary/60 border border-line flex items-center gap-4 hover:border-accent-sky/40 transition-all shadow-sm">
            <ShieldCheck className="w-8 h-8 text-accent-sky flex-shrink-0" />
            <div>
              <h4 className="font-serif text-lg font-bold text-text-primary">{t('cert2')}</h4>
              <p className="text-xs text-text-secondary">European Union Safety Standard</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-bg-secondary/60 border border-line flex items-center gap-4 hover:border-emerald-500/40 transition-all shadow-sm">
            <Ship className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div>
              <h4 className="font-serif text-lg font-bold text-text-primary">{t('cert3')}</h4>
              <p className="text-xs text-text-secondary">UN Hazardous Cargo Approved</p>
            </div>
          </div>
        </div>

        {/* Global Operations & Scope of Services - Beautified Points Section */}
        <div className="mb-20 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-solar/10 border border-accent-solar/20 text-accent-solar text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Scope & Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              {t('scopeTitle')}
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              {t('scopeSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pillar 1: Hardware Export */}
            <div className="rounded-3xl p-8 bg-bg-secondary/70 border border-line flex flex-col justify-between hover:border-accent-sky/50 transition-all shadow-xl group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-accent-sky/10 text-accent-sky group-hover:scale-110 transition-transform">
                    <Globe2 className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent-sky/10 border border-accent-sky/30 text-accent-sky">
                    {t('pillar1Badge')}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-text-primary">
                  {t('pillar1Title')}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {t('pillar1Desc')}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-line/60 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-bg-primary border border-line text-text-secondary">TOPCon Modules</span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-bg-primary border border-line text-text-secondary">Smart Inverters</span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-bg-primary border border-line text-text-secondary">Lithium BESS</span>
              </div>
            </div>

            {/* Pillar 2: Industrial Projects */}
            <div className="rounded-3xl p-8 bg-bg-secondary/70 border border-line flex flex-col justify-between hover:border-accent-solar/50 transition-all shadow-xl group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-accent-solar/10 text-accent-solar group-hover:scale-110 transition-transform">
                    <Factory className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent-solar/10 border border-accent-solar/30 text-accent-solar">
                    {t('pillar2Badge')}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-text-primary">
                  {t('pillar2Title')}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {t('pillar2Desc')}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-line/60 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-bg-primary border border-line text-text-secondary">Industrial C&I</span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-bg-primary border border-line text-text-secondary">Turnkey EPC</span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-bg-primary border border-line text-text-secondary">500 kW to MW+</span>
              </div>
            </div>

            {/* Pillar 3: Consultancy Services */}
            <div className="rounded-3xl p-8 bg-bg-secondary/70 border border-line flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-xl group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
                    {t('pillar3Badge')}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-text-primary">
                  {t('pillar3Title')}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {t('pillar3Desc')}
                </p>

                {/* Clear Sub-points */}
                <div className="space-y-3 pt-2">
                  <div className="p-3 rounded-2xl bg-bg-primary border border-line/80 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <h4 className="text-xs font-bold text-text-primary">{t('consultancy1Title')}</h4>
                    </div>
                    <p className="text-[11px] text-text-secondary pl-4">{t('consultancy1Desc')}</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-bg-primary border border-line/80 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-sky" />
                      <h4 className="text-xs font-bold text-text-primary">{t('consultancy2Title')}</h4>
                    </div>
                    <p className="text-[11px] text-text-secondary pl-4">{t('consultancy2Desc')}</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-bg-primary border border-line/80 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-solar" />
                      <h4 className="text-xs font-bold text-text-primary">{t('consultancy3Title')}</h4>
                    </div>
                    <p className="text-[11px] text-text-secondary pl-4">{t('consultancy3Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Global Export Markets Section */}
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
              <div key={idx} className="p-5 rounded-2xl bg-bg-secondary/70 border border-line flex flex-col items-center text-center gap-2 hover:border-accent-solar/50 hover:bg-bg-secondary transition-all shadow-sm">
                <span className="text-3xl">{country.flag}</span>
                <h4 className="font-bold text-sm text-text-primary">{country.name}</h4>
                <span className="text-[10px] font-mono text-text-secondary">{country.region}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Export Hardware Capabilities */}
        <div className="p-8 md:p-10 rounded-3xl bg-bg-secondary/50 border border-line space-y-6 shadow-xl">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary">Export Hardware Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-text-secondary">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-accent-sky flex-shrink-0" />
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-accent-sky flex-shrink-0" />
              <span>{t('feature2')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-accent-sky flex-shrink-0" />
              <span>{t('feature3')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-bg-primary border border-line shadow-sm">
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

