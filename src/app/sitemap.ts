import { SITE_URL } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog';
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

  const staticRoutes = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1 : route === '/guide' ? 0.9 : 0.7,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
