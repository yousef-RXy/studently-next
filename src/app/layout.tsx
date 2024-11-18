import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Studently',
  description: 'studently is app to assist the students',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
