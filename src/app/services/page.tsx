"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { useToast } from "@/components/Toast";
import { useI18n } from "@/components/LanguageProvider";

type Service = {
  id: string;
  title: string;
  price: string;
  description: string;
  bestFor: string;
  includes: string[];
  deliverables: string[];
  highlight?: boolean;
};

type Testimonial = {
  quote: string;
  role: string;
};

type FAQ = {
  q: string;
  a: string;
};

export default function ServicesPage() {
  const { t } = useI18n();
  const toast = useToast();

  const services: Service[] = useMemo(
    () => [
      {
        id: "film",
        title: "Travel Film",
        price: "from €3,000",
        description:
          "Cinematic travel film with a documentary approach. Focused on atmosphere, people and real moments — not generic content.",
        bestFor: "Tourism boards, hotels, premium destinations",
        includes: [
          "Concept + story structure",
          "Cinematic camera work",
          "Professional color grading",
          "Sound design + licensed music",
          "Delivery formats for web + presentation",
        ],
        deliverables: ["1–3 min hero film", "Master + web version", "Cover frame / thumbnail"],
        highlight: true,
      },
      {
        id: "film-photo",
        title: "Film + Photo Story",
        price: "from €4,500",
        description:
          "A campaign-ready package: hero film + editorial photo story designed for brand communications.",
        bestFor: "Destinations needing film + visuals",
        includes: [
          "Everything in Travel Film",
          "Editorial photo direction",
          "Vertical + horizontal formats",
          "Selection + light retouch",
          "Organized delivery pack",
        ],
        deliverables: ["Hero film", "20–40 high-res photos", "5–8 vertical cutdowns"],
      },
      {
        id: "social",
        title: "Social Content Package",
        price: "from €2,000",
        description:
          "Short-form assets optimized for Instagram Reels and YouTube Shorts with premium pacing and clean look.",
        bestFor: "Brands needing fast performance content",
        includes: [
          "Hooks + cut plan",
          "5–10 short vertical videos",
          "Clean grading",
          "Cover frames",
          "Fast turnaround option",
        ],
        deliverables: ["5–10 Reels/Shorts", "1–2 teaser cuts", "Cover frames"],
      },
      {
        id: "campaign",
        title: "Full Campaign Production",
        price: "Custom",
        description:
          "End-to-end production for tourism boards, airlines and hotel groups: multi-location campaigns.",
        bestFor: "Large campaigns, multi-location production",
        includes: [
          "Pre-production + planning",
          "Multi-day filming",
          "Film + photo + social assets",
          "Campaign-ready delivery pack",
          "Usage rights options",
        ],
        deliverables: ["Hero film + cutdowns", "Photo story", "Social pack", "Usage-ready exports"],
      },
    ],
    []
  );

  // 1) LOGOS
  const logos = useMemo(
    () => [
      { src: "/logos/goturkiye.svg", alt: "GoTürkiye" },
      { src: "/logos/azerbaijan-tourism.svg", alt: "Azerbaijan Tourism" },
      { src: "/logos/air-arabia.svg", alt: "Air Arabia" },
      { src: "/logos/dji.svg", alt: "DJI" },
    ],
    []
  );

  // 2) PROCESS
  const processSteps = useMemo(
    () => [
      {
        title: "1) Research & Concept",
        text: "Goals, audience, story angle, references, mood and shot plan. Clear deliverables and timeline.",
      },
      {
        title: "2) Production",
        text: "Cinematic filming + documentary moments. Efficient crew workflow, sound and scenes planned for edit.",
      },
      {
        title: "3) Post-production",
        text: "Editing, pacing, sound design, music licensing, color grading. Premium finishing and versions.",
      },
      {
        title: "4) Delivery & Usage",
        text: "Web + social exports, naming structure, campaign-ready pack. Usage rights and formats as required.",
      },
    ],
    []
  );

  // 3) FAQ
  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "How many shooting days do we need?",
        a: "Most destination stories take 2–6 shooting days depending on locations, logistics and deliverables.",
      },
      {
        q: "Do you work internationally?",
        a: "Yes. We plan travel, permits and schedule. Travel and accommodation are quoted separately.",
      },
      {
        q: "Do you provide drone footage?",
        a: "Yes when permitted. Drone use depends on local regulations and approvals.",
      },
      {
        q: "What about music rights?",
        a: "All music is licensed for agreed usage. Extended paid media usage can be arranged.",
      },
      {
        q: "How fast is delivery?",
        a: "Typical delivery is 7–21 days depending on scope. Fast turnaround is possible for social packages.",
      },
    ],
    []
  );

  // 4) TESTIMONIALS
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        quote:
          "Rustam understands destinations — not just visuals. The story felt real, premium, and campaign-ready.",
        role: "Tourism marketing partner",
      },
      {
        quote:
          "Strong cinematic taste and clean delivery structure. Easy to use the assets across web and social.",
        role: "Brand / hospitality partner",
      },
      {
        quote:
          "Documentary-first approach: real moments, good pacing, and excellent color. Perfect for premium positioning.",
        role: "Creative collaborator",
      },
    ],
    []
  );

  // comparison table
  const compare = useMemo(
    () => [
      { feature: "Hero film (1–3 min)", film: "✓", filmPhoto: "✓", social: "—", campaign: "✓" },
      { feature: "Editorial photo story", film: "—", filmPhoto: "✓", social: "—", campaign: "✓" },
      { feature: "Reels / Shorts cutdowns", film: "Optional", filmPhoto: "✓", social: "✓", campaign: "✓" },
      { feature: "Sound design + licensed music", film: "✓", filmPhoto: "✓", social: "Light", campaign: "✓" },
      { feature: "Campaign-ready delivery pack", film: "—", filmPhoto: "✓", social: "✓", campaign: "✓" },
    ],
    []
  );

  // 5) REAL FORM sending via /api/contact
  const [form, setForm] = useState({ name: "", email: "", message: "", packageId: "Travel Film" });
  const [sending, setSending] = useState(false);

  const isEmailValid = /^\S+@\S+\.\S+$/.test(form.email.trim());
  const isMessageValid = form.message.trim().length >= 20;
  const isNameValid = form.name.trim().length > 0;
  const canSend = isEmailValid && isMessageValid && isNameValid && !sending;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) {
      toast.show("Please complete the form");
      return;
    }

    try {
      setSending(true);
      toast.show("Sending…");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        toast.show("Error. Please try again.");
        setSending(false);
        return;
      }

      toast.show("Sent ✅ I’ll reply soon.");
      setForm({ name: "", email: "", message: "", packageId: "Travel Film" });
      setSending(false);
    } catch {
      toast.show("Network error. Try again.");
      setSending(false);
    }
  };

  return (
    <main style={{ background: "var(--bg)", color: "var(--fg)" }}>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-10">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
            {t("nav.services")}
          </div>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight hero-title">
              Services & Pricing
            </h1>

            <div className="flex flex-wrap gap-3">
              <a
                href="/media/Rustam_Nabizade_MediaKit.pdf"
                target="_blank"
                className="rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition hover:opacity-90"
                style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--fg)" }}
              >
                Download Media Kit (PDF) →
              </a>

              <a
                href="#request"
                className="rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition hover:opacity-90"
                style={{ borderColor: "var(--border)", background: "var(--fg)", color: "var(--bg)" }}
              >
                Request a quote →
              </a>
            </div>
          </div>

          <p className="mt-5 max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
            Premium cinematic production for destinations and travel brands. Prices are starting points —
            final quote depends on travel, scope, and usage.
          </p>
        </Reveal>
      </section>

      {/* TRUSTED BY */}
<section className="mb-28 border-t border-white/10 pt-14">
  <p className="mb-10 text-xs uppercase tracking-[0.32em] text-white/40">
    Trusted by / Collaborations
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[
      { src: "/logos/azerbaijan-tourism.png", alt: "Azerbaijan Tourism" },
      { src: "/logos/dji.png", alt: "DJI" },
      { src: "/logos/goturkiye.png", alt: "GoTürkiye" },
      { src: "/logos/turkish-airlines.png", alt: "Turkish Airlines" },
    ].map((logo) => (
      <div
        key={logo.src}
        className="group relative flex items-center justify-center rounded-2xl
                   border border-white/10 bg-white/[0.04] px-8 py-10
                   backdrop-blur-md transition
                   hover:bg-white/[0.08] hover:border-white/20"
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="
            h-10 md:h-12 object-contain
            filter brightness-0 invert
            opacity-70
            transition-all duration-300
            group-hover:opacity-100
          "
        />

        {/* soft premium glow */}
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
</section>

      {/* PACKAGES */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Reveal key={s.id}>
              <div
                className="relative rounded-2xl border p-7"
                style={{
                  borderColor: "var(--border)",
                  background: s.highlight ? "var(--fg)" : "var(--card)",
                  color: s.highlight ? "var(--bg)" : "var(--fg)",
                }}
              >
                {s.highlight && (
                  <div
                    className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em]"
                    style={{ background: "var(--bg)", color: "var(--fg)" }}
                  >
                    Most requested
                  </div>
                )}

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h2 className="text-xl font-semibold">{s.title}</h2>
                    <div className="mt-2 text-sm opacity-80">{s.bestFor}</div>
                  </div>
                  <div className="text-sm opacity-90 whitespace-nowrap">{s.price}</div>
                </div>

                <p className="mt-4 text-sm leading-relaxed opacity-85">{s.description}</p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] opacity-70">
                      Included
                    </div>
                    <ul className="mt-3 space-y-2 text-sm opacity-80">
                      {s.includes.map((i) => (
                        <li key={i}>• {i}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] opacity-70">
                      Deliverables
                    </div>
                    <ul className="mt-3 space-y-2 text-sm opacity-80">
                      {s.deliverables.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#request"
                  className="mt-8 inline-flex text-[11px] uppercase tracking-[0.22em] transition hover:opacity-90"
                  style={{ color: s.highlight ? "var(--bg)" : "var(--fg)" }}
                >
                  Request details →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 2) PROCESS */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <Reveal>
          <div
            className="rounded-2xl border p-7"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              Process
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">How we work</h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {processSteps.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border p-6"
                  style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                >
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {s.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* COMPARISON TABLE */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <Reveal>
          <div
            className="rounded-2xl border p-7"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              Comparison
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Choose the right package</h2>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse">
                <thead>
                  <tr>
                    <Th>Feature</Th>
                    <Th>Travel Film</Th>
                    <Th>Film + Photo</Th>
                    <Th>Social Pack</Th>
                    <Th>Campaign</Th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((row) => (
                    <tr key={row.feature}>
                      <Td muted>{row.feature}</Td>
                      <Td>{row.film}</Td>
                      <Td>{row.filmPhoto}</Td>
                      <Td>{row.social}</Td>
                      <Td>{row.campaign}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 text-sm" style={{ color: "var(--muted)" }}>
              Travel & accommodation are quoted separately. Usage rights depend on campaign scope and duration.
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3) FAQ */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <Reveal>
          <div
            className="rounded-2xl border p-7"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              FAQ
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Common questions</h2>

            <div className="mt-7 grid gap-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="rounded-2xl border p-5"
                  style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                >
                  <summary className="cursor-pointer text-sm font-semibold">
                    {f.q}
                  </summary>
                  <div className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4) TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <Reveal>
          <div
            className="rounded-2xl border p-7"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              Testimonials
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">What partners say</h2>

            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {testimonials.map((x, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border p-6"
                  style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                >
                  <div className="text-sm leading-relaxed" style={{ color: "var(--fg)" }}>
                    “{x.quote}”
                  </div>
                  <div className="mt-4 text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                    {x.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5) REAL CONTACT FORM */}
      <section id="request" className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div
            className="rounded-2xl border p-7 md:p-10"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
              Request a quote
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
              Tell me the destination + dates
            </h2>

            <form onSubmit={onSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none"
                  style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none"
                  style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                  placeholder="name@company.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                  Package
                </label>
                <select
                  value={form.packageId}
                  onChange={(e) => setForm({ ...form, packageId: e.target.value })}
                  className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none"
                  style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                >
                  <option value="Travel Film" style={{ color: "black" }}>Travel Film</option>
                  <option value="Film + Photo Story" style={{ color: "black" }}>Film + Photo Story</option>
                  <option value="Social Content Package" style={{ color: "black" }}>Social Content Package</option>
                  <option value="Full Campaign Production" style={{ color: "black" }}>Full Campaign Production</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none min-h-[160px]"
                  style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                  placeholder="Destination, dates, deliverables (film/photo/social), number of days, and usage (web/ads)…"
                />
              </div>

              <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={!canSend}
                  className="rounded-full border px-6 py-3 text-[11px] uppercase tracking-[0.22em] transition"
                  style={{
                    borderColor: "var(--border)",
                    background: canSend ? "var(--fg)" : "transparent",
                    color: canSend ? "var(--bg)" : "var(--muted)",
                    opacity: sending ? 0.85 : 1,
                  }}
                >
                  {sending ? "Sending…" : "Send"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", message: "", packageId: "Travel Film" });
                    toast.show("Cleared");
                  }}
                  className="rounded-full border px-6 py-3 text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition"
                  style={{ borderColor: "var(--border)", background: "transparent", color: "var(--muted)" }}
                >
                  Clear
                </button>

                <span className="text-xs" style={{ color: "var(--muted)" }}>
                  Real sending via API (Resend). No mailto.
                </span>
              </div>
            </form>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

/* ---------- table helpers ---------- */

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      className="text-left text-[11px] uppercase tracking-[0.22em] py-3 px-3 border-b"
      style={{ color: "var(--muted)", borderColor: "var(--border)" }}
    >
      {children}
    </th>
  );
}

function Td({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <td
      className="py-3 px-3 border-b text-sm"
      style={{
        borderColor: "var(--border)",
        color: muted ? "var(--muted)" : "var(--fg)",
      }}
    >
      {children}
    </td>
  );
}