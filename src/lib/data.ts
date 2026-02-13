export const COMPARISON_DATA = [
  {
    model: 'Seedance 2.0',
    maker: 'ByteDance',
    maxResolution: '2K',
    maxDuration: '15s',
    audio: true,
    freeAccess: true,
    entryPrice: '$18/mo',
    highlight: true,
  },
  {
    model: 'Sora 2',
    maker: 'OpenAI',
    maxResolution: '1080p',
    maxDuration: '20s',
    audio: true,
    freeAccess: false,
    entryPrice: '$200/mo',
    highlight: false,
  },
  {
    model: 'Veo 3.1',
    maker: 'Google',
    maxResolution: '4K',
    maxDuration: '8s',
    audio: true,
    freeAccess: true,
    entryPrice: '$19.99/mo',
    highlight: false,
  },
  {
    model: 'Kling 2.0',
    maker: 'Kuaishou',
    maxResolution: '1080p',
    maxDuration: '10s',
    audio: false,
    freeAccess: true,
    entryPrice: '$9.99/mo',
    highlight: false,
  },
] as const;

export const NAV_CARDS = [
  {
    title: 'Complete Guide',
    description: 'Everything you need to know about Seedance — from getting started to advanced prompts.',
    href: '/guide',
    icon: 'book',
  },
  {
    title: 'Tools',
    description: 'Prompt builder, credit calculator, and side-by-side model comparison.',
    href: '/tools/prompt-builder',
    icon: 'wrench',
  },
  {
    title: 'API Integration',
    description: 'Code examples for fal.ai, Replicate, and Volcano Engine with JS, Python, and cURL.',
    href: '/api',
    icon: 'code',
  },
  {
    title: 'Register Guide',
    description: 'How to access Seedance 2.0 without a Chinese phone number. Step-by-step.',
    href: '/register',
    icon: 'key',
  },
] as const;

export const UPCOMING_POSTS = [
  {
    title: 'Seedance 2.0 vs Sora 2: Which AI Video Generator Wins?',
    excerpt: 'A detailed comparison of features, quality, pricing, and accessibility between the two leading AI video models.',
    date: '2026-02-20',
    slug: 'seedance-vs-sora',
  },
  {
    title: 'How to Access Seedance 2.0 Outside China',
    excerpt: 'Three proven methods to use Seedance 2.0 from anywhere in the world, including virtual phone numbers and API access.',
    date: '2026-02-18',
    slug: 'seedance-outside-china',
  },
  {
    title: '10 Best Seedance Prompts for E-commerce Videos',
    excerpt: 'Ready-to-use prompt templates for product showcases, unboxing videos, and lifestyle shots.',
    date: '2026-02-25',
    slug: 'best-seedance-prompts-ecommerce',
  },
] as const;
