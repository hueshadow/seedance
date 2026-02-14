import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import { PLATFORM_PRICING, COMPETITOR_PRICING } from '@/lib/data';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Seedance Pricing & Free Methods (2026) - All Platforms Compared',
  description:
    'Compare Seedance pricing across Jimeng, Dreamina, fal.ai, and Replicate. Find free methods to use Seedance AI video generator without paying.',
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: 'Seedance Pricing — Free & Paid Options Compared',
    description:
      'All Seedance pricing plans and free access methods across every platform.',
    url: `${SITE_URL}/pricing`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

function PricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Seedance AI Video Generator',
    description: 'AI video generation model by ByteDance',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '84',
      priceCurrency: 'USD',
      offerCount: PLATFORM_PRICING.length,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PricingPage() {
  const freePlatforms = PLATFORM_PRICING.filter((p) => p.freeCredits);

  return (
    <>
      <PricingSchema />
      <Breadcrumbs />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Seedance Pricing &amp; Free Methods
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Every way to use Seedance — from free daily credits to paid API access. Updated for 2026.
        </p>

        {/* Free Methods Highlight */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight">Free Access Methods</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            You don&apos;t need to pay to start using Seedance. Here are the free options:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {freePlatforms.map((p) => (
              <div
                key={p.platform}
                className="rounded-xl border border-green-200 bg-green-50/50 p-5 dark:border-green-800/50 dark:bg-green-900/10"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <h3 className="font-semibold">{p.platform}</h3>
                </div>
                <p className="mt-2 text-sm text-green-700 dark:text-green-300">
                  {p.freeCredits}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Versions: {p.seedanceVersions}
                  {p.requiresChinaPhone && ' · Requires Chinese phone'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Pricing Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Platform Pricing</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm" aria-label="Seedance platform pricing">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Platform</th>
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Region</th>
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Plans</th>
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Versions</th>
                  <th scope="col" className="pb-3 font-medium text-muted-foreground">China Phone</th>
                </tr>
              </thead>
              <tbody>
                {PLATFORM_PRICING.map((p) => (
                  <tr key={p.platform} className="border-b border-border">
                    <td className="py-3.5 pr-4 font-medium">{p.platform}</td>
                    <td className="py-3.5 pr-4">{p.region}</td>
                    <td className="py-3.5 pr-4">
                      {p.plans.map((plan, i) => (
                        <div key={i} className="text-sm">
                          <span className="text-muted-foreground">{plan.name}:</span>{' '}
                          {plan.price}
                        </div>
                      ))}
                    </td>
                    <td className="py-3.5 pr-4">{p.seedanceVersions}</td>
                    <td className="py-3.5">
                      {p.requiresChinaPhone ? (
                        <span className="text-amber-600 dark:text-amber-400">Required</span>
                      ) : (
                        <span className="text-emerald-600 dark:text-emerald-400">Not needed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Competitor Comparison */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">
            How Seedance Pricing Compares
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Seedance offers some of the most competitive pricing in the AI video space.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[500px] text-sm" aria-label="AI video generator pricing comparison">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Model</th>
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Starting Price</th>
                  <th scope="col" className="pb-3 font-medium text-muted-foreground">Free Option</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_PRICING.map((c) => (
                  <tr
                    key={c.model}
                    className={`border-b border-border ${c.highlight ? 'bg-accent-50/50 dark:bg-accent-900/10' : ''}`}
                  >
                    <td className="py-3.5 pr-4 font-medium">
                      {c.model}
                      {c.highlight && (
                        <span className="ml-2 rounded bg-accent-100 px-1.5 py-0.5 text-xs font-medium text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
                          Best Value
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 pr-4">{c.price}</td>
                    <td className="py-3.5">
                      {c.freeOption ? (
                        <span className="text-emerald-600 dark:text-emerald-400">Yes</span>
                      ) : (
                        <span className="text-muted-foreground">No</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-border bg-muted/30 p-8 text-center">
          <h2 className="text-xl font-bold">Need help getting started?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Check our registration guide for step-by-step instructions on each platform.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-700"
            >
              Registration Guide
            </Link>
            <Link
              href="/versions"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Compare Versions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
