'use client';

import { useState } from 'react';

const MODELS = [
  { id: 'seedance-2.0', name: 'Seedance 2.0', maker: 'ByteDance', resolution: '2K', duration: '15s', audio: true, price: 'From $18/mo', speed: '~60s', features: ['2K output', 'Audio generation', 'Image + Video input'] },
  { id: 'seedance-1.5', name: 'Seedance 1.5 Pro', maker: 'ByteDance', resolution: '1080p', duration: '10s', audio: false, price: '~$0.05/sec', speed: '~45s', features: ['API access', 'Image-to-video', 'Video-to-video'] },
  { id: 'sora-2', name: 'Sora 2', maker: 'OpenAI', resolution: '1080p', duration: '20s', audio: true, price: '$200/mo', speed: '~120s', features: ['Long duration', 'Text in video', 'Complex scenes'] },
  { id: 'veo-3.1', name: 'Veo 3.1', maker: 'Google', resolution: '4K', duration: '8s', audio: true, price: '$19.99/mo', speed: '~90s', features: ['4K output', 'Audio generation', 'Google ecosystem'] },
  { id: 'kling-2.0', name: 'Kling 2.0', maker: 'Kuaishou', resolution: '1080p', duration: '10s', audio: false, price: 'From $9.99/mo', speed: '~30s', features: ['Fast generation', 'Affordable', 'Motion brush'] },
  { id: 'hailuo', name: 'Hailuo AI', maker: 'MiniMax', resolution: '1080p', duration: '6s', audio: false, price: 'From $9.99/mo', speed: '~45s', features: ['Character consistency', 'Free tier', 'Fast iteration'] },
];

const DIMENSIONS = ['resolution', 'duration', 'audio', 'price', 'speed'] as const;

export default function CompareClient() {
  const [leftId, setLeftId] = useState('seedance-2.0');
  const [rightId, setRightId] = useState('sora-2');

  const left = MODELS.find((m) => m.id === leftId)!;
  const right = MODELS.find((m) => m.id === rightId)!;

  return (
    <>
      {/* Model Selectors */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground">Model A</label>
          <select
            value={leftId}
            onChange={(e) => setLeftId(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-accent-400"
          >
            {MODELS.map((m) => (
              <option key={m.id} value={m.id}>{m.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground">Model B</label>
          <select
            value={rightId}
            onChange={(e) => setRightId(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-accent-400"
          >
            {MODELS.map((m) => (
              <option key={m.id} value={m.id}>{m.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm" aria-label="Model comparison">
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="pb-3 pr-4 text-left font-medium text-muted-foreground">Spec</th>
              <th scope="col" className="pb-3 pr-4 text-left font-medium">{left.name}</th>
              <th scope="col" className="pb-3 text-left font-medium">{right.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 text-muted-foreground">Maker</td>
              <td className="py-3 pr-4">{left.maker}</td>
              <td className="py-3">{right.maker}</td>
            </tr>
            {DIMENSIONS.map((dim) => (
              <tr key={dim} className="border-b border-border">
                <td className="py-3 pr-4 capitalize text-muted-foreground">{dim}</td>
                <td className="py-3 pr-4">
                  {dim === 'audio' ? (
                    left.audio ? <span className="text-emerald-600 dark:text-emerald-400">Yes</span> : <span className="text-muted-foreground">No</span>
                  ) : (
                    String(left[dim])
                  )}
                </td>
                <td className="py-3">
                  {dim === 'audio' ? (
                    right.audio ? <span className="text-emerald-600 dark:text-emerald-400">Yes</span> : <span className="text-muted-foreground">No</span>
                  ) : (
                    String(right[dim])
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Features */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {[left, right].map((model) => (
          <div key={model.id} className="rounded-lg border border-border p-4">
            <p className="text-sm font-medium">{model.name} Highlights</p>
            <ul className="mt-2 space-y-1">
              {model.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-3.5 w-3.5 shrink-0 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
