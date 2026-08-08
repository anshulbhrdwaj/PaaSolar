'use client';

import React from 'react';
import { ShieldCheck, Sun, Building2, Truck, Cpu, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export function WhyUsSection() {
  const pillars = [
    {
      id: 'topcon-tech',
      badge: '22.8%+ Ultra-High Efficiency',
      title: 'Tier-1 TOPCon & DCR Panels',
      desc: 'N-Type TOPCon & Mono Bifacial solar modules with zero Light-Induced Degradation (LID), 22.8%+ efficiency, and 30-year performance guarantees.',
      icon: <Sun className="w-7 h-7 text-accent-solar" />,
      accentColor: 'text-accent-solar',
      borderColor: 'border-accent-solar/40',
      bgGlow: 'from-accent-solar/15 via-bg-secondary to-bg-primary',
      bullets: ['22.8%+ Cell Efficiency', '30-Year Warranty', 'Zero LID Loss'],
    },
    {
      id: 'turnkey-epc',
      badge: 'Turnkey Execution (50 kW+)',
      title: 'Direct Factory EPC Engineering',
      desc: 'Complete engineering, procurement, and construction for Commercial, Industrial, PM-KUSUM (A&C), PM-SSY, and IPP Utility Solar Parks.',
      icon: <Building2 className="w-7 h-7 text-accent-sky" />,
      accentColor: 'text-accent-sky',
      borderColor: 'border-accent-sky/40',
      bgGlow: 'from-accent-sky/15 via-bg-secondary to-bg-primary',
      bullets: ['Commercial & Industrial', 'PM-KUSUM & PM-SSY', 'Utility Scale Parks'],
    },
    {
      id: 'pm-sgy-distribution',
      badge: 'Complete Kits (3 kW - 10 kW)',
      title: 'PM SGY Franchise & Distribution',
      desc: 'One-stop supply of Complete Solar Kits (Panels, Smart Inverters, LFP Storage, Structures, ACDB/DCDB & Net Meters) for easy dealer setup under PM SGY.',
      icon: <Truck className="w-7 h-7 text-emerald-500" />,
      accentColor: 'text-emerald-500',
      borderColor: 'border-emerald-500/40',
      bgGlow: 'from-emerald-500/15 via-bg-secondary to-bg-primary',
      bullets: ['1 kW to 10 kW Kits', 'Multi-Brand Fulfillment', 'District Monopoly Rights'],
    },
    {
      id: 'multidecade-telemetry',
      badge: '30-40 Year Lifespan',
      title: 'AI Telemetry & Asset Longevity',
      desc: 'Built for 30-40 years of continuous power output with integrated SCADA cloud telemetry, sub-10ms grid fallback, and 24/7 proactive maintenance.',
      icon: <Cpu className="w-7 h-7 text-accent-gold" />,
      accentColor: 'text-accent-gold',
      borderColor: 'border-accent-gold/40',
      bgGlow: 'from-accent-gold/15 via-bg-secondary to-bg-primary',
      bullets: ['Sub-10ms Islanding', 'SCADA Cloud Monitoring', '30-40 Yr Hardware Life'],
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-bg-secondary/40 border-y border-line relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>WHY PAA SOLAR</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text-primary mt-2">
            Why Choose Paa Solar Engineering?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 leading-relaxed font-medium">
            India’s trusted turnkey solar EPC & distribution partner delivering high-yield TOPCon technology, 30+ year asset durability, and complete PM SGY kit fulfillment.
          </p>
        </div>

        {/* 4 Core Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((item) => (
            <div
              key={item.id}
              data-cursor="explore"
              className={`group relative rounded-3xl p-8 sm:p-10 bg-bg-secondary/80 border ${item.borderColor} hover:border-accent-solar transition-all duration-500 overflow-hidden shadow-xl flex flex-col justify-between`}
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-bg-primary border border-line group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-bg-primary border border-line ${item.accentColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary pt-2">
                  {item.title}
                </h3>

                <p className="text-text-primary/90 text-base font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="relative z-10 pt-6 border-t border-line/60 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {item.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-text-primary bg-bg-primary/60 px-3 py-2 rounded-xl border border-line/60">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${item.accentColor} shrink-0`} />
                    <span className="truncate">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-bg-primary border border-line shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-2xl font-bold text-text-primary">
              Ready to Partner with Paa Solar?
            </h4>
            <p className="text-text-secondary text-sm font-medium">
              Get in touch with our solar EPC engineers or district distribution team today.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-accent-solar text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Talk to Solar Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
