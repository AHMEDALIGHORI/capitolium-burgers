"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import JellyDivider from "@/components/JellyDivider";
import PopHeading from "@/components/PopHeading";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const FLIGHT_PATH =
  "M500 -139C557 -139 1550.43 364.378 1610.6 653.93C1745.6 1303.59 -160.566 551.165 -11.7069 1197.36C117.259 1757.21 1470.1 925.826 1474.12 1502.33C1478.15 2080.14 63.7084 1375.34 -11.707 1896.78C-107.419 2558.55 1928.5 2042.5 1928.5 2042.5";

const CITIES = [
  {
    label: "BERLIN",
    image: "/img-webp/berlin.webp",
    alt: "Capitolium Burger takeaway packaging in Berlin",
    containerClass:
      "absolute right-[5vw] top-[50vw] z-[200] flex flex-col items-end space-y-[1.5vw]",
    noteClass: "rotate-7 text-right",
    blurb: "Grilled to perfection juicy, smoky, unforgettable.",
  },
  {
    label: "LONDON",
    image: "/img-webp/london.webp",
    alt: "Capitolium Burger takeaway packaging in London",
    containerClass:
      "absolute left-[35vw] top-[64vw] z-[200] flex flex-col items-start space-y-[1.5vw]",
    noteClass: "-rotate-7 text-left",
    blurb: "Sun-ripened tomatoes that bring natural sweetness and balance.",
  },
  {
    label: "NEW YORK",
    image: "/img-webp/newyork.webp",
    alt: "Capitolium Burger takeaway packaging in New York",
    containerClass:
      "absolute right-[20vw] top-[80vw] z-[200] flex flex-col items-end space-y-[1.5vw]",
    noteClass: "rotate-12 text-right",
    blurb: "Rich, creamy cheese that melts into every bite.",
  },
  {
    label: "SYDNEY",
    image: "/img-webp/sydney.webp",
    alt: "Capitolium Burger takeaway packaging in Sydney",
    containerClass:
      "absolute left-[15vw] top-[105vw] z-[200] flex flex-col items-start space-y-[1.5vw]",
    noteClass: "-rotate-12 text-left",
    blurb: "Grilled to perfection juicy, smoky, unforgettable.",
  },
  {
    label: "TOKYO",
    image: "/img-webp/tokyo.webp",
    alt: "Capitolium Burger takeaway packaging in Tokyo",
    containerClass:
      "absolute right-[14vw] top-[130vw] z-[200] flex flex-col items-end space-y-[1.5vw]",
    noteClass: "rotate-6 text-right",
    blurb: "Soft, toasted buns crafted to hold everything together.",
  },
] as const;

const GATES = [0.14, 0.28, 0.5, 0.68, 0.91];

export default function Travel() {
  const desktopRef = useRef<HTMLElement>(null);
  const mapInnerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const mobileRef = useRef<HTMLElement>(null);
  const mobileLineRef = useRef<SVGPathElement>(null);
  const mobilePlaneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = desktopRef.current;
    const mapInner = mapInnerRef.current;
    const plane = planeRef.current;
    const path = pathRef.current;
    if (!section || !mapInner || !plane || !path) return;

    const cards = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll("[data-city-card]"),
    );

    const ctx = gsap.context(() => {
      gsap.set(plane, { xPercent: -50, yPercent: -50 });
      gsap.set(cards, { opacity: 0, scale: 0.8 });

      gsap.to(plane, {
        motionPath: {
          path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: -90,
        },
        ease: "none",
        scrollTrigger: {
          trigger: mapInner,
          start: "-10% top",
          end: "75%",
          scrub: 1,
        },
      });

      ScrollTrigger.create({
        trigger: mapInner,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const p = self.progress;
          cards.forEach((card, i) => {
            const gate = GATES[i];
            const shown = card.dataset.shown === "1";
            if (p >= gate && !shown) {
              card.dataset.shown = "1";
              gsap.fromTo(
                card,
                { opacity: 0, scale: 0.8, rotate: gsap.utils.random(-12, 12) },
                {
                  opacity: 1,
                  scale: 1.08,
                  rotate: gsap.utils.random(-6, 6),
                  duration: 0.45,
                  ease: "back.out(2.2)",
                  overwrite: "auto",
                },
              );
            } else if (p < gate - 0.02 && shown) {
              card.dataset.shown = "0";
              gsap.to(card, {
                opacity: 0,
                scale: 0.8,
                duration: 0.35,
                ease: "back.in(1.2)",
                overwrite: "auto",
              });
            }
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = mobileRef.current;
    const line = mobileLineRef.current;
    const plane = mobilePlaneRef.current;
    if (!section || !line || !plane) return;

    const ctx = gsap.context(() => {
      gsap.set(plane, { xPercent: -50, yPercent: -50 });
      gsap.to(plane, {
        motionPath: {
          path: line,
          align: line,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      gsap.fromTo(
        section.querySelectorAll("[data-mobile-city]"),
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div id="locations">
      {/* Desktop map — matches CRAV #map-desktop */}
      <section
        id="map-desktop"
        ref={desktopRef}
        className="relative hidden overflow-hidden bg-mustard max-md:hidden md:block"
      >
        <JellyDivider fill="#F5E3CD" variant="top" className="-mt-px" />

        <div
          ref={mapInnerRef}
          className="relative h-[163vw] w-full self-auto"
        >
          <div className="absolute top-0 left-0 h-full w-full">
            <svg
              className="h-full w-full"
              viewBox="0 0 1728 2176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                ref={pathRef}
                d={FLIGHT_PATH}
                stroke="#F4A804"
                strokeOpacity="0.5"
                strokeWidth="6"
                strokeDasharray="42 42"
                fill="none"
              />
            </svg>
          </div>

          <div
            ref={planeRef}
            className="pointer-events-none absolute top-0 left-0 z-[2] w-[15vw]"
            style={{
              backfaceVisibility: "hidden",
              transform: "translate3d(0,0,0)",
            }}
          >
            <Image
              src="/img/plane.png"
              alt="Plane"
              width={1000}
              height={1000}
              className="h-full w-full object-contain"
              draggable={false}
            />
          </div>

          <div className="relative z-10 mt-[8vw] ml-[4vw] w-[80vw]">
            <p className="font-modak -ml-[1vw] -translate-y-[2vw] -rotate-7 text-[2.8vw] leading-none uppercase text-mustard-dark text-stroke-180">
              take away
            </p>
            <PopHeading
              as="h2"
              className="heading300 w-[80vw] leading-[0.85] text-white text-stroke-180-mustard"
            >
              QUALITY THAT TRAVELS WITH YOU
            </PopHeading>
            <p className="text40 ml-[1vw] mt-[2vw] w-[30vw] font-mouse leading-[1.1] text-black">
              Freshly packed smash burgers, ready to go wherever you crave. From
              our flat-top to any corner of the globe, we ensure every layer
              stays hot and juicy.
            </p>
          </div>

          {CITIES.map((city) => (
            <div
              key={city.label}
              data-city-card
              className={city.containerClass}
            >
              <div className="h-[17vw] w-[14vw] overflow-hidden rounded-[1vw] shadow-xl">
                <Image
                  src={city.image}
                  alt={city.alt}
                  width={400}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
              <p
                className={`country-label font-modak text40 leading-[0.9] uppercase text-red text-stroke-small ${city.noteClass}`}
              >
                {city.label}?
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile map — matches CRAV #map-mobile */}
      <section
        id="map-mobile"
        ref={mobileRef}
        className="relative hidden overflow-hidden bg-mustard px-[4vw] pb-[20vw] max-md:block md:hidden"
      >
        <JellyDivider fill="#F5E3CD" variant="top" className="-mt-px" />

        <div className="relative z-10 mt-[10vw] space-y-[4vw]">
          <PopHeading
            as="h2"
            className="heading300 w-full text-center leading-[0.85] text-white text-stroke-180-mustard"
          >
            A story in every bite.
          </PopHeading>
          <p className="text40 mx-auto w-[85%] text-center font-mouse leading-[1.1] text-black">
            From fresh farms to your hands every layer matters.
          </p>
        </div>

        <div className="relative mt-[25vw] flex flex-col items-center gap-[50vw] pb-[10vw]">
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 flex h-[83%] w-[2vw] -translate-x-1/2 -translate-y-1/2 items-center">
            <svg
              width="6"
              height="100%"
              viewBox="0 0 6 1000"
              className="h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                ref={mobileLineRef}
                d="M3 0 L3 1000"
                stroke="#F4A804"
                strokeOpacity="0.7"
                strokeWidth="4"
                strokeDasharray="12 10"
              />
            </svg>
          </div>

          <div
            ref={mobilePlaneRef}
            className="pointer-events-none absolute top-0 left-1/2 z-[2] w-[18vw] -translate-x-1/2"
          >
            <Image
              src="/img/plane.png"
              alt="Plane"
              width={400}
              height={400}
              className="h-auto w-full object-contain"
              draggable={false}
            />
          </div>

          {CITIES.map((city) => (
            <div
              key={city.label}
              data-mobile-city
              className="relative z-10 flex w-full flex-col items-center"
            >
              <div className="w-[60vw] overflow-hidden rounded-[3vw] shadow-xl">
                <Image
                  src={city.image}
                  alt={city.alt}
                  width={600}
                  height={720}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="font-modak mt-[4vw] text-[12vw] leading-none uppercase text-red text-stroke-small">
                {city.label}
              </p>
              <p className="mt-[2vw] w-[80%] text-center font-mouse text-[5vw] leading-snug text-black">
                {city.blurb}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
