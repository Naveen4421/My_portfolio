import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-20 bg-grid bg-[#030303] text-white relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-5xl mx-auto z-10 relative">

        <h1 className="text-5xl font-bold mb-6 text-white">
          Contact Me
        </h1>

        <p className="mb-16 text-lg text-gray-400">
          Feel free to reach out for collaborations, internships, or opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-10 text-lg">

            <div className="flex items-start gap-4">
              <FiMail size={26} className="text-cyan-400" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href="mailto:naveen.siddappa44@gmail.com"
                  className="text-cyan-400 hover:underline"
                >
                  naveen.siddappa44@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaLinkedin size={26} className="text-cyan-400" />
              <div>
                <p className="font-semibold text-white">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/naveen-s-44ns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  linkedin.com/in/naveen-s-44ns
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaGithub size={26} className="text-cyan-400" />
              <div>
                <p className="font-semibold text-white">GitHub</p>
                <a
                  href="https://github.com/Naveen4421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  github.com/Naveen4421
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt size={26} className="text-cyan-400" />
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-gray-400">India</p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-zinc-800 bg-[#08080a] p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-zinc-800 bg-[#08080a] p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-zinc-800 bg-[#08080a] p-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />

              <button
                type="submit"
                className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-[1.01] transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

