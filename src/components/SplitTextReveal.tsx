"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { useAnimation } from "@/context/AnimationContext";

gsap.registerPlugin(ScrollTrigger);

type SplitTextRevealProps = {
  children: string;
  className?: string;
  delay?: number;
  scrollStart?: string;
  align?: "left" | "right" | "center";
  animateOnScroll?: boolean;
};

export default function SplitTextReveal({
  children,
  className,
  delay = 0.25,
  scrollStart = "top 95%",
  align = "left",
  animateOnScroll = true,
}: SplitTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isPageReady } = useAnimation();

  useEffect(() => {
    if (!isPageReady) return;
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const inners = el.querySelectorAll<HTMLElement>(".split-inner");
      if (reduceMotion) {
        gsap.set(inners, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(inners, { y: "100%" });

      const tween = {
        y: "0%",
        duration: 1.4,
        delay,
        stagger: 0.15,
        ease: "power4.out",
      };

      if (animateOnScroll) {
        gsap.to(inners, {
          ...tween,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            once: true,
          },
        });
      } else {
        gsap.to(inners, tween);
      }
    }, el);

    return () => ctx.revert();
  }, [animateOnScroll, children, delay, isPageReady, scrollStart]);

  const lines = children.split("\n").filter(Boolean);

  return (
    <div
      ref={ref}
      className={clsx(
        "text40 leading-none",
        align === "right" && "text-right",
        align === "center" && "text-center",
        className,
      )}
    >
      {lines.map((line, index) => (
        <span key={index} className="split-line block overflow-hidden">
          <span className="split-inner inline-block">{line}</span>
        </span>
      ))}
    </div>
  );
}
