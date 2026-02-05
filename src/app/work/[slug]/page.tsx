"use client";

import { projects } from "@/content/projects";
import FullscreenYoutube from "@/components/FullscreenYoutube";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/components/LanguageProvider";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { t } = useI18n();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main style={{ background: "var(--bg)", color: "var(--fg)" }}>
        <div className="mx-auto max-w-6xl px-6 pt-28">
          <h1 className="text-3xl font-semibold">Not found</h1>
        </div>
      </main>
    );
  }

  const hasChapters = Array.isArray(project.chapters) && project.chapters.length > 0;
  const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;

  return (
    <main style={{ background: "var(--bg)", color: "var(--fg)" }}>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-10">
          <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
            {t(project.kickerKey)}
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.01em] hero-title">
            {t(project.titleKey)}
          </h1>

          <p className="mt-5 max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
            {t(project.leadKey)}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/work"
              className="rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition hover:opacity-90"
              style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--fg)" }}
            >
              Back to Work →
            </a>

            <a
              href="/contact"
              className="rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition hover:opacity-90"
              style={{ borderColor: "var(--border)", background: "var(--fg)", color: "var(--bg)" }}
            >
              Request a quote →
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl" style={{ background: "var(--card)" }}>
              <img src={project.hero} alt={t(project.titleKey)} className="h-[540px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FILM */}
      {project.youtubeId && (
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
            Film
          </div>

          <div className="mt-4">
            <Reveal>
              <FullscreenYoutube videoId={project.youtubeId} poster={project.hero} title={t(project.titleKey)} />
            </Reveal>
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        {/* ✅ CHAPTERS */}
        {hasChapters ? (
          <div className="grid gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="rounded-2xl border p-4" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                  <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                    Chapters
                  </div>

                  <div className="mt-3 space-y-1">
                    {project.chapters!.map((c) => (
                      <a
                        key={c.id}
                        href={`#${c.id}`}
                        className="block rounded-xl px-3 py-2 transition hover:opacity-90"
                        style={{ color: "var(--fg)" }}
                      >
                        <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                          {t(c.titleKey)}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8 space-y-24">
              {project.chapters!.map((c) => (
                <section key={c.id} id={c.id} className="scroll-mt-28">
                  <Reveal>
                    <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                      {t(c.titleKey)}
                    </div>
                    <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
                      {t(c.titleKey)}
                    </h2>
                    <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                      {t(c.textKey)}
                    </p>
                  </Reveal>

                  <div className="mt-8 columns-1 sm:columns-2 gap-6 [column-fill:_balance]">
                    {c.images.map((src) => (
                      <Reveal key={src} className="mb-6 break-inside-avoid">
                        <img src={src} alt="" className="w-full rounded-2xl object-cover" loading="lazy" />
                      </Reveal>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        ) : hasGallery ? (
          /* ✅ GALLERY fallback */
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              Photo story
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Gallery</h2>

            <div className="mt-8 columns-1 sm:columns-2 gap-6 [column-fill:_balance]">
              {project.gallery!.map((src) => (
                <Reveal key={src} className="mb-6 break-inside-avoid">
                  <img src={src} alt="" className="w-full rounded-2xl object-cover" loading="lazy" />
                </Reveal>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              No photos yet
            </div>
            <div className="mt-2" style={{ color: "var(--muted)" }}>
              Add images to <code>projects.ts</code> → <code>gallery</code> or <code>chapters</code>.
            </div>
          </div>
        )}

        <div className="pt-10 text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Rustam Nabizade
        </div>
      </section>
    </main>
  );
}