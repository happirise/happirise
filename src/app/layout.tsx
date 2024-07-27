import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { type } from '../../.next/static/webpack/app/page.4330156e150c2c48.hot-update';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Happirise | 企業採用支援事業',
  description: '来世も自分に生まれたいと心から思える人間を増やす。',
  applicationName: 'Happirise',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://happirise.vercel.app/',
    siteName: 'Happirise',
    title: 'Happirise | 企業採用支援事業',
    description: '来世も自分に生まれたいと心から思える人間を増やす。',
    images: [
      {
        url: '/favicons/apple-touch-icon.png',
        alt: 'Happirise | 企業採用支援事業',
        width: 180,
        height: 180,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
