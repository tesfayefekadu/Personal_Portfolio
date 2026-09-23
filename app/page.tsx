import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import TechStack from "@/components/tech-stack";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Services />
      <TechStack />
      <About />
      <Contact />
    </main>
  );
}