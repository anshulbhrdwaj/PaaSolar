import React from 'react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { Footer } from '@/components/sections/Footer';
import { Cpu, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'BESS Industrial Energy Storage (ESS 3532 & Li UPS 1250) | PAA SOLAR',
  description:
    'Megawatt-scale Battery Energy Storage Systems (BESS). Featuring ESS 3532 containerized storage and Li UPS 1250 high-output backup systems with sub-10ms grid fallback.',
  openGraph: {
    title: 'BESS Industrial Energy Storage (ESS 3532 & Li UPS 1250) | PAA SOLAR',
    description:
      'Megawatt-scale BESS solutions for commercial microgrids, PM-KUSUM feeder storage, and utility solar farms.',
  },
};

export default function BessPage() {
  const specs = [
    { label: 'Container System', val: 'ESS 3532 (3.53 MWh LFP)' },
    { label: 'High-Output UPS', val: 'Li UPS 1250 (1250 kW)' },
    { label: 'Islanding Transfer', val: '< 10 Milliseconds' },
    { label: 'Enclosure Rating', val: 'IP65 Weatherproof' },
    { label: 'Thermal Management', val: 'Liquid Cooling HVAC' },
    { label: 'BMS Protection', val: 'Active Balancing IoT' },
    { label: 'Warranty Standard', val: '10 Years Replacement' },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-emerald-500/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Megawatt Storage Architecture</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary leading-tight">
              BESS (Battery Energy Storage Systems)
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              Utility-grade battery energy storage featuring the flagship <strong>ESS 3532</strong> containerized system and <strong>Li UPS 1250</strong> instantaneous backup vault for uninterrupted enterprise independence.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/get-a-quote"
                className="px-8 py-4 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all"
              >
                Inquire BESS Storage
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">CONTAINER MODEL</span>
                <span className="font-serif text-2xl font-bold text-emerald-500">ESS 3532</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">HIGH UPS MODEL</span>
                <span className="font-serif text-2xl font-bold text-accent-gold">Li UPS 1250</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">SWITCH SPEED</span>
                <span className="font-serif text-2xl font-bold text-accent-sky">&lt; 10ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Models Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-500 font-semibold">
            BESS Product Lineup
          </span>
          <h2 className="font-serif text-4xl font-bold text-text-primary mt-2">
            Enterprise & Utility Storage Models
          </h2>
        </div>

        <div className="space-y-12 mb-16">
          {/* Model 1: ESS 3532 */}
          <div id="ess3532" className="scroll-mt-28 p-8 lg:p-10 rounded-3xl bg-bg-secondary/70 border border-emerald-500/40 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-bold">CONTAINERIZED STORAGE</span>
                <h3 className="font-serif text-3xl font-bold text-text-primary mt-1">ESS 3532 Containerized BESS</h3>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-bold">3.53 MWh LFP Capacity</span>
            </div>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              The ESS 3532 is PAA SOLAR’s flagship containerized energy storage unit designed for megawatt-scale utility solar parks, PM-KUSUM feeder installations, and commercial microgrids. Engineered with IP65 liquid-cooled thermal management, active cell-to-cell BMS protection, and automatic grid peak shaving capability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-line/60 text-xs font-medium text-text-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>3.53 MWh Modular Container</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Liquid Cooling HVAC System</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sub-10ms Grid Peak Shaving</span>
              </div>
            </div>
          </div>

          {/* Model 2: Li UPS 1250 */}
          <div id="liups1250" className="scroll-mt-28 p-8 lg:p-10 rounded-3xl bg-bg-secondary/70 border border-accent-gold/40 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent-gold font-bold">HIGH-OUTPUT BACKUP VAULT</span>
                <h3 className="font-serif text-3xl font-bold text-text-primary mt-1">Li UPS 1250 Backup Power System</h3>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs font-mono font-bold">1250 kW High-Discharge Power</span>
            </div>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              The Li UPS 1250 provides instantaneous, zero-interruption power transfer for mission-critical industrial manufacturing plants, data centers, and healthcare facilities. Equipped with high-discharge lithium-ion chemistry, intelligent load management, and multi-cabinet parallel stacking.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-line/60 text-xs font-medium text-text-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                <span>1250 kW High-Output Power</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                <span>Sub-2ms Uninterruptible UPS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                <span>Multi-Cabinet Parallel Stacking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specs.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-bg-secondary/60 border border-line flex flex-col justify-between">
              <span className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">{item.label}</span>
              <span className="font-serif text-xl font-bold text-text-primary">{item.val}</span>
            </div>
          ))}
        </div>
      </section>

      <SolarCalculator />
      <Footer />
    </main>
  );
}
