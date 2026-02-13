import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import type { ComponentType } from 'react';

export async function compileMdxContent(
  source: string,
  components?: Record<string, ComponentType>,
) {
  const { content, frontmatter } = await compileMDX({
    source,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, { theme: 'github-dark-dimmed' }],
          [
            rehypeAutolinkHeadings,
            { behavior: 'wrap', properties: { className: ['anchor'] } },
          ],
        ],
      },
    },
  });

  return { content, frontmatter };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function extractHeadings(
  source: string,
): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(source)) !== null) {
    const level = match[1]!.length;
    const text = match[2]!.replace(/\*\*/g, '').replace(/`/g, '').trim();
    headings.push({ id: slugify(text), text, level });
  }

  return headings;
}
