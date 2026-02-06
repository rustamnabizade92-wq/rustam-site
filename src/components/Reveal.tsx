"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setShow(true);
      return;
    }

    let cancelled = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!cancelled && entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "120px 0px 120px 0px" }
    );

    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        show ? "" : "will-change-transform will-change-opacity",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
