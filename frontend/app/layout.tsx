import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import config from '@/lib/config';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
