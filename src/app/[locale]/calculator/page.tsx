'use client';

import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { TestimonialsMarquee } from '@/components/sections/TestimonialsMarquee';
import { Footer } from '@/components/sections/Footer';

export default function CalculatorPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />
      <SolarCalculator />
      <TestimonialsMarquee />
      <Footer />
    </main>
  );
}
