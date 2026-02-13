import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { FAQ_DATA } from '@/lib/data';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: 'Seedance FAQ: Is It Free? Open Source? Audio Support?',
  description:
    'Answers to the most common questions about Seedance AI video generator. Is it free? Open source? Does it have audio? How to use it without a Chinese phone number?',
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'Seedance FAQ - Common Questions Answered',
    description:
      'Everything you need to know about Seedance: pricing, audio support, registration, commercial use, and more.',
    url: `${SITE_URL}/faq`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.replace(/<[^>]*>/g, ''),
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

export default function FaqPage() {
  return (
    <>
      <FaqSchema />
      <Breadcrumbs />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-muted-foreground">
          Quick answers about Seedance AI video generator — pricing, features, access, and more.
        </p>

        <div className="mt-8">
          <FaqClient items={FAQ_DATA} />
        </div>
      </div>
    </>
  );
}
