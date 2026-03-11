import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Problem } from "@/components/Problem";
import { Architecture } from "@/components/Architecture";
import { Capabilities } from "@/components/Capabilities";
import { Results } from "@/components/Results";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <Architecture />
      <Capabilities />
      <Results />
      <Team />
      <Footer />
    </main>
  );
}
