"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus('sending');
    setTerminalLogs(["$ ./contact_agent.sh --send --payload=message"]);

    setTimeout(() => {
      setTerminalLogs(prev => [...prev, "$ initiating secure SMTP handshake..."]);
    }, 200);

    setTimeout(() => {
      setTerminalLogs(prev => [...prev, "$ compressing packet payload (size: 1.2KB)..."]);
    }, 450);

    setTimeout(() => {
      setTerminalLogs(prev => [...prev, "$ forwarding packet to mailer gateway..."]);
    }, 700);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Message from ${name}`,
          from_name: "Portfolio Contact Agent",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setTimeout(() => {
          setTerminalLogs(prev => [
            ...prev,
            "$ server_handshake: OK",
            "[SUCCESS] 200 OK - Message dispatched successfully!"
          ]);
          setStatus('success');
          setName("");
          setEmail("");
          setMessage("");
        }, 1000);
      } else {
        throw new Error(data.message || "Mailer API returned error status.");
      }
    } catch (error: any) {
      setTimeout(() => {
        setTerminalLogs(prev => [
          ...prev,
          `[ERROR] Connection failed: ${error.message || "Failed to submit form"}`,
          "$ Please configure Web3Forms key or contact directly at:",
          "  naveen.siddappa44@gmail.com"
        ]);
        setStatus('success');
      }, 1000);
    }
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

          {/* Right Column: Contact Form / Terminal Simulation */}
          <div className="w-full">
            {status !== 'idle' ? (
              <div className="p-6 border border-zinc-800/60 rounded-2xl bg-[#08080a]/90 backdrop-blur-md space-y-4 w-full h-[328px] font-mono text-xs text-gray-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2 mb-3">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
                    </div>
                    <span className="text-[10px] text-zinc-500">contact_agent.sh</span>
                  </div>
                  
                  <div className="space-y-2 text-left">
                    {terminalLogs.map((log, i) => (
                      <div 
                        key={i} 
                        className={
                          log.startsWith('[SUCCESS]') 
                            ? 'text-emerald-400 font-semibold' 
                            : log.startsWith('$') 
                              ? 'text-zinc-400' 
                              : 'text-cyan-400'
                        }
                      >
                        {log}
                      </div>
                    ))}
                    {status === 'sending' && (
                      <div className="flex items-center gap-1 text-cyan-400 animate-pulse">
                        <span>$ transmitting payload</span>
                        <span className="font-bold">...</span>
                      </div>
                    )}
                  </div>
                </div>

                {status === 'success' && (
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setTerminalLogs([]);
                    }}
                    className="w-full py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white rounded-lg text-xs font-mono transition cursor-pointer"
                  >
                    $ reset_agent --force
                  </button>
                )}
              </div>
            ) : (
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
            )}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Naveen S. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
