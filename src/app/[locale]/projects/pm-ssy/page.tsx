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
  Waves,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Coins,
  Compass,
  Anchor,
  Zap,
  Cable,
  Wrench,
  Droplets,
  ShieldCheck,
  Building,
  Factory,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Floating Solar Programme - PMSSY | PAA SOLAR',
    description:
      'Official guidelines and turnkey execution for Pradhan Mantri Surya Sarovar Yojana (PM-SSY). ₹5,070 Cr budget, 5,000 MW Floating Solar PV & ₹1 Cr/MW Govt CFA subsidy.',
    path: '/projects/pm-ssy',
    locale,
  });
}

export default function PMSSYPage() {
  const t = useTranslations('ProjectSectors.pmSsy');

  const FPVApplications = [
    {
      title: 'Hydroelectric Reservoirs & Dam Backwaters',
      desc: 'Deploying large-scale FPV arrays on hydro dams to optimize existing evacuation sub-stations and balance day/night hydro generation.',
      icon: <Waves className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'Thermal Power Station Cooling Ponds',
      desc: 'Utilizing thermal plant ash ponds and cooling reservoirs to supply auxiliary green power to thermal utilities.',
      icon: <Factory className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'Municipal Water Supply Reservoirs & Lakes',
      desc: 'Shading municipal drinking water reservoirs to cut water evaporation by up to 70% while generating clean power.',
      icon: <Droplets className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'Agricultural Irrigation Canals & Ponds',
      desc: 'Shielding farm retention ponds and irrigation network canals to preserve agricultural water reserves.',
      icon: <Compass className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'Industrial Process Water Basins & Mining Pits',
      desc: 'Transforming industrial effluent retention basins and flooded quarry pits into productive solar energy assets.',
      icon: <Building className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'Inland Waterways & Aquacultural Lagoons',
      desc: 'Dual-use floating solar installations combining aquaculture fish farming with surface renewable power generation.',
      icon: <Anchor className="w-6 h-6 text-amber-500" />,
    },
  ];

  const engagementSteps = [
    {
      step: '01',
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: <Compass className="w-5 h-5 text-amber-500" />,
    },
    {
      step: '02',
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: <Anchor className="w-5 h-5 text-amber-500" />,
    },
    {
      step: '03',
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      step: '04',
      title: t('step4Title'),
      desc: t('step4Desc'),
      icon: <Cable className="w-5 h-5 text-amber-500" />,
    },
    {
      step: '05',
      title: t('step5Title'),
      desc: t('step5Desc'),
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
    },
  ];

  const keyHighlights = [
    {
      title: '₹ 5,070 Crore Total Outlay',
      desc: 'Cabinet-approved central budget allocation dedicated for developing floating solar photovoltaic (FPV) projects across India.',
      icon: <Coins className="w-6 h-6 text-amber-500" />,
    },
    {
      title: '5,000 MW Floating Solar Target',
      desc: 'Deployment of 5,000 MW Floating Solar PV arrays over dams, reservoirs, and water bodies across India to conserve land usage.',
      icon: <Waves className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'Aquatic Water-Body Yield Enhancement',
      desc: 'Deployment over dams, reservoirs, and lakes to conserve land footprints while achieving higher solar cell efficiency through natural water cooling.',
      icon: <Droplets className="w-6 h-6 text-amber-500" />,
    },
    {
      title: '₹ 1 Crore / MW Govt Subsidy (CFA)',
      desc: 'Eligible floating solar PV projects receive Central Financial Assistance (CFA) of ₹1 Crore per MW upon successful commissioning.',
      icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
    },
  ];

  const schemeTimelines = [
    {
      phase: 'Cabinet Approval',
      date: t('stat5Val'),
      desc: 'Approved by Union Cabinet under sustainable energy roadmap.',
    },
    {
      phase: 'Project Sanction Window',
      date: 'FY 2026-27 to FY 2030-31',
      desc: '5-year sanction period for floating solar PV tenders.',
    },
    {
      phase: 'Financial Assistance Disbursement',
      date: 'Up to FY 2032-33',
      desc: 'CFA subsidy disbursement support extended through FY 2032-33.',
    },
  ];

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
        name="Floating Solar Programme - PMSSY Turnkey EPC Services"
        description="Turnkey floating solar photovoltaic execution under Pradhan Mantri Surya Sarovar Yojana."
        serviceType="Floating Solar EPC"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-amber-500/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm sm:text-base font-bold uppercase tracking-wider shadow-md">
              <Waves className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>{t('tag')}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight">
              {t('title')}
            </h1>

            <p className="font-medium text-amber-500 text-lg">
              {t('tagline')}
            </p>

            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              {t('desc1')}
            </p>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
              {t('desc2')}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/get-a-quote"
                className="px-8 py-4 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-amber-500/30 hover:bg-amber-600 transition-all flex items-center gap-2"
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
                <span className="font-serif text-3xl font-bold text-amber-500">{t('stat1Val')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat2Label')}</span>
                <span className="font-serif text-2xl font-bold text-text-primary">{t('stat2Val')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat3Label')}</span>
                <span className="font-serif text-2xl font-bold text-emerald-500">{t('stat3Val')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat4Label')}</span>
                <span className="font-serif text-2xl font-bold text-amber-500">{t('stat4Val')}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat5Label')}</span>
                <span className="font-serif text-sm font-bold text-text-primary">{t('stat5Val')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Solar Applications by Water Body */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-500 font-bold">AQUATIC DEPLOYMENT DOMAINS</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
            {t('applicationsTitle')}
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            {t('applicationsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FPVApplications.map((app, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-bg-secondary/70 border border-line hover:border-amber-500/60 transition-all duration-300 shadow-lg flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 w-fit group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  {app.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-amber-500 transition-colors">
                  {app.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {app.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-2 text-xs font-mono text-amber-500 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>PM-SSY Eligible Asset</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Engage (5-Step Turnkey Floating Solar Workflow) */}
      <section className="py-24 bg-gradient-to-b from-bg-primary via-bg-secondary/40 to-bg-primary border-y border-line">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-500 font-bold">TURNKEY FLOATING SOLAR METHODOLOGY</span>
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
                className="relative p-6 rounded-3xl bg-bg-primary border border-line shadow-md space-y-4 flex flex-col justify-between hover:border-amber-500 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-amber-500/40">{item.step}</span>
                    <div className="p-2 rounded-xl bg-amber-500/10">{item.icon}</div>
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

      {/* Official Guidelines & Key Policy Highlights */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-500 font-bold">POLICY HIGHLIGHTS</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
            {t('highlightsTitle')}
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            {t('highlightsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-bg-secondary/70 border border-line hover:border-amber-500/60 transition-all shadow-lg flex items-start gap-5 group"
            >
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-colors shrink-0">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scheme Execution Timeline */}
      <section className="py-24 bg-gradient-to-b from-bg-primary via-bg-secondary/40 to-bg-primary border-y border-line">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-500 font-bold">IMPLEMENTATION ROADMAP</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
              {t('timelineTitle')}
            </h2>
            <p className="text-text-secondary text-sm md:text-base">
              {t('timelineSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schemeTimelines.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-bg-primary border border-line shadow-xl space-y-4 flex flex-col justify-between hover:border-amber-500 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-amber-500">
                    <Calendar className="w-5 h-5" />
                    <span className="font-mono text-xs font-bold uppercase">{item.phase}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">{item.date}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-text-secondary">
                  <span>Policy Status: Active</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Turnkey Capabilities Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-bg-secondary border border-line shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-amber-500" />
              <h3 className="font-serif text-2xl font-bold text-text-primary">
                PAA SOLAR Floating Solar EPC Scope
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-medium text-text-secondary">
              <div className="p-4 rounded-2xl bg-bg-primary border border-line space-y-2">
                <span className="font-bold text-text-primary text-sm block">1. Pontoon & Mooring Design</span>
                <p>High-density polyethylene (HDPE) pontoons, corrosion-resistant anchoring cables, and wave-dampening structures for water reservoirs.</p>
              </div>
              <div className="p-4 rounded-2xl bg-bg-primary border border-line space-y-2">
                <span className="font-bold text-text-primary text-sm block">2. TOPCon Module Array</span>
                <p>Anti-humidity PID-resistant TOPCon bifacial modules designed for high-humidity aquatic environments.</p>
              </div>
              <div className="p-4 rounded-2xl bg-bg-primary border border-line space-y-2">
                <span className="font-bold text-text-primary text-sm block">3. Grid Integration & Subsidy Support</span>
                <p>Turnkey grid interconnection, net-metering approvals, and ₹1 Cr/MW Central Financial Assistance (CFA) subsidy facilitation.</p>
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
