import type { Metadata } from 'next';
import { Inter, Playfair_Display, Roboto, Merriweather } from 'next/font/google';
import './globals.css';
import { ThemeScript } from '@/components/theme-script';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-body' });
const merriweather = Merriweather({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: "Dr Jyoti's Physiotherapy Center",
    template: "%s | Dr Jyoti's Physiotherapy Center"
  },
  icons: {
    icon: '/favicon.ico',
  },
  description: 'Physiotherapy and slimming center in Awadhpuri, Bhopal for pain relief, movement recovery, rehab, and wellness support.',
  keywords: ['physiotherapy bhopal', 'physiotherapist awadhpuri', 'dr jyoti physiotherapy', 'slimming center bhopal'],
  alternates: { canonical: '/' },
  openGraph: {
    title: "Dr Jyoti's Physiotherapy Center",
    description: 'Patient-focused physiotherapy and rehabilitation clinic in Awadhpuri, Bhopal.',
    url: 'https://your-domain.com',
    siteName: "Dr Jyoti's Physiotherapy Center",
    locale: 'en_IN',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${merriweather.variable}`}>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}