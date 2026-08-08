'use client';

import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { GetAQuoteCTA } from '@/components/sections/GetAQuoteCTA';
import { Footer } from '@/components/sections/Footer';
import { BatteryCharging, CheckCircle2, Zap, ShieldCheck, Sun, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function PMKusumBessPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-teal-500/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-500 text-xs font-semibold uppercase tracking-wider">
              <BatteryCharging className="w-4 h-4" />
              <span>AGRICULTURAL BESS MICROGRID SOLUTIONS</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary leading-tight">
              PM KUSUM with BESS Storage
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              Integrating high-capacity LiFePO4 battery energy storage (BESS) into PM KUSUM solar agricultural feeders. Provides 24/7 uninterrupted irrigation power, sub-10ms automatic grid fallback, and DISCOM peak load shaving.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-teal-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-teal-500/30 hover:bg-teal-600 transition-all flex items-center gap-2"
              >
                <span>Apply for PM KUSUM + BESS Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">SUB-10MS BACKUP</span>
                <span className="font-serif text-3xl font-bold text-teal-500">100% Autonomy</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">BATTERY CHEMISTRY</span>
                <span className="font-serif text-2xl font-bold text-accent-solar">LFP LiFePO4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">DESIGN LIFE</span>
                <span className="font-serif text-2xl font-bold text-text-primary">25 Years / 6000+ Cycles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical BESS Highlights */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-bg-secondary/50 border border-line space-y-8">
          <div className="max-w-2xl">
            <h3 className="font-serif text-3xl font-bold text-text-primary mb-2">
              Key Features of PM KUSUM BESS Storage
            </h3>
            <p className="text-text-secondary text-sm font-medium">
              Turnkey engineering specifications for battery-backed rural feeder solarization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-medium">
            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex items-start gap-4">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-500 shrink-0">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary mb-1">Uninterrupted Agricultural Power</h4>
                <p className="text-text-secondary leading-relaxed">
                  Stores surplus daytime TOPCon solar generation to power agricultural pumps during evening discom rationing windows.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary mb-1">DISCOM Feeder Stabilization</h4>
                <p className="text-text-secondary leading-relaxed">
                  Suppresses voltage fluctuations and reactive power losses on rural 11kV agricultural feeders.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary mb-1">IP65 Containerized BESS Design</h4>
                <p className="text-text-secondary leading-relaxed">
                  Weatherproof liquid-cooled battery containers with automated aerosol fire suppression and remote AI telemetry.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent-sky/10 text-accent-sky shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary mb-1">Hybrid TOPCon Solar & Grid Coupling</h4>
                <p className="text-text-secondary leading-relaxed">
                  Dual AC/DC-coupled architecture enabling simultaneous solar generation, grid feedback, and battery storage charging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetAQuoteCTA />
      <Footer />
    </main>
  );
}
