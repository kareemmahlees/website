"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="lg:space-y-96 mt-48">
        <About />
        <Tech />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
