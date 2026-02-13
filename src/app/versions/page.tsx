import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { SEEDANCE_VERSIONS } from '@/lib/data';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { VersionDecisionHelper } from './VersionDecisionHelper';

export const metadata: Metadata = {
  title: 'Seedance Versions Compared: 1.0 vs 1.5 vs 2.0 (Pro, Lite, Mini)',
  description:
    'Compare all Seedance versions side by side — 1.0 Lite, Mini, Pro, Pro Fast, 1.5 Pro, and 2.0. Resolution, speed, audio, pricing, and platform availability.',
  alternates: { canonical: `${SITE_URL}/versions` },
  openGraph: {
    title: 'Seedance Version Comparison — All Models Compared',
    description:
      'Interactive comparison of every Seedance version. Find the right model for your needs.',
    url: `${SITE_URL}/versions`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

function VersionSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Seedance Versions Compared: 1.0 vs 1.5 vs 2.0',
    description:
      'Complete comparison of all Seedance AI video generator versions.',
    url: `${SITE_URL}/versions`,
    publisher: { '@type': 'Organization', name: 'seedance.free' },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function VersionsPage() {
  return (
    <>
      <VersionSchema />
      <Breadcrumbs />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Seedance Version Comparison
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          From the entry-level 1.0 Lite to the flagship 2.0 with audio — compare every Seedance
          model to find the right fit.
        </p>

        {/* Comparison Table */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm" aria-label="Seedance version comparison">
            <thead>
              <tr className="border-b border-border text-left">
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Version</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Resolution</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Duration</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Speed</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Audio</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Input</th>
                <th scope="col" className="pb-3 font-medium text-muted-foreground">Price</th>
              </tr>
            </thead>
            <tbody>
              {SEEDANCE_VERSIONS.map((v) => (
                <tr
                  key={v.id}
                  className={`border-b border-border ${v.latest ? 'bg-primary-50/50 dark:bg-primary-900/10' : ''}`}
                >
                  <td className="py-3.5 pr-4 font-medium">
                    {v.name}
                    {v.latest && (
                      <span className="ml-2 rounded bg-primary-100 px-1.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                        Latest
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 pr-4">{v.resolution}</td>
                  <td className="py-3.5 pr-4">{v.maxDuration}</td>
                  <td className="py-3.5 pr-4">{v.speed}</td>
                  <td className="py-3.5 pr-4">
                    {v.audio ? (
                      <span className="text-green-600 dark:text-green-400">Yes</span>
                    ) : (
                      <span className="text-muted-foreground">No</span>
                    )}
                  </td>
                  <td className="py-3.5 pr-4">{v.referenceInput}</td>
                  <td className="py-3.5">{v.priceNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Decision Helper */}
        <div className="mt-12">
          <VersionDecisionHelper versions={SEEDANCE_VERSIONS} />
        </div>

        {/* Version Cards */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Version Details</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SEEDANCE_VERSIONS.map((v) => (
              <div
                key={v.id}
                className={`rounded-xl border p-5 ${
                  v.latest
                    ? 'border-primary-300 bg-primary-50/30 dark:border-primary-700 dark:bg-primary-900/10'
                    : 'border-border bg-card'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{v.name}</h3>
                    <p className="text-xs text-muted-foreground">{v.subtitle}</p>
                  </div>
                  <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {v.released}
                  </span>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {v.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 border-t border-border pt-3">
                  <p className="text-xs text-muted-foreground">
                    Platforms: {v.platforms.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Release Timeline</h2>
          <div className="mt-6 space-y-0">
            {SEEDANCE_VERSIONS.map((v, i) => (
              <div key={v.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      v.latest ? 'bg-primary-600' : 'bg-muted-foreground/40'
                    }`}
                  />
                  {i < SEEDANCE_VERSIONS.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-sm font-medium">{v.name}</p>
                  <p className="text-xs text-muted-foreground">{v.released}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
