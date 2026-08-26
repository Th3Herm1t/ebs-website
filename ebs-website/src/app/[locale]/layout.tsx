import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import WebVitalsReporter from "@/components/analytics/WebVitalsReporter";
import { siteJsonLd } from "@/lib/structured-data";
import "../globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Espima Business School (EBS)',
    default: 'Espima Business School (EBS) | Université Privée en Tunisie', 
  },
  description: 'ESPIMA Business School est une université privée d’informatique et de management en Tunisie fondée en 2013, agréée par le ministère de l’Enseignement Supérieur.',
  keywords: ['EBS', 'Espima Business School', 'Université Privée', 'Tunisie', 'Management', 'Informatique', 'Licence', 'Master'],
  authors: [{ name: 'EBS' }],
  creator: 'Espima Business School',
  metadataBase: new URL('https://ebs.tn'),
  openGraph: {
    type: 'website',
    locale: 'fr_TN',
    url: 'https://ebs.tn',
    title: 'Espima Business School (EBS)',
    description: 'Votre avenir commence ici.',
    siteName: 'Espima Business School',
    images: [{ url: '/images/all-img/hero.webp', width: 1200, height: 630, alt: 'EBS Campus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espima Business School (EBS)',
    description: 'Université privée d’informatique et de management en Tunisie.',
    images: ['/images/all-img/hero.webp'],
  },
  robots: { index: true, follow: true },
};

import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  const jsonLd = siteJsonLd(locale);

  return (
    <html lang={locale} suppressHydrationWarning className={`${mulish.variable} antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-mulish)]">
        <NextIntlClientProvider messages={messages}>
          <TopBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <LanguageSwitcher />
          <WebVitalsReporter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
