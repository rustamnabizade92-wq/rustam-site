"use client";

import { useEffect, useMemo, useRef } from "react";
import AmbientSound from "@/components/AmbientSound";
import Reveal from "@/components/Reveal";

type BlogCard = {
  slug: string;
  city: string;
  subtitle: string;
  cover: string;
};

function LogoImage({ file, alt }: { file: string; alt: string }) {
  return (
    <picture>
      <source srcSet={`/logos/${file}.svg`} type="image/svg+xml" />
      <img
        src={`/logos/${file}.png`}
        alt={alt}
        className="h-10 md:h-12 w-full object-contain filter brightness-0 invert opacity-70 transition-all duration-300 group-hover:opacity-100"
        loading="lazy"
      />
    </picture>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Parallax for hero video layer
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.22}px)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const featuredWork = useMemo(
    () => [
      {
        href: "/work/uzbekistan",
        title: "Uzbekistan — Silk Road film + photo story",
        tag: "Film • Photo • Blog",
        year: "2025",
        cover: "/work/uzbekistan/cover.jpg",
      },
      {
        href: "/work/turkey",
        title: "Turkey — GoTürkiye visuals",
        tag: "Film • Social",
        year: "2024",
        cover: "/work/turkey/cover.jpg",
      },
      {
        href: "/work/uk",
        title: "United Kingdom — London & beyond",
        tag: "Documentary travel",
        year: "2022",
        cover: "/work/uk/cover.jpg",
      },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        title: "Travel Film",
        price: "from €3,000",
        text: "Cinematic travel film with documentary pacing, sound design and premium grading.",
      },
      {
        title: "Film + Photo Story",
        price: "from €4,500",
        text: "Campaign-ready package: hero film + editorial photo story with structured delivery.",
      },
      {
        title: "Social Content Pack",
        price: "from €2,000",
        text: "Short-form vertical cutdowns optimized for Reels and Shorts with clean hooks.",
      },
    ],
    []
  );

  const blogs: BlogCard[] = useMemo(
    () => [
      {
        slug: "/work/uzbekistan#tashkent",
        city: "Tashkent",
        subtitle: "Modern rhythm + first impressions",
        cover: "/work/uzbekistan/2.jpg",
      },
      {
        slug: "/work/uzbekistan#samarkand",
        city: "Samarkand",
        subtitle: "Blue domes & morning light",
        cover: "/work/uzbekistan/1.jpg",
      },
      {
        slug: "/work/uzbekistan#bukhara",
        city: "Bukhara",
        subtitle: "Warm streets, textures, details",
        cover: "/work/uzbekistan/3.jpg",
      },
      {
        slug: "/work/uzbekistan#khiva",
        city: "Khiva",
        subtitle: "Golden hour & final chapter mood",
        cover: "/work/uzbekistan/5.jpg",
      },
    ],
    []
  );

  // ✅ Logos now accept BOTH SVG + PNG
  const logos = useMemo(
    () => [
      { file: "azerbaijan-tourism", alt: "Azerbaijan Tourism" },
      { file: "azerbaijan-airlines", alt: "Azerbaijan Airlines (AZAL)" },
      { file: "experience-azerbaijan", alt: "Experience Azerbaijan" },
      { file: "goturkiye", alt: "GoTürkiye" },
      { file: "dji", alt: "DJI" },
      { file: "canon", alt: "Canon" },
      { file: "photographers-union", alt: "Azerbaijan Photographers Union" },
      { file: "turkish-airlines", alt: "Turkish Airlines" },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-40 bg-gradient-to-b from-black/60 to-transparent" />

        <div className="mx-auto max-w-[1600px] px-6 pt-10">
          <div className="relative overflow-hidden rounded-[24px] bg-black">
            <div className="relative h-[620px] md:h-[720px]">
              {/* YouTube video layer (parallax) */}
              <div ref={heroRef} className="absolute inset-0">
                <iframe
                  className="absolute inset-[-15%] h-[130%] w-[130%] object-cover pointer-events-none"
                  src={
                    "https://www.youtube.com/embed/pOh_q4U2Ewc" +
                    "?autoplay=1&mute=1&controls=0&playsinline=1&loop=1" +
                    "&playlist=pOh_q4U2Ewc&modestbranding=1&rel=0&iv_load_policy=3"
                  }
                  title="Hero background video"
                  allow="autoplay; encrypted-media"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              <div className="relative z-20 flex h-full flex-col justify-end px-8 pb-12 md:px-16 md:pb-16 pt-24">
                <div className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/75">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  Documentary Travel Film
                </div>

                <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.01em] text-white hero-title">
                  Travel films
                  <br />
                  that feel like cinema
                </h1>

                <p className="mt-6 max-w-xl text-sm md:text-base text-white/70 leading-relaxed">
                  Cinematic storytelling for tourism boards, destinations and premium travel brands.
                  Focused on people, atmosphere and real moments.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/work"
                    className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/90 hover:bg-white/15 transition"
                  >
                    View work →
                  </a>
                  <a
                    href="/services"
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 hover:bg-white/10 transition"
                  >
                    Services →
                  </a>
                  <a
                    href="/contact"
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 hover:bg-white/10 transition"
                  >
                    Contact →
                  </a>
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[11px] uppercase tracking-[0.22em] text-white/60 scroll-indicator">
                Scroll ↓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY / COLLABORATIONS (Services style) */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <Reveal>
          <p className="mb-10 text-xs uppercase tracking-[0.32em] text-white/40">
            Trusted by / Collaborations
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {logos.map((logo) => (
              <div
                key={logo.file}
                className="group relative flex items-center justify-center rounded-2xl
                           border border-white/10 bg-white/[0.04] px-8 py-10
                           backdrop-blur-md transition
                           hover:bg-white/[0.08] hover:border-white/20"
              >
                <LogoImage file={logo.file} alt={logo.alt} />

                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl
                             opacity-0 group-hover:opacity-100 transition
                             shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_80px_rgba(255,255,255,0.06)]"
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-white/35">
            Logos shown for portfolio and collaboration reference.
          </p>
        </Reveal>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
            Featured work
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Selected stories
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredWork.map((w) => (
            <Reveal key={w.href}>
              <a
                href={w.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition"
              >
                <img
                  src={w.cover}
                  alt={w.title}
                  className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/70">
                    <span>{w.tag}</span>
                    <span>{w.year}</span>
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    {w.title}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/80">
                    Open →
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/work"
            className="inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 hover:bg-white/10 transition"
          >
            View full portfolio →
          </a>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
            Services
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            What I deliver
          </h2>
          <p className="mt-3 max-w-2xl text-white/60 leading-relaxed">
            Premium visuals built for campaigns: hero film, cutdowns, and editorial photo stories.
            Clean structure, fast delivery, strong taste.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                  {s.price}
                </div>
                <div className="mt-3 text-lg font-semibold">{s.title}</div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {s.text}
                </p>
                <a
                  href="/services"
                  className="mt-6 inline-flex text-[11px] uppercase tracking-[0.22em] text-white/80 hover:text-white transition"
                >
                  See details →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CITY BLOG PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
            City notes
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Uzbekistan chapters
          </h2>
          <p className="mt-3 max-w-2xl text-white/60 leading-relaxed">
            Short editorial notes about the mood, what we filmed, and what to show in each city:
            Tashkent, Samarkand, Bukhara, Khiva.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {blogs.map((b) => (
            <Reveal key={b.slug}>
              <a
                href={b.slug}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition"
              >
                <img
                  src={b.cover}
                  alt={b.city}
                  className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                    {b.subtitle}
                  </div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {b.city}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/80">
                    Read →
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
            Let’s collaborate
          </div>
          <div className="mt-3 text-2xl md:text-3xl font-semibold">
            Ready to create a campaign-level travel story?
          </div>
          <p className="mt-3 max-w-2xl text-white/60 leading-relaxed">
            Share destination, dates, and deliverables — I’ll reply with questions, availability and a quote structure.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/90 hover:bg-white/15 transition"
            >
              Request a quote →
            </a>
            <a
              href="/work"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 hover:bg-white/10 transition"
            >
              View portfolio →
            </a>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/40">
          © {new Date().getFullYear()} Rustam Nabizade
        </div>
      </section>

      <AmbientSound />
    </main>
  );
}
