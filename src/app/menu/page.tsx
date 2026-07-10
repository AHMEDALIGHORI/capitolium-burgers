import type { Metadata } from "next";
import MenuPage from "@/components/menu/MenuPage";

export const metadata: Metadata = {
  title: "Artisan Burger Menu",
  description: "Our Finest Burger Picks — smash craft from Capitolium.",
};

export default function Page() {
  return <MenuPage />;
}
