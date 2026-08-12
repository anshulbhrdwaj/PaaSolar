import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Navbar } from '@/components/ui/Navbar';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { Footer } from '@/components/sections/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Solar Projects & Case Studies | C&I, PM-KUSUM & Utility Power Plants',
    description:
      'Explore PAA SOLAR’s executed solar engineering portfolio across Commercial & Industrial rooftop installations, PM-KUSUM feeder projects, and utility IPP solar parks.',
    path: '/projects',
    locale,
  });
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
        ]}
      />
      <Navbar />
      <CaseStudies />
      <SolarCalculator />
      <Footer />
    </main>
  );
}
