import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F4F6FB] bg-grid text-slate-700 relative font-sans">
      {/* Accessibility: Skip to Content link */}
      <a 
        href="#portfolio-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-[4px] focus:text-xs font-semibold shadow-md"
      >
        Skip to content
      </a>

      {/* Hero section */}
      <Hero />

      {/* Main scannable content targeted by Skip to Content link */}
      <div id="portfolio-content">
        {/* Stats metrics block */}
        <Stats />

        {/* Stacked list of Projects & Certifications */}
        <Projects />

        {/* Contact details & form block */}
        <Contact />
      </div>
    </div>
  );
}
