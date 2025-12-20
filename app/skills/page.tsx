const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-4 py-2 border rounded-full text-sm mr-3 mb-3 inline-block
    hover:bg-white hover:text-black transition">
    {children}
  </span>
);

export default function Skills() {
  return (
    <section className="pt-28 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-14 text-center">My Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Languages */}
        <div className="border rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-6">Languages</h2>
          <div className="flex flex-wrap">
            <Tag>C</Tag>
            <Tag>C++</Tag>
            <Tag>Python</Tag>
            <Tag>Java</Tag>
            <Tag>JavaScript</Tag>
            <Tag>TypeScript</Tag>
            <Tag>SQL</Tag>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
          </div>
        </div>

        {/* Frameworks */}
        <div className="border rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-6">
            Frameworks & Libraries
          </h2>
          <div className="flex flex-wrap">
            <Tag>React</Tag>
            <Tag>Next.js</Tag>
            <Tag>Node.js</Tag>
            <Tag>Tailwind</Tag>
            <Tag>Redux</Tag>
            <Tag>Express</Tag>
          </div>
        </div>

        {/* Tools */}
        <div className="border rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-6">Tools</h2>
          <div className="flex flex-wrap">
            <Tag>Linux</Tag>
            <Tag>Docker</Tag>
            <Tag>Kubernetes</Tag>
            <Tag>GitHub</Tag>
            <Tag>GitHub Actions</Tag>
          </div>
        </div>

      </div>
    </section>
  );
}

