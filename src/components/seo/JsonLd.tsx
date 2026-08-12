import React from 'react';

export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PAA SOLAR',
    legalName: 'PAA SOLAR (EKCHAKRA GROUP)',
    url: 'https://paasolar.com',
    logo: 'https://paasolar.com/Paa.png',
    description:
      'Fast-growing solar EPC company delivering 30-40 year durable clean energy solutions across India and international markets. Part of EKCHAKRA GROUP.',
    foundingDate: '2016',
    founders: [
      {
        '@type': 'Person',
        name: 'EKCHAKRA GROUP Leadership',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9311922134',
        contactType: 'customer service',
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
      'https://wa.me/919311922134',
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
      { '@type': 'Organization', name: 'Pareshaanho' },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'SolarEnergySystemInstaller',
    name: 'PAA SOLAR',
    image: 'https://paasolar.com/og-image.jpg',
    '@id': 'https://paasolar.com/#business',
    url: 'https://paasolar.com',
    telephone: '+91-9311922134',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai, Bengaluru, Gurugram',
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
    url: 'https://paasolar.com',
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
