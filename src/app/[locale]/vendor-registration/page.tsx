import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { VendorForm } from '@/components/forms/VendorForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Vendor & Supply Partner Registration | PAA SOLAR',
    description:
      'Register as an authorized vendor, EPC partner, or equipment supplier with PAA SOLAR (EKCHAKRA GROUP) for solar modules, inverters, and BOS components.',
    path: '/vendor-registration',
    locale,
  });
}

export default function VendorRegistrationPage() {
  const t = useTranslations('CorporatePages.vendor');

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Vendor Registration', url: '/vendor-registration' },
        ]}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-20 bg-gradient-to-b from-emerald-500/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-500 font-semibold">
            {t('tag')}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mt-3 mb-4">
            {t('title')}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <VendorForm />
      </section>

      <Footer />
    </main>
  );
}
