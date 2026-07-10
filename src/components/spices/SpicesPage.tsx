"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterCTA from "@/components/FooterCTA";
import JellyDivider from "@/components/JellyDivider";
import Reveal from "@/components/Reveal";
import { INGREDIENTS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function SpicesPage() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-spice-title]",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  const current = INGREDIENTS[active];

  return (
    <div ref={root} className="bg-beige">
      <section className="relative overflow-hidden px-6 pt-32 pb-10 md:px-10 md:pt-40">
        <p className="font-modak text-center text-[8vw] leading-none text-mustard-dark uppercase md:text-[3vw]">
          what’s Inside
        </p>
        <h2
          data-spice-title
          className="heading300 text-stroke-180 mx-auto mt-4 max-w-[90%] text-center text-red"
        >
          simple things done right
        </h2>
        <p className="text40 mx-auto mt-8 max-w-3xl text-center font-mouse leading-[1.15] text-black">
          We don&apos;t have a long list of ingredients. We have a short one —
          and we&apos;re obsessive about every single item on it.
        </p>
      </section>

      <section className="relative bg-red px-6 py-20 text-white md:px-10 md:py-28">
        <JellyDivider fill="#f5e3cd" variant="top" className="-mt-[1px]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="heading180 text-stroke-180 text-mustard">
              from farm to bite
            </h2>
            <p className="text40 mt-8 font-mouse leading-[1.15]">
              We didn&apos;t just pick ingredients off a list. We thought about
              where they come from, why they matter, and what they bring to the
              burger.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              src="/img-webp/farmtobite.webp"
              alt="farm to bite"
              width={900}
              height={700}
              className="mx-auto h-auto w-full max-w-lg object-contain"
            />
          </Reveal>
        </div>
        <JellyDivider fill="#f5e3cd" variant="bottom" />
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <h2 className="heading300 text-stroke-180 mx-auto text-center text-red">
            A story in every bite.
          </h2>
          <p className="text40 mx-auto mt-6 max-w-2xl text-center font-mouse">
            From fresh farms to your hands every layer matters.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-3 md:gap-4">
          {INGREDIENTS.map((ing, i) => (
            <button
              key={ing.title}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 font-mouse text-sm uppercase tracking-wide transition md:text-lg ${
                active === i
                  ? "bg-red text-white"
                  : "bg-black/10 text-black hover:bg-mustard"
              }`}
            >
              {ing.title}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              key={current.detail}
              src={current.detail}
              alt={current.title}
              fill
              sizes="(max-width:768px) 90vw, 400px"
              className="object-contain"
            />
          </div>
          <div>
            <div className="mb-4 w-24">
              <Image
                src={current.image}
                alt=""
                width={120}
                height={120}
                className="h-auto w-full object-contain"
              />
            </div>
            <h3 className="font-modak text-[10vw] leading-none text-red uppercase md:text-[4vw]">
              {current.title}
            </h3>
            <p className="mt-4 font-mouse text-xl leading-snug text-black md:text-2xl">
              {current.description}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {INGREDIENTS.map((ing, i) => (
            <button
              key={ing.title}
              type="button"
              onClick={() => setActive(i)}
              className={`overflow-hidden rounded-2xl transition ${
                active === i ? "ring-4 ring-red" : "opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={ing.detail}
                alt={ing.title}
                width={300}
                height={300}
                className="aspect-square h-auto w-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
