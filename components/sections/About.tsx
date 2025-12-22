import { FaReact, FaNodeJs, FaDocker, FaAws, FaCode } from "react-icons/fa";
export default function About() {
  return (
    <section id="about" className="min-h-screen snap-start flex flex-col justify-center items-center p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-950/40 dark:via-purple-950/40 dark:to-pink-950/40 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">About Me</h2>
          <p>
            I am a dedicated <span className="font-semibold text-foreground">Full-Stack & DevOps Engineer</span> based in India. My passion lies in bridging the gap between development and operations to deliver seamless, high-performance web applications.
          </p>
          <p>
            Currently, I focus on building automations for deployment workflows and optimizing cloud infrastructure. I thrive in environments that challenge me to solve complex architectural problems.
          </p>
        </div>

        {/* Floating SVGs */}
        <div className="relative h-[400px] w-full flex items-center justify-center">
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
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-gray-400 dark:text-gray-600 animate-pulse opacity-50">
             <FaCode />
           </div>
        </div>
      </div>
    </section>
  );
}
