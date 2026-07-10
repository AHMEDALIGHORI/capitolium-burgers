import type { Metadata } from "next";
import SpicesPage from "@/components/spices/SpicesPage";

export const metadata: Metadata = {
  title: "Our Spices & Ingredients",
  description: "Simple things done right — from farm to bite at Capitolium.",
};

export default function Page() {
  return <SpicesPage />;
}
