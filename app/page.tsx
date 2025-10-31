import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Social } from "@/components/sections/Social";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/3d/ParticlesBackground";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
