"use client";

import { createContext, useContext, useMemo, useState } from "react";

type AnimationContextValue = {
  isPageReady: boolean;
  setLoaderFinished: (value: boolean) => void;
};

const AnimationContext = createContext<AnimationContextValue | null>(null);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [loaderFinished, setLoaderFinished] = useState(false);

  const value = useMemo(
    () => ({
      isPageReady: loaderFinished,
      setLoaderFinished,
    }),
    [loaderFinished],
  );

  return (
    <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
  );
}

export function useAnimation() {
  const ctx = useContext(AnimationContext);
  if (!ctx) {
    throw new Error("useAnimation must be used within AnimationProvider");
  }
  return ctx;
}
