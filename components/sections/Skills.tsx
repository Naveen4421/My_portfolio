import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaJenkins, FaTerminal } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiMysql, SiKubernetes, SiPostgresql, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiGithubactions, SiLinux } from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Cloud & Orchestration",
      skills: [
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "AWS", icon: <FaAws className="text-orange-500" /> },
        { name: "Linux / Shell", icon: <SiLinux className="text-black dark:text-white" /> },
      ]
    },
    {
      title: "CI/CD & GitOps",
      skills: [
        { name: "Jenkins", icon: <FaJenkins className="text-red-600" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-600" /> },
        { name: "Git / GitHub", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Ansible", icon: <SiAnsible className="text-red-500" /> },
      ]
    },
    {
      title: "IaC & Observability",
      skills: [
        { name: "Terraform", icon: <SiTerraform className="text-purple-600" /> },
        { name: "Prometheus", icon: <SiPrometheus className="text-orange-600" /> },
        { name: "Grafana", icon: <SiGrafana className="text-yellow-600" /> },
      ]
    },
    {
      title: "Development & DBs",
      skills: [
        { name: "TypeScript / Node.js", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Next.js / React", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "PostgreSQL / MySQL", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen snap-start flex flex-col justify-center items-center p-6 bg-grid bg-[#030303] text-white relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-6xl w-full z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Technical Proficiency</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 border border-zinc-800 rounded-2xl bg-[#08080a]/80 backdrop-blur-md hover:bg-[#0a0a0c] hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-6 text-center border-b border-zinc-800 pb-2 text-white">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-gray-300">{skill.name}</span>
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
