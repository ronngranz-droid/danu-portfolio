import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { CyberMatrixBackground } from '@/components/ui/CyberMatrixBackground';
import { SoundEffects } from '@/components/ui/SoundEffects';
import { FloatingTools } from '@/components/ui/FloatingTools';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

import { PersonJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

const isPreview = process.env.VERCEL_ENV === 'preview';

export const metadata: Metadata = {
  metadataBase: new URL('https://kuze3ez.is-a.dev'),
  title: {
    default: 'ronngranz — Web Developer & Frontend Engineer',
    template: '%s | ronngranz',
  },
  description:
    'Portfolio ronngranz, Web Developer and Frontend Engineer focused on web applications, UI/UX, database modeling, and building digital products.',
  applicationName: 'ronngranz Portfolio OS',
  authors: [{ name: 'ronngranz (KUZE3EZ)', url: 'https://kuze3ez.is-a.dev' }],
  creator: 'ronngranz',
  publisher: 'ronngranz',
  keywords: [
    'ronngranz',
    'KUZE3EZ',
    'Web Developer',
    'Frontend Developer',
    'Frontend Engineer',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Kelana',
    'Portfolio',
  ],
  alternates: {
    canonical: 'https://kuze3ez.is-a.dev',
  },
  robots: {
    index: !isPreview,
    follow: !isPreview,
    googleBot: {
      index: !isPreview,
      follow: !isPreview,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ronngranz — Web Developer & Frontend Engineer',
    description:
      'Portfolio, projects, case studies, and web applications built by ronngranz.',
    type: 'website',
    locale: 'en_US',
    url: 'https://kuze3ez.is-a.dev',
    siteName: 'KUZE3EZ // Portfolio OS',
    images: [
      {
        url: '/images/projects/kelana.png',
        width: 1200,
        height: 630,
        alt: 'ronngranz — Portfolio OS & Flagship Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ronngranz — Web Developer & Frontend Engineer',
    description:
      'Portfolio, projects, case studies, and web applications built by ronngranz.',
    creator: '@ronngranz',
    images: ['/images/projects/kelana.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <PersonJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#111111] antialiased relative selection:bg-[#FACC15] selection:text-zinc-950">
        <CyberMatrixBackground />
        <ScrollProgress />
        <CustomCursor />
        <SoundEffects />
        <FloatingTools />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
