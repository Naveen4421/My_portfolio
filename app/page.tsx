import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden z-0 scroll-smooth md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll">
      <div className="md:snap-start">
        <Hero />
      </div>
      <div className="md:snap-start">
        <About />
      </div>
      <div className="md:snap-start">
        <Skills />
      </div>
      <div className="md:snap-start">
        <Projects />
      </div>
      <div className="md:snap-start">
        <Contact />
      </div>
    </div>
  );
}

