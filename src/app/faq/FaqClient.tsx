'use client';

import { useState } from 'react';
import type { FaqItem, FaqCategory } from '@/lib/data';
import { FAQ_CATEGORIES } from '@/lib/data';

export default function FaqClient({ items }: { items: FaqItem[] }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<FaqCategory | 'all'>('all');

  const filtered = items.filter((item) => {
    const matchesSearch =
      !search ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Object.entries(FAQ_CATEGORIES) as [FaqCategory, string][];

  return (
    <>
      {/* Search */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent-400 dark:focus:border-accent-600"
        />
      </div>

      {/* Category filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-accent-600 text-white'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          All
        </button>
        {categories.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === key
                ? 'bg-accent-600 text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* FAQ list */}
      <div className="mt-8 space-y-3">
        {filtered.length === 0 ? (
          <p className="py-8 text-center text-muted-foreground">
            No questions match your search. Try different keywords.
          </p>
        ) : (
          filtered.map((item, i) => (
            <details
              key={i}
              className="group rounded-lg border border-border bg-card transition-colors open:border-accent-200 dark:open:border-accent-800"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium select-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <svg
                  className="ml-4 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div
                className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-accent-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-700 dark:[&_a]:text-accent-400"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </details>
          ))
        )}
      </div>
    </>
  );
}
