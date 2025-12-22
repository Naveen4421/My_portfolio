import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen snap-start flex flex-col justify-center items-center p-6 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 dark:from-amber-950/40 dark:via-orange-950/40 dark:to-red-950/40 backdrop-blur-sm">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          I&apos;m currently looking for new opportunities in Full-Stack Development and DevOps. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <a
          href="mailto:naveen.siddappa@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full text-lg font-medium hover:scale-105 transition shadow-lg hover:shadow-xl mb-12"
        >
          <FaEnvelope />
          Say Hello
        </a>

        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="https://github.com/Naveen4421"
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/naveen-s-44ns"
            target="_blank"
            className="text-gray-600 dark:text-gray-400 hover:text-[#0077b5] transition hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          {/* Add more social icons if needed */}
        </div>

        <footer className="mt-24 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Naveen. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
