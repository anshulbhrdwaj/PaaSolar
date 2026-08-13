import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Navbar } from '@/components/ui/Navbar';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { Footer } from '@/components/sections/Footer';
import {
  BatteryCharging,
  Zap,
  ShieldCheck,
  ArrowRight,
  FileSpreadsheet,
  FileCheck2,
  HardHat,
  Network,
  Activity,
  Flame,
  Layers,
  TrendingUp,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Battery Energy Storage Systems (BESS) & PM-KUSUM | PAA SOLAR',
    description:
      'Developing and operating Battery Energy Storage Systems (BESS) for grid stability, agricultural feeder solarization, and diesel elimination under policy-aligned frameworks.',
    path: '/projects/pm-kusum-bess',
    locale,
  });
}

export default function PMKusumBessPage() {
  const t = useTranslations('ProjectSectors.pmKusumBess');

  const engagementSteps = [
    {
      step: '01',
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: <FileSpreadsheet className="w-5 h-5 text-teal-500" />,
    },
    {
      step: '02',
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: <FileCheck2 className="w-5 h-5 text-teal-500" />,
    },
    {
      step: '03',
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: <HardHat className="w-5 h-5 text-teal-500" />,
    },
    {
      step: '04',
      title: t('step4Title'),
      desc: t('step4Desc'),
      icon: <Network className="w-5 h-5 text-teal-500" />,
    },
    {
      step: '05',
      title: t('step5Title'),
      desc: t('step5Desc'),
      icon: <Activity className="w-5 h-5 text-teal-500" />,
    },
  ];

  const valuePillars = [
    {
      title: 'Dispatch on Demand',
      desc: 'Stores excess daytime solar PV generation and dispatches electricity instantly during peak demand hours or grid rationing windows.',
      icon: <Zap className="w-6 h-6 text-teal-500" />,
    },
    {
      title: 'Higher Profits',
      desc: 'Replaces expensive, high-emission diesel generators with zero-carbon LiFePO4 battery vaults, reducing fuel OPEX by up to 90% to deliver higher profits.',
      icon: <TrendingUp className="w-6 h-6 text-teal-500" />,
    },
    {
      title: 'DISCOM Feeder Stabilization',
      desc: 'Suppresses voltage sags, harmonics, and reactive power losses on 11kV/33kV agricultural feeders under PM-KUSUM Component A & C.',
      icon: <ShieldCheck className="w-6 h-6 text-teal-500" />,
    },
    {
      title: 'Policy-Aligned Frameworks',
      desc: 'Delivered via government scheme mandates, Viability Gap Funding (VGF), and tariff-based competitive bidding for long-term predictability.',
      icon: <Layers className="w-6 h-6 text-teal-500" />,
    },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: 'PM-KUSUM & BESS', url: '/projects/pm-kusum-bess' },
        ]}
      />
      <ServiceJsonLd
        name="Battery Energy Storage Systems (BESS) & PM-KUSUM Feeder Solutions"
        description="Containerized LiFePO4 Battery Energy Storage Systems integrated into utility grids and PM-KUSUM rural solar agricultural feeders."
        serviceType="BESS Energy Storage Infrastructure"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-teal-500/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-500 text-sm sm:text-base font-bold uppercase tracking-wider shadow-md">
              <BatteryCharging className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>{t('tag')}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight">
              {t('title')}
            </h1>

            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              {t('desc1')}
            </p>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
              {t('desc2')}
            </p>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
              {t('desc3')}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-teal-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-teal-500/30 hover:bg-teal-600 transition-all flex items-center gap-2"
              >
                <span>{t('cta')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Hero Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 shadow-2xl group">
              <Image
                src="/solar-bess-banner.png"
                alt="Battery Energy Storage System (BESS) Installation"
                width={800}
                height={500}
                className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-teal-500/90 text-white text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <BatteryCharging className="w-4 h-4" />
                  <span>BESS Infrastructure</span>
                </span>
                <span className="text-xs font-mono font-bold text-teal-200 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-teal-500/30">
                  LiFePO4 Storage
                </span>
              </div>
            </div>

            {/* Stats Card */}
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat1Label')}</span>
                <span className="font-serif text-2xl font-bold text-teal-500">{t('stat1Val')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat2Label')}</span>
                <span className="font-serif text-3xl font-bold text-emerald-500">{t('stat2Val')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat3Label')}</span>
                <span className="font-serif text-2xl font-bold text-text-primary">{t('stat3Val')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Pillars of BESS */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-teal-500 font-bold">INFRASTRUCTURE IMPACT</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
            Key Benefits of BESS Integration
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            Transforming intermittent solar generation into firm, dispatchable, and resilient energy assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valuePillars.map((pil, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-bg-secondary/70 border border-line hover:border-teal-500/60 transition-all shadow-lg flex items-start gap-5 group"
            >
              <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-white transition-colors shrink-0">
                {pil.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-teal-500 transition-colors">
                  {pil.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Engage (5-Stage BESS Workflow) */}
      <section className="py-24 bg-gradient-to-b from-bg-primary via-bg-secondary/40 to-bg-primary border-y border-line">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-teal-500 font-bold">FULL ASSET LIFECYCLE</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
              {t('engageTitle')}
            </h2>
            <p className="text-text-secondary text-sm md:text-base">
              {t('engageSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {engagementSteps.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-bg-primary border border-line shadow-md space-y-4 flex flex-col justify-between hover:border-teal-500 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-teal-500/40">{item.step}</span>
                    <div className="p-2 rounded-xl bg-teal-500/10">{item.icon}</div>
                  </div>
                  <h3 className="font-serif text-base font-bold text-text-primary leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolarCalculator />
      <Footer />
    </main>
  );
}
