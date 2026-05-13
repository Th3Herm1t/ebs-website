import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Penn - Education & Online Course",
  description: "Penn - Education & Online Course HTML Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mulish.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-mulish)]">
        {children}
      </body>
    </html>
  );
}
