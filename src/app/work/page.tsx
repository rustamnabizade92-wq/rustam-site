"use client";

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
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-2xl border"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <img
        src={cover}
        alt={title}
        className={`h-[520px] w-full object-cover transition-opacity duration-300 ${
          previewVideo ? "group-hover:opacity-0" : ""
        }`}
      />

      {previewVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          src={previewVideo}
          muted
          loop
          playsInline
          autoPlay
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
    </a>
  );
}

export default function WorkPage() {
  const { t } = useI18n();

  const featured = projects[0];

  return (
    <main style={{ background: "var(--bg)", color: "var(--fg)" }}>
      {/* HERO / INTRO */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-10">
        <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
          {t("nav.work")}
        </div>

        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {t("work.title")}
          </h1>

          <div className="flex flex-wrap gap-3">
            <a
              href="/services"
              className="rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition hover:opacity-90"
              style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--fg)" }}
            >
              Services →
            </a>
            <a
              href="/contact"
              className="rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition hover:opacity-90"
              style={{ borderColor: "var(--border)", background: "var(--fg)", color: "var(--bg)" }}
            >
              Contact →
            </a>
          </div>
        </div>

        <p className="mt-4 max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
          {t("work.subtitle")}
        </p>
      </section>

      {/* FEATURED PANEL */}
      {featured && (
        <section className="mx-auto max-w-6xl px-6 pb-10">
          <a
            href={`/work/${featured.slug}`}
            className="group relative block overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <img
              src={featured.cover}
              alt={t(featured.titleKey)}
              className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
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
          </a>
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

      {/* EXTRA PANELS (the “other panels” you mentioned) */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-7" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              Packages
            </div>
            <div className="mt-3 text-lg font-semibold">Film + Photo bundles</div>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
              Hero film, social cutdowns, documentary photo story — delivered fast and premium.
            </p>
            <a href="/services" className="mt-6 inline-flex text-[11px] uppercase tracking-[0.22em] hover:opacity-90"
               style={{ color: "var(--fg)" }}>
              View services →
            </a>
          </div>

          <div className="rounded-2xl border p-7" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              About
            </div>
            <div className="mt-3 text-lg font-semibold">Documentary-first style</div>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
              Real moments, sound design, clean compositions — storytelling over “content”.
            </p>
            <a href="/about" className="mt-6 inline-flex text-[11px] uppercase tracking-[0.22em] hover:opacity-90"
               style={{ color: "var(--fg)" }}>
              Read bio →
            </a>
          </div>

          <div className="rounded-2xl border p-7" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              Start
            </div>
            <div className="mt-3 text-lg font-semibold">Book a shoot</div>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
              Share destination, dates, and deliverables — I’ll respond with a plan + quote structure.
            </p>
            <a href="/contact" className="mt-6 inline-flex text-[11px] uppercase tracking-[0.22em] hover:opacity-90"
               style={{ color: "var(--fg)" }}>
              Contact →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}