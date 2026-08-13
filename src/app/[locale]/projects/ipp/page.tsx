import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { Footer } from '@/components/sections/Footer';
import {
  CheckCircle2,
  MapPin,
  TrendingUp,
  Landmark,
  Layers,
  HardHat,
  Network,
  Activity,
  ShieldCheck,
  ArrowRight,
  Globe,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Independent Power Producer (IPP) | PAA SOLAR',
    description:
      'Developing, owning, and operating megawatt-scale solar power generation assets. Delivering dependable electricity and stable long-term returns across India.',
    path: '/projects/ipp',
    locale,
  });
}

export default function IPPPage() {
  const t = useTranslations('ProjectSectors.ipp');

  const engagementSteps = [
    {
      step: '01',
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: <TrendingUp className="w-5 h-5 text-accent-gold" />,
    },
    {
      step: '02',
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: <Landmark className="w-5 h-5 text-accent-gold" />,
    },
    {
      step: '03',
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: <Layers className="w-5 h-5 text-accent-gold" />,
    },
    {
      step: '04',
      title: t('step4Title'),
      desc: t('step4Desc'),
      icon: <HardHat className="w-5 h-5 text-accent-gold" />,
    },
    {
      step: '05',
      title: t('step5Title'),
      desc: t('step5Desc'),
      icon: <Network className="w-5 h-5 text-accent-gold" />,
    },
    {
      step: '06',
      title: t('step6Title'),
      desc: t('step6Desc'),
      icon: <Activity className="w-5 h-5 text-accent-gold" />,
    },
  ];

  const ippProjects = [
    { capacity: '26 MW', location: 'Ramanathapuram, Tamil Nadu', type: 'Utility-Scale Solar PV Park' },
    { capacity: '14 MW', location: 'Ambala, Haryana', type: 'Grid-Connected Solar Power Plant' },
    { capacity: '8 MW', location: 'Erode, Tamil Nadu', type: 'Industrial Open Access Utility Plant' },
    { capacity: '6 MW', location: 'Maharashtra', type: 'Utility Solar Generation Asset' },
    { capacity: '5.3 MW', location: 'Indore, Madhya Pradesh', type: 'Commercial & Utility IPP Plant' },
    { capacity: '3.25 MW', location: 'Erode, Tamil Nadu', type: 'Group Captive Solar PV Asset' },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: 'Independent Power Producer (IPP)', url: '/projects/ipp' },
        ]}
      />
      <ServiceJsonLd
        name="Independent Power Producer (IPP) Solar Asset Management"
        description="Developing, owning, and operating megawatt-scale solar power assets delivering clean power to utilities and industrial clients."
        serviceType="Utility Scale Solar IPP"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-gold/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-accent-gold/30 bg-accent-gold/10 text-accent-gold text-sm sm:text-base font-bold uppercase tracking-wider shadow-md">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
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

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/get-a-quote"
                className="px-8 py-4 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all flex items-center gap-2"
              >
                <span>{t('cta')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat1Label')}</span>
                <span className="font-serif text-2xl font-bold text-accent-gold">{t('stat1Val')}</span>
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

      {/* How We Engage (6-Step Process Workflow) */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-gold font-bold">END-TO-END ASSET LIFE CYCLE</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
            {t('engageTitle')}
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            {t('engageSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementSteps.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-bg-secondary/70 border border-line hover:border-accent-gold/60 transition-all duration-300 shadow-lg flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold text-accent-gold/40">{item.step}</span>
                  <div className="p-3 rounded-2xl bg-accent-gold/10 border border-accent-gold/20 text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-accent-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-2 text-xs font-mono text-accent-gold font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Core IPP Capability</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured IPP Projects Portfolio */}
      <section className="py-24 bg-gradient-to-b from-bg-primary via-bg-secondary/40 to-bg-primary border-y border-line">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-500 font-bold">COMMISSIONED & OPERATIONAL ASSETS</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
              {t('portfolioTitle')}
            </h2>
            <p className="text-text-secondary text-sm md:text-base">
              {t('portfolioSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ippProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-bg-primary border border-line shadow-xl space-y-4 hover:border-accent-gold transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-accent-gold">{proj.capacity}</span>
                    <span className="px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-[11px] font-mono font-bold">
                      IPP ASSET
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-text-primary font-bold">
                    <MapPin className="w-4 h-4 text-accent-gold shrink-0" />
                    <h3 className="font-serif text-lg">{proj.location}</h3>
                  </div>
                  <p className="text-text-secondary text-xs">{proj.type}</p>
                </div>
                <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-text-secondary">
                  <span>Power Evacuation: Connected</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Capabilities Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-bg-secondary border border-line shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-accent-gold" />
              <h3 className="font-serif text-2xl font-bold text-text-primary">
                Why Utilities & Corporate Consumers Partner With Our IPP Platform
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-medium text-text-secondary">
              <div className="p-4 rounded-2xl bg-bg-primary border border-line space-y-2">
                <span className="font-bold text-text-primary text-sm block">1. Long-Term Power Security</span>
                <p>25-year fixed Power Purchase Agreements (PPAs) hedging against utility grid tariff escalations.</p>
              </div>
              <div className="p-4 rounded-2xl bg-bg-primary border border-line space-y-2">
                <span className="font-bold text-text-primary text-sm block">2. High Voltage Evacuation</span>
                <p>In-house expertise in constructing 33kV/132kV pooling substations and high-voltage transmission bays.</p>
              </div>
              <div className="p-4 rounded-2xl bg-bg-primary border border-line space-y-2">
                <span className="font-bold text-text-primary text-sm block">3. Future-Ready BESS Integration</span>
                <p>Designed for battery energy storage retrofits to deliver firm dispatchable renewable energy (FDRE).</p>
              </div>
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
