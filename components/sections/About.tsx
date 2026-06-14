import { FaReact, FaNodeJs, FaDocker, FaAws, FaCode } from "react-icons/fa";
export default function About() {
  return (
    <section id="about" className="min-h-screen snap-start flex flex-col justify-center items-center p-6 bg-grid bg-[#030303] text-white relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center z-10">
        {/* Text Content */}
        <div className="space-y-5 text-base md:text-lg text-gray-300 leading-relaxed font-light">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
          <p>
            I am a dedicated <span className="font-semibold text-white">DevOps & Cloud Engineer</span> based in India. My passion lies in designing resilient infrastructure, streamlining deployment workflows, and accelerating product delivery through reliable automation.
          </p>
          <p>
            Currently, I focus on container orchestration, Infrastructure as Code (IaC), GitOps, and robust observability pipelines. I thrive in environments that challenge me to optimize systems for scalability, security, and cost-efficiency.
          </p>
        </div>

        {/* Floating SVGs */}
        <div className="relative h-[300px] w-full flex items-center justify-center">
           {/* React */}
           <div className="absolute top-10 left-10 text-6xl text-blue-400 animate-float opacity-80 hover:opacity-100 hover:scale-110 transition">
             <FaReact />
           </div>
           
           {/* Node */}
           <div className="absolute top-20 right-20 text-6xl text-green-500 animate-float-delayed opacity-80 hover:opacity-100 hover:scale-110 transition">
             <FaNodeJs />
           </div>

           {/* Docker */}
           <div className="absolute bottom-20 left-20 text-6xl text-blue-600 animate-float-slow opacity-80 hover:opacity-100 hover:scale-110 transition">
             <FaDocker />
           </div>

           {/* AWS */}
           <div className="absolute bottom-10 right-10 text-6xl text-orange-500 animate-float opacity-80 hover:opacity-100 hover:scale-110 transition">
             <FaAws />
           </div>

           {/* Database / Generic Code */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-zinc-700 animate-pulse opacity-40">
             <FaCode />
           </div>
        </div>
      </div>
    </section>
  );
}
