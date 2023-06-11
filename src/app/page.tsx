"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  return (
    <main>
      <Hero />
      <div className="lg:space-y-96 mt-48">
        <About />
        <Tech />
        <Projects />
      </div>
    </main>
  );
}
