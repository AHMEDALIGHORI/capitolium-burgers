import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AnimationProvider } from "@/context/AnimationContext";
import { LenisProvider } from "@/context/LenisContext";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import CookieBar from "@/components/CookieBar";

const modak = localFont({
  src: "../../public/fonts/modak.woff2",
  variable: "--font-modak",
  display: "swap",
  weight: "400",
});

const mouseMemoirs = localFont({
  src: "../../public/fonts/mouse-memoirs.woff2",
  variable: "--font-mouse-memoirs",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Capitolium | Artisan Smashed Burgers",
    template: "%s | Capitolium",
  },
  description:
    "Smashed patties · toasted buns · artisan craft burgers since 1997.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${modak.variable} ${mouseMemoirs.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-beige font-mouse text-black">
        <LenisProvider>
          <AnimationProvider>
            <CartProvider>
              <SmoothScroll>
                <Loader />
                <Navbar />
                <main className="min-h-dvh">{children}</main>
                <CookieBar />
              </SmoothScroll>
            </CartProvider>
          </AnimationProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
