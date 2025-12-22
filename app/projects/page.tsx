export default function Projects() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-20 bg-zinc-50 dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-16">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">
              Portfolio Website
            </h2>
            <p className="text-lg mt-2 text-gray-600 dark:text-gray-400">
              Built using Next.js, React, and Tailwind CSS.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">
              Flight Price Predictor
            </h2>
            <p className="text-lg mt-2 text-gray-600 dark:text-gray-400">
              Machine learning project using RandomForest.
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-6 border rounded-xl hover:shadow-lg transition md:col-span-2">
            <h2 className="text-2xl font-semibold">
              CI/CD Pipeline for Full-Stack Application
            </h2>
            <p className="text-lg mt-2 text-gray-600 dark:text-gray-400">
              Automated CI/CD pipeline using Docker, Jenkins, and Kubernetes to
              build, test, and deploy a full-stack web application.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

