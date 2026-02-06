"use client";

import Link from "next/link";
import type { Project } from "@/content/projects";
import { useI18n } from "@/components/LanguageProvider";

export default function ProjectCard({ p }: { p: Project }) {
  const { t } = useI18n();

  return (
    <Link
      href={`/work/${p.slug}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-black/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.cover}
          alt={t(p.titleKey)}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">
              {t(p.kickerKey)}
            </p>
            <h3 className="mt-1 text-sm font-semibold text-white">
              {t(p.titleKey)}
            </h3>
            <p className="mt-2 text-xs text-white/60 line-clamp-2">
              {t(p.leadKey)}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-white/15 px-2 py-1 text-[10px] text-white/70">
            {p.year}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/15 px-2 py-1 text-[10px] text-white/70">
            {p.country}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/60">
            {p.tag}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/60">
            {p.type}
          </span>
        </div>
      </div>
    </Link>
  );
}
