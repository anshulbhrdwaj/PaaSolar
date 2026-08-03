'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Building2, Factory, BatteryCharging, Check } from 'lucide-react';

export function ProductsGrid() {
  const t = useTranslations('Products');

  const products = [
    {
      id: 'hardware',
      title: 'N-Type TOPCon Solar Modules',
      category: 'Hardware & Module Tech',
      desc: '22.8% Ultra-High Efficiency Bifacial N-Type Modules engineered for maximum multi-decade energy yield.',
      specs: ['22.8% Module Efficiency', 'Zero Light-Induced Degradation (LID)', '25-Year Linear Performance Warranty'],
      icon: <Building2 className="w-6 h-6 text-accent-solar" />,
      gradient: 'from-accent-solar/20 via-accent-gold/10 to-transparent',
    },
    {
      id: 'commercial',
      title: t('items.1.title'),
      category: t('items.1.category'),
      desc: t('items.1.desc'),
      specs: [t('items.1.specs.0'), t('items.1.specs.1'), t('items.1.specs.2')],
      icon: <Building2 className="w-6 h-6 text-accent-sky" />,
      gradient: 'from-accent-sky/20 via-accent-solar/10 to-transparent',
    },
    {
      id: 'industrial',
      title: t('items.2.title'),
      category: t('items.2.category'),
      desc: t('items.2.desc'),
      specs: [t('items.2.specs.0'), t('items.2.specs.1'), t('items.2.specs.2')],
      icon: <Factory className="w-6 h-6 text-emerald-500" />,
      gradient: 'from-emerald-500/20 via-accent-gold/10 to-transparent',
    },
    {
      id: 'storage',
      title: t('items.3.title'),
      category: t('items.3.category'),
      desc: t('items.3.desc'),
      specs: [t('items.3.specs.0'), t('items.3.specs.1'), t('items.3.specs.2')],
      icon: <BatteryCharging className="w-6 h-6 text-accent-gold" />,
      gradient: 'from-accent-gold/20 via-accent-solar/10 to-transparent',
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((item) => (
            <div
              key={item.id}
              data-cursor="explore"
              className="group relative rounded-3xl p-8 bg-bg-secondary/60 border border-line hover:border-accent-solar/60 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-lg"
            >
              {/* Background Glow Hover Reveal */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-solar">
                    {item.category}
                  </span>
                  <div className="p-3 rounded-2xl bg-bg-primary border border-line group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-3">
                  {item.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Technical Specs List */}
              <div className="relative z-10 pt-6 border-t border-line/60">
                <p className="text-[11px] uppercase font-mono tracking-wider text-text-secondary mb-3">
                  Core Engineering Specifications:
                </p>
                <div className="flex flex-col gap-2">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-text-primary">
                      <Check className="w-3.5 h-3.5 text-accent-solar flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Operating Guidelines Banner */}
        <div className="p-8 rounded-3xl border border-accent-solar/30 bg-gradient-to-r from-accent-solar/10 via-bg-secondary to-bg-primary shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent-solar font-bold">
                Project Execution & Distribution Policy
              </span>
              <h4 className="text-xl font-serif font-bold text-text-primary">
                Turnkey Execution for 50 kW+ | Complete Kits (3 kW - 10 kW) for Distribution Partners
              </h4>
            </div>
          </div>
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
            PAA SOLAR directly executes turnkey EPC projects for installations <strong>above 50 kW</strong> (Commercial, Industrial, PM-KUSUM, PM-SSY, and IPP Utility Solar Parks). For systems <strong>below 50 kW</strong>, we provide Complete Kits (3 kW, 5 kW, 8 kW, 10 kW Ongrid & Hybrid) featuring 24%+ TOPCon DCR Panels, Smart Inverters, LiFePO4 Storage, Mounting Structures, ACDB/DCDB, Net Meters, and Protection Accessories directly to our distribution partners for easy transport and one-stop fulfillment.
          </p>
        </div>
      </div>
    </section>
  );
}
