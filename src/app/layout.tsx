import type { Metadata } from 'next';
import RealtimeAutoConnect from './realtime-auto-connect';
import { Analytics } from '@vercel/analytics/next';
import { Montserrat } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Genshin Impact - Guess who?',
  description: 'Genshin Impact - Guess who?',
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
