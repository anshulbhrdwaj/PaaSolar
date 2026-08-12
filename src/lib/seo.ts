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
  description = 'PAA SOLAR (EKCHAKRA GROUP) is India’s fast-growing solar EPC company delivering 30-40 year durable clean energy solutions. Specialist in TOPCon & HJT solar panels, smart inverters, LFP battery storage, C&I rooftop solar, PM-KUSUM, and international solar exports.',
  path = '',
  locale = 'en',
  keywords = [
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
  image = '/og-image.jpg',
  noIndex = false,
}: ConstructMetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | Paa Solar - EKCHAKRA GROUP`
    : 'Paa Solar | Leading Solar EPC Company | C&I, PM-KUSUM & TOPCon Solar';

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}/${locale}${cleanPath === '/' ? '' : cleanPath}`;

  const languageAlternates: Record<string, string> = {};
  SUPPORTED_LOCALES.forEach((loc) => {
    languageAlternates[loc] = `${SITE_URL}/${loc}${cleanPath === '/' ? '' : cleanPath}`;
  });

  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description,
    keywords,
    authors: [{ name: 'Paa Solar Engineering Team', url: SITE_URL }],
    creator: 'Paa Solar • EKCHAKRA GROUP',
    publisher: 'PAA SOLAR',
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
          alt: `${title || 'PAA SOLAR'} - Solar Infrastructure & Energy Solutions`,
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
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/Paa.png', type: 'image/png' },
      ],
      shortcut: ['/favicon.svg'],
      apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    },
  };
}
