'use client';

import { useState } from 'react';
import type { SeedanceVersion } from '@/lib/data';

type Need = 'quality' | 'speed' | 'budget' | null;

export function VersionDecisionHelper({ versions }: { versions: SeedanceVersion[] }) {
  const [need, setNeed] = useState<Need>(null);

  const recommendation = need
    ? versions.find((v) =>
        need === 'quality'
          ? v.id === '2.0'
          : need === 'speed'
            ? v.id === '1.0-pro-fast'
            : v.id === '1.0-lite',
      )
    : null;

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold">Which version is right for you?</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Select what matters most to you:
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {(
          [
            ['quality', 'Best Quality'],
            ['speed', 'Fastest Speed'],
            ['budget', 'Lowest Cost'],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setNeed(need === key ? null : key)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              need === key
                ? 'bg-accent-600 text-white'
                : 'border border-border hover:bg-muted'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {recommendation && (
        <div className="mt-4 rounded-lg bg-accent-50 p-4 dark:bg-accent-900/20">
          <p className="text-sm font-medium text-accent-700 dark:text-accent-300">
            We recommend: {recommendation.name}
          </p>
          <p className="mt-1 text-sm text-accent-600/80 dark:text-accent-400/80">
            {recommendation.bestFor}
          </p>
        </div>
      )}
    </div>
  );
}
