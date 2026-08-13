import React from 'react';
import { useTranslations } from 'next-intl';
import { Building2, Truck } from 'lucide-react';
import Image from 'next/image';

export function ProductsGrid() {
  const t = useTranslations('Products');

  return (
    <section id="products" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-accent-solar/30 bg-accent-solar/10 text-accent-solar text-sm sm:text-base font-bold uppercase tracking-wider mb-4 shadow-md">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>{t('tag')}</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2">
            {t('title')}
          </h2>
          <p className="text-text-secondary text-base mt-3">
            {t('subtitle')}
          </p>
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
                <div className="p-6 rounded-3xl bg-bg-primary border border-line/80 shadow-2xl flex flex-col items-center justify-center text-center space-y-4 group-hover:border-emerald-500/50 transition-colors overflow-hidden">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-line bg-white">
                    <Image
                      src="/products/group.jpg"
                      alt="PM SGY Complete Solar Kit Group Equipment"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
