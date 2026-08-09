'use client';

import React from 'react';
import { Preloader } from '@/components/ui/Preloader';
import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { WhySolar } from '@/components/sections/WhySolar';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { EnergyDashboard } from '@/components/sections/EnergyDashboard';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { TestimonialsMarquee } from '@/components/sections/TestimonialsMarquee';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* Animated Sun Arc Preloader */}
      <Preloader />

      {/* Main Page Content */}
      <Navbar />
      <HeroSection />
      <ImpactStats />
      <WhySolar />
      <HowItWorks />
      <WhyUsSection />
      <ProductsGrid />
      <CaseStudies />
      <TestimonialsMarquee />
      <SolarCalculator />
      <Footer />
    </main>
  );
}
