"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import clsx from "clsx";

type StickerProps = {
  src: string;
  alt: string;
  label: string;
  width?: number;
  className?: string;
  peelDirection?: string;
};

export default function Sticker({
  src,
  alt,
  label,
  width = 220,
  className,
  peelDirection = "0deg",
}: StickerProps) {
  const [peeled, setPeeled] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      type="button"
      className={clsx(
        "sticker-container simple-effects group cursor-pointer border-none bg-transparent p-0 outline-none",
        className,
      )}
      style={
        {
          "--peel-amount": peeled ? 0.35 : 1,
          "--peel-direction": peelDirection,
          "--sticker-width": `${width}px`,
        } as React.CSSProperties
      }
      onMouseEnter={() => setPeeled(true)}
      onMouseLeave={() => setPeeled(false)}
      onClick={() => setPeeled((v) => !v)}
      aria-label={label}
    >
      <div className="sticker-main relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={width}
          className="sticker-image h-auto drop-shadow-xl"
          draggable={false}
        />
      </div>
      <div className="flap pointer-events-none opacity-80" aria-hidden>
        <Image
          src={src}
          alt=""
          width={width}
          height={width}
          className="flap-image h-auto"
          draggable={false}
        />
      </div>
      <span className="country-label font-mouse mt-3 block text-center text-2xl uppercase tracking-wide text-black md:text-[1.6vw]">
        {label}
      </span>
    </button>
  );
}
