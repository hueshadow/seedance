import Link from 'next/link';
import { NAV_ITEMS, SITE_NAME, SOCIAL_LINKS } from '@/lib/constants';
import { NewsletterSignup } from '@/components/NewsletterSignup';

const FOOTER_LINKS = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Register', href: '/register' },
  { label: 'Versions', href: '/versions' },
  { label: 'About', href: '/about' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-sm font-semibold">
              {SITE_NAME}
            </Link>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              The complete resource for Seedance AI video generation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium">Product</h4>
            <ul className="mt-3 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium">Social</h4>
            <ul className="mt-3 space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <NewsletterSignup />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Not affiliated with ByteDance.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js. Deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
