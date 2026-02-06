"use client";

import Link from "next/link";
import { useI18n, type Lang } from "@/components/LanguageProvider";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const langs: Lang[] = ["en", "az", "ru"];

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-md" />

      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xs font-semibold uppercase tracking-[0.35em] text-white">
          Rustam Nabizade
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/work" className="nav-link">{t("nav.work")}</Link>
          <Link href="/services" className="nav-link">{t("nav.services")}</Link>
          <Link href="/about" className="nav-link">{t("nav.about")}</Link>
          <Link href="/contact" className="nav-link">{t("nav.contact")}</Link>
        </div>

        <div className="flex gap-1 rounded-full border border-white/20 p-0.5 text-[10px]">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2 py-1 uppercase transition ${
                lang === l ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
