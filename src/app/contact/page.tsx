import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Got a craving? Let's talk — Capitolium.",
};

export default function Page() {
  return <ContactPage />;
}
