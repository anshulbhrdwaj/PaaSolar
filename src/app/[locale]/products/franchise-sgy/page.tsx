import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PartnerLogosSection } from '@/components/sections/PartnerLogosSection';
import { Store, ArrowRight, Truck, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Franchise & PM Surya Ghar Yojana Dealer Network | PAA SOLAR',
    description:
      'Become an official PAA SOLAR Franchisee or District Distributor for PM Surya Ghar Yojana (PM SGY) solar kits (1kW to 10kW) with TOPCon DCR modules and DISCOM portal support.',
    path: '/products/franchise-sgy',
    locale,
  });
}

export default function FranchiseSgyPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Franchise & PM SGY', url: '/products/franchise-sgy' },
        ]}
      />
      <ServiceJsonLd
        name="PM Surya Ghar Yojana Franchise & Solar Kit Distribution"
        description="Turnkey PM SGY solar kits (1kW to 10kW) and district dealership distribution network with factory-direct supply."
        serviceType="Solar Franchise & Distribution"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-emerald-500/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-semibold uppercase tracking-wider">
              <Store className="w-4 h-4" />
              <span>AUTHORIZED DEALER & DISTRIBUTOR NETWORK</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary leading-tight">
              Franchise & Distribution for PM Surya Ghar Yojana (PM SGY)
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              Become an official PAA SOLAR Franchisee or District Distributor for PM Surya Ghar Yojana solar kits. We provide and distribute many brands and Complete Solar Kits featuring 22.8%+ TOPCon DCR modules, smart inverters, mounting structures, and DISCOM subsidy portal support.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-emerald-500/30 hover:bg-emerald-600 transition-all flex items-center gap-2"
              >
                <span>Apply for Franchise & Distribution</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-bg-secondary border border-line shadow-2xl space-y-6">
              <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-white/60 border border-line p-3 flex items-center justify-center shadow-inner">
                <Image
                  src="/products/panel5.png"
                  alt="Complete PM Surya Ghar Solar Kit Package"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">PM SGY KITS</span>
                <span className="font-serif text-3xl font-bold text-emerald-500">1 kW to 10 kW</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">MODULE TYPE</span>
                <span className="font-serif text-2xl font-bold text-accent-solar">DCR TOPCon 22.8%+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">SUBSIDY PORTAL</span>
                <span className="font-serif text-2xl font-bold text-text-primary">National Portal Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-bg-secondary/50 border border-line space-y-8">
          <div className="max-w-2xl">
            <h3 className="font-serif text-3xl font-bold text-text-primary mb-2">
              Why Partner with PAA SOLAR for PM SGY Distribution?
            </h3>
            <p className="text-text-secondary text-sm font-medium">
              Turnkey distribution kit support, marketing assistance, and nationwide logistics fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-medium">
            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary mb-1">Single Window PM SGY Complete Kits</h4>
                <p className="text-text-secondary leading-relaxed">
                  Pre-bundled kits including 24%+ TOPCon DCR Solar Panels, Hybrid Inverters, ACDB/DCDB, cables, and earthing protection.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent-solar/10 text-accent-solar shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary mb-1">Direct Factory Logistics & Supply</h4>
                <p className="text-text-secondary leading-relaxed">
                  Fast regional dispatch from our Jaipur central warehouse to your district franchise location.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary mb-1">DISCOM Net-Metering & Vendor Registration</h4>
                <p className="text-text-secondary leading-relaxed">
                  Complete technical assistance for National Portal Empanelment and DISCOM net-metering approvals.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-bg-primary border border-line flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-primary mb-1">Exclusive Regional Territory Rights</h4>
                <p className="text-text-secondary leading-relaxed">
                  District-level monopoly rights for high-volume distributors and authorized retail channel partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Brand & Supply Partners */}
      <PartnerLogosSection />

      <Footer />
    </main>
  );
}
