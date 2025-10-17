import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AOSInit from '@/components/AOSInit';
import Analytics from '@/components/Analytics';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

const baseUrl = 'https://www.rettoupvcjakarta.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Retto UPVC Jakarta | Distributor Pintu & Jendela uPVC',
    template: '%s | Retto UPVC Jakarta'
  },
  description:
    'Distributor material uPVC pintu dan jendela terpercaya di Indonesia. Kami menyediakan solusi swing door, sliding door, pivot, lipat, dan jungkit berkualitas tinggi.',
  keywords: [
    'Distributor Kusen uPVC',
    'uPVC Door Indonesia',
    'Pintu Sliding uPVC',
    'Jendela uPVC Jakarta',
    'Material uPVC berkualitas'
  ],
  openGraph: {
    title: 'Retto UPVC Jakarta | Distributor Pintu & Jendela uPVC',
    description:
      'Solusi lengkap uPVC untuk pintu dan jendela: swing, sliding, jungkit, lipat, dan pivot dengan instalasi profesional.',
    url: baseUrl,
    siteName: 'Retto UPVC Jakarta',
    locale: 'id_ID',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retto UPVC Jakarta',
    description: 'Your trusted partner for uPVC doors and windows in Indonesia.'
  },
  icons: {
    icon: '/favicon.svg'
  },
  alternates: {
    canonical: '/' 
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="id" className={`${poppins.variable}`} suppressHydrationWarning>
      <body>
        <Analytics gaId={gaId} />
        <AOSInit />
        <Header />
        <main className="pt-28">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
