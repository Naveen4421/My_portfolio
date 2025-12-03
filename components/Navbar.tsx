"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-6 text-lg shadow bg-white">
      <Link href="/" className="font-bold text-2xl">
        NS.
      </Link>

      <div className="flex gap-10">
        <Link href="/about">About</Link>
        <Link href="/experiences">Experiences</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
