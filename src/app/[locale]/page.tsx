import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { FaqJsonLd } from '@/components/seo/JsonLd';
import { Preloader } from '@/components/ui/Preloader';
import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { WhySolar } from '@/components/sections/WhySolar';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { SolarCalculator } from '@/components/sections/SolarCalculator';
import { TestimonialsMarquee } from '@/components/sections/TestimonialsMarquee';
import { FaqSection } from '@/components/sections/FaqSection';
import { Footer } from '@/components/sections/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'PAA SOLAR | Leading Solar EPC Company | C&I, PM-KUSUM & TOPCon Solar',
    description:
      'PAA SOLAR (EKCHAKRA GROUP) is India’s fast-growing solar EPC company delivering 30-40 year durable clean energy solutions. Specialist in 24%+ TOPCon & HJT solar panels, smart inverters, LFP battery storage, C&I rooftop solar, PM-KUSUM, and international solar exports.',
    path: '',
    locale,
  });
}

const homeFaqs = [
  {
    question: 'Why choose PAA SOLAR for commercial & industrial (C&I) rooftop solar?',
    answer:
      'PAA SOLAR provides turnkey EPC services with 30-40 year design engineering, 24%+ TOPCon module technology, tier-1 smart inverters, and complete grid compliance across India.',
  },
  {
    question: 'What solar technologies does PAA SOLAR deploy?',
    answer:
      'We deploy N-Type TOPCon & Heterojunction (HJT) Mono Bifacial panels, Lithium Iron Phosphate (LiFePO4/LFP) Battery Energy Storage Systems (BESS), and high-efficiency smart string inverters.',
  },
  {
    question: 'Does PAA SOLAR assist with PM-KUSUM and government solar schemes?',
    answer:
      'Yes, PAA SOLAR is an experienced EPC developer for PM-KUSUM Component A, B, C, PM-KUSUM BESS solarization, and PM Surya Ghar Muft Bijli Yojana.',
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <FaqJsonLd faqs={homeFaqs} />

      {/* Animated Sun Arc Preloader */}
      <Preloader />

      {/* Main Page Content */}
      <Navbar />
      <HeroSection />
      <ImpactStats />
      <WhySolar />
      <HowItWorks />
      <WhyUsSection />
      <ProductsGrid />
      <CaseStudies />
      <TestimonialsMarquee />
      <SolarCalculator />
      <FaqSection />
      <Footer />
    </main>
  );
}
