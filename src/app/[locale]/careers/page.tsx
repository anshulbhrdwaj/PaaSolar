import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CheckCircle2 } from 'lucide-react';
import { CareersJobList } from '@/components/careers/CareersJobList';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Careers & Solar Energy Engineering Jobs | PAA SOLAR',
    description:
      'Join PAA SOLAR (EKCHAKRA GROUP) in driving India’s energy transition. Explore careers in solar EPC engineering, project operations, battery storage R&D, and regulatory affairs.',
    path: '/careers',
    locale,
  });
}

export default function CareersPage() {
  const t = useTranslations('CorporatePages.careers');

  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Careers', url: '/careers' },
        ]}
      />
      <Navbar />

      {/* Hero Header */}
      <section className="py-24 bg-gradient-to-b from-accent-solar/10 via-bg-secondary/50 to-bg-primary border-b border-line">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-solar font-semibold">
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

      {/* Culture & Benefits */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="p-8 rounded-3xl bg-bg-secondary/60 border border-line space-y-4 mb-16">
          <h3 className="font-serif text-3xl font-bold text-text-primary mb-4">{t('cultureTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-medium text-text-secondary">
            <div className="p-4 rounded-2xl bg-bg-primary border border-line flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent-solar flex-shrink-0" />
              <span>{t('benefit1')}</span>
            </div>
            <div className="p-4 rounded-2xl bg-bg-primary border border-line flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent-solar flex-shrink-0" />
              <span>{t('benefit2')}</span>
            </div>
            <div className="p-4 rounded-2xl bg-bg-primary border border-line flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent-solar flex-shrink-0" />
              <span>{t('benefit3')}</span>
            </div>
          </div>
        </div>

        {/* Job Openings Client List */}
        <CareersJobList />
      </section>

      <Footer />
    </main>
  );
}
