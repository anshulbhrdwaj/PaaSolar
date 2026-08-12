import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Navbar } from '@/components/ui/Navbar';
import { EnergyDashboard } from '@/components/sections/EnergyDashboard';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { Footer } from '@/components/sections/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Live Solar Telemetry & SCADA IoT Energy Dashboard | PAA SOLAR',
    description:
      'Monitor live solar power generation, active inverter efficiency, battery state of charge (SoC), and real-time SCADA telemetry across PAA SOLAR plants.',
    path: '/telemetry',
    locale,
  });
}

export default function TelemetryPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Live Telemetry', url: '/telemetry' },
        ]}
      />
      <Navbar />
      <EnergyDashboard />
      <ImpactStats />
      <Footer />
    </main>
  );
}
