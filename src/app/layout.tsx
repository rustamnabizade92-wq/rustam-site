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

export const metadata: Metadata = {
  // можно оставить, это для OG/Twitter и др.
  metadataBase: new URL("https://rustamnabizade.com"),
  title: "Rustam Nabizade — Travel Filmmaker",
  description:
    "Cinematic travel films, documentary-style storytelling and visual campaigns for destinations and premium travel brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const SITE = "https://rustamnabizade.com";

  return (
    <html lang="en">
      <head>
        {/* ✅ CANONICAL — гарантированно */}
        <link rel="canonical" href={`${SITE}/`} />

        {/* ✅ базовые meta */}
        <meta name="robots" content="index,follow" />

        {/* ✅ OG / Twitter (по желанию, но полезно) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rustam Nabizade" />
        <meta property="og:url" content={`${SITE}/`} />
        <meta property="og:title" content="Rustam Nabizade — Travel Filmmaker" />
        <meta
          property="og:description"
          content="Cinematic travel films and visual stories for destinations, tourism boards and premium brands."
        />
        <meta property="og:image" content={`${SITE}/hero.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rustam Nabizade — Travel Filmmaker" />
        <meta
          name="twitter:description"
          content="Cinematic travel films and visual stories for destinations and premium brands."
        />
        <meta name="twitter:image" content={`${SITE}/hero.jpg`} />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
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