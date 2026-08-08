"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition text-sm font-medium ${
      pathname === path
        ? "text-brand-blue font-semibold"
        : "text-slate-600 hover:text-brand-blue"
    }`;

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm rounded-xl flex items-center px-6 py-2.5 pointer-events-auto max-w-5xl w-[95%] justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-brand-blue hover:scale-105 transition flex items-center gap-1 font-sans">
          <span>NS.</span>
        </Link>

        {/* Links (Centered) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/#hero" className={linkClass("/#hero")}>Home</Link>
          <Link href="/#stats" className={linkClass("/#stats")}>Overview</Link>
          <Link href="/#projects" className={linkClass("/#projects")}>Projects & Certs</Link>
          <Link href="/#contact" className={linkClass("/#contact")}>Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-slate-500 text-lg">
          <a href="https://github.com/Naveen4421" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-brand-blue transition hover:scale-105">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/naveen-s-44ns" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand-blue transition hover:scale-105">
            <FaLinkedin />
          </a>
          <a href="mailto:naveen.siddappa44@gmail.com" aria-label="Email" className="hover:text-brand-blue transition hover:scale-105">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </nav>
  );
}
