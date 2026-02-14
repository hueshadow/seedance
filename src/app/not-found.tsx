import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-bold text-muted-foreground/20">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-2 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-700"
        >
          Go Home
        </Link>
        <Link
          href="/guide"
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          Read the Guide
        </Link>
      </div>
      <div className="mt-8 text-sm text-muted-foreground">
        <p>Popular pages:</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          {[
            { label: 'Guide', href: '/guide' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'API', href: '/api' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Blog', href: '/blog' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-accent-600 hover:text-accent-700 dark:text-accent-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
