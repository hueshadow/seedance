import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Seedance Credit Calculator — Estimate Your Video Generation Costs',
  description:
    'Calculate how much Seedance AI video generation will cost. Compare pricing across platforms and against competitors like Sora and Veo.',
  alternates: { canonical: `${SITE_URL}/tools/calculator` },
};

export default function CalculatorPage() {
  return (
    <>
      <Breadcrumbs />
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Credit Calculator</h1>
        <p className="mt-3 text-muted-foreground">
          Estimate your Seedance video generation costs. Adjust the sliders and compare across
          platforms.
        </p>
        <div className="mt-8">
          <CalculatorClient />
        </div>
      </div>
    </>
  );
}
