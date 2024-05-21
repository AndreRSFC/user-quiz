import { ttNorms } from '@/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manual: Men´s health care made easy',
  description: 'Manual.co',
  icons: {
    icon: '/favicon.ico?v=1',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ttNorms.className}>{children}</body>
    </html>
  );
}
