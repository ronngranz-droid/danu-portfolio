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

export const metadata: Metadata = {
  metadataBase: new URL('https://kuze3ez.is-a.dev'),
  title: 'Danu Sakti Aditya Permana (KUZE3EZ) — Frontend Developer & Software Engineer',
  description:
    'Portfolio of Danu Sakti Aditya Permana (KUZE3EZ), a Software Engineering student focused on modern web development, interactive 3D interfaces, and digital products.',
  keywords: [
    'Danu Sakti',
    'KUZE3EZ',
    'ronngranz',
    'Frontend Developer',
    'Software Engineer',
    'Next.js',
    'React',
    'Portfolio',
    'RPL Indonesia',
  ],
  authors: [{ name: 'Danu Sakti Aditya Permana (KUZE3EZ)' }],
  openGraph: {
    title: 'Danu Sakti Aditya Permana (KUZE3EZ) — Frontend Developer & Software Engineer',
    description:
      'Portfolio of Danu Sakti Aditya Permana (KUZE3EZ), a Software Engineering student focused on modern web development, interactive 3D interfaces, and digital products.',
    type: 'website',
    locale: 'id_ID',
    url: 'https://kuze3ez.is-a.dev',
    siteName: 'KUZE3EZ // Portfolio OS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Danu Sakti Aditya Permana (KUZE3EZ) — Frontend Developer',
    description:
      'Portfolio of Danu Sakti Aditya Permana (KUZE3EZ), Software Engineering student and Frontend Developer.',
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
