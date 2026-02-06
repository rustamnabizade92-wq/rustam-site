"use client";

import { useMemo, useState } from "react";
import FullscreenYoutube from "@/components/FullscreenYoutube";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/components/LanguageProvider";

type CityPost = {
  slug: string;
  title: string;
  date?: string;
  cover: string;
  bullets: string[];
  story: string[];
};

export default function UzbekistanProjectPage() {
  const { t } = useI18n();

  const HERO = "/work/uzbekistan/hero.jpg";
  const COVER = "/work/uzbekistan/cover.jpg";
  const PREVIEW = "/work/uzbekistan/preview.MP4";

  // ✅ YouTube ID from your link:
  const YOUTUBE_ID = "O01YUOVQ_xc";

  const gallery = useMemo(
    () => [
      "/work/uzbekistan/1.jpg",
      "/work/uzbekistan/2.jpg",
      "/work/uzbekistan/3.jpg",
      "/work/uzbekistan/4.jpg",
      "/work/uzbekistan/5.jpg",
      "/work/uzbekistan/6.jpg",
    ],
    []
  );

  const posts: CityPost[] = useMemo(
    () => [
      {
        slug: "tashkent",
        title: "Tashkent — Modern rhythm & street life",
        date: "Chapter 1",
        cover: "/work/uzbekistan/2.jpg",
        bullets: ["Urban mood & movement", "Street portraits", "First tone-setting sequences"],
        story: [
          "Tashkent is where the film starts with energy — modern lines, fast transitions, and real street moments.",
          "I focused on pacing and small details: hands, textures, signage, and natural interactions.",
          "This chapter sets the rhythm before we move into the ancient cities.",
        ],
      },
      {
        slug: "samarkand",
        title: "Samarkand — Blue domes & morning light",
        date: "Chapter 2",
        cover: "/work/uzbekistan/1.jpg",
        bullets: ["Registan at sunrise", "Textures: tiles, shadows, silk", "Calm portraits in natural light"],
        story: [
          "Samarkand feels like a scene designed by time — geometry, light and silence.",
          "I filmed early morning to keep the mood documentary and clean, with minimal crowds and soft light.",
          "Portraits were shot with minimal direction — real moments, strong composition, quiet atmosphere.",
        ],
      },
      {
        slug: "bukhara",
        title: "Bukhara — Old streets, warm tones",
        date: "Chapter 3",
        cover: "/work/uzbekistan/3.jpg",
        bullets: ["Old town walk, handcraft details", "Warm color palette", "Cinematic street sequences"],
        story: [
          "Bukhara is slower. It’s about details — doors, hands, fabrics, quiet streets.",
          "For the film, I focused on small movements and texture transitions to keep it intimate.",
          "This is where the photo story becomes editorial: close shots + atmosphere.",
        ],
      },
      {
        slug: "khiva",
        title: "Khiva — Living inside history",
        date: "Chapter 4",
        cover: "/work/uzbekistan/5.jpg",
        bullets: ["Walls, arches, symmetry", "Golden hour silhouettes", "Final chapter mood"],
        story: [
          "Khiva looks like a set — but it’s alive. The best light was late afternoon, with long shadows and gold tones.",
          "I used longer takes for the film and stronger contrast for photos.",
          "This became the closing mood: heritage, scale, and calm — a quiet ending.",
        ],
      },
    ],
    []
  );

  const [tab, setTab] = useState<"film" | "photo" | "blog">("film");

  return (
    <main style={{ background: "var(--bg)", color: "var(--fg)" }}>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-10">
          <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
            {t("uzb.kicker")}
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] hero-title">
            {t("uzb.title")}
          </h1>

          <p className="mt-5 max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
            {t("uzb.lead")}
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

        <div className="mx-auto max-w-6xl px-6 pb-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
              <video className="h-[520px] w-full object-cover" src={PREVIEW} muted loop playsInline autoPlay poster={HERO} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/75">{t("uzb.kicker")}</div>
                <div className="mt-2 text-3xl md:text-4xl font-semibold text-white hero-title">{t("uzb.title")}</div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/70">Film • Photo • Blog</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TABS */}
      <section className="mx-auto max-w-6xl px-6">
        <div
          className="flex flex-wrap items-center gap-2 rounded-2xl border p-2"
          style={{ borderColor: "var(--border)", background: "var(--card)" }}
        >
          <TabButton active={tab === "film"} onClick={() => setTab("film")}>Film</TabButton>
          <TabButton active={tab === "photo"} onClick={() => setTab("photo")}>Photos</TabButton>
          <TabButton active={tab === "blog"} onClick={() => setTab("blog")}>Blog (Cities)</TabButton>

          <div className="ml-auto hidden md:flex items-center gap-3 pr-2">
            <span className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              {tab === "film" ? "Watch the film" : tab === "photo" ? "Editorial gallery" : "Stories by city"}
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {tab === "film" && (
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>Film</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Full film</h2>

            <div className="mt-6">
              <Reveal>
                <FullscreenYoutube videoId={YOUTUBE_ID} poster={COVER} title={t("uzb.title")} />
              </Reveal>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <InfoCard title="Style" text="Documentary travel film — natural light, real moments, clean pacing." />
              <InfoCard title="Deliverables" text="Main film + short cutdowns (Reels / Shorts) + photo story." />
              <InfoCard title="Usage" text="Tourism boards, hotels, airlines, premium travel brands." />
            </div>
          </div>
        )}

        {tab === "photo" && (
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>Photo story</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Editorial gallery</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Vertical shots look premium in a masonry layout (like an editorial).
            </p>

            <div className="mt-8 columns-1 sm:columns-2 gap-6 [column-fill:_balance]">
              {gallery.map((src) => (
                <Reveal key={src} className="mb-6 break-inside-avoid">
                  <img src={src} alt="" className="w-full rounded-2xl object-cover" loading="lazy" />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {tab === "blog" && (
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>Blog</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Cities & chapters</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Each city has its own story: what we filmed, what we photographed, and what the mood was.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="rounded-2xl border p-4" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                  <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>Chapters</div>
                  <div className="mt-3 space-y-2">
                    {posts.map((p) => (
                      <a
                        key={p.slug}
                        href={`#${p.slug}`}
                        className="block rounded-xl border px-3 py-3 transition hover:opacity-90"
                        style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--fg)" }}
                      >
                        <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                          {p.date ?? "Chapter"}
                        </div>
                        <div className="mt-1 font-medium">{p.title}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-16">
                {posts.map((p) => (
                  <section key={p.slug} id={p.slug} className="scroll-mt-28">
                    <Reveal>
                      <div className="relative overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                        <img src={p.cover} alt="" className="h-[360px] w-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 p-6">
                          <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">{p.date ?? "Chapter"}</div>
                          <div className="mt-2 text-2xl md:text-3xl font-semibold text-white hero-title">{p.title}</div>
                        </div>
                      </div>
                    </Reveal>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                        <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                          Highlights
                        </div>
                        <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                          {p.bullets.map((b) => (
                            <li key={b}>• {b}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                        <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                          Story
                        </div>
                        <div className="mt-3 space-y-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                          {p.story.map((s, i) => (
                            <p key={i}>{s}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-16 text-xs" style={{ color: "var(--muted)" }}>
        © {new Date().getFullYear()} Rustam Nabizade
      </div>
    </main>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition"
      style={{
        background: active ? "var(--fg)" : "transparent",
        color: active ? "var(--bg)" : "var(--fg)",
        border: "1px solid var(--border)",
      }}
    >
      {children}
    </button>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
      <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
        {title}
      </div>
      <div className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        {text}
      </div>
    </div>
  );
}
