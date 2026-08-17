import type { Metadata } from 'next';

export const SITE_URL = 'https://paasolar.com';
export const SUPPORTED_LOCALES = [
  'en',
  'hi',
  'gu',
  'mr',
  'bn',
  'ta',
  'te',
  'kn',
  'de',
  'es',
] as const;

export interface ConstructMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  locale?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = 'PAA SOLAR (EKCHAKRA GROUP) is India’s fast-growing solar EPC company delivering 30-40 year durable clean energy solutions. Official manufacturer & EPC provider for TOPCon & HJT solar panels, smart solar inverters, LFP battery storage, C&I rooftop solar, PM-KUSUM, and international solar exports.',
  path = '',
  locale = 'en',
  keywords = [
    'paa solar',
    'paasolar',
    'PAA SOLAR',
    'PAA SOLAR PRIVATE LIMITED',
    'Paa Solar EPC',
    'PAA SOLAR Official Website',
    'paasolar.com',
    'Paa Solar Energy',
    'Paa Solar Panels',
    'Paa Solar Inverters',
    'PAA SOLAR EKCHAKRA GROUP',
    'PAA SOLAR India',
    'Paa Solar Rooftop Solutions',
    'Paa Solar Products',
    'Paa Solar Projects',
    'Paa Solar Contact',
    'Paa Solar Calculator',
    'Solar EPC Company India',
    'Solar EPC Company Jaipur Rajasthan',
    'Best Solar Company in India',
    'TOPCon Solar Panels 585W',
    'N-Type TOPCon Solar Modules',
    'DCR Subsidy Solar Panels India',
    'HJT Bifacial Solar Panels',
    'Smart Hybrid Solar Inverter',
    'On-Grid Net Metering Inverter',
    'LiFePO4 Solar Battery Storage',
    'Containerized BESS Solar System',
    'PM-KUSUM Solar Scheme Component A B C',
    'PM-KUSUM BESS Solar Parks',
    'PM Surya Ghar Muft Bijli Yojana Franchise',
    'Commercial Rooftop Solar EPC Installer',
    'Industrial Solar Park EPC Contractor',
    'Solar Equipment Exporter India',
    'EKCHAKRA GROUP',
  ],
  image = '/og-image.jpg',
  noIndex = false,
}: ConstructMetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | PAA SOLAR™`
    : 'PAA SOLAR™ | Official Website | Premier Solar EPC & Energy Solutions India';

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}/${locale}${cleanPath === '/' ? '' : cleanPath}`;

  const languageAlternates: Record<string, string> = {
    'x-default': `${SITE_URL}/en${cleanPath === '/' ? '' : cleanPath}`,
  };
  SUPPORTED_LOCALES.forEach((loc) => {
    languageAlternates[loc] = `${SITE_URL}/${loc}${cleanPath === '/' ? '' : cleanPath}`;
  });

  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description,
    keywords,
    applicationName: 'PAA SOLAR',
    authors: [{ name: 'PAA SOLAR Engineering Team', url: SITE_URL }],
    creator: 'PAA SOLAR • EKCHAKRA GROUP',
    publisher: 'PAA SOLAR PRIVATE LIMITED',
    category: 'Energy & Utility / Solar EPC',
    formatDetection: {
      telephone: true,
      address: true,
      email: true,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-paasolar',
      yandex: 'yandex-verification-paasolar',
      other: {
        'msvalidate.01': ['msvalidate-paasolar'],
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: 'PAA SOLAR',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${title || 'PAA SOLAR'} - Premier Solar EPC & Renewable Energy Solutions`,
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [fullImageUrl],
      creator: '@paasolar',
      site: '@paasolar',
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            'max-video-preview': 0,
            'max-image-preview': 'none',
            'max-snippet': 0,
          },
        }
      : {
          index: true,
          follow: true,
          nocache: false,
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
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      shortcut: ['/icon.svg'],
      apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    },
  };
}
