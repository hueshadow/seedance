'use client';

import { useState } from 'react';

type Platform = 'fal' | 'replicate' | 'volcano';
type Lang = 'javascript' | 'python' | 'curl';

const TABS: { id: Platform; label: string }[] = [
  { id: 'fal', label: 'fal.ai' },
  { id: 'replicate', label: 'Replicate' },
  { id: 'volcano', label: 'Volcano Engine' },
];

const LANG_TABS: { id: Lang; label: string }[] = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'python', label: 'Python' },
  { id: 'curl', label: 'cURL' },
];

const CODE: Record<Platform, Record<Lang, string>> = {
  fal: {
    javascript: `import { fal } from "@fal-ai/client";

fal.config({ credentials: process.env.FAL_KEY });

const result = await fal.subscribe("fal-ai/seedance/text-to-video", {
  input: {
    prompt: "A golden retriever running through a sunflower field, cinematic lighting",
    duration: 5,
    aspect_ratio: "16:9",
  },
});

console.log(result.data.video.url);`,
    python: `import fal_client

# Set FAL_KEY environment variable or pass directly
result = fal_client.subscribe(
    "fal-ai/seedance/text-to-video",
    arguments={
        "prompt": "A golden retriever running through a sunflower field, cinematic lighting",
        "duration": 5,
        "aspect_ratio": "16:9",
    },
)

print(result["video"]["url"])`,
    curl: `curl -X POST "https://queue.fal.run/fal-ai/seedance/text-to-video" \\
  -H "Authorization: Key $FAL_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A golden retriever running through a sunflower field, cinematic lighting",
    "duration": 5,
    "aspect_ratio": "16:9"
  }'`,
  },
  replicate: {
    javascript: `import Replicate from "replicate";

const replicate = new Replicate();

const output = await replicate.run(
  "bytedance/seedance-v1-pro-i2v-1080p",
  {
    input: {
      prompt: "A golden retriever running through a sunflower field, cinematic lighting",
      image: "https://example.com/dog.jpg",
      duration: 5,
    },
  }
);

console.log(output);`,
    python: `import replicate

output = replicate.run(
    "bytedance/seedance-v1-pro-i2v-1080p",
    input={
        "prompt": "A golden retriever running through a sunflower field, cinematic lighting",
        "image": "https://example.com/dog.jpg",
        "duration": 5,
    },
)

print(output)`,
    curl: `curl -X POST "https://api.replicate.com/v1/predictions" \\
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "version": "bytedance/seedance-v1-pro-i2v-1080p",
    "input": {
      "prompt": "A golden retriever running through a sunflower field, cinematic lighting",
      "image": "https://example.com/dog.jpg",
      "duration": 5
    }
  }'`,
  },
  volcano: {
    javascript: `// Volcano Engine (火山引擎) - Seedance 2.0 API
const response = await fetch("https://visual.volcengineapi.com/v1/video/generate", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + process.env.VOLC_API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "seedance-2.0",
    prompt: "A golden retriever running through a sunflower field, cinematic lighting",
    duration: 5,
    resolution: "2k",
    audio: true,
  }),
});

const data = await response.json();
console.log(data.video_url);`,
    python: `import requests

# Volcano Engine (火山引擎) - Seedance 2.0 API
response = requests.post(
    "https://visual.volcengineapi.com/v1/video/generate",
    headers={
        "Authorization": f"Bearer {VOLC_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "model": "seedance-2.0",
        "prompt": "A golden retriever running through a sunflower field, cinematic lighting",
        "duration": 5,
        "resolution": "2k",
        "audio": True,
    },
)

print(response.json()["video_url"])`,
    curl: `curl -X POST "https://visual.volcengineapi.com/v1/video/generate" \\
  -H "Authorization: Bearer $VOLC_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "seedance-2.0",
    "prompt": "A golden retriever running through a sunflower field, cinematic lighting",
    "duration": 5,
    "resolution": "2k",
    "audio": true
  }'`,
  },
};

const MODELS: Record<Platform, { name: string; id: string; type: string; resolution: string }[]> = {
  fal: [
    { name: 'Seedance Text-to-Video', id: 'fal-ai/seedance/text-to-video', type: 'Text → Video', resolution: '1080p' },
    { name: 'Seedance Image-to-Video', id: 'fal-ai/seedance/image-to-video', type: 'Image → Video', resolution: '1080p' },
    { name: 'Seedance Lite', id: 'fal-ai/seedance-lite', type: 'Text → Video', resolution: '480p' },
  ],
  replicate: [
    { name: 'Seedance 1.0 Pro I2V 1080p', id: 'bytedance/seedance-v1-pro-i2v-1080p', type: 'Image → Video', resolution: '1080p' },
    { name: 'Seedance 1.0 Pro I2V 480p', id: 'bytedance/seedance-v1-pro-i2v-480p', type: 'Image → Video', resolution: '480p' },
    { name: 'Seedance 1.0 Pro', id: 'bytedance/seedance-1-pro', type: 'Text → Video', resolution: '1080p' },
    { name: 'Seedance 1.0 Pro Fast', id: 'bytedance/seedance-1-pro-fast', type: 'Text → Video', resolution: '720p' },
  ],
  volcano: [
    { name: 'Seedance 2.0', id: 'seedance-2.0', type: 'Text/Image → Video', resolution: '2K' },
    { name: 'Seedance 1.5 Pro', id: 'seedance-1.5-pro', type: 'Text/Image → Video', resolution: '1080p' },
  ],
};

const PARAMS = [
  { name: 'prompt', type: 'string', required: true, description: 'Text description of the desired video content' },
  { name: 'image', type: 'string (URL)', required: false, description: 'Reference image URL for image-to-video generation' },
  { name: 'duration', type: 'number', required: false, description: 'Video duration in seconds (4–15, default: 5)' },
  { name: 'aspect_ratio', type: 'string', required: false, description: 'Output aspect ratio: "16:9", "9:16", "1:1"' },
  { name: 'resolution', type: 'string', required: false, description: 'Output resolution (platform-dependent)' },
  { name: 'audio', type: 'boolean', required: false, description: 'Enable audio generation (Seedance 2.0 only)' },
  { name: 'seed', type: 'number', required: false, description: 'Random seed for reproducible results' },
];

const ERRORS = [
  { code: '401', cause: 'Invalid or missing API key', fix: 'Check your API key is set correctly in environment variables' },
  { code: '422', cause: 'Invalid parameters', fix: 'Verify prompt is not empty and duration is within allowed range' },
  { code: '429', cause: 'Rate limit exceeded', fix: 'Wait and retry, or upgrade your plan for higher limits' },
  { code: '500', cause: 'Server error', fix: 'Retry after a few seconds. If persistent, check platform status page' },
  { code: 'NSFW', cause: 'Content moderation triggered', fix: 'Modify your prompt to avoid restricted content' },
];

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="absolute right-2 top-2 rounded bg-white/10 px-2 py-1 text-xs text-white/70 transition-colors hover:bg-white/20"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default function ApiClient() {
  const [platform, setPlatform] = useState<Platform>('fal');
  const [lang, setLang] = useState<Lang>('python');

  return (
    <>
      {/* Platform Tabs */}
      <div className="flex gap-1 rounded-lg bg-muted p-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setPlatform(tab.id)}
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              platform === tab.id
                ? 'bg-card shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Quick Start */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Quick Start</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {platform === 'fal' && 'Install the fal.ai client and set your API key.'}
          {platform === 'replicate' && 'Install the Replicate client and set your API token.'}
          {platform === 'volcano' && 'Get your API key from the Volcano Engine console.'}
        </p>

        {/* Language Tabs */}
        <div className="mt-4 flex gap-1 rounded-lg bg-muted p-1 sm:w-fit">
          {LANG_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setLang(tab.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                lang === tab.id
                  ? 'bg-card shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Block */}
        <div className="relative mt-3 overflow-x-auto rounded-lg bg-[#22272e] p-4">
          <CopyBtn text={CODE[platform][lang]} />
          <pre className="text-sm leading-relaxed text-[#adbac7]">
            <code>{CODE[platform][lang]}</code>
          </pre>
        </div>
      </div>

      {/* Available Models */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">Available Models</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[500px] text-sm" aria-label="Available Seedance models">
            <thead>
              <tr className="border-b border-border text-left">
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Model</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">ID</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Type</th>
                <th scope="col" className="pb-3 font-medium text-muted-foreground">Resolution</th>
              </tr>
            </thead>
            <tbody>
              {MODELS[platform].map((m) => (
                <tr key={m.id} className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">{m.name}</td>
                  <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">{m.id}</td>
                  <td className="py-3 pr-4">{m.type}</td>
                  <td className="py-3">{m.resolution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Parameters */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">Parameters</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm" aria-label="API parameters">
            <thead>
              <tr className="border-b border-border text-left">
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Parameter</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Type</th>
                <th scope="col" className="pb-3 pr-4 font-medium text-muted-foreground">Required</th>
                <th scope="col" className="pb-3 font-medium text-muted-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              {PARAMS.map((p) => (
                <tr key={p.name} className="border-b border-border">
                  <td className="py-3 pr-4 font-mono text-xs">{p.name}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{p.type}</td>
                  <td className="py-3 pr-4">
                    {p.required ? (
                      <span className="text-amber-600 dark:text-amber-400">Yes</span>
                    ) : (
                      <span className="text-muted-foreground">No</span>
                    )}
                  </td>
                  <td className="py-3">{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Error Troubleshooting */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">Error Troubleshooting</h2>
        <div className="mt-4 space-y-2">
          {ERRORS.map((e) => (
            <div key={e.code} className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-3">
                <span className="rounded bg-red-100 px-2 py-0.5 font-mono text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
                  {e.code}
                </span>
                <span className="text-sm font-medium">{e.cause}</span>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{e.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
