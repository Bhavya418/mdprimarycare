import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Inter,
  Merriweather,
  Montserrat,
  Open_Sans,
} from 'next/font/google';
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

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

const merriweather = Merriweather({
  variable: '--font-merri',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const montserrat = Montserrat({
  variable: '--font-mont',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

const openSans = Open_Sans({
  variable: '--font-open',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mdprimarycare.us'),
  title: 'MD Primary Care | Best Family Healthcare',
  description:
    'Book appointments and get medical results online with MD Primary Care — trusted healthcare in your area.',
  icons: {
    icon: [{ url: '/logo.webp', type: 'image/webp' }],
    shortcut: [{ url: '/logo.webp', type: 'image/webp' }],
    apple: [{ url: '/logo.webp', type: 'image/webp' }],
  },
  keywords: [
    'Primary Care',
    'Family Doctor',
    'Online Results',
    'Healthcare',
    'Clinic',
  ],
  openGraph: {
    title: 'MD Primary Care',
    description: 'Trusted family healthcare and online results.',
    url: 'https://www.mdprimarycare.us',
    siteName: 'MD Primary Care',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${merriweather.variable} ${montserrat.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <Footer />
        <BackToTopButton />
        <ChatBot
          projectId={process.env.PROJECT_ID!}
          agentId={process.env.AGENT_ID!}
          languageCode={process.env.LANGUAGE_CODE!}
          location={process.env.LOCATION!}
          chatTitle={process.env.CHAT_TITLE!}
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
