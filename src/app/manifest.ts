import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PAA SOLAR | EKCHAKRA GROUP',
    short_name: 'PAA SOLAR',
    description:
      'India’s premier solar EPC company delivering 30-40 year durable clean energy solutions. Specialist in TOPCon & HJT solar panels, smart inverters, and LFP battery storage.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#0b0f19',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/logo_transparent.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo_transparent.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
