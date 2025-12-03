export default function Projects() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Project 1 */}
        <div className="p-6 border rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Portfolio Website</h2>
          <p className="text-lg mt-2 text-gray-600">
            Built using Next.js, React and Tailwind CSS.
          </p>
        </div>

        {/* Project 2 */}
        <div className="p-6 border rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Flight Price Predictor</h2>
          <p className="text-lg mt-2 text-gray-600">
            Machine learning project using RandomForest.
          </p>
        </div>

        {/* ✅ New Project 3 */}
        <div className="p-6 border rounded-lg shadow">
          <h2 className="text-2xl font-semibold">
            CI/CD Pipeline for Full-Stack Application
          </h2>
          <p className="text-lg mt-2 text-gray-600">
            Automated CI/CD pipeline using Docker, Jenkins, and Kubernetes to
            build, test and deploy a full-stack web application.
          </p>
        </div>

      </div>
    </div>
  );
}
