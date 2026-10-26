import { useEffect } from "react";
import Hero from "./_components/hero.tsx";
import Services from "./_components/services.tsx";
import Projects from "./_components/projects.tsx";
import { About, Process } from "./_components/about-process.tsx";
import Testimonials from "./_components/testimonials.tsx";
import Contact from "./_components/contact.tsx";

export default function Index() {
  useEffect(() => {
    document.title = "Nova Digital | Web Design, Development & Branding Agency";
  }, []);
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
