"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "ambient-sound";

export default function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  // Load saved preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "on") setEnabled(true);
    } catch {}
  }, []);

  // Play / pause when toggled
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.18;

    if (enabled) {
      audio
        .play()
        .then(() => {
          try {
            localStorage.setItem(STORAGE_KEY, "on");
          } catch {}
        })
        .catch(() => {
          // autoplay blocked — user must click again
          setEnabled(false);
        });
    } else {
      audio.pause();
      try {
        localStorage.setItem(STORAGE_KEY, "off");
      } catch {}
    }
  }, [enabled]);

  return (
    <>
      <audio ref={audioRef} src="/ambient.mp3" loop preload="none" />

      <button
        type="button"
        onClick={() => setEnabled((v) => !v)}
        aria-pressed={enabled}
        className="
          fixed bottom-6 right-6 z-50
          rounded-full border border-white/20
          bg-black/40 px-4 py-2
          text-[11px] uppercase tracking-[0.22em]
          text-white/85 backdrop-blur
          transition hover:bg-black/60
        "
      >
        {enabled ? "Sound on" : "Sound off"}
      </button>
    </>
  );
}
