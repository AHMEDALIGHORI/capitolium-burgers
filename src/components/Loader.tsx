"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation } from "@/context/AnimationContext";
import { useLenisInstance } from "@/context/LenisContext";

gsap.registerPlugin(ScrollTrigger);

const LAYER_LABELS = [
  "TOASTING THE ARTISAN BUN...",
  "SEARING THE GLAZED PATTY...",
  "MELTING CHEDDAR CHEESE...",
  "SLICING RIPE RED TOMATOES...",
  "ADDING CRISPY GARDEN LETTUCE...",
  "PREPARING TO SERVE THE CAPITOLIUM MASTERPIECE!",
] as const;

const LAYERS = [
  { src: "/img-webp/bun.webp", alt: "bun", rotate: -4 },
  { src: "/img-webp/meat.webp", alt: "patty", rotate: 3 },
  { src: "/img-webp/cheese.webp", alt: "cheese", rotate: -2 },
  { src: "/img-webp/tomato.webp", alt: "tomato", rotate: 5 },
  { src: "/img-webp/lettuce.webp", alt: "lettuce", rotate: -3 },
  { src: "/img-webp/burgerH.webp", alt: "burger", rotate: 0 },
] as const;

const STACK_END = 1.42;
const EXIT_START = STACK_END + 1.2;

export default function Loader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const confettiRef = useRef<HTMLDivElement>(null);
  const curtainRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("PREPARING ARTISAN KITCHEN...");
  const [visible, setVisible] = useState(true);

  const { setLoaderFinished } = useAnimation();
  const { lenis } = useLenisInstance();

  useEffect(() => {
    lenis?.stop();

    const root = rootRef.current;
    const stack = stackRef.current;
    const statusEl = statusRef.current;
    const barEl = barRef.current;
    const confetti = confettiRef.current;
    if (!root || !stack || !statusEl || !barEl || !confetti) return;

    const progressObj = { value: 0 };
    const dots = Array.from(confetti.children) as HTMLElement[];

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          lenis?.scrollTo(0, { immediate: true });
          lenis?.start();
          setLoaderFinished(true);
          setVisible(false);
          ScrollTrigger.refresh();
        },
      });

      tl.to(
        progressObj,
        {
          value: 100,
          duration: 1.5,
          ease: "power1.inOut",
          onUpdate: () => setProgress(Math.floor(progressObj.value)),
        },
        0,
      );

      layerRefs.current.forEach((layer, index) => {
        if (!layer) return;
        const start = 0.22 * index;
        const img = layer.querySelector("img");
        const targetRotate = LAYERS[index].rotate;

        tl.fromTo(
          layer,
          { y: -800, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.32,
            ease: "power1.in",
            onStart: () => setStatus(LAYER_LABELS[index]),
          },
          start,
        );

        if (img) {
          tl.fromTo(
            img,
            { rotate: gsap.utils.random(-12, 12) },
            {
              rotate: targetRotate,
              duration: 0.45,
              ease: "back.out(2.5)",
            },
            start + 0.05,
          );
        }

        tl.to(
          layer,
          {
            scaleY: 0.88,
            scaleX: 1.06,
            duration: 0.06,
            transformOrigin: "50% 100%",
          },
          start + 0.28,
        )
          .to(
            layer,
            { scaleY: 1.03, scaleX: 0.98, duration: 0.08 },
            start + 0.34,
          )
          .to(layer, { scaleY: 1, scaleX: 1, duration: 0.12 }, start + 0.42);
      });

      tl.fromTo(
        dots,
        {
          scale: 0,
          opacity: 1,
          x: () => gsap.utils.random(-120, 120),
          y: () => gsap.utils.random(-180, -40),
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "power2.out",
        },
        STACK_END,
      );

      tl.to(
        stack,
        { y: -50, scale: 1.08, rotate: 2, duration: 0.4, ease: "power2.out" },
        STACK_END + 0.3,
      )
        .to(
          stack,
          { y: 0, scale: 1, rotate: 0, duration: 0.5, ease: "bounce.out" },
          STACK_END + 0.7,
        )
        .add(() => setStatus("READY TO CAPITOLIUM!"), STACK_END + 0.3);

      tl.to(
        [statusEl, barEl],
        { y: 50, opacity: 0, duration: 0.35, ease: "power2.in" },
        EXIT_START - 0.4,
      );

      tl.to(
        stack,
        { y: -1000, opacity: 0, scale: 0.9, duration: 0.75, ease: "power2.in" },
        EXIT_START,
      );

      const curtainColors = ["#f91814", "#EF6F2E", "#4C0016"];
      curtainRefs.current.forEach((curtain, index) => {
        if (!curtain) return;
        gsap.set(curtain, { yPercent: 100 });
        tl.to(
          curtain,
          {
            yPercent: -100,
            duration: index === 0 ? 0.8 : 1.1,
            ease: index === 0 ? "power2.inOut" : "power4.inOut",
          },
          EXIT_START + index * 0.12,
        );
      });

      void curtainColors;
    }, root);

    return () => {
      ctx.revert();
      lenis?.start();
    };
  }, [lenis, setLoaderFinished]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label="Page loading"
      className="fixed inset-0 z-[99999] flex h-dvh flex-col items-center justify-center overflow-hidden bg-red"
    >
      <div
        ref={stackRef}
        className="relative flex h-[38vh] w-[42vw] max-w-[360px] flex-col items-center justify-end md:h-[44vh] md:w-[22vw]"
      >
        {LAYERS.map((layer, index) => (
          <div
            key={layer.src}
            ref={(node) => {
              layerRefs.current[index] = node;
            }}
            className="absolute bottom-0 left-1/2 w-[78%] -translate-x-1/2"
            style={{ zIndex: index + 1 }}
          >
            <Image
              src={layer.src}
              alt={layer.alt}
              width={500}
              height={500}
              priority
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </div>
        ))}
      </div>

      <div
        ref={confettiRef}
        className="pointer-events-none absolute top-[38%] left-1/2 h-0 w-0 -translate-x-1/2"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute block size-2 rounded-full bg-mustard"
          />
        ))}
      </div>

      <div
        ref={statusRef}
        className="absolute bottom-[12vh] left-0 w-full px-6 text-center"
      >
        <p
          aria-live="polite"
          className="font-mouse text-[4.5vw] uppercase tracking-wide text-white md:text-[1.4vw]"
        >
          {status}
        </p>
      </div>

      <div
        ref={barRef}
        className="loader-bar absolute bottom-0 left-0 h-[2vw] w-full bg-white/15 md:h-[1vw]"
      >
        <div
          role="progressbar"
          aria-label="Loading progress"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-full bg-mustard transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {["#f91814", "#EF6F2E", "#4C0016"].map((fill, index) => (
          <div
            key={fill}
            ref={(node) => {
              curtainRefs.current[index] = node;
            }}
            className="absolute inset-0 h-full w-full"
            style={{ backgroundColor: fill }}
          />
        ))}
      </div>
    </div>
  );
}
