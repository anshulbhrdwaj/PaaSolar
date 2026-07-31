'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Sun, BatteryCharging, Leaf, Zap, RefreshCw } from 'lucide-react';

export function EnergyDashboard() {
  const t = useTranslations('Dashboard');
  const [solarKw, setSolarKw] = useState(14.2);
  const [batteryPct, setBatteryPct] = useState(94);

  // Live simulation tick
  useEffect(() => {
    const interval = setInterval(() => {
      setSolarKw((prev) => parseFloat((14.0 + Math.random() * 0.8).toFixed(1)));
      setBatteryPct((prev) => Math.min(100, Math.max(90, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetry" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            {t('tag')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2">
            {t('title')}
          </h2>
          <p className="text-text-secondary text-base mt-3">
            {t('subtitle')}
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="rounded-3xl p-6 md:p-8 bg-bg-secondary/70 border border-line shadow-2xl backdrop-blur-xl">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-line">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
                {t('liveStatus')}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-text-secondary">
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-accent-solar" />
                Updated Real-Time
              </span>
              <span className="px-3 py-1 rounded-full bg-accent-solar/10 text-accent-solar font-semibold">
                SYSTEM NOMINAL
              </span>
            </div>
          </div>

          {/* Top Key Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Card 1: Solar Production */}
            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-text-secondary">{t('solarProduction')}</span>
                <div className="p-2 rounded-xl bg-accent-solar/10 text-accent-solar">
                  <Sun className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-text-primary">{solarKw} kW</span>
                <p className="text-[11px] font-mono text-emerald-500 mt-1">↑ +18% Peak Efficiency</p>
              </div>
            </div>

            {/* Card 2: Battery Reserve */}
            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-text-secondary">{t('batteryState')}</span>
                <div className="p-2 rounded-xl bg-accent-gold/10 text-accent-gold">
                  <BatteryCharging className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-text-primary">{batteryPct}%</span>
                <p className="text-[11px] font-mono text-text-secondary mt-1">Sub-10ms Islanding Active</p>
              </div>
            </div>

            {/* Card 3: Carbon Saved */}
            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-text-secondary">{t('carbonSaved')}</span>
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Leaf className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-text-primary">42.8 Tons</span>
                <p className="text-[11px] font-mono text-emerald-500 mt-1">Equivalent to 1,240 Trees</p>
              </div>
            </div>

            {/* Card 4: Grid Independence */}
            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-text-secondary">{t('gridIndependence')}</span>
                <div className="p-2 rounded-xl bg-accent-sky/10 text-accent-sky">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-text-primary">99.4%</span>
                <p className="text-[11px] font-mono text-accent-sky mt-1">Zero Grid Utility Draw</p>
              </div>
            </div>
          </div>

          {/* SVG Animated Generation Curve Chart Visual */}
          <div className="p-6 rounded-2xl bg-bg-primary border border-line">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl font-bold text-text-primary">
                {t('chartTitle')}
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-accent-solar">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-solar" />
                  {t('solarCurve')}
                </span>
                <span className="flex items-center gap-1.5 text-accent-sky">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-sky" />
                  {t('loadCurve')}
                </span>
              </div>
            </div>

            {/* SVG Interactive Telemetry Chart */}
            <div className="w-full h-56 relative overflow-hidden">
              <svg viewBox="0 0 600 200" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-solar)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--accent-solar)" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="40" x2="600" y2="40" stroke="var(--line)" strokeDasharray="4 4" />
                <line x1="0" y1="90" x2="600" y2="90" stroke="var(--line)" strokeDasharray="4 4" />
                <line x1="0" y1="140" x2="600" y2="140" stroke="var(--line)" strokeDasharray="4 4" />

                {/* Solar Curve Fill Area */}
                <path
                  d="M 0 180 Q 150 180 250 50 T 450 120 T 600 180 L 600 200 L 0 200 Z"
                  fill="url(#solarGrad)"
                />

                {/* Solar Generation Line */}
                <path
                  d="M 0 180 Q 150 180 250 50 T 450 120 T 600 180"
                  stroke="var(--accent-solar)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Load Curve Line */}
                <path
                  d="M 0 140 Q 120 120 250 130 T 420 100 T 600 130"
                  stroke="var(--accent-sky)"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                />

                {/* Animated Peak Pulse Dot */}
                <circle cx="250" cy="50" r="6" fill="var(--accent-solar)">
                  <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
