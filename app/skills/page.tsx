export default function SkillsPage() {
  const skillGroups = [
    {
      title: "Cloud & Containerization",
      skills: ["AWS", "Linux", "Docker", "Kubernetes", "Shell Scripting (Bash)"],
    },
    {
      title: "CI/CD & GitOps",
      skills: ["Jenkins", "GitHub Actions", "Git / GitHub", "GitLab CI"],
    },
    {
      title: "Infrastructure as Code (IaC)",
      skills: ["Terraform", "Ansible"],
    },
    {
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "Falco", "ELK Stack"],
    },
    {
      title: "Languages & Frameworks",
      skills: ["Python", "Go", "TypeScript", "Node.js", "Next.js", "React"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
  ];

  return (
    <section className="min-h-screen px-6 pt-32 pb-20 bg-grid bg-[#030303] text-white relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-5xl mx-auto z-10 relative">

        <h1 className="text-4xl font-bold mb-16 text-center text-white">
          Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border border-zinc-800 bg-[#08080a]/80 backdrop-blur-md rounded-2xl p-6 hover:border-zinc-700 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {group.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-zinc-900 border border-zinc-800 text-gray-300 hover:border-zinc-700 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

