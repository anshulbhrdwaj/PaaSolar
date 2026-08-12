import type { MetadataRoute } from 'next';
import { SITE_URL, SUPPORTED_LOCALES } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about-us',
    '/why-solar',
    '/working-methodology',
    '/products',
    '/products/solar-panels',
    '/products/inverters',
    '/products/battery',
    '/products/bess',
    '/products/franchise-sgy',
    '/projects',
    '/projects/ci',
    '/projects/pm-kusum',
    '/projects/pm-kusum-bess',
    '/projects/ipp',
    '/solutions',
    '/b2b',
    '/export',
    '/vendor-registration',
    '/careers',
    '/calculator',
    '/get-a-quote',
    '/contact',
    '/contact-us',
    '/telemetry',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    SUPPORTED_LOCALES.forEach((locale) => {
      let priority = 0.7;
      if (route === '') priority = 1.0;
      else if (
        route === '/about-us' ||
        route === '/products' ||
        route === '/projects' ||
        route === '/solutions' ||
        route === '/get-a-quote'
      )
        priority = 0.9;
      else if (route.startsWith('/products/') || route.startsWith('/projects/'))
        priority = 0.8;

      const languageAlternates: Record<string, string> = {};
      SUPPORTED_LOCALES.forEach((l) => {
        languageAlternates[l] = `${SITE_URL}/${l}${route}`;
      });

      sitemapEntries.push({
        url: `${SITE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority,
        alternates: {
          languages: languageAlternates,
        },
      });
    });
  });

  return sitemapEntries;
}
