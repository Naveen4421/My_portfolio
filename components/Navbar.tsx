"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-emerald-400 font-semibold"
        : "text-gray-400 hover:text-white"
    }`;

  // Floating Navbar Styles
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="bg-black/80 backdrop-blur-md border border-zinc-800 shadow-xl rounded-2xl flex items-center px-4 py-2 pointer-events-auto max-w-7xl w-[95%] justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-emerald-400 mr-8 hover:scale-105 transition">
          NS.
        </Link>

        {/* Links (Centered) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/#about" className={linkClass("/#about")}>About</Link>
          <Link href="/#skills" className={linkClass("/#skills")}>Skills</Link>
          <Link href="/#projects" className={linkClass("/#projects")}>Projects</Link>
          <Link href="/#contact" className={linkClass("/#contact")}>Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
           {/* Icons */}
           <div className="flex gap-4 text-xl text-gray-400 pl-4">
             <a href="https://github.com/Naveen4421" target="_blank" aria-label="GitHub" className="hover:scale-110 transition hover:text-white">
               <FaGithub />
             </a>
             <a href="https://linkedin.com/in/naveen-s-44ns" target="_blank" aria-label="LinkedIn" className="hover:scale-110 transition hover:text-white">
               <FaLinkedin />
             </a>
             <a href="mailto:naveen.siddappa44@gmail.com" aria-label="Email" className="hover:scale-110 transition hover:text-white">
               <FaEnvelope />
             </a>
           </div>
        </div>

      </div>
    </nav>
  );
}

