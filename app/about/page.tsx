export default function About() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-20 bg-grid bg-[#030303] text-white relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <section className="max-w-4xl mx-auto space-y-20 z-10 relative">

        {/* INTRO */}
        <div>
          <h1 className="text-5xl font-bold mb-6 text-white">About Me</h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate DevOps & Cloud Engineer focused on designing, building, and maintaining reliable infrastructure at scale. My focus lies in Infrastructure as Code (IaC), GitOps, setting up robust observability pipelines, container orchestration, and automating CI/CD workflows for seamless deployments.
          </p>

          <p className="mt-4 text-lg text-gray-400">
            Currently seeking entry-level or junior roles in DevOps Engineering, Site Reliability Engineering (SRE), or Cloud Infrastructure Engineering.
          </p>

          {/* Resume buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="/resume/Naveen_Resume.pdf"
              target="_blank"
              className="px-6 py-3 bg-cyan-400 text-black hover:bg-cyan-300 rounded-lg font-semibold shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-105 transition"
            >
              View Resume
            </a>

            <a
              href="/resume/Naveen_Resume.pdf"
              download
              className="px-6 py-3 border border-zinc-800 rounded-lg text-white hover:bg-zinc-900 transition hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* SKILLS */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-white">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            {[
              "Docker / Kubernetes",
              "Terraform / Ansible",
              "Jenkins / GitHub Actions",
              "AWS / Linux / Bash",
              "Prometheus / Grafana",
              "Node.js / React / Next.js",
            ].map((skill) => (
              <li
                key={skill}
                className="border border-zinc-800 bg-[#08080a]/50 text-gray-300 rounded-lg px-4 py-2 text-center hover:scale-105 hover:border-zinc-700 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-white">Contact</h2>

          <p className="text-lg text-gray-300">
            📧{" "}
            <a
              href="mailto:naveen.siddappa44@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              naveen.siddappa44@gmail.com
            </a>
          </p>

          <p className="text-lg mt-2 text-gray-300">
            💻{" "}
            <a
              href="https://github.com/Naveen4421"
              className="text-cyan-400 hover:underline"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com/in/naveen-s-44ns"
              className="text-cyan-400 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>

      </section>
    </div>
  );
}

