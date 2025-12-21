import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-20 bg-zinc-50 dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          Contact Me
        </h1>

        <p className="mb-16 text-lg text-gray-600 dark:text-gray-400">
          Feel free to reach out for collaborations, internships, or opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-10 text-lg">

            <div className="flex items-start gap-4">
              <FiMail size={26} />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:naveen.siddappa44@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  naveen.siddappa44@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaLinkedin size={26} />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/naveen-s-44ns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  linkedin.com/in/naveen-s-44ns
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaGithub size={26} />
              <div>
                <p className="font-semibold">GitHub</p>
                <a
                  href="https://github.com/Naveen4421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  github.com/Naveen4421
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt size={26} />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-600 dark:text-gray-400">India</p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 dark:border-gray-700 bg-transparent p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 dark:border-gray-700 bg-transparent p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 dark:border-gray-700 bg-transparent p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />

              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-medium hover:opacity-90 transition"
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

