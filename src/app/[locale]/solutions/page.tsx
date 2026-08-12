import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { Navbar } from '@/components/ui/Navbar';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { Footer } from '@/components/sections/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Clean Energy & Solar Solutions | PAA SOLAR',
    description:
      'Turnkey solar energy solutions from rooftop commercial systems to megawatt containerized BESS storage and international solar exports.',
    path: '/solutions',
    locale,
  });
}

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Solutions', url: '/solutions' },
        ]}
      />
      <ServiceJsonLd
        name="PAA SOLAR Clean Energy Solutions"
        description="Comprehensive solar EPC, rooftop commercial, utility solar, and battery storage solutions."
        serviceType="Turnkey Renewable Energy Solutions"
      />
      <Navbar />
      <ProductsGrid />
      <Footer />
    </main>
  );
}
