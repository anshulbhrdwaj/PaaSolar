import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { LogoShowcaseClient } from '@/components/ui/LogoShowcaseClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'PAA SOLAR Official Logo Showcase & Vector SVG Assets',
    description:
      'Explore the official PAA SOLAR high-resolution vector logo showcase, standalone emblem SVGs, and brand graphics rendered in vector precision.',
    path: '/logo',
    locale,
  });
}

export default function LogoPage() {
  return (
    <main className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Logo Showcase', url: '/logo' },
        ]}
      />
      <LogoShowcaseClient />
    </main>
  );
}
