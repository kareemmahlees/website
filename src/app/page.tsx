"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import Meteors from "@/components/ui/meteors/meteors";
import Star from "@/components/ui/stars/stars";

export default function Home() {
  return (
    <main>
      <Star />
      <Meteors />
      <Hero />
      <Star position="absolute" />
      <div className="lg:space-y-96 mt-48">
        <Star position="absolute" />
        <About />
        <Star position="absolute" />
        <Tech />
        <Star position="absolute" />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
