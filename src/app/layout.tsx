import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import ChatBot from '@/components/ChatBot/ChatBot';
import Footer from '@/components/Footer/Footer';
import BackToTopButton from '@/components/Navigation/BackToTopButton';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MD Primary Care',
  description: 'Your trusted family primary care physician in Fort Pierce, FL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <BackToTopButton />
        <ChatBot
          projectId='aai-ps1-sandbox'
          agentId='276d675c-72f4-4fd7-8b85-01a3a2d25c64'
          languageCode='en'
          location='us-central1'
        />
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: '8px',
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  );
}
