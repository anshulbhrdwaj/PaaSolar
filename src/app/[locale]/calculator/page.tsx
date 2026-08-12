import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Navbar } from '@/components/ui/Navbar';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { TestimonialsMarquee } from '@/components/sections/TestimonialsMarquee';
import { Footer } from '@/components/sections/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Solar ROI & Savings Calculator | PAA SOLAR',
    description:
      'Calculate your rooftop solar energy generation, monthly electricity bill savings, payback period, and CO2 offset with PAA SOLAR’s interactive solar calculator.',
    path: '/calculator',
    locale,
  });
}

export default function CalculatorPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Solar Calculator', url: '/calculator' },
        ]}
      />
      <Navbar />
      <SolarCalculator />
      <TestimonialsMarquee />
      <Footer />
    </main>
  );
}
