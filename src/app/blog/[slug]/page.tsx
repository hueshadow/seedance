import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/constants';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { compileMdxContent, extractHeadings } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx/MdxComponents';
import { ReadingProgress } from '@/components/mdx/ReadingProgress';
import { Sidebar } from '@/components/layout/Sidebar';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: { card: 'summary_large_image' },
  };
}

function ArticleSchema({ post }: { post: { title: string; description: string; date: string; slug: string } }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    publisher: { '@type': 'Organization', name: 'seedance.free' },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMdxContent(post.content, mdxComponents);
  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(slug, post.tags);

  return (
    <>
      <ArticleSchema post={post} />
      <ReadingProgress />
      <Breadcrumbs />

      <div className="mx-auto flex max-w-7xl gap-8 px-6 py-8">
        <article className="prose min-w-0 max-w-3xl flex-1">
          <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span>{post.readingTime} min read</span>
            <span>·</span>
            <span className="rounded bg-muted px-2 py-0.5 text-xs">{post.category}</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8">{content}</div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="text-xl font-bold">Related Articles</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="rounded-lg border border-border p-4 transition-colors hover:border-primary-200 dark:hover:border-primary-800"
                  >
                    <p className="text-xs text-muted-foreground">{r.date}</p>
                    <p className="mt-1 text-sm font-medium">{r.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        <aside className="hidden lg:block lg:w-64">
          <Sidebar
            headings={headings}
            relatedArticles={related.map((r) => ({
              title: r.title,
              href: `/blog/${r.slug}`,
            }))}
          />
        </aside>
      </div>
    </>
  );
}
