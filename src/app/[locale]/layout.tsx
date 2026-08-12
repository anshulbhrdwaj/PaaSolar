import type { Metadata } from 'next';
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import '../globals.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://paasolar.com';

  const locales = ['en', 'hi', 'gu', 'mr', 'bn', 'ta', 'te', 'kn', 'de', 'es'];
  const languageAlternates: Record<string, string> = {};
  locales.forEach((l) => {
    languageAlternates[l] = `${baseUrl}/${l}`;
  });

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'Paa Solar | Leading Solar EPC Company | C&I, PM-KUSUM & TOPCon Solar',
      template: '%s | Paa Solar - EKCHAKRA GROUP',
    },
    description:
      'PAA SOLAR (EKCHAKRA GROUP) is India’s fast-growing solar EPC company delivering 30-40 year durable clean energy solutions. Specialist in 24%+ TOPCon & HJT solar panels, smart inverters, LFP battery storage, C&I rooftop solar, PM-KUSUM, PM-SSY, and international solar exports across 8 countries.',
    keywords: [
      'Paa Solar',
      'Solar EPC Company India',
      'TOPCon Solar Panels',
      'HJT Solar Panels',
      'Mono Bifacial Solar Modules',
      'Smart Solar Inverters',
      'LiFePO4 Solar Battery',
      'PM-KUSUM Solar Scheme',
      'PM-KUSUM BESS',
      'PM Surya Ghar Yojana',
      'Commercial Rooftop Solar',
      'Industrial Solar Projects',
      'Solar Panel Export India',
      'EKCHAKRA GROUP',
    ],
    authors: [{ name: 'Paa Solar Engineering Team', url: baseUrl }],
    creator: 'Paa Solar • EKCHAKRA GROUP',
    publisher: 'PAA SOLAR',
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      title: 'Paa Solar | Leading Solar EPC Company | C&I, PM-KUSUM & TOPCon Solar',
      description:
        '30-40 Year Durable Renewable Energy Solutions across Commercial, Industrial, Utility Parks & Global Exports. Blessing from this generation to next generation.',
      url: `${baseUrl}/${locale}`,
      siteName: 'PAA SOLAR',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'PAA SOLAR - EKCHAKRA GROUP Solar EPC Infrastructure',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Paa Solar | Leading Solar EPC Company',
      description:
        'Turnkey EPC execution for 50 kW+ solar projects, TOPCon solar modules & global exports.',
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/logo_transparent.png', type: 'image/png' },
        { url: '/favicon.ico', type: 'image/x-icon' },
      ],
      shortcut: ['/logo_transparent.png'],
      apple: [
        { url: '/logo_transparent.png', type: 'image/png' },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${plusJakarta.variable}`}
    >
      <body
        suppressHydrationWarning
        className="antialiased selection:bg-accent-solar selection:text-white"
      >
        <JsonLd />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SmoothScrollProvider>
              <CustomCursor />
              <WhatsAppButton />
              {children}
            </SmoothScrollProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
