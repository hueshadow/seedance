import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'How to Register Seedance Without a Chinese Phone Number (2026)',
  description:
    'Step-by-step guide to register for Seedance 2.0 without a Chinese phone number. Virtual numbers, international platforms, and alternative access methods.',
  alternates: { canonical: `${SITE_URL}/register` },
  openGraph: {
    title: 'Register for Seedance — No Chinese Phone Number Needed',
    description:
      'Three proven methods to access Seedance 2.0 from anywhere in the world.',
    url: `${SITE_URL}/register`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

function RegisterSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Register for Seedance Without a Chinese Phone Number',
    description:
      'Three methods to access Seedance AI video generator from outside China.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Choose your access method',
        text: 'Decide between virtual phone number, international platform, or API access.',
      },
      {
        '@type': 'HowToStep',
        name: 'Create your account',
        text: 'Follow the platform-specific registration steps.',
      },
      {
        '@type': 'HowToStep',
        name: 'Start generating videos',
        text: 'Use your free credits to create your first Seedance video.',
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const METHODS = [
  {
    id: 'A',
    title: 'Virtual Chinese Phone Number',
    difficulty: 'Medium',
    cost: '$0.50–2.00',
    platforms: 'Jimeng, Doubao',
    versions: 'All (1.0, 1.5, 2.0)',
    steps: [
      'Visit a virtual number service (SMS-Activate, 5SIM, or MobileSMS.io)',
      'Purchase a Chinese (+86) virtual number for SMS verification',
      'Go to jimeng.jianying.com and click "Sign Up"',
      'Enter the virtual phone number and request a verification code',
      'Enter the SMS code received on the virtual number service',
      'Complete your profile setup and start generating',
    ],
    pros: ['Access to all Seedance versions including 2.0', 'Full platform features', 'Daily free credits'],
    cons: ['Number may expire', 'Some numbers get rejected', 'Requires payment for the virtual number'],
  },
  {
    id: 'B',
    title: 'International Platform (Dreamina)',
    difficulty: 'Easy',
    cost: 'Free to start',
    platforms: 'Dreamina',
    versions: '1.5 Pro, 2.0',
    steps: [
      'Visit dreamina.com (ByteDance\'s international platform)',
      'Click "Sign Up" and use your email or Google account',
      'Verify your email address',
      'Navigate to the video generation tool',
      'Start with your free credits',
    ],
    pros: ['No Chinese phone number needed', 'Simple email signup', 'Access to Seedance 2.0'],
    cons: ['Fewer free credits than Jimeng', 'Higher paid plan prices', 'Some features may be limited'],
  },
  {
    id: 'C',
    title: 'API Access (fal.ai / Replicate)',
    difficulty: 'Technical',
    cost: 'Free credits on signup',
    platforms: 'fal.ai, Replicate',
    versions: '1.0 (all), 1.5 Pro',
    steps: [
      'Create an account on fal.ai or replicate.com',
      'Navigate to the Seedance model page',
      'Get your API key from the dashboard',
      'Use the web playground for quick tests, or integrate via API',
      'Monitor your usage in the billing dashboard',
    ],
    pros: ['No phone verification', 'Free trial credits', 'Programmatic access', 'Pay only for what you use'],
    cons: ['Seedance 2.0 not yet available via API', 'Requires some technical knowledge', 'No GUI editor'],
  },
];

const PLATFORM_COMPARISON = [
  { platform: 'Jimeng', phone: true, difficulty: 'Medium', free: '10/day', versions: 'All' },
  { platform: 'Dreamina', phone: false, difficulty: 'Easy', free: '5 total', versions: '1.5, 2.0' },
  { platform: 'Doubao', phone: true, difficulty: 'Medium', free: '10/day', versions: '1.0' },
  { platform: 'fal.ai', phone: false, difficulty: 'Technical', free: '$10 credit', versions: '1.0, 1.5' },
  { platform: 'Replicate', phone: false, difficulty: 'Technical', free: 'Limited', versions: '1.0, 1.5' },
];

const TROUBLESHOOTING = [
  {
    q: 'Verification code not received',
    a: 'Try a different virtual number. Some numbers are recycled and may be blocked. SMS-Activate generally has the highest success rate for Chinese services.',
  },
  {
    q: 'Phone number rejected',
    a: 'The platform may have blacklisted certain number ranges. Try a number from a different provider or use Method B (Dreamina) instead.',
  },
  {
    q: 'Account suspended after registration',
    a: 'This can happen if the platform detects unusual activity. Avoid using VPNs during registration if possible, and complete your profile information.',
  },
  {
    q: 'Region-restricted content',
    a: 'Some features may be limited based on your IP location. For full access, consider using Jimeng with a Chinese virtual number.',
  },
];

export default function RegisterPage() {
  return (
    <>
      <RegisterSchema />
      <Breadcrumbs />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How to Register for Seedance
        </h1>
        <p className="mt-3 text-muted-foreground">
          Three proven methods to access Seedance 2.0 from anywhere — no Chinese phone number
          required for two of them.
        </p>

        {/* Quick Platform Comparison */}
        <div className="mt-10 overflow-x-auto">
          <h2 className="text-2xl font-bold tracking-tight">Platform Comparison</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose the platform that works best for your situation.
          </p>
          <table className="mt-4 w-full min-w-[600px] text-sm" aria-label="Registration platform comparison">
            <thead>
              <tr className="border-b border-border text-left">
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Platform</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">China Phone</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Difficulty</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Free Credits</th>
                <th scope="col" className="pb-3 font-medium text-muted-foreground">Versions</th>
              </tr>
            </thead>
            <tbody>
              {PLATFORM_COMPARISON.map((p) => (
                <tr key={p.platform} className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">{p.platform}</td>
                  <td className="py-3 pr-4">
                    {p.phone ? (
                      <span className="text-amber-600 dark:text-amber-400">Required</span>
                    ) : (
                      <span className="text-emerald-600 dark:text-emerald-400">Not needed</span>
                    )}
                  </td>
                  <td className="py-3 pr-4">{p.difficulty}</td>
                  <td className="py-3 pr-4">{p.free}</td>
                  <td className="py-3">{p.versions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Methods */}
        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold tracking-tight">Registration Methods</h2>

          {METHODS.map((method) => (
            <div key={method.id} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium text-muted-foreground">
                    Method {method.id}
                  </span>
                  <h3 className="text-lg font-semibold">{method.title}</h3>
                </div>
                <div className="flex gap-2">
                  <span className="rounded bg-muted px-2 py-0.5 text-xs">{method.difficulty}</span>
                  <span className="rounded bg-muted px-2 py-0.5 text-xs">{method.cost}</span>
                </div>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                Platforms: {method.platforms} · Versions: {method.versions}
              </p>

              {/* Steps */}
              <ol className="mt-4 space-y-2">
                {method.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-xs font-medium text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>

              {/* Pros/Cons */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Pros</p>
                  <ul className="mt-1 space-y-1">
                    {method.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-sm text-muted-foreground">
                        <span className="text-green-500">+</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-red-600 dark:text-red-400">Cons</p>
                  <ul className="mt-1 space-y-1">
                    {method.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-sm text-muted-foreground">
                        <span className="text-red-500">-</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Troubleshooting */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Troubleshooting</h2>
          <div className="mt-4 space-y-3">
            {TROUBLESHOOTING.map((item, i) => (
              <details key={i} className="group rounded-lg border border-border bg-card">
                <summary className="flex cursor-pointer items-center justify-between px-5 py-3 text-sm font-medium select-none [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <svg
                    className="ml-4 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-sm text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Ready to start? Check our{' '}
            <Link href="/guide" className="font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400">
              complete guide
            </Link>{' '}
            for prompt tips and best practices.
          </p>
        </div>
      </div>
    </>
  );
}
