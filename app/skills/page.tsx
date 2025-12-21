export default function SkillsPage() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["C", "C++", "Python","Java", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Linux",
        "Docker",
        "Kubernetes",
        "Git",
        "GitHub Actions",
        "Jenkins",
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
  ];

  return (
    <section className="min-h-screen px-6 pt-32 pb-20 bg-zinc-50 dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-16 text-center">
          Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {group.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium 
                               bg-black text-white 
                               dark:bg-white dark:text-black"
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

