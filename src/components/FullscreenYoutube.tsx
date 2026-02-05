"use client";

import { useEffect, useMemo, useState } from "react";

export default function FullscreenYoutube({
  videoId,
  poster,
  title = "Film",
}: {
  videoId: string;
  poster: string;
  title?: string;
}) {
  const [open, setOpen] = useState(false);

  const embedUrl = useMemo(() => {
    // максимально “чистый” embed
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      controls: "1", // можно поставить 0, но UX хуже
      iv_load_policy: "3",
      cc_load_policy: "0",
      fs: "1",
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, [videoId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Preview block (no YouTube UI) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative w-full overflow-hidden rounded-2xl bg-white/5"
        aria-label="Open fullscreen film"
      >
        <img
          src={poster}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

        {/* Minimal play mark */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="rounded-full border border-white/25 bg-black/35 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 backdrop-blur">
            Play film
          </div>
        </div>

        <div className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.22em] text-white/70">
          Fullscreen • Sound optional
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm"
          onMouseDown={(e) => {
            // закрытие кликом по фону
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          {/* Top bar */}
          <div className="absolute left-0 right-0 top-0 z-[101] flex items-center justify-between px-6 py-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
              {title}
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/85 hover:bg-white/15 transition"
            >
              Close ✕
            </button>
          </div>

          {/* Video */}
          <div className="absolute inset-0 grid place-items-center px-4 pt-14 pb-8">
            <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-black">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={embedUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
