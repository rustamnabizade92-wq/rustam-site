// app/about/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-100 via-white to-zinc-50">
        {/* subtle grain overlay (optional but recommended). Put a tiny png at /public/noise.png */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: "url('/noise.png')" }}
          aria-hidden="true"
        />
        {/* soft vignette */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(80% 60% at 20% 40%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(70% 55% at 80% 20%, rgba(0,0,0,0.04), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium tracking-wide text-zinc-600">
                Visual storyteller • Filmmaker • Technology-driven creator
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-zinc-900" />

              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                I tell stories that go deeper than visuals.
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-zinc-700">
                I create cinematic narratives that connect culture, people, and
                innovation — with purpose, responsibility, and long-term value.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
                >
                  View Work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-2xl border border-zinc-300 bg-white/60 px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm backdrop-blur hover:bg-white"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* HERO IMAGE from /public/about/hero.jpg */}
            <div className="relative aspect-[4/5] rounded-[28px] bg-zinc-200 p-[2px] shadow-xl">
              <div className="relative h-full w-full overflow-hidden rounded-[26px]">
                <Image
                  src="/about/hero.jpg"
                  alt="Rustam Nabizade — visual storyteller and filmmaker"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* subtle highlight */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[28px]"
                style={{
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.08)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Why I Create</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-700">
            I travel to understand places, not just see them. I film to listen,
            not to impress. And I believe every story deserves context, not
            noise.
          </p>
        </div>
      </section>

      {/* PREMIUM WIDE IMAGE (add this file): /public/about/wide-01.jpg */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 pb-6">
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/about/wide-01.jpg"
              alt="Cinematic landscape — scale and perspective"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* soft overlay to feel premium */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.25), transparent 55%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="border-t border-black/5 bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">What I Do</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card
              title="Storytelling"
              text="Cinematic films and visual narratives that reflect identity, culture, and real moments."
            />
            <Card
              title="Technology & Drones"
              text="Modern tools used responsibly, legally, and creatively — always with purpose."
            />
            <Card
              title="Strategy & Perspective"
              text="Content designed for long-term value, not short-term attention."
            />
          </div>
        </div>
      </section>

      {/* BEYOND TOURISM */}
      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Beyond Travel Content
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-700">
            While travel is part of my work, my focus extends to innovation,
            culture, people, and systems that define how places and
            organizations are perceived globally.
          </p>

          <ul className="mt-8 grid gap-3 text-zinc-800 md:grid-cols-2">
            <li className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 shadow-sm">
              Destinations & tourism bodies
            </li>
            <li className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 shadow-sm">
              International brands & institutions
            </li>
            <li className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 shadow-sm">
              Media & platforms
            </li>
            <li className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 shadow-sm">
              Creative teams & long-term campaigns
            </li>
          </ul>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t border-black/5 bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">My Approach</h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-700">
                I don’t chase trends. I build narratives — with clarity, taste,
                and intention.
              </p>

              <div className="mt-8 rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                <p className="text-sm font-medium text-zinc-500">
                  A simple principle
                </p>
                <p className="mt-3 text-lg leading-relaxed text-zinc-800">
                  Story first. Technology second. Everything with purpose.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Pill>Authenticity over algorithms</Pill>
              <Pill>Story before format</Pill>
              <Pill>Context before aesthetics</Pill>
              <Pill>Quality as a long-term asset</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITY + BTS IMAGE (add this file): /public/about/detail-01.jpg */}
      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Technology Is a Tool, Not the Story
          </h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-lg leading-relaxed text-zinc-700">
                Drones and modern production tools expand perspective — but only
                when paired with responsibility, regulation, and understanding.
                I work where creativity meets structure.
              </p>
              <p className="mt-4 text-sm text-zinc-600">
                Aviation awareness • Legal frameworks • Ethical production
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-lg">
              <Image
                src="/about/detail-01.jpg"
                alt="Behind the scenes — responsible filmmaking"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE + CTA */}
      <section className="border-t border-black/5 bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <blockquote className="text-2xl font-medium leading-snug md:text-3xl">
            “Content shapes perception. That responsibility should never be
            taken lightly.”
          </blockquote>
          <p className="mt-4 text-white/70">— Rustam Nabizade</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-100"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-white/10"
            >
              See Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 leading-relaxed text-zinc-700">{text}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm text-zinc-800 shadow-sm backdrop-blur">
      {children}
    </div>
  );
}
