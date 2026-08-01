'use client';

import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { GetAQuoteCTA } from '@/components/sections/GetAQuoteCTA';
import { TestimonialsMarquee } from '@/components/sections/TestimonialsMarquee';
import { Footer } from '@/components/sections/Footer';

export default function GetAQuotePage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <Navbar />
      <GetAQuoteCTA />
      <TestimonialsMarquee />
      <Footer />
    </main>
  );
}
