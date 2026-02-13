'use client';

import { useState } from 'react';

const PLATFORMS = [
  { id: 'dreamina', name: 'Dreamina', rates: { '2k': 0.12, '1080p': 0.08, '720p': 0.05, '480p': 0.03 } },
  { id: 'fal', name: 'fal.ai', rates: { '2k': 0.05, '1080p': 0.04, '720p': 0.02, '480p': 0.01 } },
  { id: 'replicate', name: 'Replicate', rates: { '2k': 0.06, '1080p': 0.05, '720p': 0.03, '480p': 0.01 } },
];

const COMPETITORS = [
  { name: 'Sora 2', costPer5s: 0.50 },
  { name: 'Veo 3.1', costPer5s: 0.15 },
  { name: 'Kling 2.0', costPer5s: 0.08 },
];

type Resolution = '2k' | '1080p' | '720p' | '480p';

export default function CalculatorClient() {
  const [videoCount, setVideoCount] = useState(10);
  const [duration, setDuration] = useState(5);
  const [resolution, setResolution] = useState<Resolution>('1080p');
  const [platformId, setPlatformId] = useState('fal');

  const platform = PLATFORMS.find((p) => p.id === platformId)!;
  const costPerSec = platform.rates[resolution];
  const totalCost = videoCount * duration * costPerSec;
  const monthlyCost = totalCost;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium">Number of Videos</label>
          <input
            type="range"
            min={1}
            max={100}
            value={videoCount}
            onChange={(e) => setVideoCount(Number(e.target.value))}
            className="mt-2 w-full accent-primary-600"
          />
          <div className="mt-1 text-right text-sm text-muted-foreground">{videoCount} videos</div>
        </div>

        <div>
          <label className="text-sm font-medium">Duration per Video</label>
          <input
            type="range"
            min={4}
            max={15}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="mt-2 w-full accent-primary-600"
          />
          <div className="mt-1 text-right text-sm text-muted-foreground">{duration} seconds</div>
        </div>

        <div>
          <label className="text-sm font-medium">Resolution</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(['2k', '1080p', '720p', '480p'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setResolution(r)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  resolution === r
                    ? 'bg-primary-600 text-white'
                    : 'border border-border hover:bg-muted'
                }`}
              >
                {r.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Platform</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {PLATFORMS.map((p) => (
              <button
                key={p.id}
                onClick={() => setPlatformId(p.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  platformId === p.id
                    ? 'bg-primary-600 text-white'
                    : 'border border-border hover:bg-muted'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl border border-primary-200 bg-primary-50/50 p-6 dark:border-primary-800 dark:bg-primary-900/10">
          <p className="text-sm text-muted-foreground">Estimated Cost</p>
          <p className="mt-1 text-3xl font-bold text-primary-600 dark:text-primary-400">
            ${monthlyCost.toFixed(2)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {videoCount} videos × {duration}s × ${costPerSec.toFixed(3)}/sec on {platform.name}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-sm font-medium">Competitor Comparison</p>
          <div className="mt-3 space-y-2">
            {COMPETITORS.map((c) => {
              const compCost = videoCount * duration * (c.costPer5s / 5);
              const savings = compCost - monthlyCost;
              return (
                <div key={c.name} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{c.name}</span>
                  <div className="text-right">
                    <span>${compCost.toFixed(2)}</span>
                    {savings > 0 && (
                      <span className="ml-2 text-xs text-green-600 dark:text-green-400">
                        Save ${savings.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-sm font-medium">Breakdown</p>
          <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Cost per second</span>
              <span>${costPerSec.toFixed(3)}</span>
            </div>
            <div className="flex justify-between">
              <span>Cost per video</span>
              <span>${(duration * costPerSec).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total seconds</span>
              <span>{videoCount * duration}s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
