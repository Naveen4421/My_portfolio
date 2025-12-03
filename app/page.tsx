export default function Home() {
  return (
    <div className="min-h-screen px-6 py-20 bg-zinc-50 dark:bg-black text-black dark:text-white">
      {/* HEADER */}
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Naveen 👋</h1>
        <p className="text-xl mt-4 text-gray-600 dark:text-gray-400">
          Full-Stack Developer | DevOps Enthusiast | Cloud & CI/CD
        </p>
      </header>

      {/* SECTIONS */}
      <section className="max-w-4xl mx-auto space-y-20">

        {/* ABOUT */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I am a passionate developer skilled in building full-stack applications  
            and implementing modern DevOps automation using Docker, Jenkins,  
            Kubernetes, and cloud deployments.
          </p>
        </div>

        {/* SKILLS */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            <li>React / Next.js</li>
            <li>Node.js</li>
            <li>MongoDB / MySQL</li>
            <li>Docker</li>
            <li>Jenkins</li>
            <li>Kubernetes</li>
          </ul>
        </div>

        {/* PROJECTS */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="p-6 border rounded-lg shadow">
              <h3 className="text-xl font-semibold">Portfolio Website</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Built using Next.js, React and Tailwind CSS.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow">
              <h3 className="text-xl font-semibold">Flight Price Predictor</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Machine learning project using RandomForest.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow">
              <h3 className="text-xl font-semibold">
                CI/CD Pipeline for Full-Stack App
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Automated build & deploy pipeline using Docker, Jenkins,  
                Kubernetes & GitHub.
              </p>
            </div>

          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-lg">
            Email:{" "}
            <a href="mailto:naveen@example.com" className="text-blue-500 underline">
              naveen@example.com
            </a>
          </p>
        </div>

      </section>
    </div>
  );
}

