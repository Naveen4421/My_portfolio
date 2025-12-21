"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-black dark:text-white font-semibold"
        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-black dark:text-white">
          NS.
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/experiences" className={linkClass("/experiences")}>Experience</Link>
          <Link href="/skills" className={linkClass("/skills")}>Skills</Link>
          <Link href="/projects" className={linkClass("/projects")}>Projects</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex gap-5 text-xl text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/Naveen4421"
            target="_blank"
            aria-label="GitHub"
            className="hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/naveen-s-44ns"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:naveen.siddappa@gmail.com"
            aria-label="Email"
            className="hover:scale-110 transition"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </nav>
  );
}

