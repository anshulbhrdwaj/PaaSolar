import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Navbar } from '@/components/ui/Navbar';
import { WhySolar } from '@/components/sections/WhySolar';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { FaqSection } from '@/components/sections/FaqSection';
import { Footer } from '@/components/sections/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Why Solar Energy? | Economic ROI & Decarbonization Benefits',
    description:
      'Learn why switching to solar energy with PAA SOLAR provides 30-40 years of free green power, accelerated depreciation tax savings, and resilience against grid outages.',
    path: '/why-solar',
    locale,
  });
}

export default function WhySolarPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Why Solar', url: '/why-solar' },
        ]}
      />
      <Navbar />
      <WhySolar />
      <HowItWorks />
      <ImpactStats />
      <FaqSection />
      <Footer />
    </main>
  );
}
