import { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'Golden Gate Media',
    'AI',
    'Agent',
    'Marketing',
    'Freelancer',
    'UI/UX',
    'Developer',
    'React Template',
    'Next.js Template',
    'Tailwind',
    'Shadcn',
    'Tailwind V4',
  ],
  authors: [
    {
      name: 'Golden Gate Media',
      url: 'https://goldengatemedia.co.uk',
    },
  ],
  creator: 'adamcrowley',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@dillionverma',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
