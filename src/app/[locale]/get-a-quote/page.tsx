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
    title: 'Get Instant Solar Quotation & Technical Proposal | PAA SOLAR',
    description:
      'Request an instant customized solar EPC quotation and engineering proposal for C&I rooftop, PM-KUSUM feeder solarization, or battery energy storage.',
    path: '/get-a-quote',
    locale,
  });
}

export default function GetAQuotePage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Get a Quote', url: '/get-a-quote' },
        ]}
      />
      <Navbar />
      <SolarCalculator />
      <TestimonialsMarquee />
      <Footer />
    </main>
  );
}
