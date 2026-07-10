"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import PopHeading from "@/components/PopHeading";
import SplitTextReveal from "@/components/SplitTextReveal";
import { useAnimation } from "@/context/AnimationContext";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const burgerWrap = useRef<HTMLDivElement>(null);
  const { isPageReady } = useAnimation();

  useEffect(() => {
    if (!isPageReady) return;
    const wrap = burgerWrap.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrap,
        { scale: 0.5, opacity: 0, y: 100, rotate: -5 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1.5,
          delay: 0.5,
          ease: "back.out(1.5)",
        },
      );

      gsap.to(wrap, {
        y: "-=15",
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.7,
      });
    }, wrap);

    return () => ctx.revert();
  }, [isPageReady]);

  return (
    <section
      ref={root}
      id="hero"
      data-nav-dark="false"
      className="relative flex h-screen w-full flex-col items-center justify-between bg-beige pt-[8vw] max-md:h-[200vw] max-md:pb-[2vw] max-md:pt-[40vw]"
    >
      <div className="relative h-fit w-fit">
        <PopHeading
          as="h1"
          animateOnScroll={false}
          delay={0.9}
          className="text-center font-mouse text-[30vw] leading-[0.8] text-red text-stroke-180 max-md:text-[26vw] max-md:leading-[0.85]"
        >
          THE BURGER
        </PopHeading>

        <PopHeading
          as="p"
          animateOnScroll={false}
          delay={1.05}
          split="lines"
          className="absolute top-[10%] left-[10%] z-10 rotate-15 text-center font-modak text-[2.8vw] leading-[0.9] text-mustard-dark text-stroke-180 max-md:top-[2%] max-md:left-[2%] max-md:rotate-0 max-md:text-[6vw]"
        >
          {"SMASHED\nFRESH"}
        </PopHeading>

        <PopHeading
          as="p"
          animateOnScroll={false}
          delay={1.05}
          split="lines"
          className="absolute right-[10%] bottom-[10%] z-10 -rotate-15 text-center font-modak text-[2.8vw] leading-[0.9] text-mustard-dark text-stroke-180 max-md:right-[2%] max-md:bottom-[2%] max-md:rotate-0 max-md:text-[6vw]"
        >
          {"BOLD\nFLAVOR"}
        </PopHeading>
      </div>

      <div
        ref={burgerWrap}
        className="absolute top-[60%] left-1/2 z-20 size-[40vw] -translate-x-1/2 -translate-y-[60%] opacity-0 max-md:top-[110vw] max-md:size-[80vw] max-md:-translate-y-[50%]"
      >
        <Image
          src="/img-webp/burgerH.webp"
          alt="Capitolium Artisan Smashed Burger with fresh ingredients"
          width={1000}
          height={1000}
          priority
          className="h-full w-full object-contain"
        />
      </div>

      <PopHeading
        as="p"
        animateOnScroll={false}
        delay={1.3}
        className="relative z-20 mt-[15vw] translate-y-[-9vw] text-center font-modak text-[15vw] uppercase text-[#F4A804] text-stroke-180 max-md:absolute max-md:top-[133vw] max-md:mt-[6vw] max-md:-translate-y-1/2 max-md:text-[20vw]"
      >
        CAPITOLIUM
      </PopHeading>

      <div className="absolute bottom-0 left-0 flex w-full justify-between px-[2.5vw] py-[2vw] max-md:static max-md:flex-col max-md:items-center max-md:gap-[4vw] max-md:px-[5vw] max-md:py-0">
        <div className="w-[23vw] max-md:w-full">
          <SplitTextReveal
            align="left"
            className="max-md:text-center"
            delay={1.6}
            animateOnScroll={false}
          >
            Smashed hot on the flat top, our prime patties lock in ultimate
            juiciness under a caramelized crust.
          </SplitTextReveal>
        </div>
        <div className="w-[23vw] max-md:w-full">
          <SplitTextReveal
            align="right"
            className="max-md:text-center"
            delay={1.75}
            animateOnScroll={false}
          >
            Topped with melted cheddar and our signature chili honey glaze
            crafted to satisfy your cravings since 1997.
          </SplitTextReveal>
        </div>
      </div>
    </section>
  );
}
