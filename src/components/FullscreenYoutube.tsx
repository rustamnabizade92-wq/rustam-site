"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function FullscreenYoutube({
  videoId,
  poster,
  title = "Film",
  controls = true,
}: {
  videoId: string;
  poster: string;
  title?: string;
  controls?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [instanceKey, setInstanceKey] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const embedUrl = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      controls: controls ? "1" : "0",
      iv_load_policy: "3",
      cc_load_policy: "0",
      fs: "1",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, [videoId, controls]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setInstanceKey((k) => k + 1);
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const openVideo = () => {
    const addLink = (rel: string, href: string) => {
      const el = document.createElement("link");
      el.rel = rel;
      el.href = href;
      document.head.appendChild(el);
    };
    addLink("preconnect", "https://www.youtube.com");
    addLink("preconnect", "https://www.google.com");
    addLink("preconnect", "https://i.ytimg.com");

    setOpen(true);
  };

  const closeVideo = () => {
    setOpen(false);
    setInstanceKey((k) => k + 1);
  };

  return (
    <>
      <button
        type="button"
        onClick={openVideo}
        className="group relative w-full overflow-hidden rounded-2xl bg-white/5"
        aria-label="Open fullscreen film"
      >
        <img
          src={poster}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

        <div className="absolute inset-0 grid place-items-center">
          <div className="rounded-full border border-white/25 bg-black/35 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 backdrop-blur">
            Play film
          </div>
        </div>

        <div className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.22em] text-white/70">
          Fullscreen • Sound optional
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeVideo();
          }}
        >
          <div className="absolute left-0 right-0 top-0 z-[101] flex items-center justify-between px-6 py-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">
              {title}
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeVideo}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/85 hover:bg-white/15 transition"
            >
              Close ✕
            </button>
          </div>

          <div className="absolute inset-0 grid place-items-center px-4 pt-14 pb-8">
            <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-black">
              <div className="aspect-video">
                <iframe
                  key={instanceKey}
                  className="h-full w-full"
                  src={embedUrl}
                  title={title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
