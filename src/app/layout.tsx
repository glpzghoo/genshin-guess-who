import type { Metadata } from 'next';
import RealtimeAutoConnect from './realtime-auto-connect';
import { Analytics } from '@vercel/analytics/next';
import { Montserrat } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://genshin-gw.com'),
  title: {
    default: 'Genshin Guess Who | Daily Character Challenge & Voice Line Quiz',
    template: '%s | Genshin Guess Who',
  },
  description:
    'Play the fan-made Genshin Impact Guess Who game with daily puzzles, endless mode, and searchable voice lines to sharpen your Teyvat knowledge.',
  keywords: [
    'Genshin Impact guess who',
    'Genshin character quiz',
    'Genshin daily challenge',
    'Genshin voice lines',
    'Genshin fan game',
    'Genshin trivia',
  ],
  applicationName: 'Genshin Guess Who',
  alternates: {
    canonical: 'https://genshin-gw.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://genshin-gw.com',
    title: 'Genshin Guess Who | Daily Character Challenge & Voice Line Quiz',
    description:
      'Play a free browser-based Genshin Impact guessing game featuring a daily challenge, endless mode, and curated voice lines.',
    siteName: 'Genshin Guess Who',
    images: [
      {
        url: '/assets/ui/UI_AvatarIcon_Aino.png',
        alt: 'Genshin Guess Who character preview artwork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genshin Guess Who | Daily Character Challenge & Voice Line Quiz',
    description:
      'Guess the Genshin Impact character from daily challenges, endless mode, and voice line clues.',
    images: ['/assets/ui/UI_AvatarIcon_Aino.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const f = Montserrat({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${f.className} antialiased dark`}>
        <RealtimeAutoConnect />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
