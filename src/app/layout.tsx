import type { Metadata } from 'next';
import RealtimeAutoConnect from './realtime-auto-connect';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const hyWenHei = localFont({
  src: [{ path: './fonts/HYWenHei85W.woff2', weight: '300', style: 'normal' }],
  variable: '--font-hywenhei',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Genshin Impact - Guess who?',
  description: 'Genshin Impact - Guess who?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${hyWenHei.className} antialiased dark`}>
        <RealtimeAutoConnect />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
