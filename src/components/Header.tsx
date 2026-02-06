"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/LanguageProvider";
import type { Lang } from "@/content/translations";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const pathname = usePathname();

  const langs: Lang[] = ["en", "az", "ru"];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-md" />

      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.35em] text-white hover:opacity-90 transition"
        >
          Rustam Nabizade
        </Link>

        {/* NAV */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/work" active={isActive("/work")}>
            {t("nav.work")}
          </NavLink>
          <NavLink href="/services" active={isActive("/services")}>
            {t("nav.services")}
          </NavLink>
          <NavLink href="/about" active={isActive("/about")}>
            {t("nav.about")}
          </NavLink>
          <NavLink href="/contact" active={isActive("/contact")}>
            {t("nav.contact")}
          </NavLink>
        </div>

        {/* LANGUAGE SWITCH */}
        <div
          className="flex gap-1 rounded-full border border-white/20 p-0.5 text-[10px]"
          aria-label="Language selector"
        >
          {langs.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`px-2 py-1 uppercase tracking-[0.18em] transition ${
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

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`nav-link relative ${active ? "text-white" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1 left-1/2 h-[1px] w-4 -translate-x-1/2 bg-white/70" />
      )}
    </Link>
  );
}
