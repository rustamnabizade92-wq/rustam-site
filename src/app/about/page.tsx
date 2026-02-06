"use client";

import Reveal from "@/components/Reveal";
import { useI18n } from "@/components/LanguageProvider";
import { useState } from "react";

type ImgName = "hero" | "wide-01" | "detail-01" | "human-01";

function Picture({
  name,
  alt,
  className = "",
  priority = false,
}: {
  name: ImgName;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [broken, setBroken] = useState(false);
  const base = `/about/${name}`;

  if (broken) {
    return (
      <div
        className={className}
        style={{
          background:
            "radial-gradient(900px 520px at 20% 10%, rgba(255,255,255,0.10), transparent 60%), linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        }}
      />
    );
  }

  return (
    <picture className={className}>
      <source srcSet={`${base}.webp`} type="image/webp" />
      <source srcSet={`${base}.png`} type="image/png" />
      <img
        src={`${base}.jpg`}
        alt={alt}
        className="h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onError={() => setBroken(true)}
      />
    </picture>
  );
}

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
              <div className="h-[520px] w-full">
                <Picture name="hero" alt="Rustam portrait" priority className="block h-full w-full" />
              </div>

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

      {/* PHOTO GRID — NEW 4 IMAGES */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
            Personal frames
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
            Behind the scenes
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <div className="h-[420px] w-full">
                <Picture name="wide-01" alt="Wide frame" className="block h-full w-full" />
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <div className="h-[420px] w-full">
                <Picture name="human-01" alt="Human moment" className="block h-full w-full" />
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-6">
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <div className="h-[340px] w-full">
                <Picture name="detail-01" alt="Detail frame" className="block h-full w-full" />
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-6">
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <div className="h-[340px] w-full">
                {/* повтор hero как аккуратный второй блок */}
                <Picture name="hero" alt="Portrait frame" className="block h-full w-full" />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 text-xs text-white/50">
          © {new Date().getFullYear()} Rustam Nabizade
        </div>
      </section>
    </main>
  );
}
