import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About seedance.free',
  description:
    'seedance.free is an independent resource site for Seedance AI video generator by ByteDance. Free guides, tools, and API docs for creators and developers.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About seedance.free',
    description:
      'An independent resource site for Seedance AI video generator. Free guides, tools, and API documentation.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          About {SITE_NAME}
        </h1>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">{SITE_NAME}</strong> is an independent resource site
            dedicated to Seedance — ByteDance&apos;s AI video generation model. We are not affiliated
            with ByteDance or any of its subsidiaries.
          </p>

          <p>
            Our goal is to provide the most comprehensive English-language resource for Seedance,
            covering everything from getting started to advanced API integration.
          </p>

          <h2 className="font-display text-xl font-bold tracking-tight text-foreground pt-4">
            What we offer
          </h2>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">Complete Guide</strong> — step-by-step instructions
              for all Seedance versions and platforms
            </li>
            <li>
              <strong className="text-foreground">Tools</strong> — prompt builder, credit calculator,
              and side-by-side model comparison
            </li>
            <li>
              <strong className="text-foreground">API Documentation</strong> — code examples for
              fal.ai, Replicate, and Volcano Engine
            </li>
            <li>
              <strong className="text-foreground">Blog</strong> — comparisons, tutorials, and prompt
              guides updated regularly
            </li>
          </ul>

          <h2 className="font-display text-xl font-bold tracking-tight text-foreground pt-4">
            Open source
          </h2>

          <p>
            This site is open source and built with Next.js. You can find the source code on{' '}
            <a
              href="https://github.com/hueshadow/seedance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 underline underline-offset-2 hover:text-accent-700 dark:text-accent-400"
            >
              GitHub
            </a>.
            Contributions and feedback are welcome.
          </p>

          <h2 className="font-display text-xl font-bold tracking-tight text-foreground pt-4">
            Contact
          </h2>

          <p>
            For questions, corrections, or collaboration inquiries, reach out via{' '}
            <a
              href="https://twitter.com/seedancefree"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 underline underline-offset-2 hover:text-accent-700 dark:text-accent-400"
            >
              Twitter
            </a>{' '}
            or open an issue on{' '}
            <a
              href="https://github.com/hueshadow/seedance/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 underline underline-offset-2 hover:text-accent-700 dark:text-accent-400"
            >
              GitHub
            </a>.
          </p>
        </div>

        <div className="mt-12 flex gap-3">
          <Link
            href="/guide"
            className="rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-700"
          >
            Read the Guide
          </Link>
          <Link
            href="/faq"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            View FAQ
          </Link>
        </div>
      </article>
    </>
  );
}
