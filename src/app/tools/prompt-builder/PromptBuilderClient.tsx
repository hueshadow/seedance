'use client';

import { useState } from 'react';

const SCENES = ['E-commerce Product', 'Short Film', 'Music Video', 'Social Media', 'Product Demo', 'Nature/Landscape', 'Character Animation'];
const SUBJECTS = ['Person', 'Animal', 'Object', 'Vehicle', 'Food', 'Architecture', 'Abstract'];
const ACTIONS = ['Walking', 'Running', 'Dancing', 'Flying', 'Rotating', 'Transforming', 'Floating', 'Exploding'];
const CAMERAS = ['Static', 'Pan Left', 'Pan Right', 'Zoom In', 'Zoom Out', 'Dolly Forward', 'Orbit', 'Drone Shot', 'Tracking Shot'];
const LIGHTING = ['Natural Daylight', 'Golden Hour', 'Blue Hour', 'Studio Lighting', 'Neon', 'Cinematic', 'Dramatic Shadows', 'Soft Diffused'];
const STYLES = ['Photorealistic', 'Cinematic', 'Anime', 'Watercolor', 'Oil Painting', '3D Render', 'Vintage Film', 'Minimalist'];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
    >
      {copied ? 'Copied!' : 'Copy Prompt'}
    </button>
  );
}

export default function PromptBuilderClient() {
  const [scene, setScene] = useState('');
  const [subject, setSubject] = useState('');
  const [customSubject, setCustomSubject] = useState('');
  const [action, setAction] = useState('');
  const [camera, setCamera] = useState('');
  const [lighting, setLighting] = useState('');
  const [style, setStyle] = useState('');
  const [refType, setRefType] = useState<'none' | 'image' | 'video'>('none');

  const parts: string[] = [];
  if (style) parts.push(style);
  if (scene) parts.push(scene.toLowerCase() + ' scene');
  const subj = customSubject || subject;
  if (subj && action) parts.push(`${subj.toLowerCase()} ${action.toLowerCase()}`);
  else if (subj) parts.push(subj.toLowerCase());
  if (camera && camera !== 'Static') parts.push(camera.toLowerCase() + ' camera movement');
  if (lighting) parts.push(lighting.toLowerCase() + ' lighting');

  const prompt = parts.length > 0
    ? parts.join(', ').replace(/^./, (c) => c.toUpperCase())
    : '';

  const fullPrompt = refType !== 'none'
    ? `${refType === 'image' ? '@Image1' : '@Video1'} ${prompt}`
    : prompt;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Form */}
      <div className="space-y-5">
        <Field label="Scene Type" options={SCENES} value={scene} onChange={setScene} />
        <Field label="Subject" options={SUBJECTS} value={subject} onChange={setSubject} />
        <div>
          <label className="text-sm font-medium text-muted-foreground">Custom Subject</label>
          <input
            type="text"
            placeholder="e.g., a red sports car, a tabby cat..."
            value={customSubject}
            onChange={(e) => setCustomSubject(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary-400"
          />
        </div>
        <Field label="Action" options={ACTIONS} value={action} onChange={setAction} />
        <Field label="Camera Movement" options={CAMERAS} value={camera} onChange={setCamera} />
        <Field label="Lighting" options={LIGHTING} value={lighting} onChange={setLighting} />
        <Field label="Style" options={STYLES} value={style} onChange={setStyle} />

        {/* Reference Input */}
        <div>
          <label className="text-sm font-medium text-muted-foreground">Reference Input</label>
          <div className="mt-1 flex gap-2">
            {(['none', 'image', 'video'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setRefType(t)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  refType === t
                    ? 'bg-primary-600 text-white'
                    : 'border border-border hover:bg-muted'
                }`}
              >
                {t === 'none' ? 'None' : t === 'image' ? '@Image' : '@Video'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Generated Prompt</h3>
          <div className="mt-3 min-h-[120px] rounded-lg bg-muted/50 p-4">
            {fullPrompt ? (
              <p className="text-sm leading-relaxed">{fullPrompt}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Select options on the left to build your prompt...
              </p>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {fullPrompt.length} characters
            </span>
            {fullPrompt && <CopyButton text={fullPrompt} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-muted-foreground">{label}</label>
      <div className="mt-1 flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(value === opt ? '' : opt)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              value === opt
                ? 'bg-primary-600 text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
