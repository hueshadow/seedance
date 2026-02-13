import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { CopyButton } from './CopyButton';

function getTextContent(node: ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (!node) return '';
  if (Array.isArray(node)) return node.map(getTextContent).join('');
  if (typeof node === 'object' && node !== null && 'props' in node) {
    return getTextContent((node as { props: { children?: ReactNode } }).props.children);
  }
  return '';
}

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="group scroll-mt-24" {...props}>
      {props.children}
      <a
        href={`#${props.id}`}
        className="ml-2 opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Link to section"
      >
        #
      </a>
    </h2>
  ),

  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="group scroll-mt-24" {...props}>
      {props.children}
      <a
        href={`#${props.id}`}
        className="ml-2 text-sm opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Link to section"
      >
        #
      </a>
    </h3>
  ),

  p: (props: ComponentPropsWithoutRef<'p'>) => <p {...props} />,

  a: ({ href = '', children, ...props }: ComponentPropsWithoutRef<'a'>) => {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  },

  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="-mx-4 overflow-x-auto px-4">
      <table {...props} />
    </div>
  ),

  thead: (props: ComponentPropsWithoutRef<'thead'>) => (
    <thead {...props} />
  ),

  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th className="whitespace-nowrap" {...props} />
  ),

  td: (props: ComponentPropsWithoutRef<'td'>) => <td {...props} />,

  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code {...props} />
  ),

  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => {
    const codeText = getTextContent(children);
    return (
      <div className="relative">
        <pre
          className="overflow-x-auto rounded-lg bg-[#22272e] p-4 text-sm leading-relaxed"
          {...props}
        >
          {children}
        </pre>
        <CopyButton text={codeText} />
      </div>
    );
  },

  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote {...props} />
  ),

  ul: (props: ComponentPropsWithoutRef<'ul'>) => <ul {...props} />,
  ol: (props: ComponentPropsWithoutRef<'ol'>) => <ol {...props} />,
  li: (props: ComponentPropsWithoutRef<'li'>) => <li {...props} />,

  hr: (props: ComponentPropsWithoutRef<'hr'>) => <hr {...props} />,

  img: (props: ComponentPropsWithoutRef<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img loading="lazy" alt={props.alt ?? ''} {...props} />
  ),
};
