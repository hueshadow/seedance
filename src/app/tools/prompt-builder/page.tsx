import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import PromptBuilderClient from './PromptBuilderClient';

export const metadata: Metadata = {
  title: 'Seedance Prompt Builder — Generate Perfect Video Prompts',
  description:
    'Interactive prompt builder for Seedance AI video generation. Select scene, subject, camera, lighting, and style to create optimized prompts.',
  alternates: { canonical: `${SITE_URL}/tools/prompt-builder` },
  openGraph: {
    title: 'Seedance Prompt Builder',
    description: 'Build optimized prompts for Seedance AI video generation.',
    url: `${SITE_URL}/tools/prompt-builder`,
    type: 'website',
  },
};

export default function PromptBuilderPage() {
  return (
    <>
      <Breadcrumbs />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Prompt Builder</h1>
        <p className="mt-3 text-muted-foreground">
          Build optimized prompts for Seedance by selecting options below. Copy the result and paste
          it into Jimeng, Dreamina, or any API client.
        </p>
        <div className="mt-8">
          <PromptBuilderClient />
        </div>
      </div>
    </>
  );
}
