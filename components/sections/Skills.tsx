import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaJenkins } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiMysql, SiKubernetes, SiPostgresql } from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
        { name: "Jenkins", icon: <FaJenkins className="text-red-600" /> },
        { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git / GitHub", icon: <FaGitAlt className="text-orange-600" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen snap-start flex flex-col justify-center items-center p-6 bg-gradient-to-br from-cyan-100 via-sky-100 to-blue-100 dark:from-cyan-950/40 dark:via-sky-950/40 dark:to-blue-950/40 backdrop-blur-sm">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">Technical Proficiency</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl bg-glass dark:bg-glassDark hover:bg-white dark:hover:bg-black/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-200 dark:border-gray-700 pb-2">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
