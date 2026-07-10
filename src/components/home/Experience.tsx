"use client";

import Reveal from "@/components/Reveal";
import PopHeading from "@/components/PopHeading";
import JellyDivider from "@/components/JellyDivider";

const STATS = ["450 kcal", "High Protein", "Fresh Ingredients"];
const CHIPS = [
  "BOLD FLAVOUR",
  "100% Organic",
  "Zero Guilt",
  "True Taste",
  "Pure quality",
  "Every Layer",
  "Packed With",
  "Signature",
  "Flavor",
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-mustard px-6 py-20 md:px-10 md:py-28">
      <JellyDivider fill="#f5e3cd" variant="top" className="-mt-px" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
        <Reveal>
          <p className="font-modak text-[7vw] leading-none text-red uppercase md:text-[3vw]">
            EXPERIENCE
          </p>
          <PopHeading
            as="h2"
            className="heading180 text-stroke-180 mt-2 text-red"
          >
            {"food that\nfeels good"}
          </PopHeading>
          <ul className="mt-10 space-y-4 font-mouse text-[8vw] leading-none uppercase text-burgundy md:text-[3.5vw]">
            {STATS.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col items-end gap-1 text-right md:gap-2">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="font-mouse text-[7vw] leading-[0.95] uppercase text-burgundy md:text-[2.8vw]"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
