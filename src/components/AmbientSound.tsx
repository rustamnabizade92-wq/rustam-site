"use client";

import { useEffect, useRef, useState } from "react";

export default function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.18;
    on ? audio.play().catch(() => {}) : audio.pause();
  }, [on]);

  return (
    <>
      <audio ref={audioRef} src="/ambient.mp3" loop preload="auto" />
      <button
        onClick={() => setOn(!on)}
        className="fixed bottom-6 right-6 z-50 text-[11px] uppercase tracking-[0.22em] text-white/80 mix-blend-difference"
      >
        {on ? "Sound on" : "Sound off"}
      </button>
    </>
  );
}
