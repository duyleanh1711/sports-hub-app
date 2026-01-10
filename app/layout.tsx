import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

import NextTopLoader from 'nextjs-toploader';

import QueryProvider from '@/components/providers/query-provider';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'SportsHub – Nền tảng đặt lịch sân thể thao thông minh',
  description:
    'SportsHub giúp người chơi và chủ sân đặt lịch, quản lý và vận hành sân thể thao đa môn nhanh chóng, tiện lợi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <QueryProvider>
          <NextTopLoader color="#ed662e" />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
