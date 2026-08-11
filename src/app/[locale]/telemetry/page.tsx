'use client';

import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { EnergyDashboard } from '@/components/sections/EnergyDashboard';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { Footer } from '@/components/sections/Footer';

export default function TelemetryPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />
      <EnergyDashboard />
      <ImpactStats />
      <Footer />
    </main>
  );
}
