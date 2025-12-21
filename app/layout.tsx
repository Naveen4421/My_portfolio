import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen | Full-Stack & DevOps Engineer",
  description:
    "Naveen – Full-Stack & DevOps Engineer skilled in React, Next.js, Docker, Kubernetes, CI/CD, and Cloud. Open to internships and entry-level roles.",

  keywords: [
    "Naveen Portfolio",
    "Full Stack Developer",
    "DevOps Engineer",
    "React Developer",
    "Next.js Portfolio",
    "Docker Kubernetes",
    "CI/CD Engineer",
    "DevOps Intern",
  ],

  authors: [{ name: "Naveen" }],

  openGraph: {
    title: "Naveen | Full-Stack & DevOps Engineer",
    description:
      "Portfolio of Naveen – Full-Stack & DevOps Engineer (React, Docker, Kubernetes, CI/CD).",
    url: "https://my-portfolio-vert-eight-15.vercel.app/",
    siteName: "Naveen Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naveen Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Naveen | Full-Stack & DevOps Engineer",
    description:
      "Full-Stack & DevOps Engineer skilled in React, Docker, Kubernetes, CI/CD.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="px-6 md:px-16 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}

