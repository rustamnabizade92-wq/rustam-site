"use client";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-10">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
            About
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.01em]">
            Rustam Nabizade
          </h1>

          <p className="mt-5 max-w-2xl text-white/70 leading-relaxed">
            Travel filmmaker & storyteller. I create cinematic travel films and
            documentary photo stories for tourism boards, destinations, and premium
            travel brands — focused on people, atmosphere, and real moments.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/work"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 hover:bg-white/10 transition"
            >
              View work →
            </a>

            <a
              href="https://www.youtube.com/@rustam.nabizade"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 hover:bg-white/10 transition"
            >
              YouTube →
            </a>

            <a
              href="https://wa.me/994502904270"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 hover:bg-white/10 transition"
            >
              WhatsApp →
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-white/5">
              <img
                src="/about/hero.jpg"
                alt="Rustam portrait"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/85 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available worldwide
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BIO / STATS */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                Profile
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
                Cinematic travel storytelling
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                My style is documentary-first: clean composition, authentic moments,
                sound design, and pacing that feels like cinema — not “content”.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "Focus", v: "Travel films • Photo stories" },
                { k: "Clients", v: "Tourism boards • Brands • Hotels" },
                { k: "Formats", v: "Reels • YouTube • Campaign assets" },
                { k: "Gear", v: "Canon • DJI • Pro audio" },
              ].map((item) => (
                <Reveal key={item.k}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                      {item.k}
                    </div>
                    <div className="mt-2 text-white/85">{item.v}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
            Background
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
            What I do
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Travel films",
              text: "Cinematic stories with strong pacing, sound, and editorial visuals.",
            },
            {
              title: "Brand campaigns",
              text: "Premium assets for tourism boards, hotels, and travel brands.",
            },
            {
              title: "Documentary photo stories",
              text: "Vertical-first galleries that feel like a journal.",
            },
          ].map((b) => (
            <Reveal key={b.title}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                  {b.title}
                </div>
                <p className="mt-3 text-white/75 leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
            Personal frames
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
            Behind the scenes
          </h2>
        </Reveal>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {["/about/01.jpg", "/about/02.jpg", "/about/03.jpg", "/about/04.jpg"].map(
            (src) => (
              <Reveal key={src} className="mb-6 break-inside-avoid">
                <img
                  src={src}
                  alt=""
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </Reveal>
            )
          )}
        </div>

        <div className="mt-12 text-xs text-white/50">
          © {new Date().getFullYear()} Rustam Nabizade
        </div>
      </section>
    </main>
  );
}
