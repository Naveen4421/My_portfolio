"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="min-h-screen snap-start flex flex-col justify-start items-center pt-20 pb-6 px-6 bg-grid bg-[#030303] text-white relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-6xl w-full z-10 px-4 md:px-8">
        {/* Category Tag */}
        <div className="text-center mb-2">
          <span className="text-xs font-mono tracking-widest text-cyan-400 font-semibold uppercase">// Contact</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center text-white">Let&apos;s Work Together</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-6">
          {/* Left Column: Info & Social Cards */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Let&apos;s build infrastructure that doesn&apos;t sleep.
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                Available for leadership roles, consulting, and technical collaborations across IST, CET/CEST, and global time zones. Open to international travel.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <a 
                href="mailto:naveen.siddappa44@gmail.com"
                className="flex items-center gap-4 p-4 border border-zinc-800/60 rounded-xl bg-[#08080a]/80 hover:bg-[#0c0c0f] hover:border-zinc-700/60 transition duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-xl text-cyan-400 group-hover:text-cyan-300 transition">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Email</div>
                  <div className="text-xs text-zinc-500 mt-0.5 group-hover:text-cyan-400 transition truncate">naveen.siddappa44@gmail.com</div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://linkedin.com/in/naveen-s-44ns"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-zinc-800/60 rounded-xl bg-[#08080a]/80 hover:bg-[#0c0c0f] hover:border-zinc-700/60 transition duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-xl text-cyan-400 group-hover:text-cyan-300 transition">
                  <FaLinkedin />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">LinkedIn</div>
                  <div className="text-xs text-zinc-500 mt-0.5 group-hover:text-cyan-400 transition">Connect with me</div>
                </div>
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/Naveen4421"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-zinc-800/60 rounded-xl bg-[#08080a]/80 hover:bg-[#0c0c0f] hover:border-zinc-700/60 transition duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-xl text-cyan-400 group-hover:text-cyan-300 transition">
                  <FaGithub />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">GitHub</div>
                  <div className="text-xs text-zinc-500 mt-0.5 group-hover:text-cyan-400 transition">github.com/Naveen4421</div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/916360760312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-zinc-800/60 rounded-xl bg-[#08080a]/80 hover:bg-[#0c0c0f] hover:border-zinc-700/60 transition duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-xl text-cyan-400 group-hover:text-cyan-300 transition">
                  <FaWhatsapp />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">WhatsApp</div>
                  <div className="text-xs text-zinc-500 mt-0.5 group-hover:text-cyan-400 transition">+91 6360760312</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="p-6 border border-zinc-800/60 rounded-2xl bg-[#08080a]/90 backdrop-blur-md space-y-4 w-full"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-[#0c0c0f] border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-[#0c0c0f] border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={3}
                placeholder="Tell me about the role or project..."
                className="w-full px-4 py-3 bg-[#0c0c0f] border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-cyan-400 text-black hover:bg-cyan-300 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition hover:scale-[1.01] shadow-[0_0_20px_rgba(34,211,238,0.25)] cursor-pointer"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
        
        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Naveen S. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
