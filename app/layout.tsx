import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen | DevOps & Cloud Engineer Portfolio",
  description:
    "Portfolio of Naveen – DevOps & Cloud Engineer skilled in AWS Landing Zones, Kubernetes orchestration, automated CI/CD pipelines, and serverless architectures.",

  keywords: [
    "Naveen Portfolio",
    "DevOps Engineer",
    "Cloud Engineer",
    "Kubernetes Specialist",
    "AWS Architect",
    "Terraform IaC",
    "CI/CD Engineer",
  ],

  authors: [{ name: "Naveen" }],

  openGraph: {
    title: "Naveen | DevOps & Cloud Engineer Portfolio",
    description:
      "Portfolio of Naveen – DevOps & Cloud Engineer (AWS, Kubernetes, Terraform, CI/CD).",
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
    title: "Naveen | DevOps & Cloud Engineer Portfolio",
    description:
      "DevOps & Cloud Engineer skilled in AWS, Kubernetes, Terraform, CI/CD.",
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
        className={`${poppins.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
