'use client';

import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { WhySolar } from '@/components/sections/WhySolar';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { Footer } from '@/components/sections/Footer';

export default function WhySolarPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />
      <WhySolar />
      <HowItWorks />
      <ImpactStats />
      <SolarCalculator />
      <Footer />
    </main>
  );
}
