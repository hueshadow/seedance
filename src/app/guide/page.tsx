import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { compileMdxContent, extractHeadings } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx/MdxComponents';
import { Sidebar } from '@/components/layout/Sidebar';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ReadingProgress } from '@/components/mdx/ReadingProgress';
import { SITE_URL } from '@/lib/constants';

const title = 'How to Use Seedance: Complete Guide (2026)';
const description =
  'Learn how to use Seedance 2.0 for AI video generation. Free access methods, prompt tips, API guide, and how to register without a Chinese phone number.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/guide` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/guide`,
    type: 'article',
    siteName: 'seedance.free',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

const relatedArticles = [
  { title: 'Version Comparison', href: '/versions' },
  { title: 'Pricing & Free Methods', href: '/pricing' },
  { title: 'API Integration Guide', href: '/api' },
  { title: 'Registration Guide', href: '/register' },
];

export default async function GuidePage() {
  const filePath = path.join(process.cwd(), 'src/content/guide.mdx');
  const source = fs.readFileSync(filePath, 'utf-8');

  const headings = extractHeadings(source);
  const { content } = await compileMdxContent(source, mdxComponents);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: { '@type': 'Organization', name: 'seedance.free' },
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
    description,
    publisher: {
      '@type': 'Organization',
      name: 'seedance.free',
      url: SITE_URL,
    },
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Use Seedance',
    step: headings
      .filter((h) => h.level === 2)
      .map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.text,
        url: `${SITE_URL}/guide#${h.id}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <ReadingProgress />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Breadcrumbs />
        <div className="mt-6 flex gap-10">
          <article className="prose prose-slate dark:prose-invert min-w-0 max-w-none flex-1">
            {content}
          </article>
          <Sidebar
            headings={headings}
            relatedArticles={relatedArticles}
          />
        </div>
      </div>
    </>
  );
}
