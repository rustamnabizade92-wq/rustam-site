"use client";

import React, { createContext, useContext, useMemo, useRef, useState } from "react";

type ToastCtx = {
  show: (message: string, ms?: number) => void;
  clear: () => void;
};

const Ctx = createContext<ToastCtx | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const clear = () => {
    setToast(null);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const show = (message: string, ms = 2200) => {
    setToast(message);

    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setToast(null);
      timerRef.current = null;
    }, ms);
  };

  const value = useMemo(() => ({ show, clear }), []);

  return (
    <Ctx.Provider value={value}>
      {children}

      {toast && (
        <div
          className="fixed bottom-6 left-1/2 z-[200] -translate-x-1/2 rounded-full border border-white/10 bg-black/80 px-4 py-2 text-sm text-white/90 backdrop-blur"
          role="status"
          aria-live="polite"
        >
          {toast}
        </div>
      )}
    </Ctx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}
