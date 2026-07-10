"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Button from "@/components/Button";
import { useCart } from "@/context/CartContext";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/menu", label: "Burgers" },
  { href: "/spices", label: "Our Spices" },
  { href: "/#locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { count, openCart } = useCart();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 z-[999] flex w-full items-center justify-between px-4 py-3 transition-colors duration-300 md:px-8 md:py-4",
          scrolled || open ? "bg-beige/90 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <Link
          href="/"
          className="font-modak text-[clamp(2rem,5vw,3.5rem)] leading-none text-red"
        >
          Capitolium
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mouse text-lg uppercase tracking-wide text-black transition-colors hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {pathname === "/menu" && (
            <button
              type="button"
              onClick={openCart}
              className="relative hidden rounded-full bg-black px-4 py-2 font-mouse text-sm uppercase text-white md:inline-flex"
            >
              Cart
              {count > 0 && (
                <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-red text-xs">
                  {count}
                </span>
              )}
            </button>
          )}
          <Button href="/menu" className="hidden !h-11 !px-5 !text-base sm:inline-flex">
            Order Now
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="font-mouse text-xl uppercase lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        data-lenis-prevent
        className={clsx(
          "fixed inset-0 z-[998] flex flex-col bg-beige px-6 pt-28 transition-all duration-500 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-1 flex-col gap-2 overflow-y-auto pb-10">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="font-mouse text-[14vw] leading-[0.9] uppercase text-black"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/menu" className="mt-6 w-fit" onClick={() => setOpen(false)}>
            Order Now
          </Button>
        </nav>
      </div>
    </>
  );
}
