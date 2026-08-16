import React from 'react';

export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PAA SOLAR',
    legalName: 'PAA SOLAR PRIVATE LIMITED (EKCHAKRA GROUP)',
    alternateName: [
      'Paa Solar',
      'PAA Solar EPC',
      'PAA Solar Energy',
      'Paa Solar Panels',
      'PAA SOLAR Official Website',
      'PAA SOLAR (EKCHAKRA GROUP)',
      'PAA SOLAR India',
    ],
    url: 'https://paasolar.com',
    logo: 'https://paasolar.com/paa_solar_logo.svg',
    image: 'https://paasolar.com/og-image.jpg',
    description:
      'India’s fast-growing solar EPC company delivering 30-40 year durable clean energy solutions, TOPCon & HJT solar panels, smart solar inverters, LFP battery storage, and C&I rooftop solar projects across India and 8+ international export countries. Part of EKCHAKRA GROUP.',
    foundingDate: '2016',
    slogan: 'Blessing from this generation to next generation',
    knowsAbout: [
      'Solar EPC Engineering & Turnkey Installation',
      'TOPCon & HJT Solar Modules',
      'LiFePO4 Containerized BESS Battery Storage',
      'Commercial & Industrial (C&I) Rooftop Solar',
      'PM-KUSUM Component A, B, C & PM-SSY Schemes',
      'PM Surya Ghar Muft Bijli Yojana',
      'International Solar Equipment Exports',
    ],
    founders: [
      {
        '@type': 'Person',
        name: 'EKCHAKRA GROUP Leadership',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-7357169795',
        contactType: 'customer service',
        email: 'info@paasolar.com',
        availableLanguage: [
          'English',
          'Hindi',
          'Gujarati',
          'Marathi',
          'Bengali',
          'Tamil',
          'Telugu',
          'Kannada',
          'German',
          'Spanish',
        ],
        areaServed: ['IN', 'SG', 'OM', 'ZA', 'MA', 'BR', 'NZ', 'NP', 'BD'],
      },
    ],
    sameAs: [
      'https://wa.me/917357169795',
      'https://linkedin.com/company/paasolar',
      'https://twitter.com/paasolar',
      'https://instagram.com/paasolar',
      'https://youtube.com/paasolar',
    ],
    subOrganization: [
      { '@type': 'Organization', name: 'EKCHAKRA International Pvt. Ltd.' },
      { '@type': 'Organization', name: 'B K Metal' },
      { '@type': 'Organization', name: 'RJ Travel Junction' },
      { '@type': 'Organization', name: 'Shilp Craft' },
      { '@type': 'Organization', name: 'Delight Apparel' },
      { '@type': 'Organization', name: 'Aapka Haq' },
    ],
  };

  const brandSchema = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: 'PAA SOLAR',
    alternateName: 'Paa Solar',
    logo: 'https://paasolar.com/paa_solar_logo.svg',
    url: 'https://paasolar.com',
    description: 'Premier Solar EPC & Renewable Clean Energy Solutions',
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'SolarEnergySystemInstaller',
    name: 'PAA SOLAR',
    alternateName: 'Paa Solar EPC',
    image: 'https://paasolar.com/og-image.jpg',
    '@id': 'https://paasolar.com/#business',
    url: 'https://paasolar.com',
    telephone: '+91-7357169795',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai, Bengaluru, Gurugram, Delhi NCR, Ahmedabad',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.0760',
      longitude: '72.8777',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PAA SOLAR',
    alternateName: 'Paa Solar Official Website',
    url: 'https://paasolar.com',
    publisher: {
      '@type': 'Organization',
      name: 'PAA SOLAR',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://paasolar.com/products?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://paasolar.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  image,
  category = 'Solar Equipment',
  url,
  brand = 'PAA SOLAR',
  sku,
}: {
  name: string;
  description: string;
  image?: string;
  category?: string;
  url?: string;
  brand?: string;
  sku?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    category,
    image: image ? (image.startsWith('http') ? image : `https://paasolar.com${image}`) : 'https://paasolar.com/og-image.jpg',
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    sku: sku || name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      highPrice: '5000000',
      lowPrice: '15000',
      offerCount: '100',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'PAA SOLAR',
      },
    },
    ...(url && { url: url.startsWith('http') ? url : `https://paasolar.com${url}` }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  serviceType = 'Solar EPC Engineering',
  providerName = 'PAA SOLAR (EKCHAKRA GROUP)',
  areaServed = 'India & Global Markets',
}: {
  name: string;
  description: string;
  serviceType?: string;
  providerName?: string;
  areaServed?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: {
      '@type': 'Organization',
      name: providerName,
      url: 'https://paasolar.com',
    },
    areaServed,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
