'use client';

import React, { useState } from 'react';
import { Preloader } from '@/components/ui/Preloader';
import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { WhySolar } from '@/components/sections/WhySolar';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { EnergyDashboard } from '@/components/sections/EnergyDashboard';
import { TestimonialsMarquee } from '@/components/sections/TestimonialsMarquee';
import { GetAQuoteCTA } from '@/components/sections/GetAQuoteCTA';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* Animated Sun Arc Preloader */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* Main Page Content */}
      <Navbar />
      <HeroSection />
      <ImpactStats />
      <WhySolar />
      <HowItWorks />
      <ProductsGrid />
      <CaseStudies />
      <EnergyDashboard />
      <TestimonialsMarquee />
      <GetAQuoteCTA />
      <Footer />
    </main>
  );
}
