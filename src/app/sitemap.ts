import { SITE_URL } from '@/lib/constants';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/guide',
    '/versions',
    '/pricing',
    '/prompts',
    '/api',
    '/register',
    '/tools/prompt-builder',
    '/tools/compare',
    '/tools/calculator',
    '/blog',
    '/faq',
    '/about',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/guide' ? 0.9 : 0.7,
  }));
}
