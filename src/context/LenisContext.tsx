"use client";

import { createContext, useContext, useState } from "react";
import type Lenis from "lenis";

type LenisContextValue = {
  lenis: Lenis | null;
  setLenis: (lenis: Lenis | null) => void;
};

const LenisContext = createContext<LenisContextValue | null>(null);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  return (
    <LenisContext.Provider value={{ lenis, setLenis }}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenisInstance() {
  const ctx = useContext(LenisContext);
  if (!ctx) {
    throw new Error("useLenisInstance must be used within LenisProvider");
  }
  return ctx;
}
