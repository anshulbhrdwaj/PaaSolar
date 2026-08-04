import React from 'react';

export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PAA SOLAR',
    legalName: 'PAA SOLAR (EKCHAKRA GROUP)',
    url: 'https://paasolar.com',
    logo: 'https://paasolar.com/logo.png',
    description:
      'Fast-growing solar company delivering sustainable and efficient renewable energy solutions across India and international markets. Part of EKCHAKRA GROUP.',
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
        availableLanguage: ['English', 'Hindi', 'Gujarati', 'Marathi', 'Bengali', 'Tamil', 'Telugu', 'Kannada', 'German', 'Spanish'],
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
      target: 'https://paasolar.com/search?q={search_term_string}',
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
