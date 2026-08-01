'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Navbar } from '@/components/ui/Navbar';
import { GetAQuoteCTA } from '@/components/sections/GetAQuoteCTA';
import { Footer } from '@/components/sections/Footer';
import { Home, SunMedium, Zap, BatteryCharging, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProductsPage() {
  const t = useTranslations('ProductDetails');

  const productsList = [
    {
      id: 'pm-surya-ghar',
      href: '/products/pm-surya-ghar',
      title: t('pmSuryaGhar.title'),
      tag: t('pmSuryaGhar.tag'),
      subtitle: t('pmSuryaGhar.subtitle'),
      icon: <Home className="w-8 h-8 text-emerald-500" />,
      badge: 'Up to ₹78,000 Direct Subsidy',
      specs: [t('pmSuryaGhar.subsidy1'), t('pmSuryaGhar.subsidy2'), t('pmSuryaGhar.subsidy3')],
    },
    {
      id: 'solar-panels',
      href: '/products/solar-panels',
      title: t('solarPanels.title'),
      tag: t('solarPanels.tag'),
      subtitle: t('solarPanels.subtitle'),
      icon: <SunMedium className="w-8 h-8 text-accent-solar" />,
      badge: '22.8% Module Efficiency',
      specs: [t('solarPanels.spec1'), t('solarPanels.spec2'), t('solarPanels.spec3')],
    },
    {
      id: 'inverters',
      href: '/products/inverters',
      title: t('inverters.title'),
      tag: t('inverters.tag'),
      subtitle: t('inverters.subtitle'),
      icon: <Zap className="w-8 h-8 text-accent-sky" />,
      badge: '< 10ms Islanding Speed',
      specs: [t('inverters.spec1'), t('inverters.spec2'), t('inverters.spec3')],
    },
    {
      id: 'battery',
      href: '/products/battery',
      title: t('battery.title'),
      tag: t('battery.tag'),
      subtitle: t('battery.subtitle'),
      icon: <BatteryCharging className="w-8 h-8 text-accent-gold" />,
      badge: '10,000+ Cycle Lifespan',
      specs: [t('battery.spec1'), t('battery.spec2'), t('battery.spec3')],
    },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="py-20 bg-gradient-to-b from-bg-secondary/60 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            Paa Solar Hardware & Government Schemes
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mt-3 mb-4">
            Next-Gen Solar Technology Catalogue
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            From government-subsidized rooftop initiatives to high-density TOPCon bifacial panels, smart hybrid inverters, and sovereign LFP energy storage.
          </p>
        </div>
      </section>

      {/* Products Grid Catalogue */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsList.map((prod) => (
            <Link
              key={prod.id}
              href={prod.href}
              className="group relative rounded-3xl p-8 bg-bg-secondary/70 border border-line hover:border-accent-solar/60 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-solar font-semibold">
                    {prod.tag}
                  </span>
                  <div className="p-3 rounded-2xl bg-bg-primary border border-line group-hover:scale-110 transition-transform">
                    {prod.icon}
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-accent-solar/10 text-accent-solar font-mono text-xs font-bold mb-3">
                  {prod.badge}
                </div>

                <h2 className="font-serif text-3xl font-bold text-text-primary mb-3 group-hover:text-accent-solar transition-colors">
                  {prod.title}
                </h2>

                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {prod.subtitle}
                </p>

                <div className="flex flex-col gap-2 pt-4 border-t border-line/60">
                  {prod.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-text-primary">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent-solar" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 flex items-center justify-between font-semibold text-xs text-accent-solar">
                <span>Explore Technical Specs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <GetAQuoteCTA />
      <Footer />
    </main>
  );
}
