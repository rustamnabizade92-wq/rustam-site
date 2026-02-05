"use client";
import { useI18n } from "@/components/LanguageProvider";

export default function IndiaProjectPage() {
  const { t } = useI18n();
  return (
    <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
      <div className="text-[11px] uppercase tracking-[0.22em] opacity-70">{t("in.kicker")}</div>
      <h1 className="mt-4 text-4xl md:text-6xl font-semibold">{t("in.title")}</h1>
      <p className="mt-5 max-w-2xl opacity-80">{t("in.lead")}</p>
      <div className="mt-10 rounded-2xl overflow-hidden border">
        <img src="/work/india/hero.jpg" className="w-full h-[520px] object-cover" alt="" />
      </div>
    </main>
  );
}