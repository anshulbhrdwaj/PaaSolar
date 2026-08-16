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
    'PAA SOLAR',
    'Paa Solar',
    'Paa Solar EPC',
    'PAA SOLAR Official Website',
    'Paa Solar Energy',
    'Paa Solar Panels',
    'Paa Solar Inverters',
    'PAA SOLAR EKCHAKRA GROUP',
    'PAA SOLAR India',
    'Paa Solar Rooftop Solutions',
    'Paa Solar Products',
    'Paa Solar Projects',
    'Paa Solar Contact',
    'Solar EPC Company India',
    'TOPCon Solar Panels',
    'HJT Solar Modules',
    'Mono Bifacial Solar Modules',
    'Smart Solar Inverters',
    'LiFePO4 Solar Battery Storage',
    'PM-KUSUM Solar Scheme',
    'PM-KUSUM BESS',
    'PM Surya Ghar Muft Bijli Yojana',
    'Commercial Rooftop Solar EPC',
    'Industrial Solar Energy Projects',
    'Solar Panel Export India',
    'EKCHAKRA GROUP',
  ],
  image = '/og-image.jpg',
  noIndex = false,
}: ConstructMetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | PAA SOLAR™ - EKCHAKRA GROUP`
    : 'PAA SOLAR™ | Official Website | India\'s Premier Solar EPC Company';

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
    authors: [{ name: 'PAA SOLAR Engineering Team', url: SITE_URL }],
    creator: 'PAA SOLAR • EKCHAKRA GROUP',
    publisher: 'PAA SOLAR',
    category: 'Energy & Utility / Solar EPC',
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
          alt: `${title || 'PAA SOLAR'} - Official Solar EPC & Clean Energy Solutions`,
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
