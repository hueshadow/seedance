import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import ApiClient from './ApiClient';

export const metadata: Metadata = {
  title: 'Seedance API Guide: fal.ai, Replicate & Volcano Engine Integration',
  description:
    'Integrate Seedance AI video generation into your app. Code examples for fal.ai, Replicate, and Volcano Engine in JavaScript, Python, and cURL.',
  alternates: { canonical: `${SITE_URL}/api` },
  openGraph: {
    title: 'Seedance API Integration Guide',
    description:
      'Code examples and documentation for Seedance API on fal.ai, Replicate, and Volcano Engine.',
    url: `${SITE_URL}/api`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
};

function ApiSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Seedance API Integration Guide',
    description: 'How to integrate Seedance AI video generation via API.',
    url: `${SITE_URL}/api`,
    publisher: { '@type': 'Organization', name: 'seedance.free' },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ApiGuidePage() {
  return (
    <>
      <ApiSchema />
      <Breadcrumbs />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Seedance API Guide
        </h1>
        <p className="mt-3 text-muted-foreground">
          Integrate Seedance video generation into your application. Choose your platform and
          language below.
        </p>

        <div className="mt-8">
          <ApiClient />
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Not a developer?{' '}
            <Link href="/guide" className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400">
              Use Seedance through the web interface
            </Link>{' '}
            or check our{' '}
            <Link href="/register" className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400">
              registration guide
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
