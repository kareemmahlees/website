import About from "@/components/About";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";

export default function Home() {
  return (
    <main className="lg:space-y-80">
      <Hero />
      <About />
      <Tech />
    </main>
  );
}
