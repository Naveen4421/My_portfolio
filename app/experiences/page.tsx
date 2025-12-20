export default function ExperiencePage() {
  return (
    <section className="pt-28 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Experience</h1>

      <div className="space-y-8">

        {/* Experience Card */}
        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold">
            Full-Stack Developer Intern
          </h2>
          <p className="text-gray-500 mt-1">
            Self-Driven Projects · 2024 – Present
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Built responsive full-stack applications using React & Next.js</li>
            <li>Designed REST APIs using Node.js and Express</li>
            <li>Implemented CI/CD pipelines using Docker & Jenkins</li>
            <li>Deployed applications on cloud platforms with GitHub Actions</li>
          </ul>
        </div>

        {/* Add more experiences later */}

      </div>
    </section>
  );
}
