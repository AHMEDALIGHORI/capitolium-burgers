"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";
import JellyDivider from "@/components/JellyDivider";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Burgers" },
  { href: "/spices", label: "Spices" },
  { href: "/contact", label: "Contact" },
];

export default function FooterCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-reveal]"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="relative bg-red pt-4 text-white">
        <JellyDivider fill="#ffd750" variant="bottom" className="-mt-[1px]" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-24">
          <div className="flex-1">
            <p
              data-reveal
              className="font-modak text-[12vw] leading-none text-mustard uppercase md:text-[6vw]"
            >
              FEEL IT
            </p>
            <h2
              data-reveal
              className="heading180 text-stroke-180 mt-2 text-white"
            >
              feel the Change
            </h2>
            <p
              data-reveal
              className="text40 mt-6 max-w-md font-mouse leading-[1.1] md:w-[30vw]"
            >
              Smashed for the bold, built for the hungry. Dive into a legendary
              craft experience where every crispy edge and juicy layer rules.
            </p>
            <div data-reveal className="mt-8">
              <Button href="/menu" variant="secondary">
                Order Now
              </Button>
            </div>
          </div>
          <div data-reveal className="relative mx-auto w-[70vw] max-w-md md:w-[32vw]">
            <Image
              src="/img-webp/cta.webp"
              alt="Premium smashed burger on a wooden board"
              width={800}
              height={800}
              className="h-auto w-full object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-mustard px-6 py-12 text-black md:px-10">
        <nav
          aria-label="Footer"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 font-mouse text-xl uppercase tracking-wide"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mx-auto mt-8 max-w-7xl text-center font-mouse text-lg tracking-wide md:text-xl">
          Smashed patties · toasted buns · est. 1997
        </p>
        <p className="mx-auto mt-3 max-w-7xl text-center font-mouse text-sm opacity-80 md:text-base">
          © 2026 Capitolium — All rights reserved
        </p>
        <p className="font-modak mt-10 text-center text-[10vw] leading-none tracking-[0.15em] text-burgundy uppercase md:text-[7vw]">
          C A P I T O L I U M
        </p>
        <p className="font-mouse mt-4 text-center text-[8vw] leading-none text-red md:text-[4vw]">
          Craving...
        </p>
      </div>
    </div>
  );
}
