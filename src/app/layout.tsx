import { ttNorms } from '@/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manual',
  description: 'Manual.co',
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
