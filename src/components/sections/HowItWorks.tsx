'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Compass,
  Cpu,
  Wrench,
  Activity,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Zap,
  Scan,
  Radio,
  Layers,
  Gauge,
} from 'lucide-react';

export function HowItWorks() {
  const t = useTranslations('HowItWorks');
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      name: t('steps.0.name'),
      desc: t('steps.0.desc'),
      icon: <Compass className="w-6 h-6 text-emerald-500" />,
      tag: 'STAGE 01 • SITE AUDIT',
      badge: 'LiDAR 3D Telemetry',
      kpiVal: '99.4%',
      kpiLabel: 'Radiance Accuracy',
      details: [
        '3D LiDAR Aerial Drone Mesh Modeling',
        'Shading Loss & Azimuth Tilt Simulation',
        'Roof Load-Bearing Structural Inspection',
      ],
    },
    {
      num: '02',
      name: t('steps.1.name'),
      desc: t('steps.1.desc'),
      icon: <Cpu className="w-6 h-6 text-amber-500" />,
      tag: 'STAGE 02 • ENGINEERING',
      badge: 'CAD Microgrid Topology',
      kpiVal: '<10ms',
      kpiLabel: 'Switchover Latency',
      details: [
        'N-Type TOPCon Dual-Glass String Sizing',
        'Sub-10ms Smart Hybrid Inverter Wiring',
        'BESS Storage Discharge Optimization',
      ],
    },
    {
      num: '03',
      name: t('steps.2.name'),
      desc: t('steps.2.desc'),
      icon: <Wrench className="w-6 h-6 text-sky-500" />,
      tag: 'STAGE 03 • DEPLOYMENT',
      badge: 'Master EPC Installation',
      kpiVal: '5400 Pa',
      kpiLabel: 'Wind Load Cert',
      details: [
        'Zero-Penetration Structural Roof Mounting',
        'DISCOM Net-Meter Grid Synchronization',
        'Flash Testing & Flash-Curve Calibration',
      ],
    },
    {
      num: '04',
      name: t('steps.3.name'),
      desc: t('steps.3.desc'),
      icon: <Activity className="w-6 h-6 text-emerald-400" />,
      tag: 'STAGE 04 • AI TELEMETRY',
      badge: '24/7 Cloud Monitoring',
      kpiVal: '2.8 Yrs',
      kpiLabel: 'CAPEX Breakeven',
      details: [
        'AI Cloud Predictive Maintenance Telemetry',
        'Automated String-Level Fault Alerting',
        '25-Year Performance Ratio (PR) Guarantee',
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-bg-secondary/30 border-t border-line relative overflow-hidden"
    >
      {/* Background Radial Ambient Lights */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-sm sm:text-base font-bold uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>{t('tag')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mt-1">
            {t('title')}
          </h2>
          <p className="text-text-primary/80 text-base sm:text-lg font-medium leading-relaxed mt-3">
            {t('subtitle')}
          </p>
        </div>

        {/* 4-Tile High-Tech Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* BENTO CARD 1: Stage 01 (Span 7 cols) - LiDAR 3D Radar Heatmap */}
          <div
            onMouseEnter={() => setActiveHover(0)}
            onMouseLeave={() => setActiveHover(null)}
            className="lg:col-span-7 rounded-3xl p-7 bg-bg-primary border border-line hover:border-emerald-500/60 transition-all duration-500 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-emerald-500">01</span>
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">
                    {steps[0].tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">
                    {steps[0].name}
                  </h3>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                <Scan className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            {/* Crazy Visual: LiDAR 3D Radar Scanner Widget */}
            <div className="my-4 p-5 rounded-2xl bg-bg-secondary/70 border border-line/60 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Radar Grid Graphic */}
              <div className="relative w-44 h-44 rounded-full border border-emerald-500/30 flex items-center justify-center p-3 bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.15)] shrink-0">
                <div className="absolute inset-2 rounded-full border border-dashed border-emerald-500/40 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-line/80" />
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(16,185,129,0.3)_360deg)] rounded-full animate-spin" />
                <Compass className="w-10 h-10 text-emerald-500 animate-pulse z-10" />
              </div>

              {/* Live Scan Telemetry Box */}
              <div className="flex-1 space-y-3 w-full">
                <div className="p-3 rounded-xl bg-bg-primary border border-line/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-primary/70">Irradiance Yield</span>
                  <span className="text-emerald-500 font-bold">1,120 W/m² (Peak)</span>
                </div>
                <div className="p-3 rounded-xl bg-bg-primary border border-line/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-primary/70">Roof Tilt & Azimuth</span>
                  <span className="text-emerald-500 font-bold">22.5° S (Optimal)</span>
                </div>
                <div className="p-3 rounded-xl bg-bg-primary border border-line/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-primary/70">LiDAR GIS Mesh</span>
                  <span className="text-emerald-500 font-bold">99.4% Accuracy</span>
                </div>
              </div>
            </div>

            <p className="text-text-primary/90 text-sm font-medium leading-relaxed mb-4">
              {steps[0].desc}
            </p>

            <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs font-bold text-emerald-500">
              <span>{steps[0].details[0]}</span>
              <span className="font-mono text-text-primary/70">{steps[0].badge}</span>
            </div>
          </div>

          {/* BENTO CARD 2: Stage 02 (Span 5 cols) - Microgrid CAD Topology */}
          <div
            onMouseEnter={() => setActiveHover(1)}
            onMouseLeave={() => setActiveHover(null)}
            className="lg:col-span-5 rounded-3xl p-7 bg-bg-primary border border-line hover:border-amber-500/60 transition-all duration-500 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-amber-500">02</span>
                <div>
                  <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest block">
                    {steps[1].tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">
                    {steps[1].name}
                  </h3>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/30">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            {/* Crazy Visual: Animated Microgrid Circuit Meter */}
            <div className="my-4 p-5 rounded-2xl bg-bg-secondary/70 border border-line/60 flex flex-col justify-center space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-amber-500 font-bold">N-Type TOPCon Panels</span>
                <span className="text-emerald-500 font-bold">650W High Efficiency</span>
              </div>

              {/* Animated Power Flow Meter Line */}
              <div className="relative w-full h-3 bg-bg-primary rounded-full overflow-hidden border border-line/80">
                <div className="absolute top-0 bottom-0 left-0 w-3/4 bg-gradient-to-r from-amber-500 via-emerald-500 to-sky-500 rounded-full animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-bg-primary border border-line/60 text-center">
                  <span className="text-text-primary/60 block text-[9px] uppercase">Islanding Latency</span>
                  <span className="font-bold text-amber-500 text-xs">&lt;10ms Switch</span>
                </div>
                <div className="p-2.5 rounded-xl bg-bg-primary border border-line/60 text-center">
                  <span className="text-text-primary/60 block text-[9px] uppercase">BESS Battery Vault</span>
                  <span className="font-bold text-emerald-500 text-xs">High-C Discharge</span>
                </div>
              </div>
            </div>

            <p className="text-text-primary/90 text-sm font-medium leading-relaxed mb-4">
              {steps[1].desc}
            </p>

            <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs font-bold text-amber-500">
              <span>{steps[1].details[0]}</span>
              <span className="font-mono text-text-primary/70">{steps[1].badge}</span>
            </div>
          </div>

          {/* BENTO CARD 3: Stage 03 (Span 5 cols) - Master EPC HUD Gauge */}
          <div
            onMouseEnter={() => setActiveHover(2)}
            onMouseLeave={() => setActiveHover(null)}
            className="lg:col-span-5 rounded-3xl p-7 bg-bg-primary border border-line hover:border-sky-500/60 transition-all duration-500 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-sky-500">03</span>
                <div>
                  <span className="text-[10px] font-mono font-bold text-sky-500 uppercase tracking-widest block">
                    {steps[2].tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">
                    {steps[2].name}
                  </h3>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-500 border border-sky-500/30">
                <Wrench className="w-6 h-6" />
              </div>
            </div>

            {/* Crazy Visual: Master EPC Installation HUD Gauge */}
            <div className="my-4 p-5 rounded-2xl bg-bg-secondary/70 border border-line/60 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-text-primary/70">Wind Load Resistance</span>
                <span className="text-sky-500 font-bold">5,400 Pa Hurricane Standard</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-text-primary/70">Roof Penetration Rate</span>
                <span className="text-emerald-500 font-bold">0.00% (Non-Intrusive)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-text-text-primary/70">DISCOM Grid Meter Sync</span>
                <span className="text-emerald-500 font-bold">100% Commissioned</span>
              </div>
            </div>

            <p className="text-text-primary/90 text-sm font-medium leading-relaxed mb-4">
              {steps[2].desc}
            </p>

            <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs font-bold text-sky-500">
              <span>{steps[2].details[0]}</span>
              <span className="font-mono text-text-primary/70">{steps[2].badge}</span>
            </div>
          </div>

          {/* BENTO CARD 4: Stage 04 (Span 7 cols) - AI Cloud & 25-Year ROI Growth */}
          <div
            onMouseEnter={() => setActiveHover(3)}
            onMouseLeave={() => setActiveHover(null)}
            className="lg:col-span-7 rounded-3xl p-7 bg-bg-primary border border-line hover:border-emerald-400/60 transition-all duration-500 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-emerald-400">04</span>
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                    {steps[3].tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">
                    {steps[3].name}
                  </h3>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-400/10 text-emerald-400 border border-emerald-400/30">
                <Activity className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            {/* Crazy Visual: ROI Growth SVG Trajectory Curve */}
            <div className="my-4 p-5 rounded-2xl bg-bg-secondary/70 border border-line/60 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="w-full sm:w-1/2 space-y-2">
                <div className="text-[11px] font-mono text-text-primary/70 flex justify-between">
                  <span>CAPEX Payback</span>
                  <span className="text-amber-500 font-bold">2.8 Years</span>
                </div>
                <div className="text-[11px] font-mono text-text-primary/70 flex justify-between">
                  <span>Cumulative Profit</span>
                  <span className="text-emerald-500 font-bold">400%+ Cash Yield</span>
                </div>
                <div className="text-[11px] font-mono text-text-primary/70 flex justify-between">
                  <span>Performance Guarantee</span>
                  <span className="text-emerald-500 font-bold">25-Year PR Ratio</span>
                </div>
              </div>

              {/* Glowing SVG Trajectory Chart */}
              <div className="w-full sm:w-1/2 h-28 bg-bg-primary rounded-xl p-3 border border-line/60 flex flex-col justify-between overflow-hidden relative">
                <div className="flex justify-between text-[9px] font-mono text-text-primary/60">
                  <span>Year 0</span>
                  <span className="text-amber-500">Breakeven</span>
                  <span className="text-emerald-500">Year 25</span>
                </div>
                <svg className="w-full h-16 overflow-visible">
                  <defs>
                    <linearGradient id="bentoProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5,50 C 40,45 80,30 110,18 C 140,8 180,3 210,1"
                    fill="url(#bentoProfit)"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="110" cy="18" r="4" className="fill-amber-400 stroke-emerald-500 stroke-2" />
                </svg>
              </div>
            </div>

            <p className="text-text-primary/90 text-sm font-medium leading-relaxed mb-4">
              {steps[3].desc}
            </p>

            <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>{steps[3].details[0]}</span>
              <span className="font-mono text-text-primary/70">{steps[3].badge}</span>
            </div>
          </div>
        </div>

        {/* Footer Guarantee Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-bg-primary border border-line flex flex-wrap items-center justify-around gap-6 text-xs sm:text-sm font-bold text-text-primary">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>Tier-1 ALMM Module Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <span>Sub-10ms Islanding Power Transfer</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-sky-500" />
            <span>25-Year PR Performance Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
