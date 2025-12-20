"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-black dark:text-white font-semibold"
        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center px-10 py-6 text-lg">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-black dark:text-white">
          NS.
        </Link>

        {/* Links */}
        <div className="flex gap-10">
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/experiences" className={linkClass("/experiences")}>
            Experiences
          </Link>
          <Link href="/skills" className={linkClass("/skills")}>
            Skills
          </Link>
          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

