import Hero from "@/components/home/Hero";
import Classic from "@/components/home/Classic";
import Experience from "@/components/home/Experience";
import Travel from "@/components/home/Travel";
import About from "@/components/home/About";
import FooterCTA from "@/components/FooterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Classic />
      <Experience />
      <Travel />
      <About />
      <FooterCTA />
    </>
  );
}
