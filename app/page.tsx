export default function Home() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-20 bg-zinc-50 dark:bg-black text-black dark:text-white">
      {/* HEADER */}
      <header className="mb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I&apos;m Naveen 👋
        </h1>

        <p className="text-xl mt-4 text-gray-600 dark:text-gray-400">
          Full-Stack & DevOps Engineer
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          I build scalable web applications and automate CI/CD pipelines
          using Docker, Jenkins, Kubernetes, and cloud technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </header>

      {/* SECTIONS */}
      <section className="max-w-4xl mx-auto space-y-20">
        {/* ABOUT */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a passionate Full-Stack & DevOps developer focused on building
            production-ready web applications. I enjoy automating deployments,
            designing CI/CD pipelines, and working with containerized and
            cloud-native systems.
          </p>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Currently seeking entry-level or junior roles in Full-Stack
            Development or DevOps Engineering.
          </p>
        </div>

        {/* SKILLS */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            {[
              "React / Next.js",
              "Node.js",
              "MongoDB / MySQL",
              "Docker",
              "Jenkins",
              "Kubernetes",
            ].map((skill) => (
              <li
                key={skill}
                className="border rounded-lg px-4 py-2 text-center hover:scale-105 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* PROJECTS */}
        <div id="projects">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Portfolio Website</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Built using Next.js, React, and Tailwind CSS. Deployed on Vercel
                with automatic CI/CD.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Flight Price Predictor</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Machine learning project using RandomForest to predict flight
                prices.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">
                CI/CD Pipeline for Full-Stack App
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Automated build and deployment pipeline using Docker, Jenkins,
                Kubernetes, and GitHub.
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>

          <p className="text-lg">
            📧{" "}
            <a
              href="mailto:naveen.siddappa44@gmail.com"
              className="text-blue-500 underline"
            >
              naveen.siddappa@gmail.com
            </a>
          </p>

          <p className="text-lg mt-2">
            💻{" "}
            <a
              href="https://github.com/Naveen4421"
              className="text-blue-500 underline"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com/in/naveen-s-44ns"
              className="text-blue-500 underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

