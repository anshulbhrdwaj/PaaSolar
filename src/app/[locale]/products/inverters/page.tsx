import React from 'react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Zap, CheckCircle2, Download } from 'lucide-react';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'On-Grid, Hybrid & Off-Grid Smart Solar Inverters | PAA SOLAR',
  description:
    '99.2% MPPT efficiency smart solar inverters with sub-10ms islanding transfer, IP65 weatherproof rating & real-time IoT cloud monitoring.',
  openGraph: {
    title: 'On-Grid, Hybrid & Off-Grid Smart Solar Inverters | PAA SOLAR',
    description:
      'High-efficiency solar inverter solutions for commercial, industrial, and agricultural installations.',
  },
};

export default function InvertersPage() {
  const t = useTranslations('ProductDetails.inverters');

  const specs = [
    { label: 'Inverter Topology', val: 'On-Grid, Hybrid & Off-Grid' },
    { label: 'MPPT Efficiency', val: '99.2%' },
    { label: 'Islanding Transfer', val: '< 10 Milliseconds' },
    { label: 'Protection Rating', val: 'IP65 Weatherproof' },
    { label: 'Grid Tie Compatibility', val: 'Net-Metering Ready' },
    { label: 'App Monitoring', val: 'WiFi / 4G Real-Time Cloud' },
    { label: 'Warranty Standard', val: '10 Years Replacement' },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-sky/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-sky/30 bg-accent-sky/10 text-accent-sky text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
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
                Inquire Smart Inverters
              </Link>
              <a
                href="/Paa_Solar_Product_Catalogue_2026.pdf"
                download="Paa_Solar_Product_Catalogue_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full border border-line bg-bg-secondary hover:bg-bg-secondary/80 text-text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-accent-sky" />
                <span>Download Catalogue (PDF)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">MPPT EFFICIENCY</span>
                <span className="font-serif text-3xl font-bold text-accent-sky">{t('spec1')}</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">ISLANDING SPEED</span>
                <span className="font-serif text-2xl font-bold text-emerald-500">{t('spec2')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">ENCLOSURE</span>
                <span className="font-serif text-2xl font-bold text-text-primary">{t('spec3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-sky font-semibold">
            Inverter Performance Data
          </span>
          <h2 className="font-serif text-4xl font-bold text-text-primary mt-2">
            Smart Power Intelligence Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specs.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-bg-secondary/60 border border-line flex flex-col justify-between">
              <span className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">{item.label}</span>
              <span className="font-serif text-2xl font-bold text-text-primary">{item.val}</span>
            </div>
          ))}
        </div>

        {/* On-Grid, Off-Grid & Hybrid Category Showcase */}
        <div className="mt-16 space-y-12">
          {/* On-Grid Inverters Card */}
          <div id="ongrid" className="scroll-mt-28 p-8 lg:p-10 rounded-3xl bg-bg-secondary/70 border border-accent-sky/40 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent-sky font-bold">GRID-TIED SERIES</span>
                <h3 className="font-serif text-3xl font-bold text-text-primary mt-1">On-Grid Solar Inverters</h3>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-accent-sky/10 border border-accent-sky/30 text-accent-sky text-xs font-mono font-bold">99.2% MPPT Efficiency</span>
            </div>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              High-efficiency grid-tied string inverters engineered for seamless DISCOM net-metering synchronization. Features multi-MPPT trackers for complex roof angles, integrated DC/AC surge protection, and real-time WiFi/4G cloud monitoring for commercial rooftops, PM-KUSUM feeder plants, and utility IPP solar parks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-line/60 text-xs font-medium text-text-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-sky shrink-0" />
                <span>DISCOM Net-Metering Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-sky shrink-0" />
                <span>Multi-MPPT Solar Trackers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-sky shrink-0" />
                <span>Anti-Islanding Protection</span>
              </div>
            </div>
          </div>

          {/* Off-Grid Inverters Card */}
          <div id="offgrid" className="scroll-mt-28 p-8 lg:p-10 rounded-3xl bg-bg-secondary/70 border border-accent-gold/40 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent-gold font-bold">STANDALONE POWER</span>
                <h3 className="font-serif text-3xl font-bold text-text-primary mt-1">Off-Grid Solar Inverters</h3>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs font-mono font-bold">Integrated MPPT Controller</span>
            </div>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Heavy-duty standalone inverters designed for remote locations without grid connectivity. Combines high-voltage MPPT solar charger, pure sine wave power conversion, and automatic diesel generator start logic for off-grid farmhouses, telecommunication towers, commercial microgrids, and rural electrification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-line/60 text-xs font-medium text-text-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                <span>Pure Sine Wave Output</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                <span>Auto Generator Trigger</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                <span>High Surge Load Capacity</span>
              </div>
            </div>
          </div>

          {/* Hybrid Inverters Card */}
          <div id="hybrid" className="scroll-mt-28 p-8 lg:p-10 rounded-3xl bg-bg-secondary/70 border border-emerald-500/40 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-bold">INTELLIGENT STORAGE SYNC</span>
                <h3 className="font-serif text-3xl font-bold text-text-primary mt-1">Hybrid Smart Inverters</h3>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-bold">&lt; 10ms Blackout Transfer</span>
            </div>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Next-generation hybrid bi-directional inverters that seamlessly balance solar PV generation, grid power, and LiFePO4 battery storage. Features instant uninterruptible backup, peak load shaving, and smart zero-feed-in export control for uninterrupted power security during severe grid outages.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-line/60 text-xs font-medium text-text-primary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sub-10ms Islanding Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>LiFePO4 BESS Battery Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>AI Peak Shaving & Load Export</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-bg-secondary/50 border border-line space-y-4 mt-16">
          <h3 className="font-serif text-2xl font-bold text-text-primary mb-4">Inverter Feature Matrix</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-text-secondary">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-sky flex-shrink-0" />
              <span>{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-sky flex-shrink-0" />
              <span>{t('feature2')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-sky flex-shrink-0" />
              <span>{t('feature3')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent-sky flex-shrink-0" />
              <span>{t('feature4')}</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
