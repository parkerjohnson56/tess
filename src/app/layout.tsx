import './globals.css';
import { Playfair_Display, Lato } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Metadata } from 'next';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: {
    default: 'Tess & Saundra Keeler | Romance Authors',
    template: '%s | Tess & Saundra Keeler'
  },
  description: 'Official website of romance authors Tess & Saundra Keeler. Discover contemporary romance novels filled with love, healing, and second chances.',
  keywords: ['Tess Keeler', 'Saundra Keeler', 'romance author', 'contemporary romance', 'romance novels', 'Everything Comes Back to You', 'Closer to You', 'Make You Mine', 'More to This'],
  authors: [
    { name: 'Tess Keeler' },
    { name: 'Saundra Keeler' }
  ],
  creator: 'Tess & Saundra Keeler',
  publisher: 'Tess & Saundra Keeler',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tesskeeler.com',
    siteName: 'Tess & Saundra Keeler',
    title: 'Tess & Saundra Keeler | Romance Authors',
    description: 'Official website of romance authors Tess & Saundra Keeler. Discover contemporary romance novels filled with love, healing, and second chances.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tess & Saundra Keeler - Romance Authors'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tess & Saundra Keeler | Romance Authors',
    description: 'Official website of romance authors Tess & Saundra Keeler. Discover contemporary romance novels filled with love, healing, and second chances.',
    images: ['/images/og-image.jpg']
  },
  alternates: {
    canonical: 'https://tesskeeler.com'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FAF7F2" />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://tesskeeler.com",
              "name": "Tess & Saundra Keeler",
              "description": "Official website of romance authors Tess & Saundra Keeler",
              "publisher": {
                "@type": "Organization",
                "name": "Tess & Saundra Keeler",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://tesskeeler.com/images/logo.png"
                }
              },
              "author": [
                {
                  "@type": "Person",
                  "name": "Tess Keeler",
                  "url": "https://tesskeeler.com/about",
                  "sameAs": [
                    "https://instagram.com/tsmkeeler",
                    "https://goodreads.com/author/show/tess-keeler"
                  ]
                },
                {
                  "@type": "Person",
                  "name": "Saundra Keeler",
                  "url": "https://tesskeeler.com/about"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
