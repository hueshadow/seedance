'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface SidebarProps {
  headings?: TocItem[];
  relatedArticles?: { title: string; href: string }[];
}

export function Sidebar({ headings = [], relatedArticles = [] }: SidebarProps) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' },
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0 && relatedArticles.length === 0) return null;

  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-24 space-y-8">
        {headings.length > 0 && (
          <div>
            <h4 className="mb-3 text-sm font-medium">On this page</h4>
            <ul className="space-y-1.5 text-sm">
              {headings.map((h) => (
                <li key={h.id} style={{ paddingLeft: `${(h.level - 2) * 12}px` }}>
                  <a
                    href={`#${h.id}`}
                    className={`block py-0.5 transition-colors ${
                      activeId === h.id
                        ? 'font-medium text-primary-600'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {relatedArticles.length > 0 && (
          <div>
            <h4 className="mb-3 text-sm font-medium">Related</h4>
            <ul className="space-y-1.5 text-sm">
              {relatedArticles.map((article) => (
                <li key={article.href}>
                  <a
                    href={article.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ad slot placeholder */}
        <div className="rounded-lg border border-border bg-muted/50 p-4 text-center text-xs text-muted-foreground">
          Ad Space
        </div>
      </div>
    </aside>
  );
}
