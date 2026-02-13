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

export type FaqCategory = 'general' | 'pricing' | 'technical' | 'usage';

export interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategory;
}

export const FAQ_CATEGORIES: Record<FaqCategory, string> = {
  general: 'General',
  pricing: 'Pricing',
  technical: 'Technical',
  usage: 'How to Use',
};

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'What is Seedance?',
    answer:
      'Seedance is an AI video generation model developed by ByteDance (the company behind TikTok). It can create high-quality videos from text prompts or images, supporting up to 2K resolution with audio generation. The latest version, Seedance 2.0, is available through platforms like <a href="https://jimeng.jianying.com" target="_blank" rel="noopener noreferrer">Jimeng</a> and Dreamina. Learn more in our <a href="/guide">complete guide</a>.',
    category: 'general',
  },
  {
    question: 'Is Seedance free?',
    answer:
      'Yes, you can use Seedance for free. Platforms like Jimeng and Dreamina offer daily free credits for new users. Third-party API providers such as fal.ai and Replicate also provide free trial credits. Check our <a href="/pricing">pricing page</a> for a full breakdown of free and paid options across all platforms.',
    category: 'pricing',
  },
  {
    question: 'Is Seedance open source?',
    answer:
      'Seedance itself is not open source — ByteDance has not released the model weights publicly. However, you can access Seedance through open APIs on platforms like fal.ai and Replicate, which provide standard REST endpoints. See our <a href="/api">API guide</a> for integration details.',
    category: 'technical',
  },
  {
    question: 'Does Seedance have audio?',
    answer:
      'Yes, Seedance 2.0 supports audio generation. It can produce synchronized sound effects and ambient audio that match the video content. This is a significant upgrade from earlier versions (1.0 and 1.5) which were video-only. For details on each version\'s capabilities, see our <a href="/versions">version comparison</a>.',
    category: 'technical',
  },
  {
    question: 'Do Seedance videos have audio?',
    answer:
      'Videos generated with Seedance 2.0 can include audio. The model generates synchronized sound effects automatically. Earlier versions (1.0 Lite, Mini, Pro, Fast, and 1.5 Pro) produce silent videos. If you need audio, make sure you\'re using Seedance 2.0 on a platform that supports it, such as Jimeng.',
    category: 'technical',
  },
  {
    question: 'How to use Seedance?',
    answer:
      'The easiest way to use Seedance is through Jimeng (即梦) at <a href="https://jimeng.jianying.com" target="_blank" rel="noopener noreferrer">jimeng.jianying.com</a>. Create an account, select the video generation tool, write a text prompt describing your desired video, and hit generate. For a detailed walkthrough including prompt tips and advanced features, read our <a href="/guide">complete guide</a>.',
    category: 'usage',
  },
  {
    question: 'Is Seedance censored?',
    answer:
      'Seedance applies content moderation filters, especially on Chinese platforms like Jimeng and Doubao. These filters restrict NSFW content, politically sensitive topics, and certain copyrighted material. The level of filtering varies by platform — third-party API providers like fal.ai and Replicate may have different content policies.',
    category: 'general',
  },
  {
    question: 'Can I use Seedance for commercial projects?',
    answer:
      'Commercial usage policies depend on the platform you use. Jimeng\'s paid plans generally allow commercial use of generated videos. For API access through fal.ai or Replicate, check their respective terms of service. Always review the specific platform\'s licensing terms before using generated content commercially.',
    category: 'usage',
  },
  {
    question: "What's the maximum video length?",
    answer:
      'Seedance 2.0 supports videos up to 15 seconds in length. Earlier versions had shorter limits — Seedance 1.0 supported up to 10 seconds, and 1.5 Pro up to 10 seconds as well. For longer videos, you can generate multiple clips and stitch them together in a video editor. See our <a href="/versions">version comparison</a> for full specs.',
    category: 'technical',
  },
  {
    question: 'Do I need a Chinese phone number?',
    answer:
      'For Jimeng (the primary platform), a Chinese phone number is required for registration. However, there are workarounds: you can use virtual phone number services, access Seedance through Dreamina (the international version), or use API providers like fal.ai and Replicate which don\'t require Chinese verification. Our <a href="/register">registration guide</a> walks through each method step by step.',
    category: 'usage',
  },
];

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
