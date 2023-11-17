import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Step By Step Guide To Full Stack Web Development',
  description:
    "'Step By Step Guide To Full Stack Web Development | Next.js13 Tailwind Prisma Postgresql Typescript' by developedbyed Youtube Channel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

