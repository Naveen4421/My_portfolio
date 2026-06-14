"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaPrint, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen bg-grid bg-[#030303] text-white py-10 px-4 print:p-0 print:bg-white print:text-black relative overflow-hidden">
      {/* Controls - Hidden in Print */}
      <div className="max-w-[21cm] mx-auto mb-6 flex justify-between items-center print:hidden">
        <Link 
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <FaArrowLeft /> Back to Portfolio
        </Link>
        
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition"
        >
          <FaPrint /> Print / Save as PDF
        </button>
      </div>

      {/* A4 Paper Container */}
      <div className="max-w-[21cm] mx-auto bg-white text-black shadow-2xl overflow-hidden print:shadow-none print:max-w-none print:w-full">
        {/* Header */}
        <header className="bg-slate-900 text-white p-8 print:bg-slate-900 print:text-white print:print-color-adjust-exact">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2">NAVEEN S</h1>
              <p className="text-xl text-blue-200 font-light">Full-Stack & DevOps Engineer</p>
            </div>
            <div className="text-right text-sm space-y-1 text-gray-300">
              <div className="flex items-center justify-end gap-2">
                <span>Tumakuru, Karnataka, India</span>
                <FaMapMarkerAlt />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>+91 6360760312</span>
                <FaPhone />
              </div>
              <div className="flex items-center justify-end gap-2">
                <a href="mailto:naveen.siddappa44@gmail.com" className="hover:text-white">naveen.siddappa44@gmail.com</a>
                <FaEnvelope />
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-start gap-6 text-sm">
             <a href="https://linkedin.com/in/naveen-s-44ns" target="_blank" className="flex items-center gap-2 hover:text-blue-300">
                <FaLinkedin /> linkedin.com/in/naveen-s-44ns
             </a>
             <a href="https://github.com/Naveen4421" target="_blank" className="flex items-center gap-2 hover:text-blue-300">
                <FaGithub /> github.com/Naveen4421
             </a>
          </div>
        </header>

        <div className="p-8 space-y-6">
          {/* Summary */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-3 uppercase tracking-wider">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Passionate about automation and data analytics, seeking a DevOps Engineer role to apply my knowledge of cloud computing, CI/CD pipelines, containerization, and automation tools to drive efficient software delivery and continuous improvement.
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-3 uppercase tracking-wider">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="flex bg-gray-50 p-2 rounded print:bg-transparent">
                  <span className="font-bold w-32 text-slate-800">Languages:</span>
                  <span className="text-gray-700">Python, C, HTML, CSS, JavaScript/TypeScript</span>
              </div>
              <div className="flex bg-gray-50 p-2 rounded print:bg-transparent">
                  <span className="font-bold w-32 text-slate-800">Frameworks:</span>
                  <span className="text-gray-700">React, Next.js, Node.js</span>
              </div>
              <div className="flex bg-gray-50 p-2 rounded print:bg-transparent">
                  <span className="font-bold w-32 text-slate-800">DevOps & Cloud:</span>
                  <span className="text-gray-700">Docker, Kubernetes, Jenkins, AWS</span>
              </div>
              <div className="flex bg-gray-50 p-2 rounded print:bg-transparent">
                  <span className="font-bold w-32 text-slate-800">Tools:</span>
                  <span className="text-gray-700">Git, GitHub, VS Code, Power BI</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
             <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-3 uppercase tracking-wider">Projects</h2>
             
             <div className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base text-slate-800">CI/CD Pipeline for Full-Stack App</h3>
                    <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded">Docker, Jenkins, K8s</span>
                </div>
                <p className="text-sm text-gray-700 leading-snug">
                    Implemented a complete DevOps pipeline for a full-stack web application, automating the process from code integration to deployment and monitoring. Ensured faster, more reliable, and scalable software delivery with real-time system visibility and alerts.
                </p>
             </div>

             <div>
                <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base text-slate-800">Drug Detection Using ML</h3>
                    <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded">Python, ML</span>
                </div>
                <p className="text-sm text-gray-700 leading-snug">
                    Developed a model to classify and detect drug types based on chemical properties using supervised learning algorithms. Implemented data preprocessing and feature extraction, achieving improved detection accuracy through model tuning.
                </p>
             </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-3 uppercase tracking-wider">Education</h2>
            <div className="flex justify-between items-start">
               <div>
                  <h3 className="font-bold text-base text-slate-800">Bachelor of Engineering (B.E.)</h3>
                  <p className="text-sm text-gray-600">Artificial Intelligence & Data Science</p>
                  <p className="text-sm text-gray-500 italic">Shridevi Institute of Engineering and Technology, Tumkur</p>
               </div>
               <div className="text-right">
                  <p className="text-sm font-bold text-slate-800">Expected 2027</p>
                  <p className="text-sm text-slate-600 font-medium">CGPA: 8.5</p>
               </div>
            </div>
          </section>

           {/* Additional Info */}
           <section>
            <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-3 uppercase tracking-wider">Additional Information</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li><span className="font-bold text-slate-800">Languages:</span> English, Kannada, Hindi</li>
                <li><span className="font-bold text-slate-800">Certifications:</span> Programming Fundamentals in Python (Infosys Springboard)</li>
                <li><span className="font-bold text-slate-800">Internship:</span> Web Development (2 months) at Outrix</li>
                <li><span className="font-bold text-slate-800">Soft Skills:</span> Quick Learner, Time Management, Team Player</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
