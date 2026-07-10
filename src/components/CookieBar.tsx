"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("capitolium-cookie-ack")) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      data-lenis-prevent
      className={clsx(
        "fixed right-4 bottom-4 z-[9000] max-w-sm rounded-2xl border border-black/10 bg-beige p-5 shadow-xl",
      )}
    >
      <p className="font-mouse text-sm leading-snug text-black/80 md:text-base">
        This site uses cookies for a smoother craft experience. Concept website
        — no tracking beyond essentials.
      </p>
      <button
        type="button"
        className="mt-4 rounded-full bg-red px-5 py-2 font-mouse text-sm uppercase text-white"
        onClick={() => {
          try {
            localStorage.setItem("capitolium-cookie-ack", "1");
          } catch {
            /* ignore */
          }
          setVisible(false);
        }}
      >
        Acknowledge & Close
      </button>
    </div>
  );
}
