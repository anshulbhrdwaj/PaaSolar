import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://paasolar.com';
  const locales = ['en', 'hi', 'gu', 'mr', 'bn', 'ta', 'te', 'kn', 'de', 'es'];

  const routes = [
    '',
    '/about-us',
    '/why-solar',
    '/products',
    '/products/solar-panels',
    '/products/inverters',
    '/products/battery',
    '/projects',
    '/projects/ci',
    '/projects/pm-kusum',
    '/projects/ipp',
    '/solutions',
    '/b2b',
    '/export',
    '/working-methodology',
    '/vendor-registration',
    '/careers',
    '/get-a-quote',
    '/telemetry',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      let priority = 0.7;
      if (route === '') priority = 1.0;
      else if (route === '/about-us' || route === '/products' || route === '/projects' || route === '/get-a-quote') priority = 0.9;
      else if (route.startsWith('/products/') || route.startsWith('/projects/')) priority = 0.8;

      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority,
      });
    });
  });

  return sitemapEntries;
}
