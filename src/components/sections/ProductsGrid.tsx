'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Building2, Factory, BatteryCharging, Check, Truck } from 'lucide-react';

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

        {/* Products Alternating Zig-Zag Layout */}
        <div className="space-y-16 mb-16">
          {products.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                data-cursor="explore"
                className="group relative rounded-3xl p-8 lg:p-12 bg-bg-secondary/60 border border-line hover:border-accent-solar/60 transition-all duration-500 overflow-hidden shadow-xl"
              >
                {/* Background Glow Hover Reveal */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Text Details Side (Zig-Zag order) */}
                  <div className={`lg:col-span-7 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-2xl bg-bg-primary border border-line group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <span className="text-xs font-mono uppercase tracking-widest text-accent-solar font-bold">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary mb-3">
                        {item.title}
                      </h3>

                      <p className="text-text-primary text-base sm:text-lg font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Technical Specs List */}
                    <div className="pt-6 border-t border-line/60">
                      <p className="text-xs uppercase font-mono tracking-wider text-text-primary font-bold mb-4">
                        Core Engineering Specifications:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2.5 text-sm font-semibold text-text-primary bg-bg-primary/50 p-2.5 rounded-xl border border-line/60">
                            <Check className="w-4 h-4 text-accent-solar flex-shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Highlight Badge Side (Zig-Zag order) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="p-8 rounded-3xl bg-bg-primary border border-line/80 shadow-2xl flex flex-col items-center justify-center text-center space-y-4 group-hover:border-accent-solar/40 transition-colors">
                      <div className="w-16 h-16 rounded-2xl bg-accent-solar/10 border border-accent-solar/30 flex items-center justify-center text-accent-solar shadow-[0_0_30px_rgba(245,158,11,0.15)]">
                        {item.icon}
                      </div>
                      <h4 className="font-serif text-xl font-bold text-text-primary">
                        {item.title}
                      </h4>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-solar/10 text-accent-solar text-xs font-mono font-bold uppercase tracking-wider">
                        <span>Tier-1 Certified Solar Tech</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Execution & Distribution Policy Cards in Zig-Zag Layout */}
        <div className="space-y-16">
          {/* Card 1: Project Execution (Zig-Zag Row 1) */}
          <div
            data-cursor="explore"
            className="group relative rounded-3xl p-8 lg:p-12 bg-bg-secondary/60 border border-accent-solar/40 hover:border-accent-solar/80 transition-all duration-500 overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-solar/15 via-bg-secondary to-bg-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Side */}
              <div className="lg:col-span-7 lg:order-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-solar/10 border border-accent-solar/30 text-accent-solar text-xs font-mono font-bold uppercase tracking-wider mb-4">
                    <Building2 className="w-4 h-4" />
                    <span>Project Execution</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                    Turnkey Execution for 50 kW+ Projects
                  </h3>

                  <p className="text-text-primary text-base sm:text-lg font-medium leading-relaxed">
                    PAA SOLAR directly executes turnkey EPC projects <strong>above 50 kW</strong> (Commercial, Industrial, PM-KUSUM, PM-SSY, and IPP Utility Solar Parks).
                  </p>
                </div>

                <div className="pt-6 border-t border-line/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-bold text-accent-solar">
                  <span className="bg-accent-solar/10 px-3 py-1.5 rounded-xl border border-accent-solar/20">Direct EPC Engineering</span>
                  <span className="bg-accent-solar/10 px-3 py-1.5 rounded-xl border border-accent-solar/20">50 kW to 100 MW+</span>
                </div>
              </div>

              {/* Visual Badge Side */}
              <div className="lg:col-span-5 lg:order-2">
                <div className="p-8 rounded-3xl bg-bg-primary border border-line/80 shadow-2xl flex flex-col items-center justify-center text-center space-y-4 group-hover:border-accent-solar/50 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-accent-solar/10 border border-accent-solar/30 flex items-center justify-center text-accent-solar shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-text-primary">
                    50 kW+ Turnkey EPC
                  </h4>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-solar/10 text-accent-solar text-xs font-mono font-bold uppercase tracking-wider">
                    <span>Direct Factory EPC Execution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Product Distribution (Zig-Zag Row 2) */}
          <div
            data-cursor="explore"
            className="group relative rounded-3xl p-8 lg:p-12 bg-bg-secondary/60 border border-emerald-500/40 hover:border-emerald-500/80 transition-all duration-500 overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-bg-secondary to-bg-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Badge Side (Inverted) */}
              <div className="lg:col-span-5 lg:order-1">
                <div className="p-8 rounded-3xl bg-bg-primary border border-line/80 shadow-2xl flex flex-col items-center justify-center text-center space-y-4 group-hover:border-emerald-500/50 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-text-primary">
                    3 kW - 10 kW Complete Kits
                  </h4>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider">
                    <span>PM SGY Partner Distribution</span>
                  </div>
                </div>
              </div>

              {/* Text Side (Inverted) */}
              <div className="lg:col-span-7 lg:order-2 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                    <Truck className="w-4 h-4" />
                    <span>Product Distribution</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                    Complete Solar Kits (3 kW - 10 kW) for Distribution Partners
                  </h3>

                  <p className="text-text-primary text-base sm:text-lg font-medium leading-relaxed">
                    We provide and distribute many brands and Complete Solar Kits for the distributor or franchise easy installation under PM SGY (3 kW, 5 kW, 8 kW, 10 kW Ongrid & Hybrid) featuring <strong>22.8%+ TOPCon DCR Panels</strong>, Smart Inverters, LiFePO4 Storage, Mounting Structures, ACDB/DCDB, Net Meters, and Protection Accessories directly to our distribution partners for easy transport and one-stop fulfillment.
                  </p>
                </div>

                <div className="pt-6 border-t border-line/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-bold text-emerald-500">
                  <span className="bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">PM SGY Kit Distribution</span>
                  <span className="bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">3 kW to 10 kW Kits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
