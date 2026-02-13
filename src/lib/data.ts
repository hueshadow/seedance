export interface PlatformPricing {
  platform: string;
  region: string;
  plans: { name: string; price: string; note?: string }[];
  freeCredits: string | null;
  seedanceVersions: string;
  requiresChinaPhone: boolean;
}

export const PLATFORM_PRICING: PlatformPricing[] = [
  {
    platform: 'Jimeng (即梦)',
    region: 'China',
    plans: [
      { name: 'Basic', price: '¥69/mo (~$9.50)' },
      { name: 'Pro', price: '¥199/mo (~$27)' },
      { name: 'Enterprise', price: '¥499/mo (~$68)' },
    ],
    freeCredits: '10 free generations/day for new users',
    seedanceVersions: '1.0, 1.5, 2.0',
    requiresChinaPhone: true,
  },
  {
    platform: 'Dreamina',
    region: 'International',
    plans: [
      { name: 'Starter', price: '$18/mo' },
      { name: 'Pro', price: '$42/mo' },
      { name: 'Premium', price: '$84/mo' },
    ],
    freeCredits: '5 free generations for new accounts',
    seedanceVersions: '1.5, 2.0',
    requiresChinaPhone: false,
  },
  {
    platform: 'Doubao (豆包)',
    region: 'China',
    plans: [{ name: 'Free Tier', price: 'Free' }],
    freeCredits: '10 free generations/day',
    seedanceVersions: '1.0',
    requiresChinaPhone: true,
  },
  {
    platform: 'fal.ai',
    region: 'Global (API)',
    plans: [{ name: 'Pay-as-you-go', price: '~$0.01–0.05/sec', note: 'Varies by model' }],
    freeCredits: '$10 free credits on signup',
    seedanceVersions: '1.0 (all variants), 1.5 Pro',
    requiresChinaPhone: false,
  },
  {
    platform: 'Replicate',
    region: 'Global (API)',
    plans: [{ name: 'Pay-as-you-go', price: '~$0.01–0.05/sec', note: 'Varies by model' }],
    freeCredits: 'Free tier with limited runs',
    seedanceVersions: '1.0 Pro, 1.5 Pro',
    requiresChinaPhone: false,
  },
];

export const COMPETITOR_PRICING = [
  { model: 'Seedance 2.0', price: 'From $18/mo', freeOption: true, highlight: true },
  { model: 'Sora 2', price: '$200/mo (ChatGPT Pro)', freeOption: false, highlight: false },
  { model: 'Veo 3.1', price: '$19.99/mo (Google AI Pro)', freeOption: true, highlight: false },
  { model: 'Kling 2.0', price: 'From $9.99/mo', freeOption: true, highlight: false },
  { model: 'Hailuo AI', price: 'From $9.99/mo', freeOption: true, highlight: false },
];

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

export interface SeedanceVersion {
  id: string;
  name: string;
  subtitle: string;
  released: string;
  resolution: string;
  maxDuration: string;
  speed: string;
  audio: boolean;
  referenceInput: string;
  platforms: string[];
  priceNote: string;
  highlights: string[];
  bestFor: string;
  latest?: boolean;
}

export const SEEDANCE_VERSIONS: SeedanceVersion[] = [
  {
    id: '2.0',
    name: 'Seedance 2.0',
    subtitle: 'Latest Flagship',
    released: 'Jan 2026',
    resolution: '2K (2048×1080)',
    maxDuration: '15s',
    speed: '~60s',
    audio: true,
    referenceInput: 'Image + Video',
    platforms: ['Jimeng', 'Dreamina'],
    priceNote: 'From $18/mo (Dreamina)',
    highlights: [
      '2K resolution output',
      'Built-in audio generation',
      'Image and video reference input',
      'Improved motion consistency',
    ],
    bestFor: 'Professional creators needing the highest quality with audio',
    latest: true,
  },
  {
    id: '1.5-pro',
    name: 'Seedance 1.5 Pro',
    subtitle: 'Enhanced Professional',
    released: 'Oct 2025',
    resolution: '1080p',
    maxDuration: '10s',
    speed: '~45s',
    audio: false,
    referenceInput: 'Image + Video',
    platforms: ['Jimeng', 'Dreamina', 'fal.ai', 'Replicate'],
    priceNote: 'API: ~$0.05/sec',
    highlights: [
      'Better motion quality than 1.0',
      'Wider API availability',
      'Image-to-video and video-to-video',
    ],
    bestFor: 'Developers who need API access with good quality',
  },
  {
    id: '1.0-pro',
    name: 'Seedance 1.0 Pro',
    subtitle: 'Professional',
    released: 'Jul 2025',
    resolution: '1080p',
    maxDuration: '10s',
    speed: '~40s',
    audio: false,
    referenceInput: 'Image',
    platforms: ['Jimeng', 'fal.ai', 'Replicate'],
    priceNote: 'API: ~$0.04/sec',
    highlights: ['High-quality generation', 'Stable motion', 'Wide API support'],
    bestFor: 'Quality-focused projects with API integration',
  },
  {
    id: '1.0-pro-fast',
    name: 'Seedance 1.0 Pro Fast',
    subtitle: 'Fast Professional',
    released: 'Jul 2025',
    resolution: '720p',
    maxDuration: '5s',
    speed: '~15s',
    audio: false,
    referenceInput: 'Image',
    platforms: ['fal.ai', 'Replicate'],
    priceNote: 'API: ~$0.02/sec',
    highlights: ['4x faster than Pro', 'Good for rapid prototyping', 'Lower cost per video'],
    bestFor: 'Quick iterations and prototyping',
  },
  {
    id: '1.0-mini',
    name: 'Seedance 1.0 Mini',
    subtitle: 'Compact',
    released: 'Jul 2025',
    resolution: '480p',
    maxDuration: '5s',
    speed: '~10s',
    audio: false,
    referenceInput: 'Image',
    platforms: ['fal.ai', 'Replicate'],
    priceNote: 'API: ~$0.01/sec',
    highlights: ['Fastest generation', 'Lowest cost', 'Good for thumbnails and previews'],
    bestFor: 'High-volume, low-cost generation',
  },
  {
    id: '1.0-lite',
    name: 'Seedance 1.0 Lite',
    subtitle: 'Entry Level',
    released: 'Jul 2025',
    resolution: '480p',
    maxDuration: '4s',
    speed: '~8s',
    audio: false,
    referenceInput: 'Text only',
    platforms: ['fal.ai'],
    priceNote: 'API: ~$0.008/sec',
    highlights: ['Text-to-video only', 'Ultra-low cost', 'Fastest option'],
    bestFor: 'Testing and experimentation',
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
