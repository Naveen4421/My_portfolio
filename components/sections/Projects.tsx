import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built using Next.js, React, and Tailwind CSS. Deployed on Vercel with automatic CI/CD pipelines for seamless updates.",
      tags: ["Next.js", "Tailwind", "Vercel"],
      link: "#",
      github: "https://github.com/Naveen4421"
    },
    {
      title: "Flight Price Predictor",
      description: "Machine learning project using RandomForest to predict flight prices with high accuracy based on historical data.",
      tags: ["Python", "ML", "Flask"],
      link: "#",
      github: "https://github.com/Naveen4421"
    },
    {
      title: "CI/CD Pipeline",
      description: "Automated build and deployment pipeline using Docker, Jenkins, Kubernetes, and GitHub for a full-stack application.",
      tags: ["DevOps", "Jenkins", "K8s"],
      link: "#",
      github: "https://github.com/Naveen4421"
    }
  ];

  return (
    <section id="projects" className="min-h-screen snap-start flex flex-col justify-center items-center p-6 bg-gradient-to-br from-emerald-100 via-teal-100 to-green-100 dark:from-emerald-950/40 dark:via-teal-950/40 dark:to-green-950/40 backdrop-blur-sm">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-glass dark:bg-glassDark hover:bg-white dark:hover:bg-black transition-all duration-300 hover:shadow-2xl flex flex-col h-full"
            >
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  className="flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  <FaGithub className="text-lg" /> Code
                </a>
                {project.link !== "#" && (
                   <a 
                   href={project.link} 
                   target="_blank" 
                   className="flex items-center gap-2 text-sm font-medium hover:underline"
                 >
                   <FaExternalLinkAlt className="text-sm" /> Live Demo
                 </a>
                )}
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
