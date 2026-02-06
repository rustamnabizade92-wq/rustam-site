"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Lang } from "@/content/translations";

type CtxType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<CtxType | null>(null);

function getByPath(obj: any, path: string) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

const STORAGE_KEY = "rustam-site-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && (saved === "en" || saved === "az" || saved === "ru")) {
        setLang(saved);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => {
    return (key: string) => {
      const value = getByPath(translations[lang], key);
      if (value == null) return key.split(".").pop() ?? key;
      return String(value);
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
