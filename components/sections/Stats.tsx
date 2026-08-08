"use client";

import { FaServer, FaAward, FaShieldAlt, FaTerminal } from "react-icons/fa";

export default function Stats() {
  const statsItems = [
    {
      icon: <FaServer className="text-brand-blue" />,
      number: "12+",
      label: "Infra Deployments",
      subtext: "Kubernetes clusters, multi-tier VPCs, and serverless stacks.",
    },
    {
      icon: <FaAward className="text-brand-blue" />,
      number: "3+",
      label: "Cloud Certifications",
      subtext: "AWS Solutions Architect, CKA, and Terraform Associate credentials.",
    },
    {
      icon: <FaShieldAlt className="text-brand-blue" />,
      number: "15+",
      label: "Security & Cloud Badges",
      subtext: "Securing landing zones and optimizing cloud environments.",
    },
    {
      icon: <FaTerminal className="text-brand-blue" />,
      number: "99.99%",
      label: "Uptime & Automation Vibe",
      subtext: "Automated pipelines, GitOps controls, and IaC deployment.",
    },
  ];

  return (
    <section id="stats" className="w-full py-12 max-w-5xl mx-auto px-6">
      <div className="border-t border-slate-200/60 pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-8">
          Technical Metrics & Proof Points
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-lg p-6 flex flex-col justify-between transition-all hover:border-slate-300"
            >
              <div>
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center mb-4 text-base">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-neutral-heading mb-1 font-sans">
                  {item.number}
                </div>
                <div className="text-sm font-semibold text-slate-800 mb-2">
                  {item.label}
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
