import React from 'react';
import type { Metadata } from 'next';
import ContactPage from '../contact/page';
import { constructMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Contact PAA SOLAR | Global Headquarters & EPC Inquiries',
    description:
      'Contact PAA SOLAR (EKCHAKRA GROUP) for C&I rooftop solar EPC, PM-KUSUM feeder solarization, battery energy storage, and international solar export inquiries.',
    path: '/contact',
    locale,
  });
}

export default ContactPage;
