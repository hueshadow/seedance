import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Seedance Blog — Tutorials, Comparisons & Tips',
  description:
    'Latest articles about Seedance AI video generator. Tutorials, model comparisons, prompt tips, and industry news.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Seedance Blog',
    description: 'Tutorials, comparisons, and tips for Seedance AI video generation.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Breadcrumbs />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-3 text-muted-foreground">
          Tutorials, comparisons, and tips for getting the most out of Seedance.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">
            Articles coming soon. Check back shortly.
          </p>
        ) : (
          <div className="mt-10 space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary-200 hover:shadow-sm dark:hover:border-primary-800"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>·</span>
                  <span>{post.readingTime} min read</span>
                  <span>·</span>
                  <span className="rounded bg-muted px-2 py-0.5">{post.category}</span>
                </div>
                <h2 className="mt-2 text-lg font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
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
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
