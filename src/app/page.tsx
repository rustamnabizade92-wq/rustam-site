"use client";

import { useEffect, useRef, useState } from "react";
import AmbientSound from "@/components/AmbientSound";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [playHero, setPlayHero] = useState(false);

  const videoId = "pOh_q4U2Ewc";
  const ytSrc =
    `https://www.youtube.com/embed/${videoId}` +
    `?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1` +
    `&loop=1&playlist=${videoId}&playsinline=1&rel=0` +
    `&iv_load_policy=3&disablekb=1`;

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-40 bg-gradient-to-b from-black/60 to-transparent" />

        <div className="mx-auto max-w-[1600px] px-6 pt-10">
          <div className="relative overflow-hidden rounded-[24px] bg-black">
            <div className="relative h-[620px] md:h-[720px]">
              <div ref={heroRef} className="absolute inset-0 will-change-transform">
                {!playHero ? (
                  <button
                    type="button"
                    onClick={() => setPlayHero(true)}
                    className="relative h-full w-full"
                    aria-label="Play hero video"
                  >
                    <img src="/hero.jpg" alt="" className="h-full w-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur">
                        Play video
                      </div>
                    </div>
                  </button>
                ) : (
                  <iframe
                    className="h-full w-full scale-[1.25]"
                    src={ytSrc}
                    title="Hero background video"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="relative z-20 flex h-full flex-col justify-end px-8 pb-12 md:px-16 md:pb-16 pt-24">
                <div className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/75">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  Documentary Travel Film
                </div>

                <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.01em] text-white">
                  Travel films
                  <br />
                  that feel like cinema
                </h1>

                <p className="mt-6 max-w-xl text-sm md:text-base text-white/70 leading-relaxed">
                  Cinematic storytelling for tourism boards, destinations and premium travel brands.
                  Focused on people, atmosphere and real moments.
                </p>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[11px] uppercase tracking-[0.22em] text-white/60">
                Scroll ↓
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <div className="sticky top-28 max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
              Approach
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Stories built on atmosphere
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Rhythm, light, silence, motion — the film comes first, not trends.
            </p>
          </div>

          <div className="mt-64 space-y-40">
            <img src="/covers/azerbaijan.jpg" alt="Azerbaijan cover" className="w-full rounded-2xl object-cover" loading="lazy" />
            <img src="/covers/winter.jpg" alt="Winter cover" className="w-full rounded-2xl object-cover" loading="lazy" />
            <img src="/covers/documentary.jpg" alt="Documentary cover" className="w-full rounded-2xl object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <AmbientSound />
    </main>
  );
}
