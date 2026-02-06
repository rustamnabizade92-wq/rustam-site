"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { projects } from "@/content/projects";
import { useI18n } from "@/components/LanguageProvider";

function WorkCard({
  href,
  title,
  tag,
  year,
  cover,
  previewVideo,
}: {
  href: string;
  title: string;
  tag: string;
  year: string;
  cover: string;
  previewVideo?: string;
}) {
  // Only play/load video when user actually hovers
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      prefetch
    >
      {/* Cover image (optimized) */}
      <Image
        src={cover}
        alt={title}
        width={1400}
        height={900}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`h-[520px] w-full object-cover transition-opacity duration-300 ${
          previewVideo ? "group-hover:opacity-0" : ""
        }`}
        priority={false}
      />

      {/* Hover preview video (only mounted on hover) */}
      {previewVideo && isHover && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          src={previewVideo}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/80">
            {tag}
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
            {year}
          </div>
        </div>

        <h2 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight text-white">
          {title}
        </h2>

        <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/80">
          Open story →
        </div>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  const { t } = useI18n();
  const featured = projects[0];

  return (
    <main style={{ background: "var(--bg)", color: "var(--fg)" }}>
      {/* HERO / INTRO */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-10">
        <div
          className="text-[11px] uppercase tracking-[0.22em]"
          style={{ color: "var(--muted)" }}
        >
          {t("nav.work")}
        </div>

        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {t("work.title")}
          </h1>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition hover:opacity-90"
              style={{
                borderColor: "var(--border)",
                background: "var(--card)",
                color: "var(--fg)",
              }}
              prefetch
            >
              Services →
            </Link>

            <Link
              href="/contact"
              className="rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition hover:opacity-90"
              style={{
                borderColor: "var(--border)",
                background: "var(--fg)",
                color: "var(--bg)",
              }}
              prefetch
            >
              Contact →
            </Link>
          </div>
        </div>

        <p className="mt-4 max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
          {t("work.subtitle")}
        </p>
      </section>

      {/* FEATURED PANEL */}
      {featured && (
        <section className="mx-auto max-w-6xl px-6 pb-10">
          <Link
            href={`/work/${featured.slug}`}
            className="group relative block overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
            prefetch
          >
            <Image
              src={featured.cover}
              alt={t(featured.titleKey)}
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 960px"
              className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/75">
                Featured story
              </div>
              <div className="mt-2 text-3xl md:text-4xl font-semibold text-white hero-title">
                {t(featured.titleKey)}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/70">
                Open →
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* GRID */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <WorkCard
              key={p.slug}
              href={`/work/${p.slug}`}
              title={t(p.titleKey)}
              tag={p.tag}
              year={p.year}
              cover={p.cover}
              previewVideo={p.previewVideo}
            />
          ))}
        </div>
      </section>

      {/* EXTRA PANELS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div
            className="rounded-2xl border p-7"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: "var(--muted)" }}
            >
              Packages
            </div>
            <div className="mt-3 text-lg font-semibold">Film + Photo bundles</div>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
              Hero film, social cutdowns, documentary photo story — delivered fast and premium.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex text-[11px] uppercase tracking-[0.22em] hover:opacity-90"
              style={{ color: "var(--fg)" }}
              prefetch
            >
              View services →
            </Link>
          </div>

          <div
            className="rounded-2xl border p-7"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: "var(--muted)" }}
            >
              About
            </div>
            <div className="mt-3 text-lg font-semibold">Documentary-first style</div>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
              Real moments, sound design, clean compositions — storytelling over “content”.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex text-[11px] uppercase tracking-[0.22em] hover:opacity-90"
              style={{ color: "var(--fg)" }}
              prefetch
            >
              Read bio →
            </Link>
          </div>

          <div
            className="rounded-2xl border p-7"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div
              className="text-[11px] uppercase tracking-[0.22em]"
              style={{ color: "var(--muted)" }}
            >
              Start
            </div>
            <div className="mt-3 text-lg font-semibold">Book a shoot</div>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
              Share destination, dates, and deliverables — I’ll respond with a plan + quote structure.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex text-[11px] uppercase tracking-[0.22em] hover:opacity-90"
              style={{ color: "var(--fg)" }}
              prefetch
            >
              Contact →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
