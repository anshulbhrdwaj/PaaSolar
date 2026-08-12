import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/routing";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PartnerLogosSection } from "@/components/sections/PartnerLogosSection";
import {
  SunMedium,
  Zap,
  BatteryCharging,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Download,
  Store,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: "Solar Products Catalogue | TOPCon Panels, Inverters & Battery Storage",
    description:
      "Explore PAA SOLAR’s high-performance equipment catalogue: 24%+ N-Type TOPCon solar panels, smart string inverters, LiFePO4 battery vaults, and turnkey enterprise BESS.",
    path: "/products",
    locale,
  });
}

export default function ProductsPage() {
  const productsList = [
    {
      id: "solar-panels",
      href: "/products/solar-panels",
      title: "Solar Panels (TOPCon & DCR)",
      tag: "N-Type TOPCon & DCR Subsidy Modules",
      subtitle:
        "High-density 24%+ efficiency N-Type TOPCon bifacial modules and DCR subsidy panels made in India.",
      icon: <SunMedium className="w-8 h-8 text-accent-solar" />,
      badge: "22.8%+ Module Efficiency",
      specs: [
        "N-Type TOPCon Technology",
        "DCR Subsidy Compliance",
        "30-Year Performance Guarantee",
      ],
    },
    {
      id: "inverters",
      href: "/products/inverters",
      title: "Smart Inverters (On-Grid, Off-Grid & Hybrid)",
      tag: "On-Grid, Off-Grid & Hybrid Inverters",
      subtitle:
        "High-efficiency string inverters with sub-10ms automatic blackout transfer and DISCOM net metering.",
      icon: <Zap className="w-8 h-8 text-accent-sky" />,
      badge: "99.2% MPPT Efficiency",
      specs: [
        "On-Grid Net Metering",
        "Off-Grid Generator Sync",
        "Hybrid Storage Backup",
      ],
    },
    {
      id: "battery",
      href: "/products/battery",
      title: "Lithium Battery Storage",
      tag: "Smart Lithium-Ion & LiFePO4 Vault",
      subtitle:
        "Ultra-safe Lithium Iron Phosphate (LiFePO4) & Lithium-Ion battery banks with 10,000+ deep discharge cycles.",
      icon: <BatteryCharging className="w-8 h-8 text-accent-gold" />,
      badge: "10,000+ Deep Cycles",
      specs: [
        "LiFePO4 Safe Chemistry",
        "AI Active Cell Balancing",
        "100% Usable DoD Capacity",
      ],
    },
    {
      id: "bess",
      href: "/products/bess",
      title: "BESS (ESS 3532 & Li UPS 1250)",
      tag: "Megawatt Enterprise Storage",
      subtitle:
        "Turnkey IP65 containerized ESS 3532 units and Li UPS 1250 high-discharge backup vaults.",
      icon: <Cpu className="w-8 h-8 text-emerald-500" />,
      badge: "3.53 MWh LFP Capacity",
      specs: [
        "ESS 3532 Container Unit",
        "Li UPS 1250 High Output",
        "Sub-10ms Islanding Speed",
      ],
    },
    {
      id: "franchise-sgy",
      href: "/products/franchise-sgy",
      title: "Complete Solar Kit & PM SGY Franchise Offer",
      tag: "Complete Solar Kits & PM SGY Dealer Network",
      subtitle:
        "Complete turnkey solar kits (1kW to 10kW) featuring TOPCon DCR modules, inverters & official PM Surya Ghar dealer franchise packages.",
      icon: <Store className="w-8 h-8 text-emerald-400" />,
      badge: "1 kW to 10 kW Kits & Franchise",
      specs: [
        "Complete Ready-to-Install Kits",
        "PM Surya Ghar Portal Compliant",
        "Exclusive District Dealer Franchise Offer",
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
        ]}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-20 bg-gradient-to-b from-bg-secondary/60 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
            PAA SOLAR SUPPLY
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mt-3 mb-4">
            Paa Solar Supply
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            From government-subsidized rooftop initiatives to high-density
            TOPCon bifacial panels, smart hybrid inverters, and sovereign LFP
            energy storage.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="/Paa_Solar_Product_Catalogue_2026.pdf"
              download="Paa_Solar_Product_Catalogue_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent-solar text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-accent-solar/30 hover:bg-accent-solar/90 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Product Catalogue (PDF)</span>
            </a>
          </div>
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
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-medium text-text-primary"
                    >
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

      {/* Supply Partners & Authorized Brand Logos Section */}
      <PartnerLogosSection />

      <Footer />
    </main>
  );
}
