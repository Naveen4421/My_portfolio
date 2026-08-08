"use client";

import { FaGithub, FaExternalLinkAlt, FaAward, FaBookOpen } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "AWS Multi-Region Landing Zone",
      description: "Deployed a secure, multi-account AWS environment using Terraform landing zone blueprints. Configured Transit Gateway routing, AWS Organizations SCPs, IAM Identity Center, and centralized cloudwatch logging.",
      tags: ["AWS", "Terraform", "Security"],
      github: "https://github.com/Naveen4421/My_portfolio",
      article: "https://gitreverse.com/designs/adityacprtm-dev", // Mock link
      // Inline SVG thumbnail representing Transit Gateway and VPC networks
      thumbnail: (
        <svg viewBox="0 0 120 80" className="w-full h-full max-h-24 text-brand-blue/80 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="10" y="25" width="20" height="30" rx="3" fill="#E2E8F0" />
          <rect x="90" y="25" width="20" height="30" rx="3" fill="#E2E8F0" />
          <circle cx="60" cy="40" r="14" strokeDasharray="3 3" />
          <path d="M 30 40 L 46 40 M 74 40 L 90 40 M 60 26 L 60 10 M 60 54 L 60 70" strokeLinecap="round" />
          <text x="20" y="44" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="#47484C" stroke="none">VPC</text>
          <text x="100" y="44" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="#47484C" stroke="none">VPC</text>
          <text x="60" y="43" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="#1A40D8" stroke="none" fontWeight="bold">TGW</text>
        </svg>
      )
    },
    {
      title: "Kubernetes GitOps Cluster",
      description: "Designed a production-ready EKS cluster with GitOps continuous delivery via ArgoCD. Automated secrets injection, cert-manager SSL renewals, external-dns mappings, and Prometheus monitoring.",
      tags: ["Kubernetes", "ArgoCD", "Helm"],
      github: "https://github.com/Naveen4421/DSA.git",
      link: "https://dsa-nine-blue.vercel.app/",
      // Inline SVG representing K8s nodes and ArgoCD syncing
      thumbnail: (
        <svg viewBox="0 0 120 80" className="w-full h-full max-h-24 text-brand-blue/80 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="60" cy="40" r="12" fill="#E2E8F0" />
          <circle cx="30" cy="20" r="8" />
          <circle cx="30" cy="60" r="8" />
          <circle cx="90" cy="20" r="8" />
          <circle cx="90" cy="60" r="8" />
          <path d="M 60 28 L 38 20 M 60 52 L 38 60 M 60 28 L 82 20 M 60 52 L 82 60" />
          <text x="60" y="43" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="#1A40D8" stroke="none" fontWeight="bold">K8s</text>
          <text x="30" y="23" fontSize="6" fontFamily="monospace" textAnchor="middle" fill="#47484C" stroke="none">Pod</text>
          <text x="30" y="63" fontSize="6" fontFamily="monospace" textAnchor="middle" fill="#47484C" stroke="none">Pod</text>
          <text x="90" y="23" fontSize="6" fontFamily="monospace" textAnchor="middle" fill="#47484C" stroke="none">Pod</text>
          <text x="90" y="63" fontSize="6" fontFamily="monospace" textAnchor="middle" fill="#47484C" stroke="none">Pod</text>
        </svg>
      )
    },
    {
      title: "Automated Jenkins Pipeline",
      description: "Implemented a declarative Jenkins pipeline integrating static code checks (SonarQube), dependency security scanning (Trivy), Docker build controls, and automated deployment hooks.",
      tags: ["Jenkins", "Docker", "CI/CD"],
      github: "https://github.com/Naveen4421/loginapp.git",
      article: "https://gitreverse.com/designs/adityacprtm-dev", // Mock link
      // Inline SVG representing sequential pipelines stages
      thumbnail: (
        <svg viewBox="0 0 120 80" className="w-full h-full max-h-24 text-brand-blue/80 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="10" y="30" width="22" height="20" rx="2" fill="#E2E8F0" />
          <rect x="49" y="30" width="22" height="20" rx="2" fill="#E2E8F0" />
          <rect x="88" y="30" width="22" height="20" rx="2" fill="#E2E8F0" />
          <path d="M 32 40 L 49 40 M 71 40 L 88 40" strokeLinecap="round" markerEnd="url(#arrow)" />
          <text x="21" y="42" fontSize="7" fontFamily="monospace" textAnchor="middle" fill="#47484C" stroke="none">Build</text>
          <text x="60" y="42" fontSize="7" fontFamily="monospace" textAnchor="middle" fill="#47484C" stroke="none">Test</text>
          <text x="99" y="42" fontSize="7" fontFamily="monospace" textAnchor="middle" fill="#1A40D8" stroke="none" fontWeight="bold">Deploy</text>
        </svg>
      )
    },
    {
      title: "Serverless Event API Engine",
      description: "Constructed a low-cost, serverless database analytics ingestion API on AWS. Built with Lambda event routing, API Gateway endpoints, DynamoDB tables, and Cloudwatch billing alarms.",
      tags: ["Serverless", "AWS Lambda", "NoSQL"],
      github: "https://github.com/Naveen4421/My_portfolio",
      link: "https://my-portfolio-vert-eight-15.vercel.app/",
      // Inline SVG representing Serverless Lambda structure
      thumbnail: (
        <svg viewBox="0 0 120 80" className="w-full h-full max-h-24 text-brand-blue/80 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 20 40 L 45 40 M 75 40 L 100 40" strokeLinecap="round" />
          <path d="M 60 20 L 60 30 M 60 50 L 60 60" />
          <polygon points="60,25 75,40 60,55 45,40" fill="#E2E8F0" stroke="currentColor" />
          <circle cx="20" cy="40" r="4" />
          <circle cx="100" cy="40" r="4" />
          <text x="60" y="43" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="#1A40D8" stroke="none" fontWeight="bold">API</text>
          <text x="20" y="52" fontSize="6" fontFamily="monospace" textAnchor="middle" fill="#47484C" stroke="none">Client</text>
          <text x="100" y="52" fontSize="6" fontFamily="monospace" textAnchor="middle" fill="#47484C" stroke="none">DB</text>
        </svg>
      )
    }
  ];

  const certifications = [
    {
      title: "AWS Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "Dec 2025",
      id: "AWS-ASA-4421",
      verify: "https://aws.amazon.com/verification",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "CNCF / Linux Foundation",
      date: "Feb 2026",
      id: "CKA-99884",
      verify: "https://www.credly.com",
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "Jan 2026",
      id: "HC-T-9821",
      verify: "https://www.credly.com",
    }
  ];

  return (
    <section id="projects" className="w-full py-12 max-w-5xl mx-auto px-6">
      
      {/* PROJECTS SUBSECTION */}
      <div className="mb-20">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-8">
          Featured Engineering Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 rounded-lg p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Thumbnail Container */}
                <div className="w-full h-32 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center mb-6 overflow-hidden">
                  {project.thumbnail}
                </div>

                <h3 className="text-lg font-bold text-neutral-heading mb-2 leading-tight">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tag list */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono font-bold px-2 py-0.5 bg-slate-100 border border-slate-200/40 rounded text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold border-t border-slate-100 pt-4">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:underline inline-flex items-center gap-1"
                    >
                      <FaExternalLinkAlt className="text-[10px]" /> View Project
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-brand-blue inline-flex items-center gap-1 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.article && (
                    <a 
                      href={project.article} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-brand-blue inline-flex items-center gap-1 hover:underline"
                    >
                      <FaBookOpen className="text-[10px]" /> Article
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS SUBSECTION */}
      <div id="certifications">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-8">
          Technical Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-brand-blue">
                  <FaAward className="text-lg" />
                </div>

                <h3 className="text-sm font-bold text-neutral-heading mb-1 leading-tight font-sans">
                  {cert.title}
                </h3>
                
                <div className="text-[11px] text-slate-500 font-semibold mb-3">
                  {cert.issuer} &bull; {cert.date}
                </div>
                
                <div className="text-[10px] font-mono text-slate-400 bg-slate-50 border border-slate-100 rounded px-2 py-0.5 inline-block mb-4">
                  ID: {cert.id}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3 flex items-center gap-4 text-xs font-semibold">
                <a 
                  href={cert.verify} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
