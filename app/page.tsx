import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Dock } from "@/components/Dock";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Work />
      <Journey />
      <Contact />
      <Dock />
    </main>
  );
}
