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
    <section id="contact" className="w-full py-16 max-w-5xl mx-auto px-6 relative bg-transparent">
      
      <div className="w-full z-10 border-t border-slate-200/60 pt-16">
        {/* Section label */}
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-4 block">
          Get in Touch
        </span>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-left text-neutral-heading font-sans">
          Let&apos;s Work Together
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info & Social Cards */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-4 text-neutral-heading">
                Build reliable cloud infrastructure together.
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm font-sans">
                Available for Cloud and DevOps internships, junior roles, and technical collaborations. Let&apos;s automate your workflows and optimize your scaling challenges.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Email Card */}
              <a 
                href="mailto:naveen.siddappa44@gmail.com"
                className="flex items-center gap-4 p-4 border border-slate-200/80 rounded-lg bg-white hover:bg-slate-50 hover:border-slate-300 transition duration-150 group"
              >
                <div className="w-10 h-10 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-lg text-brand-blue group-hover:scale-105 transition">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Email</div>
                  <div className="text-xs text-slate-500 mt-0.5 group-hover:text-brand-blue transition truncate font-mono">naveen.siddappa44@gmail.com</div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://linkedin.com/in/naveen-s-44ns"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-200/80 rounded-lg bg-white hover:bg-slate-50 hover:border-slate-300 transition duration-150 group"
              >
                <div className="w-10 h-10 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-lg text-brand-blue group-hover:scale-105 transition">
                  <FaLinkedin />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">LinkedIn</div>
                  <div className="text-xs text-slate-500 mt-0.5 group-hover:text-brand-blue transition">Connect on LinkedIn</div>
                </div>
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/Naveen4421"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-200/80 rounded-lg bg-white hover:bg-slate-50 hover:border-slate-300 transition duration-150 group"
              >
                <div className="w-10 h-10 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-lg text-brand-blue group-hover:scale-105 transition">
                  <FaGithub />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">GitHub</div>
                  <div className="text-xs text-slate-500 mt-0.5 group-hover:text-brand-blue transition font-mono">github.com/Naveen4421</div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/916360760312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-200/80 rounded-lg bg-white hover:bg-slate-50 hover:border-slate-300 transition duration-150 group"
              >
                <div className="w-10 h-10 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-lg text-brand-blue group-hover:scale-105 transition">
                  <FaWhatsapp />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">WhatsApp</div>
                  <div className="text-xs text-slate-500 mt-0.5 group-hover:text-brand-blue transition font-mono">+91 6360760312</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form / Terminal Simulation */}
          <div className="w-full">
            {status !== 'idle' ? (
              <div className="p-6 border border-slate-800 rounded-lg bg-slate-900 shadow-sm w-full h-[328px] font-mono text-xs text-gray-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/85" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/85" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/85 animate-pulse" />
                    </div>
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">contact_agent.sh</span>
                  </div>
                  
                  <div className="space-y-2 text-left">
                    {terminalLogs.map((log, i) => (
                      <div 
                        key={i} 
                        className={
                          log.startsWith('[SUCCESS]') 
                            ? 'text-emerald-400 font-bold' 
                            : log.startsWith('$') 
                              ? 'text-slate-400' 
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
                    className="w-full py-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white rounded text-xs font-mono transition cursor-pointer"
                  >
                    $ reset_agent --force
                  </button>
                )}
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="p-6 border border-slate-200/80 rounded-lg bg-white space-y-4 w-full"
              >
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-[4px] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-[4px] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the role or project..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-[4px] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-brand-blue text-white hover:bg-blue-700 rounded-[4px] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FaPaperPlane className="text-[10px]" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-slate-400 border-t border-slate-200/40 pt-8">
          <p>© {new Date().getFullYear()} Naveen S &bull; DevOps Cloud Engineer Portfolio</p>
        </footer>
      </div>
    </section>
  );
}
