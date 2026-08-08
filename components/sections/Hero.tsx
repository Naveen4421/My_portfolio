"use client";

import { FaFileDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative bg-transparent">
      {/* Left content block */}
      <div className="flex-1 flex flex-col justify-center text-left">
        <div className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
          Naveen S &bull; DevOps & Cloud Engineer
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-heading mb-6 leading-tight font-sans">
          DevOps Cloud Engineer Portfolio
        </h1>

        <p className="text-sm md:text-base text-slate-600 mb-8 max-w-2xl leading-relaxed font-sans">
          I build high-availability, automated, and secure cloud infrastructure. Specializing in container orchestration with **Kubernetes**, enterprise-grade **AWS Landing Zones**, automated **CI/CD pipelines**, and cost-efficient **serverless architectures**. Backed by clean Infrastructure as Code (IaC) principles.
        </p>

        {/* Action button CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/resume/Naveen_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white hover:bg-blue-700 rounded-[4px] text-xs md:text-sm font-semibold transition-colors duration-150 cursor-pointer"
          >
            <FaFileDownload className="text-xs" /> Download CV
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-brand-blue text-brand-blue hover:bg-slate-50 rounded-[4px] text-xs md:text-sm font-semibold transition-colors duration-150 cursor-pointer"
          >
            View Projects & Certifications
          </a>
        </div>

        {/* Monospace signature detail */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-mono font-bold bg-slate-100 border border-slate-200 rounded px-2.5 py-1 text-slate-600">
            npx naveen-infra
          </span>
          <span className="text-xs text-slate-500">
            &bull; Run in your local terminal to see interactive summary
          </span>
        </div>
      </div>
      
      {/* Right Content block (Infrastructure-as-Code Spec card mockup) */}
      <div className="flex-1 hidden md:flex justify-end items-center">
        <div className="w-full max-w-[380px] border border-slate-200/80 rounded-lg p-6 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.01)] font-mono text-[11px] text-slate-600">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <span className="text-slate-400 font-bold text-[9px] uppercase tracking-wider">AWS landing-zone config</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">Active State</span>
            </div>
          </div>
          <div className="space-y-2 text-left">
            <div><span className="text-brand-blue">provider</span> &quot;aws&quot; &#123; region = &quot;us-east-1&quot; &#125;</div>
            <div className="text-slate-400 mt-1 pl-2"># Set up secure hub and spoke networks</div>
            <div>
              <span className="text-indigo-600">module</span> &quot;landing_zone&quot; &#123;
            </div>
            <div className="pl-4">source = &quot;aws-ia/landing-zone-accelerator/aws&quot;</div>
            <div className="pl-4">version = &quot;~&gt; 1.5.0&quot;</div>
            <div className="pl-4">enable_transit_gateway = <span className="text-amber-600">true</span></div>
            <div>&#125;</div>
            <div className="pt-1">
              <span className="text-indigo-600">module</span> &quot;k8s_clusters&quot; &#123;
            </div>
            <div className="pl-4">cluster_name = &quot;production-control-plane&quot;</div>
            <div className="pl-4">subnets      = module.landing_zone.private_subnets</div>
            <div>&#125;</div>
            <div className="border-t border-slate-100 pt-3 mt-4 text-[10px] text-slate-400 flex justify-between">
              <span>Terraform Apply: 57 created.</span>
              <span className="text-brand-blue font-bold">100% OK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
