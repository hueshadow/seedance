'use client';

import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to newsletter service (Mailchimp, ConvertKit, etc.)
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="font-semibold">Stay Updated</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get notified about new Seedance versions, tutorials, and tools.
      </p>

      {status === 'success' ? (
        <p className="mt-3 text-sm text-green-600 dark:text-green-400">
          Thanks for subscribing! We&apos;ll keep you posted.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary-400"
          />
          <button
            type="submit"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
