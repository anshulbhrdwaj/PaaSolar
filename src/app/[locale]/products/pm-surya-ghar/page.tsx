'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { GetAQuoteCTA } from '@/components/sections/GetAQuoteCTA';
import { Footer } from '@/components/sections/Footer';
import { Home, CheckCircle2, Award } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function PMSuryaGharPage() {
  const t = useTranslations('ProductDetails.pmSuryaGhar');

  const subsidies = [
    { capacity: '1 kW System', subsidy: '₹30,000', recommended: 'Small Homes / Apartments' },
    { capacity: '2 kW System', subsidy: '₹60,000', recommended: '3-BHK Independent Houses' },
    { capacity: '3 kW+ System', subsidy: '₹78,000 (Max)', recommended: 'Villas & High Consumption Estates' },
  ];

  const steps = [
    { num: '01', title: 'Free Site Audit & Solar Capacity Estimation', desc: 'Our certified engineers assess shadow-free roof space and monthly DISCOM consumption.' },
    { num: '02', title: 'DISCOM Portal Registration & Net Metering', desc: 'Paa Solar files government portal applications and secures DISCOM feasibility approvals.' },
    { num: '03', title: 'MNRE Approved Component Installation', desc: 'Precision installation of ALMM-listed high-efficiency modules and smart hybrid inverters.' },
    { num: '04', title: 'Direct Bank Subsidy Credit (CFA)', desc: 'Post inspection & net-meter installation, government deposits up to ₹78,000 directly into your bank.' },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-24 bg-gradient-to-b from-emerald-500/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" />
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
                Apply for Subsidy Now
              </Link>
              <a
                href="#subsidy-breakdown"
                className="px-8 py-4 rounded-full border border-line bg-bg-secondary/50 text-text-primary text-xs font-bold uppercase tracking-wider hover:border-accent-solar transition-all"
              >
                View Subsidy Matrix
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Home className="w-40 h-40 text-emerald-500" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-2">
                GOVERNMENT INCENTIVE HIGHLIGHT
              </span>
              <h3 className="font-serif text-3xl font-bold text-text-primary mb-6">
                300 Units Monthly Free Power
              </h3>
              <div className="space-y-4 text-xs font-medium text-text-secondary">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{t('feature1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{t('feature2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{t('feature3')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{t('feature4')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidy Matrix */}
      <section id="subsidy-breakdown" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-500 font-semibold">
            Central Financial Assistance (CFA)
          </span>
          <h2 className="font-serif text-4xl font-bold text-text-primary mt-2">
            Government Subsidy Amount Matrix
          </h2>
          <p className="text-text-secondary text-sm mt-3">
            Subsidies are credited directly into your Aadhaar-linked bank account post DISCOM net meter commissioning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subsidies.map((sub, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 bg-bg-secondary/70 border border-line flex flex-col justify-between hover:border-emerald-500/50 transition-all ${
                idx === 2 ? 'ring-2 ring-emerald-500/40 bg-gradient-to-b from-emerald-500/10 to-bg-secondary' : ''
              }`}
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-text-secondary block mb-2">
                  {sub.recommended}
                </span>
                <h3 className="font-serif text-2xl font-bold text-text-primary mb-4">
                  {sub.capacity}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-serif text-4xl font-bold text-emerald-500">{sub.subsidy}</span>
                  <span className="text-xs font-mono text-text-secondary">Direct Subsidy</span>
                </div>
              </div>

              <Link
                href="/get-a-quote"
                className="w-full py-3 rounded-full bg-bg-primary border border-line text-xs font-bold uppercase tracking-wider text-center text-text-primary hover:border-emerald-500 hover:text-emerald-500 transition-colors"
              >
                Claim {sub.subsidy} Subsidy
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-24 bg-bg-secondary/40 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
              End-to-End Execution
            </span>
            <h2 className="font-serif text-4xl font-bold text-text-primary mt-2">
              How Paa Solar Handles Your PM Surya Ghar Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="p-6 rounded-2xl bg-bg-primary border border-line flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-bold text-emerald-500 block mb-3">{st.num}</span>
                  <h4 className="font-serif text-lg font-bold text-text-primary mb-2">{st.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetAQuoteCTA />
      <Footer />
    </main>
  );
}
