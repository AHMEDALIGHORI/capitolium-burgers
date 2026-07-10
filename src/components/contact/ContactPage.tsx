"use client";

import { FormEvent, useState } from "react";
import FooterCTA from "@/components/FooterCTA";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-beige">
      <section className="mx-auto max-w-5xl px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-24">
        <Reveal>
          <p className="font-modak text-center text-[7vw] leading-none text-mustard-dark uppercase md:text-[2.5vw]">
            SAY HELLO
          </p>
          <h2 className="heading180 text-stroke-180 mt-4 text-center text-red">
            GOT A CRAVING? LET&apos;S TALK
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <input
                type="email"
                name="email"
                required
                placeholder="YOUR BEST EMAIL"
                className="w-full rounded-2xl border-2 border-black/15 bg-white/60 px-5 py-4 font-mouse text-lg uppercase outline-none placeholder:text-black/35 focus:border-red"
              />
              <textarea
                name="message"
                required
                rows={6}
                placeholder="TELL US YOUR CRAVING..."
                className="w-full resize-none rounded-2xl border-2 border-black/15 bg-white/60 px-5 py-4 font-mouse text-lg uppercase outline-none placeholder:text-black/35 focus:border-red"
              />
              <Button type="submit" className="w-fit">
                SEND CRAVING
              </Button>
              {sent && (
                <p className="font-mouse text-lg text-red" aria-live="polite">
                  Craving received — we&apos;ll be in touch.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-mustard p-8 md:p-10">
              <p className="font-mouse text-sm uppercase tracking-[0.2em] text-burgundy">
                Notice
              </p>
              <h3 className="font-modak mt-2 text-4xl leading-none text-burgundy uppercase md:text-5xl">
                Concept Website
              </h3>
              <p className="mt-5 font-mouse text-lg leading-snug text-black">
                This is a concept website created by Anyflow Agency. If you are
                looking for brand design and development like this, you can
                reach out to us at anyflowagency@gmail.com
              </p>
              <p className="mt-8 font-mouse text-sm uppercase tracking-wide text-black/60">
                Designed & Developed By Anyflow
              </p>
              <p className="mt-2 font-mouse text-base text-black/80">
                Rebranded craft demo as Capitolium.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
