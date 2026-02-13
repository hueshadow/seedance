import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import CompareClient from './CompareClient';

export const metadata: Metadata = {
  title: 'AI Video Model Comparison — Seedance vs Sora vs Veo vs Kling',
  description:
    'Compare AI video generators side by side. Seedance 2.0, Sora 2, Veo 3.1, Kling 2.0, and more — resolution, speed, pricing, and features.',
  alternates: { canonical: `${SITE_URL}/tools/compare` },
};

export default function ComparePage() {
  return (
    <>
      <Breadcrumbs />
      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Model Comparison</h1>
        <p className="mt-3 text-muted-foreground">
          Compare any two AI video generators side by side. Select models below.
        </p>
        <div className="mt-8">
          <CompareClient />
        </div>
      </div>
    </>
  );
}
