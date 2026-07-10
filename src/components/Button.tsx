"use client";

import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit";
};

export default function Button({
  href,
  onClick,
  children,
  className,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const base = clsx(
    "group relative inline-flex h-[3.2rem] items-center justify-center overflow-hidden rounded-full px-8 font-mouse text-lg uppercase tracking-wide transition-transform duration-300 hover:scale-105 md:h-[3.6rem] md:text-xl",
    variant === "primary" && "bg-red text-white",
    variant === "secondary" && "bg-mustard text-black",
    variant === "outline" && "border-2 border-black bg-transparent text-black",
    className,
  );

  const inner = (
    <span className="relative block h-[1.2em] overflow-hidden leading-none">
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={base} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={base} onClick={onClick}>
      {inner}
    </button>
  );
}
