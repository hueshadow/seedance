import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: number;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
      const { data, content } = matter(raw);
      const slug = file.replace(/\.mdx$/, '');
      const words = content.split(/\s+/).length;
      const readingTime = Math.max(1, Math.ceil(words / 200));

      return {
        slug,
        title: (data.title as string) || slug,
        description: (data.description as string) || '',
        date: (data.date as string) || '',
        category: (data.category as string) || 'General',
        tags: (data.tags as string[]) || [],
        readingTime,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return {
    slug,
    title: (data.title as string) || slug,
    description: (data.description as string) || '',
    date: (data.date as string) || '',
    category: (data.category as string) || 'General',
    tags: (data.tags as string[]) || [],
    readingTime,
    content,
  };
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): BlogPost[] {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);
  const scored = all.map((post) => ({
    post,
    score: post.tags.filter((t) => tags.includes(t)).length,
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}
