"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEye, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Kubernetes Expert (10+ Clusters)",
    "CI/CD Pipeline Architect",
    "Cloud Automation Engineer",
    "Site Reliability Specialist"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      if (isDeleting) {
        setText(fullWord.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullWord.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="min-h-screen snap-start flex flex-col md:flex-row justify-center items-center p-6 md:p-16 gap-12 relative overflow-hidden bg-grid">
      {/* Background Gradient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center max-w-xl z-10">
        <div className="flex items-center gap-2 border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase self-start animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Open to Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 leading-[0.95] text-white animate-slide-up">
          Naveen <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
            S
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-lg leading-relaxed font-light animate-slide-up [animation-delay:200ms]">
          I build infrastructure that doesn&apos;t break — and scale systems that shouldn&apos;t slow down.
        </p>

        <div className="mt-6 border border-emerald-500/20 text-emerald-400 bg-emerald-500/5 px-4 py-2 rounded-lg font-mono text-sm inline-flex items-center gap-1 self-start animate-slide-up [animation-delay:400ms]">
          <span>{text}</span>
          <span className="w-1.5 h-4 bg-emerald-400 animate-blink" />
        </div>

        <div className="mt-8 flex flex-wrap gap-4 animate-slide-up [animation-delay:600ms]">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-cyan-400 text-black hover:bg-cyan-300 rounded-lg text-sm font-semibold flex items-center gap-2 transition hover:scale-105 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            <FaPaperPlane /> Get In Touch
          </a>
          <Link
            href="/resume"
            className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition hover:scale-105"
          >
            <FaEye /> View Resume
          </Link>
          <a
            href="#projects"
            className="px-5 py-2.5 bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg text-sm font-medium flex items-center gap-2 transition hover:scale-105"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Right Terminal Card */}
      <div className="flex-1 flex justify-center items-center w-full max-w-md z-10 animate-slide-up [animation-delay:400ms]">
        <div className="border border-zinc-800 bg-[#08080a]/90 backdrop-blur-md p-6 rounded-2xl w-full shadow-2xl font-mono text-sm text-gray-300 relative group transition hover:border-zinc-700">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-zinc-500">naveen@infra ~</span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-emerald-400 font-bold">$ </span>
              <span className="text-zinc-100">whoami</span>
              <div className="text-cyan-400 mt-1">DevOps & Cloud Engineer</div>
            </div>

            <div>
              <span className="text-emerald-400 font-bold">$ </span>
              <span className="text-zinc-100">cat stats.yml</span>
              <div className="pl-4 mt-1 space-y-1 text-zinc-400">
                <div>
                  <span className="text-zinc-500">experience:</span>{" "}
                  <span className="text-cyan-400">fresher</span>
                </div>
                <div>
                  <span className="text-zinc-500">clusters:</span>{" "}
                  <span className="text-cyan-400">10+ Kubernetes</span>
                </div>
                <div>
                  <span className="text-zinc-500">uptime:</span>{" "}
                  <span className="text-cyan-400">99.99%</span>
                </div>
                <div>
                  <span className="text-zinc-500">cost_saved:</span>{" "}
                  <span className="text-cyan-400">$30K</span>
                </div>
                <div>
                  <span className="text-zinc-500">pipelines:</span>{" "}
                  <span className="text-cyan-400">4+ Automated</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-emerald-400 font-bold">$ </span>
              <span className="text-zinc-100">echo $STATUS</span>
              <div className="text-emerald-400 mt-1">
                open_to_opportunities: true
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
