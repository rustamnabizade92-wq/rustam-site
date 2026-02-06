"use client";

import { useMemo, useState } from "react";
import { useToast } from "@/components/Toast";
import { useI18n } from "@/components/LanguageProvider";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const toast = useToast();
  const { t } = useI18n();

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Email is invalid";
    if (form.message.trim().length < 20) e.message = "Write at least 20 characters";
    return e;
  }, [form]);

  const valid = Object.keys(errors).length === 0;

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.show(`${label} copied`);
    } catch {
      toast.show("Copy failed");
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || sending) {
      toast.show("Please fix the form");
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
        toast.show(data?.error || "Error. Please try again.");
        setSending(false);
        return;
      }

      toast.show("Sent ✅ I’ll reply soon.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    } catch {
      toast.show("Network error. Try again.");
      setSending(false);
    }
  };

  return (
    <main style={{ background: "var(--bg)", color: "var(--fg)" }}>
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-12">
        <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
          {t("nav.contact")}
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.01em]">
          Let’s build your story
        </h1>

        <p className="mt-5 max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Send a short brief. I’ll reply with questions, availability and a quote structure.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <div
              className="rounded-2xl border p-6 space-y-4"
              style={{ borderColor: "var(--border)", background: "var(--card)" }}
            >
              <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                Direct
              </div>

              <button
                type="button"
                onClick={() => copy("+994502904270", "WhatsApp")}
                className="w-full rounded-xl border px-4 py-3 text-left hover:opacity-90 transition"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="text-sm" style={{ color: "var(--fg)" }}>
                  WhatsApp number
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                  +994 50 290 42 70 (click to copy)
                </div>
              </button>

              <a
                href="https://wa.me/994502904270"
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-xl border px-4 py-3 hover:opacity-90 transition"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="text-sm" style={{ color: "var(--fg)" }}>
                  Open WhatsApp chat →
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                  fastest way to reach me
                </div>
              </a>

              <a
                href="https://www.youtube.com/@rustam.nabizade"
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-xl border px-4 py-3 hover:opacity-90 transition"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="text-sm" style={{ color: "var(--fg)" }}>
                  Open YouTube →
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                  watch films & stories
                </div>
              </a>

              <div className="pt-2 text-xs" style={{ color: "var(--muted)" }}>
                Typical reply time: same day (when I’m not filming).
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border p-8"
              style={{ borderColor: "var(--border)", background: "var(--card)" }}
            >
              <div className="grid gap-5 md:grid-cols-2">
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
                    autoComplete="name"
                    disabled={sending}
                  />
                  {errors.name && <div className="mt-2 text-xs text-red-400">{errors.name}</div>}
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none"
                    style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                    placeholder="name@company.com"
                    autoComplete="email"
                    disabled={sending}
                  />
                  {errors.email && <div className="mt-2 text-xs text-red-400">{errors.email}</div>}
                </div>
              </div>

              <div className="mt-5">
                <label className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 outline-none min-h-[160px]"
                  style={{ borderColor: "var(--border)", color: "var(--fg)" }}
                  placeholder="Tell me about the destination / dates / deliverables you need…"
                  disabled={sending}
                />
                {errors.message && <div className="mt-2 text-xs text-red-400">{errors.message}</div>}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={!valid || sending}
                  className="rounded-full border px-6 py-3 text-[11px] uppercase tracking-[0.22em] transition"
                  style={{
                    borderColor: "var(--border)",
                    background: valid && !sending ? "var(--fg)" : "transparent",
                    color: valid && !sending ? "var(--bg)" : "var(--muted)",
                    opacity: sending ? 0.8 : 1,
                  }}
                >
                  {sending ? "Sending…" : "Send"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", message: "" });
                    toast.show("Cleared");
                  }}
                  disabled={sending}
                  className="rounded-full border px-6 py-3 text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition"
                  style={{ borderColor: "var(--border)", background: "transparent", color: "var(--muted)" }}
                >
                  Clear
                </button>

                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  Real sending via API (Resend). No mailto.
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
