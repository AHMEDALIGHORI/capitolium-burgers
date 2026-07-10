"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { useAnimation } from "@/context/AnimationContext";

gsap.registerPlugin(ScrollTrigger);

type PopHeadingProps = {
  as?: "h1" | "h2" | "h3" | "p";
  children: string;
  className?: string;
  split?: "words" | "lines" | "none";
  delay?: number;
  scrollStart?: string;
  animateOnScroll?: boolean;
};

export default function PopHeading({
  as: Tag = "h2",
  children,
  className,
  split = "words",
  delay = 0,
  scrollStart = "top 88%",
  animateOnScroll = true,
}: PopHeadingProps) {
  const ref = useRef<HTMLElement>(null);
  const visibleRef = useRef<HTMLSpanElement>(null);
  const { isPageReady } = useAnimation();

  useEffect(() => {
    if (!isPageReady || split === "none") return;
    const el = ref.current;
    const visible = visibleRef.current;
    if (!el || !visible) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const pops = el.querySelectorAll("[data-pop]");
      if (reduceMotion) {
        gsap.set(pops, { opacity: 1, y: 0, scale: 1, rotate: 0 });
        visible.style.visibility = "visible";
        return;
      }

      gsap.set(pops, {
        opacity: 0,
        scale: 0,
        y: 0,
        rotation: 0,
        transformOrigin: "50% 90%",
      });

      const run = () => {
        visible.style.visibility = "visible";
        gsap.fromTo(
          pops,
          {
            y: () => gsap.utils.random(18, 40),
            rotation: () => gsap.utils.random(-16, 16),
            opacity: 0,
            scale: 0,
          },
          {
            y: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 0.72,
            delay,
            stagger: 0.055,
            ease: "back.out(2.35)",
          },
        );
      };

      if (animateOnScroll) {
        ScrollTrigger.create({
          trigger: el,
          start: scrollStart,
          once: true,
          onEnter: run,
        });
      } else {
        run();
      }
    }, el);

    return () => ctx.revert();
  }, [
    animateOnScroll,
    children,
    delay,
    isPageReady,
    scrollStart,
    split,
  ]);

  if (split === "none") {
    return <Tag className={className}>{children}</Tag>;
  }

  const renderWords = (text: string) =>
    text.split(" ").map((word, wi, arr) => (
      <span key={wi} className="inline-block overflow-hidden align-bottom">
        <span data-pop className="inline-block will-change-transform">
          {word}
        </span>
        {wi < arr.length - 1 ? "\u00A0" : null}
      </span>
    ));

  const renderLines = (text: string) =>
    text.split("\n").map((line, li) => (
      <span key={li} className="block overflow-hidden">
        {line.split(" ").map((word, wi, arr) => (
          <span key={wi} className="inline-block overflow-hidden align-bottom">
            <span data-pop className="inline-block will-change-transform">
              {word}
            </span>
            {wi < arr.length - 1 ? "\u00A0" : null}
          </span>
        ))}
      </span>
    ));

  const visibleContent =
    split === "lines" ? renderLines(children) : renderWords(children);

  return (
    <Tag ref={ref as never} className={clsx("overflow-hidden", className)}>
      <span className="sr-only">{children}</span>
      <span
        ref={visibleRef}
        aria-hidden
        className=""
        style={{ visibility: "hidden" }}
      >
        {visibleContent}
      </span>
    </Tag>
  );
}
