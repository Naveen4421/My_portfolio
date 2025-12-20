export default function ExperiencePage() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-20 bg-zinc-50 dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-20 text-center">
          Experience
        </h1>

        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-6 pl-10 space-y-16">

          {/* Experience 1 */}
          <div className="relative">
            <span className="absolute -left-[22px] top-2 w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black"></span>

            <h2 className="text-2xl font-semibold">
              Full-Stack & DevOps Intern (Self-Driven)
            </h2>
            <p className="text-gray-500 mt-1">2024 – Present</p>

            <ul className="mt-4 list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Built full-stack applications using React, Next.js, and Node.js</li>
              <li>Designed REST APIs and integrated MongoDB & MySQL</li>
              <li>Created CI/CD pipelines using Docker, Jenkins, and GitHub Actions</li>
              <li>Deployed containerized apps using Kubernetes</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="relative">
            <span className="absolute -left-[22px] top-2 w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black"></span>

            <h2 className="text-2xl font-semibold">
              DevOps & Cloud Training
            </h2>
            <p className="text-gray-500 mt-1">Academic & Self Learning</p>

            <ul className="mt-4 list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Hands-on practice with Linux, Docker, Kubernetes</li>
              <li>Built CI/CD workflows for real-world applications</li>
              <li>Worked with cloud-native deployment concepts</li>
            </ul>
          </div>

          {/* Experience 3 */}
          <div className="relative">
            <span className="absolute -left-[22px] top-2 w-4 h-4 bg-black dark:bg-white rounded-full border-2 border-white dark:border-black"></span>

            <h2 className="text-2xl font-semibold">
              Academic Projects
            </h2>
            <p className="text-gray-500 mt-1">Bachelor’s in AI & DS</p>

            <ul className="mt-4 list-disc ml-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Flight Price Prediction using Machine Learning</li>
              <li>Portfolio Website using Next.js & Tailwind</li>
              <li>Full-Stack apps with authentication & APIs</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

