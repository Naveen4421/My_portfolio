import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import Cat from "../Cat";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen snap-start flex flex-col justify-center items-center text-center p-6 relative overflow-hidden backdrop-blur-sm">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />

      <h1 className="text-6xl md:text-8xl font-bold dark:text-white text-gray-900 animate-slide-up">
        Hi, I&apos;m Naveen
      </h1>

      <p className="text-2xl md:text-3xl mt-6 text-gray-600 dark:text-gray-300 font-light animate-slide-up [animation-delay:200ms]">
        Full-Stack & DevOps Engineer
      </p>

      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-400 animate-slide-up [animation-delay:400ms]">
        Building scalable web applications and automating CI/CD pipelines with robust cloud-native technologies.
      </p>

      <div className="mt-20 flex flex-col md:flex-row gap-6 animate-slide-up [animation-delay:600ms] relative items-center">
        {/* Sleeping Cat */}
        <div className="absolute -top-[45px] left-[calc(50%+87px)] -translate-x-1/2 md:ml-0 md:transform-none md:-top-[44px] md:left-[109px] lg:left-[calc(50%-14px)] z-10 scale-75 origin-bottom pointer-events-none">
           <Cat />
        </div>

        <a
          href="#projects"
          className="w-full md:w-auto px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition shadow-lg hover:shadow-xl text-center"
        >
          View Projects
        </a>

        <a
          href="/resume"
          target="_blank"
          className="w-full md:w-auto px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 group transition-all duration-300
            bg-white/30 dark:bg-white/10 backdrop-blur-md border border-gray-300/50 dark:border-white/20 shadow-lg
            hover:scale-105 hover:bg-white/50 dark:hover:bg-white/20 hover:shadow-xl hover:border-gray-400/50 dark:hover:border-white/40
            text-gray-900 dark:text-white"
        >
          <span>Resume</span>
          <FaFileDownload className="group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <span className="text-sm text-gray-400">Scroll Down</span>
      </div>
    </section>
  );
}
