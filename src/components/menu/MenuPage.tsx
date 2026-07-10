"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";
import CartDrawer from "@/components/menu/CartDrawer";
import FooterCTA from "@/components/FooterCTA";
import { MENU_ITEMS } from "@/lib/data";
import { useCart } from "@/context/CartContext";

gsap.registerPlugin(ScrollTrigger);

export default function MenuPage() {
  const { addItem, openCart, count } = useCart();
  const [toast, setToast] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-menu-title]",
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
      );
      gsap.fromTo(
        "[data-menu-card]",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-menu-grid]",
            start: "top 80%",
          },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="bg-beige">
      <section className="relative overflow-hidden px-6 pt-32 pb-16 md:px-10 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="font-modak text-[6vw] leading-none text-mustard-dark uppercase md:text-[2.5vw]">
              The best
            </p>
            <h1
              data-menu-title
              className="heading180 text-stroke-180-menu mt-2 text-red"
            >
              Eat like you mean it
            </h1>
          </div>
          <div className="relative mx-auto w-[80%] max-w-lg">
            <Image
              src="/img-webp/smoky-burger.webp"
              alt="menu hero"
              width={800}
              height={800}
              priority
              className="h-auto w-full object-contain drop-shadow-xl"
            />
            <Image
              src="/img-webp/smile.png"
              alt=""
              width={120}
              height={120}
              className="absolute -top-4 -right-2 w-[18vw] max-w-[100px] rotate-12"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-4">
          <h2 className="heading300 text-stroke-small text-red md:text-[5vw]">
            Our Finest Burger Picks
          </h2>
          <button
            type="button"
            onClick={openCart}
            className="shrink-0 rounded-full bg-black px-5 py-2 font-mouse text-sm uppercase text-white md:text-base"
          >
            Cart{count > 0 ? ` (${count})` : ""}
          </button>
        </div>

        <div
          data-menu-grid
          className="mx-auto mt-12 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MENU_ITEMS.map((item) => (
            <article
              key={item.id}
              data-menu-card
              className="flex flex-col rounded-[2rem] bg-white/40 p-5 shadow-sm"
            >
              <div className="relative mx-auto aspect-square w-full max-w-[260px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width:768px) 80vw, 260px"
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 font-mouse text-2xl uppercase leading-tight">
                {item.name}
              </h3>
              <p className="mt-1 font-modak text-3xl text-red">${item.price}</p>
              <div className="mt-4 space-y-1 font-mouse text-sm uppercase tracking-wide text-black/70">
                <p className="text-black">Quick details</p>
                <p>{item.cookTime}</p>
                <p>
                  Calories: {item.calories} · Protein: {item.protein}
                </p>
                <p>
                  Bun {item.bun} · Patty {item.patty} · Spice {item.spice}
                </p>
              </div>
              <Button
                className="mt-6 w-full !rounded-2xl"
                onClick={() => {
                  addItem(item);
                  setToast("Added to Cart");
                  window.setTimeout(() => setToast(null), 1600);
                }}
              >
                Add to cart
              </Button>
            </article>
          ))}
        </div>
      </section>

      <FooterCTA />
      <CartDrawer />

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[9400] -translate-x-1/2 rounded-full bg-black px-6 py-3 font-mouse text-lg uppercase text-white shadow-xl">
          {toast}
        </div>
      )}
    </div>
  );
}
