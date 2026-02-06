import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ToastProvider } from "@/components/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE = "https://rustamnabizade.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Rustam Nabizade — Travel Filmmaker",
  description:
    "Cinematic travel films, documentary-style storytelling and visual campaigns for destinations and premium travel brands.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Rustam Nabizade",
    url: SITE,
    title: "Rustam Nabizade — Travel Filmmaker",
    description:
      "Cinematic travel films and visual stories for destinations, tourism boards and premium brands.",
    images: [
      { url: "/hero.jpg", width: 1200, height: 630, alt: "Rustam Nabizade — Travel Filmmaker" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rustam Nabizade — Travel Filmmaker",
    description:
      "Cinematic travel films and visual stories for destinations and premium travel brands.",
    images: ["/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <LanguageProvider>
          <ToastProvider>
            <Header />
            <main>{children}</main>
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
