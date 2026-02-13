'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ROUTE_LABELS: Record<string, string> = {
  guide: 'Guide',
  versions: 'Versions',
  pricing: 'Pricing',
  prompts: 'Prompts',
  api: 'API',
  register: 'Register',
  tools: 'Tools',
  'prompt-builder': 'Prompt Builder',
  compare: 'Compare',
  calculator: 'Calculator',
  blog: 'Blog',
  faq: 'FAQ',
  about: 'About',
};

function segmentToLabel(segment: string): string {
  return ROUTE_LABELS[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
}

export function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, i) => ({
    label: segmentToLabel(segment),
    href: '/' + segments.slice(0, i + 1).join('/'),
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seedance.free' },
      ...crumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: crumb.label,
        item: `https://seedance.free${crumb.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
          </li>
          {crumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              <span aria-hidden="true">/</span>
              {i === crumbs.length - 1 ? (
                <span className="text-foreground">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="transition-colors hover:text-foreground">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
