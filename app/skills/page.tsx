const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-4 py-2 bg-black text-white rounded-full mr-3 mb-3 inline-block">
    {children}
  </span>
);

export default function Skills() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">My Skills</h1>

      <h2 className="text-2xl font-semibold mb-4">Languages</h2>
      <div className="mb-8">
        <Tag>C</Tag>
        <Tag>C++</Tag>
        <Tag>Java</Tag>
        <Tag>JavaScript</Tag>
        <Tag>TypeScript</Tag>
        <Tag>SQL</Tag>
        <Tag>HTML</Tag>
        <Tag>CSS</Tag>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h2>
      <div className="mb-8">
        <Tag>React</Tag>
        <Tag>Next.js</Tag>
        <Tag>Node.js</Tag>
        <Tag>Tailwind</Tag>
        <Tag>Redux</Tag>
        <Tag>Express</Tag>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Tools</h2>
      <div>
        <Tag>Linux</Tag>
        <Tag>Docker</Tag>
        <Tag>Kubernetes</Tag>
        <Tag>GitHub</Tag>
        <Tag>GitHub Actions</Tag>
      </div>
    </div>
  );
}

