"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import JellyDivider from "@/components/JellyDivider";

const STORY = [
  {
    city: "BERLIN",
    image: "/img-webp/about-1.webp",
    rotate: "-6deg",
    blurb: "Grilled to perfection juicy, smoky, unforgettable.",
  },
  {
    city: "LONDON",
    image: "/img-webp/about-2.webp",
    rotate: "5deg",
    blurb: "Sun-ripened tomatoes that bring natural sweetness and balance.",
  },
  {
    city: "NEW YORK",
    image: "/img-webp/about-3.webp",
    rotate: "-4deg",
    blurb: "Rich, creamy cheese that melts into every bite.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-red px-6 pb-24 pt-8 md:px-10"
    >
      <JellyDivider fill="#f5e3cd" variant="top" className="-mt-px" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <h2 className="heading300 text-stroke-180-mustard mx-auto text-center leading-[0.85] text-white">
            A story in every bite.
          </h2>
          <p className="text40 mx-auto mt-6 w-[65%] text-center font-mouse leading-[1.1] text-black">
            From fresh farms to your hands every layer matters.
          </p>
        </Reveal>

        <div className="relative mt-[12vw] flex flex-col items-center gap-[18vw] pb-10 md:gap-[12vw]">
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[83%] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-mustard/60 md:w-[2vw] md:bg-transparent">
            <svg
              width="6"
              height="100%"
              viewBox="0 0 6 1000"
              className="hidden h-full w-full md:block"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M3 0 V1000"
                stroke="#ffd750"
                strokeWidth="4"
                strokeDasharray="12 10"
              />
            </svg>
          </div>

          {STORY.map((item, i) => (
            <Reveal
              key={item.city}
              className={`relative z-10 flex w-full max-w-4xl flex-col items-center gap-6 md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className="media-item w-[70vw] max-w-sm overflow-hidden rounded-sm shadow-xl md:w-[28vw]"
                style={{ transform: `rotate(${item.rotate})` }}
              >
                <Image
                  src={item.image}
                  alt={item.city}
                  width={700}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="max-w-md text-center md:text-left">
                <p className="font-modak text-[8vw] leading-none text-mustard uppercase md:text-[3vw]">
                  {item.city}
                </p>
                <p className="mt-3 font-mouse text-lg leading-snug text-white md:text-2xl">
                  {item.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
