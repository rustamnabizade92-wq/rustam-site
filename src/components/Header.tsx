"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/LanguageProvider";
import type { Lang } from "@/content/translations";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const langs: Lang[] = ["en", "az", "ru"];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-md" />

        <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.35em] text-white"
            onClick={() => setOpen(false)}
          >
            Rustam Nabizade
          </Link>

          {/* DESKTOP NAV */}
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

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* LANGUAGE SWITCH */}
            <div className="hidden sm:flex gap-1 rounded-full border border-white/20 p-0.5 text-[10px]">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 uppercase transition ${
                    lang === l
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden text-white/90 uppercase text-[11px] tracking-[0.22em]"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md">
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 h-16">
            <span className="text-xs uppercase tracking-[0.35em] text-white">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 text-[11px] uppercase tracking-[0.22em]"
            >
              Close ✕
            </button>
          </div>

          {/* MENU LINKS */}
          <div className="px-6 pt-10 space-y-6">
            <MobileLink href="/work" onClick={() => setOpen(false)}>
              {t("nav.work")}
            </MobileLink>
            <MobileLink href="/services" onClick={() => setOpen(false)}>
              {t("nav.services")}
            </MobileLink>
            <MobileLink href="/about" onClick={() => setOpen(false)}>
              {t("nav.about")}
            </MobileLink>
            <MobileLink href="/contact" onClick={() => setOpen(false)}>
              {t("nav.contact")}
            </MobileLink>
          </div>

          {/* MOBILE LANG SWITCH */}
          <div className="absolute bottom-10 left-6 flex gap-2">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full border border-white/20 px-4 py-2 text-[11px] uppercase tracking-[0.22em] ${
                  lang === l
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- helpers ---------- */

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
      className={`nav-link ${active ? "text-white" : ""}`}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-2xl font-semibold text-white tracking-tight"
    >
      {children}
    </Link>
  );
}
