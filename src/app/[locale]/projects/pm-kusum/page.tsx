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
  Sprout,
  CheckCircle2,
  MapPin,
  TrendingUp,
  Landmark,
  ShieldCheck,
  ArrowRight,
  FileSpreadsheet,
  FileCheck2,
  HardHat,
  Network,
  Wrench,
  Coins,
  Building2,
  Trees,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'PM-KUSUM A & C Scheme Solar Projects | PAA SOLAR',
    description:
      'Turnkey EPC & REPP development for PM-KUSUM Component A (500 kW - 2 MW) & Component C (500 kW - 5 MW). Empowering farmers with 25-year fixed PPA income and land leasing models.',
    path: '/projects/pm-kusum',
    locale,
  });
}

export default function PMKusumPage() {
  const t = useTranslations('ProjectSectors.pmKusum');

  const landTypes = [
    {
      title: t('landType1'),
      desc: 'Transforming unproductive, non-arable wasteland into clean energy generation hubs.',
      icon: <MapPin className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: t('landType2'),
      desc: 'Utilizing boundary fencing and peripheral field edges without impacting crop cultivation.',
      icon: <Trees className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: t('landType3'),
      desc: 'Empowering Gram Panchayats and rural cooperatives with community-owned solar infrastructure.',
      icon: <Building2 className="w-6 h-6 text-emerald-500" />,
    },
  ];

  const executionModels = [
    {
      title: t('modelOption1Title'),
      desc: t('modelOption1Desc'),
      badge: 'Maximum ROI Model',
      icon: <Coins className="w-6 h-6 text-accent-solar" />,
    },
    {
      title: t('modelOption2Title'),
      desc: t('modelOption2Desc'),
      badge: 'Shared Capital Model',
      icon: <HandshakeIcon className="w-6 h-6 text-accent-solar" />,
    },
    {
      title: t('modelOption3Title'),
      desc: t('modelOption3Desc'),
      badge: 'Zero Risk Lease',
      icon: <ShieldCheck className="w-6 h-6 text-accent-solar" />,
    },
  ];

  const engagementSteps = [
    {
      step: '01',
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-500" />,
    },
    {
      step: '02',
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: <FileCheck2 className="w-5 h-5 text-emerald-500" />,
    },
    {
      step: '03',
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: <Landmark className="w-5 h-5 text-emerald-500" />,
    },
    {
      step: '04',
      title: t('step4Title'),
      desc: t('step4Desc'),
      icon: <HardHat className="w-5 h-5 text-emerald-500" />,
    },
    {
      step: '05',
      title: t('step5Title'),
      desc: t('step5Desc'),
      icon: <Network className="w-5 h-5 text-emerald-500" />,
    },
    {
      step: '06',
      title: t('step6Title'),
      desc: t('step6Desc'),
      icon: <Wrench className="w-5 h-5 text-emerald-500" />,
    },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: 'PM-KUSUM A & C', url: '/projects/pm-kusum' },
        ]}
      />
      <ServiceJsonLd
        name="PM-KUSUM Component A & C Turnkey EPC Services"
        description="Developing and operating solar power plants under PM-KUSUM Component A & Component C for farmers and DISCOM feeders."
        serviceType="Agricultural Solar EPC"
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
                className="px-8 py-4 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-emerald-500/30 hover:bg-emerald-600 transition-all flex items-center gap-2"
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
                <span className="font-serif text-2xl font-bold text-emerald-500">{t('stat1Val')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat2Label')}</span>
                <span className="font-serif text-2xl font-bold text-accent-solar">{t('stat2Val')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">{t('stat3Label')}</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-text-primary">{t('stat3Val')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver Under PM-KUSUM A & C */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-500 font-bold">TURNKEY REPP DEVELOPMENT</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
            {t('deliverableTitle')}
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            {t('deliverableSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {landTypes.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-bg-secondary/70 border border-line hover:border-emerald-500/60 transition-all shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 w-fit group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-emerald-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-2 text-xs font-mono text-emerald-500 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Verified Land Parcel</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* No Collateral. No Hassle. (Execution Models) */}
      <section className="py-24 bg-gradient-to-b from-bg-primary via-bg-secondary/40 to-bg-primary border-y border-line">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-bold">FLEXIBLE PARTNERSHIP OPTIONS</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
              {t('modelTitle')}
            </h2>
            <p className="text-text-secondary text-sm md:text-base">
              {t('modelSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {executionModels.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-bg-primary border border-line shadow-xl space-y-4 flex flex-col justify-between hover:border-accent-solar transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-accent-solar/10 border border-accent-solar/20 group-hover:bg-accent-solar group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-accent-solar/10 border border-accent-solar/30 text-accent-solar text-[11px] font-mono font-bold">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-accent-solar transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-text-secondary">
                  <span>Zero Hassle Guarantee</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Earn Assured Revenue for 25 Years Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-bg-secondary border border-line shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-emerald-500" />
              <h3 className="font-serif text-2xl font-bold text-text-primary">
                {t('revenueTitle')}
              </h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-3xl">
              {t('revenueSubtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-medium">
              <div className="p-4 rounded-2xl bg-bg-primary border border-line flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-bold text-text-primary">{t('revenueFeat1')}</span>
              </div>
              <div className="p-4 rounded-2xl bg-bg-primary border border-line flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-bold text-text-primary">{t('revenueFeat2')}</span>
              </div>
              <div className="p-4 rounded-2xl bg-bg-primary border border-line flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-bold text-text-primary">{t('revenueFeat3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage (6-Step Workflow) */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-500 font-bold">WORKFLOW METHODOLOGY</span>
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
              className="group p-8 rounded-3xl bg-bg-secondary/70 border border-line hover:border-emerald-500/60 transition-all duration-300 shadow-lg flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold text-emerald-500/40">{item.step}</span>
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-emerald-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-2 text-xs font-mono text-emerald-500 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Turnkey Step</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CaseStudies />
      <SolarCalculator />
      <Footer />
    </main>
  );
}

function HandshakeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l3.6-3.6" />
      <path d="m14 14 2.5 2.5a1 1 0 0 0 1.4 0l2.6-2.6a1 1 0 0 0 0-1.4l-4-4a1 1 0 0 0-1.4 0L14 9.5" />
      <path d="M10 11 6.5 7.5a1 1 0 0 0-1.4 0L2.5 10a1 1 0 0 0 0 1.4l4 4a1 1 0 0 0 1.4 0L10 13" />
      <path d="m7 14 2 2a1 1 0 0 0 1.4 0l3.6-3.6" />
    </svg>
  );
}
