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
  Building2,
  CheckCircle2,
  Factory,
  Snowflake,
  Shirt,
  MapPin,
  Zap,
  Hospital,
  Landmark,
  UtensilsCrossed,
  GraduationCap,
  FileSpreadsheet,
  FileCheck2,
  HardHat,
  Network,
  Wrench,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Commercial & Industrial (C&I) Solar Systems | PAA SOLAR',
    description:
      'Reliable on-site power for business operations. Turnkey C&I solar PV systems (100 kW to several MW) for factories, cold storages, textile units, and institutional facilities.',
    path: '/projects/ci',
    locale,
  });
}

export default function CIPage() {
  const t = useTranslations('ProjectSectors.ci');

  const sectors = [
    {
      title: 'Production & Manufacturing Facilities',
      desc: 'Heavy-duty industrial rooftop & ground PV for factories and assembly lines to cut grid demand charges.',
      icon: <Factory className="w-6 h-6 text-accent-sky" />,
    },
    {
      title: 'Cold Storage Facilities',
      desc: 'Continuous daytime solar power synchronization to handle continuous refrigeration cooling loads.',
      icon: <Snowflake className="w-6 h-6 text-accent-sky" />,
    },
    {
      title: 'Handloom & Textile Units',
      desc: 'Clean solar energy for spinning, weaving, and textile processing plants with zero voltage fluctuations.',
      icon: <Shirt className="w-6 h-6 text-accent-sky" />,
    },
    {
      title: 'Toll Plazas & Highway Infrastructure',
      desc: 'Off-grid and hybrid solar power units keeping expressways and toll plazas operational 24/7.',
      icon: <MapPin className="w-6 h-6 text-accent-sky" />,
    },
    {
      title: 'EV Charging Infrastructure',
      desc: 'Solar-assisted EV charging hubs balancing peak grid draw with rooftop solar generation.',
      icon: <Zap className="w-6 h-6 text-accent-sky" />,
    },
    {
      title: 'Hospitals & Healthcare Facilities',
      desc: 'High-reliability solar energy with instantaneous battery fallback for critical healthcare centers.',
      icon: <Hospital className="w-6 h-6 text-accent-sky" />,
    },
    {
      title: 'Banking, ATMs & Telecom',
      desc: 'Micro-solar solutions powering decentralized financial networks, data hubs, and cell towers.',
      icon: <Landmark className="w-6 h-6 text-accent-sky" />,
    },
    {
      title: 'Solar Atta Chakki & Food Processing',
      desc: 'High-torque agricultural solar solutions replacing expensive diesel generators in food processing.',
      icon: <UtensilsCrossed className="w-6 h-6 text-accent-sky" />,
    },
    {
      title: 'Educational Institutions',
      desc: 'Green campus solarization for schools, universities, and research institutes to meet sustainability goals.',
      icon: <GraduationCap className="w-6 h-6 text-accent-sky" />,
    },
  ];

  const engagementSteps = [
    {
      step: '01',
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: <FileSpreadsheet className="w-5 h-5 text-accent-sky" />,
    },
    {
      step: '02',
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: <FileCheck2 className="w-5 h-5 text-accent-sky" />,
    },
    {
      step: '03',
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: <HardHat className="w-5 h-5 text-accent-sky" />,
    },
    {
      step: '04',
      title: t('step4Title'),
      desc: t('step4Desc'),
      icon: <Network className="w-5 h-5 text-accent-sky" />,
    },
    {
      step: '05',
      title: t('step5Title'),
      desc: t('step5Desc'),
      icon: <Wrench className="w-5 h-5 text-accent-sky" />,
    },
  ];

  const featuredProjects = [
    { capacity: '1 MW', location: 'Bemetara, Chhattisgarh', type: 'Industrial Park Ground & Roof PV' },
    { capacity: '998 kW', location: 'Dadri, Uttar Pradesh', type: 'Manufacturing Facility Solar Plant' },
    { capacity: '500 kW', location: 'Aurangabad, Maharashtra', type: 'Commercial Engineering Complex' },
    { capacity: '495 kW', location: 'Gurgaon, Haryana', type: 'Corporate IT Park Rooftop PV' },
    { capacity: '400 kW', location: 'Hissar, Haryana', type: 'Cold Storage & Agro Processing' },
    { capacity: '250 kW', location: 'Chittorgarh, Rajasthan', type: 'Textile & Processing Facility' },
  ];

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
        description="Turnkey solar engineering, procurement, and construction for industrial plants, factories, and commercial buildings."
        serviceType="C&I Solar Engineering"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-sky/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-accent-sky/30 bg-accent-sky/10 text-accent-sky text-sm sm:text-base font-bold uppercase tracking-wider shadow-md">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
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
                className="px-8 py-4 rounded-full bg-accent-sky text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-accent-sky/30 hover:bg-accent-sky/90 transition-all flex items-center gap-2"
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
                <span className="font-serif text-2xl sm:text-3xl font-bold text-accent-sky">{t('stat1Val')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat2Label')}</span>
                <span className="font-serif text-2xl font-bold text-emerald-500">{t('stat2Val')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat3Label')}</span>
                <span className="font-serif text-2xl font-bold text-accent-gold">{t('stat3Val')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C&I Solar Applications by Sector */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-sky font-bold">SECTORIAL EXPERTISE</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
            {t('sectorsTitle')}
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            {t('sectorsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-bg-secondary/70 border border-line hover:border-accent-sky/60 transition-all duration-300 shadow-lg flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-accent-sky/10 border border-accent-sky/20 w-fit group-hover:bg-accent-sky group-hover:text-white transition-colors">
                  {sec.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-accent-sky transition-colors">
                  {sec.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {sec.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-2 text-xs font-mono text-accent-sky font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Custom C&I Solution</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Engage (5-Step Process Workflow) */}
      <section className="py-24 bg-gradient-to-b from-bg-primary via-bg-secondary/40 to-bg-primary border-y border-line">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-accent-sky font-bold">TURNKEY METHODOLOGY</span>
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
                className="relative p-6 rounded-3xl bg-bg-primary border border-line shadow-md space-y-4 flex flex-col justify-between hover:border-accent-sky transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-accent-sky/40">{item.step}</span>
                    <div className="p-2 rounded-xl bg-accent-sky/10">{item.icon}</div>
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

      {/* Featured Projects Portfolio & Milestone Banner */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-500 font-bold">PROVEN TRACK RECORD</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
            {t('portfolioTitle')}
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            {t('portfolioSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-bg-secondary border border-line shadow-xl space-y-4 hover:border-accent-sky transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-accent-sky">{proj.capacity}</span>
                  <span className="px-3 py-1 rounded-full bg-accent-sky/10 border border-accent-sky/30 text-accent-sky text-[11px] font-mono font-bold">
                    C&I SOLAR
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary">{proj.location}</h3>
                <p className="text-text-secondary text-xs">{proj.type}</p>
              </div>
              <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-text-secondary">
                <span>Status: Fully Operational</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Total Capacity Executed Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-accent-sky/15 via-bg-secondary to-emerald-500/15 border border-accent-sky/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-accent-sky text-white shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-sky block">NATIONAL EXECUTION FOOTPRINT</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-primary mt-1">
                {t('milestoneBanner')}
              </h3>
            </div>
          </div>
          <Link
            href="/get-a-quote"
            className="px-8 py-4 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-accent-solar/90 transition-all shrink-0"
          >
            Partner With Us
          </Link>
        </div>
      </section>

      <CaseStudies />
      <SolarCalculator />
      <Footer />
    </main>
  );
}
