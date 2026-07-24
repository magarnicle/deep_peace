import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep Peace",
  description: "Things that make for peace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-UK">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9728124941305322"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          type="module"
          blocking="render"
          src="https://cdn.jsdelivr.net/npm/justif@0.5.1/dist/auto.js"
          integrity="sha384-DnIhwLwkHYcy1EkiE+4CmcVwlrGwWNxXiqxBt8n0HgxG23S897N5gJrH1OdjdX3R"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <strong><Link href="/">Home</Link> | <Link href="/about">About</Link></strong>
        {children}
      </body>
    </html>
  );
}
