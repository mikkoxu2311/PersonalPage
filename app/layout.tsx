import './globals.css';
import type { Metadata } from 'next';
import { LanguageProvider } from './context/LanguageContext';

export const metadata: Metadata = {
  title: 'Mikko - Personal Portfolio',
  description: 'Exploring the Intersection of Learning, AI & Technology, and Personal Evolution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
} 