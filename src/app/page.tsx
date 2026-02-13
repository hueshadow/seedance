import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { COMPARISON_DATA, NAV_CARDS, UPCOMING_POSTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Seedance AI Video Generator - Free Guide, Tools & API',
  description:
    'The complete Seedance resource for creators and developers. Free guide, prompt library, API integration, and tools for ByteDance\'s AI video generator.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Seedance AI Video Generator - Free Guide, Tools & API',
    description:
      'The complete Seedance resource. Free guide, prompt library, API docs, and tools for ByteDance\'s AI video generator.',
    url: SITE_URL,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

const ICONS: Record<string, React.ReactNode> = {
  book: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  wrench: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  ),
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  key: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
  ),
};

function SchemaMarkup() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://twitter.com/seedancefree',
      'https://github.com/hueshadow/seedance',
    ],
  };

  const siteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      />
    </>
  );
}

export default function Home() {
  return (
    <>
      <SchemaMarkup />

      {/* Hero */}
      <section className="px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/versions"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-100 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            Seedance 2.0 — Available on Jimeng
          </Link>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Complete Seedance Resource
            <span className="block text-primary-600 dark:text-primary-400">
              for Creators &amp; Developers
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Free guide, prompt library, API integration, and tools for ByteDance&apos;s
            AI video generator. Everything you need to start creating with Seedance.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://jimeng.jianying.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Start Using Seedance
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              Read the Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="border-t border-border bg-muted/30 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            What are you looking for?
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {NAV_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary-300 hover:shadow-md dark:hover:border-primary-700"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-2.5 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  {ICONS[card.icon]}
                </div>
                <h3 className="font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            How does Seedance compare?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            See how Seedance 2.0 stacks up against other leading AI video generators.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm" aria-label="AI video generator comparison">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Model</th>
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Resolution</th>
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Duration</th>
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Audio</th>
                  <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Free Tier</th>
                  <th scope="col" className="pb-3 font-medium text-muted-foreground">Price</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row) => (
                  <tr
                    key={row.model}
                    className={`border-b border-border ${row.highlight ? 'bg-primary-50/50 dark:bg-primary-900/10' : ''}`}
                  >
                    <td className="py-3.5 pr-4 font-medium">
                      {row.model}
                      {row.highlight && (
                        <span className="ml-2 rounded bg-primary-100 px-1.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                          Featured
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 pr-4">{row.maxResolution}</td>
                    <td className="py-3.5 pr-4">{row.maxDuration}</td>
                    <td className="py-3.5 pr-4">
                      {row.audio ? (
                        <span className="text-green-600 dark:text-green-400">Yes</span>
                      ) : (
                        <span className="text-muted-foreground">No</span>
                      )}
                    </td>
                    <td className="py-3.5 pr-4">
                      {row.freeAccess ? (
                        <span className="text-green-600 dark:text-green-400">Yes</span>
                      ) : (
                        <span className="text-muted-foreground">No</span>
                      )}
                    </td>
                    <td className="py-3.5">{row.entryPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/versions"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
            >
              View detailed comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="border-t border-border bg-muted/30 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Latest Articles</h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
            >
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_POSTS.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md"
              >
                <time className="text-xs text-muted-foreground">{post.date}</time>
                <h3 className="mt-2 font-semibold leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to create with Seedance?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start generating AI videos today. Free credits available on multiple platforms.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              See Free Options
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              Registration Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
