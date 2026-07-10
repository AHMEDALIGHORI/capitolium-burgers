"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import JellyDivider from "@/components/JellyDivider";
import PopHeading from "@/components/PopHeading";

export default function Classic() {
  return (
    <section className="relative overflow-hidden bg-red text-white">
      <JellyDivider fill="#f5e3cd" variant="top" className="-mt-px" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 md:py-24">
        <Reveal>
          <p className="font-modak text-[8vw] leading-none text-mustard uppercase md:text-[3.5vw]">
            TOP CLASSIC
          </p>
          <PopHeading
            as="h2"
            className="heading180 text-stroke-180 mt-2 text-mustard"
          >
            juicy cheesy fully Loaded
          </PopHeading>
          <p className="text40 mt-8 max-w-lg font-mouse leading-[1.15]">
            Capitolium is back and bolder than ever. Honoring our rich roots, we
            bring you the ultimate smashed experience fully loaded, hot, and
            crafted fresh.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto w-[80%] max-w-md">
            <Image
              src="/img-webp/cheesyBurger.webp"
              alt="Capitolium Signature Cheesy Burger with dripping cheese"
              width={800}
              height={800}
              className="relative z-10 h-auto w-full object-contain"
            />
            <Image
              src="/img-webp/burgerwithhands.webp"
              alt="burger with hands"
              width={600}
              height={600}
              className="absolute -right-[15%] -bottom-[10%] z-20 w-[55%] rotate-6 object-contain"
            />
          </div>
        </Reveal>
      </div>
      <JellyDivider fill="#ffd750" variant="bottom" />
    </section>
  );
}
