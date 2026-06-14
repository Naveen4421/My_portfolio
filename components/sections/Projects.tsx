import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built using Next.js, React, and Tailwind CSS. Deployed on Vercel with automatic CI/CD pipelines.",
      tags: ["Next.js", "Tailwind", "Vercel"],
      link: "https://my-portfolio-vert-eight-15.vercel.app/",
      github: "https://github.com/Naveen4421/My_portfolio"
    },
    {
      title: "Flight Price Predictor",
      description: "Machine learning project using RandomForest to predict flight prices based on historical data.",
      tags: ["Python", "ML", "Flask"],
      link: "#",
      github: "https://github.com/Naveen4421/Flight-Price-Predictor"
    },
    {
      title: "CI/CD Pipeline",
      description: "Automated build and deployment pipeline using Docker, Jenkins, Kubernetes, and GitHub.",
      tags: ["DevOps", "Jenkins", "K8s"],
      link: "#",
      github: "https://github.com/Naveen4421/loginapp.git"
    },
    {
      title: "DSA Tracker",
      description: "Next.js application for tracking DSA problems. Deployed on Vercel with CI/CD via GitHub Actions.",
      tags: ["Next.js", "Vercel", "GitHub Actions"],
      link: "https://dsa-nine-blue.vercel.app/",
      github: "https://github.com/Naveen4421/DSA.git"
    }
  ];

  return (
    <section id="projects" className="min-h-screen snap-start flex flex-col justify-center items-center p-6 bg-grid bg-[#030303] text-white relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-6xl w-full z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">Featured Projects</h2>

        {/* Pipeline Container */}
        <div className="relative">
          {/* Horizontal Line connecting nodes on Large screens */}
          <div className="absolute left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 top-0 hidden lg:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Node circle on Large screens */}
                <div className="w-5 h-5 rounded-full bg-cyan-400 border-4 border-zinc-950 shadow-[0_0_10px_rgba(34,211,238,0.8)] mb-6 hidden lg:block z-20 hover:scale-125 transition-transform duration-200" />
                
                {/* Vertical connector line on Large screens */}
                <div className="w-[2px] h-6 bg-gradient-to-b from-cyan-400 to-zinc-800 -mt-6 mb-4 hidden lg:block" />

                {/* Project Card */}
                <div className="group p-6 border border-zinc-800 rounded-2xl bg-[#08080a]/80 backdrop-blur-md hover:bg-[#0a0a0c] hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300 flex flex-col h-[280px] w-full">
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors text-white truncate">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors hover:underline"
                      >
                        <FaGithub className="text-sm" /> Code
                      </a>
                      {project.link !== "#" && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors hover:underline"
                        >
                          <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
