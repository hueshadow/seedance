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
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  wrench: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  ),
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  key: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
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
      <section className="hero-glow px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/versions"
            className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700 transition-colors hover:bg-accent-100 dark:border-accent-800 dark:bg-accent-900/20 dark:text-accent-300"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Seedance 2.0 — Available on Jimeng
          </Link>

          <h1 className="animate-fade-up delay-1 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Complete Resource
            <span className="block text-gradient">
              for AI Video Creators
            </span>
          </h1>

          <p className="animate-fade-up delay-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Free guide, prompt library, API integration, and tools for ByteDance&apos;s
            Seedance video generator. Everything you need to start creating.
          </p>

          <div className="animate-fade-up delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://jimeng.jianying.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-600/20 transition-all hover:bg-accent-700 hover:shadow-accent-700/25"
            >
              Start Using Seedance
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent-300 hover:bg-accent-50 dark:hover:border-accent-700 dark:hover:bg-accent-900/20"
            >
              Read the Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="animate-fade-up text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            What are you looking for?
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {NAV_CARDS.map((card, i) => (
              <Link
                key={card.href}
                href={card.href}
                className={`card-hover group rounded-xl border border-border bg-card p-6 animate-fade-up delay-${i + 1}`}
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent-50 p-2.5 text-accent-600 transition-colors group-hover:bg-accent-100 dark:bg-accent-900/20 dark:text-accent-400">
                  {ICONS[card.icon]}
                </div>
                <h3 className="font-display font-semibold tracking-tight group-hover:text-accent-600 dark:group-hover:text-accent-400">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-border bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            How does Seedance compare?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            See how Seedance 2.0 stacks up against other leading AI video generators.
          </p>

          <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[600px] text-sm" aria-label="AI video generator comparison">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="px-5 py-4 font-medium text-muted-foreground">Model</th>
                  <th scope="col" className="px-5 py-4 font-medium text-muted-foreground">Resolution</th>
                  <th scope="col" className="px-5 py-4 font-medium text-muted-foreground">Duration</th>
                  <th scope="col" className="px-5 py-4 font-medium text-muted-foreground">Audio</th>
                  <th scope="col" className="px-5 py-4 font-medium text-muted-foreground">Free Tier</th>
                  <th scope="col" className="px-5 py-4 font-medium text-muted-foreground">Price</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row) => (
                  <tr
                    key={row.model}
                    className={`border-b border-border last:border-0 transition-colors hover:bg-muted/50 ${row.highlight ? 'bg-accent-50/50 dark:bg-accent-900/10' : ''}`}
                  >
                    <td className="px-5 py-4 font-medium">
                      {row.model}
                      {row.highlight && (
                        <span className="ml-2 rounded-full bg-accent-100 px-2 py-0.5 text-xs font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
                          Best Value
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">{row.maxResolution}</td>
                    <td className="px-5 py-4">{row.maxDuration}</td>
                    <td className="px-5 py-4">
                      {row.audio ? (
                        <span className="text-emerald-600 dark:text-emerald-400">Yes</span>
                      ) : (
                        <span className="text-muted-foreground">No</span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      {row.freeAccess ? (
                        <span className="text-emerald-600 dark:text-emerald-400">Yes</span>
                      ) : (
                        <span className="text-muted-foreground">No</span>
                      )}
                    </td>
                    <td className="px-5 py-4">{row.entryPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/versions"
              className="text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400"
            >
              View detailed comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold tracking-tight">Latest Articles</h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400"
            >
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_POSTS.map((post) => (
              <article
                key={post.slug}
                className="card-hover rounded-xl border border-border bg-card p-6"
              >
                <time className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{post.date}</time>
                <h3 className="mt-3 font-display font-semibold leading-snug tracking-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent-600 dark:hover:text-accent-400">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-muted/40 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to create with Seedance?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start generating AI videos today. Free credits available on multiple platforms.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-600/20 transition-all hover:bg-accent-700 hover:shadow-accent-700/25"
            >
              See Free Options
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent-300 hover:bg-accent-50 dark:hover:border-accent-700 dark:hover:bg-accent-900/20"
            >
              Registration Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
