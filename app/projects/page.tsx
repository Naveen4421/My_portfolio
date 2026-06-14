export default function Projects() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-20 bg-grid bg-[#030303] text-white relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-5xl mx-auto z-10 relative">

        <h1 className="text-5xl font-bold mb-16 text-white">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="p-6 border border-zinc-800 bg-[#08080a]/80 backdrop-blur-md rounded-xl hover:border-zinc-700 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-white">
              Portfolio Website
            </h2>
            <p className="text-lg mt-2 text-gray-300">
              Built using Next.js, React, and Tailwind CSS.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-6 border border-zinc-800 bg-[#08080a]/80 backdrop-blur-md rounded-xl hover:border-zinc-700 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-white">
              Flight Price Predictor
            </h2>
            <p className="text-lg mt-2 text-gray-300">
              Machine learning project using RandomForest.
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-6 border border-zinc-800 bg-[#08080a]/80 backdrop-blur-md rounded-xl hover:border-zinc-700 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-white">
              CI/CD Pipeline
            </h2>
            <p className="text-lg mt-2 text-gray-300">
              Automated build and deployment pipeline using Docker, Jenkins, Kubernetes, and GitHub for a full-stack application.
            </p>
          </div>

          {/* Project 4 */}
          <div className="p-6 border border-zinc-800 bg-[#08080a]/80 backdrop-blur-md rounded-xl hover:border-zinc-700 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-white">
              DSA Tracker
            </h2>
            <p className="text-lg mt-2 text-gray-300">
              Next.js-bootstrapped web application for tracking DSA problems. Deployed on Vercel with GitHub Actions for CI/CD and automated test cases.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

