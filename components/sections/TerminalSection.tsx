"use client";

import React, { useState, useEffect, useRef } from "react";

interface LogEntry {
  command?: string;
  output: string | React.ReactNode;
}

export default function TerminalSection() {
  const [history, setHistory] = useState<LogEntry[]>([
    { 
      output: (
        <div className="text-accent-blue leading-snug mb-5 whitespace-pre">
{`╔═══════════════════════════════════════════════════╗
║                                                   ║
║    Interactive Terminal Portfolio                 ║
║    Type 'help' to see available commands          ║
║                                                   ║
╚═══════════════════════════════════════════════════╝`}
        </div>
      )
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullCmd = inputValue.trim();
    if (!fullCmd) return;

    const parts = fullCmd.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    let response: React.ReactNode | string = "";

    switch (cmd) {
      case "help":
        response = (
          <div className="space-y-1 text-slate-400">
            <div>Available commands:</div>
            <div>&bull; <span className="text-accent-blue font-bold">ls</span>: List files / projects</div>
            <div>&bull; <span className="text-accent-blue font-bold">cat &lt;file&gt;</span>: View file content (e.g. \`cat about.md\`)</div>
            <div>&bull; <span className="text-accent-blue font-bold">whoami</span>: Display active engineer credentials</div>
            <div>&bull; <span className="text-accent-blue font-bold">clear</span>: Flush console buffer</div>
          </div>
        );
        break;
      case "ls":
        response = (
          <div className="text-accent-blue font-semibold font-mono space-x-4">
            <span>about.md</span>
            <span>ai-interview-platform/</span>
            <span>cicd-pipeline/</span>
            <span>terraform-kubernetes-iac/</span>
            <span>kannada-llm-ocr/</span>
          </div>
        );
        break;
      case "cat":
        if (!arg) {
          response = <span className="text-accent-orange">cat: missing argument. Try 'cat about.md' or 'ls'</span>;
        } else if (arg === "about.md") {
          response = (
            <p className="text-slate-300 leading-relaxed max-w-xl font-mono">
              I design and operate cloud infrastructure end to end &mdash; provisioning with Terraform, orchestrating containers on Kubernetes, and building CI/CD pipelines that ship code safely. Reachable at ssh sietllm and monitored via Grafana + Loki.
            </p>
          );
        } else if (arg.startsWith("ai-interview")) {
          response = "Folder: ai-interview-platform/\nStack: Kong API gateway, Dockerized Services, PostgreSQL, RabbitMQ. Self-hosted on GPU Node.";
        } else if (arg.startsWith("cicd")) {
          response = "Folder: cicd-pipeline/\nStack: Jenkins, Maven, SonarQube, Nexus registry, Tomcat host.";
        } else if (arg.startsWith("terraform")) {
          response = "Folder: terraform-kubernetes-iac/\nStack: Declarative Terraform provisioning, Minikube deployments.";
        } else if (arg.startsWith("kannada")) {
          response = "Folder: kannada-llm-ocr/\nStack: vLLM data ingestion pipeline, text extraction processing.";
        } else {
          response = <span className="text-accent-orange">cat: {arg}: file or directory not found</span>;
        }
        break;
      case "whoami":
        response = (
          <div className="text-accent-green font-mono">
            <div>User: engineer/01</div>
            <div>System: sietllm (RTX 6000 Ada)</div>
            <div>Region: GMT+5:30 (India)</div>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInputValue("");
        return;
      default:
        response = <span className="text-accent-orange">bash: command not found: {cmd}. Type 'help' for options.</span>;
    }

    setHistory(prev => [...prev, { command: fullCmd, output: response }]);
    setInputValue("");
  };

  return (
    <div className="w-full terminal-box-3d rounded-lg p-5 font-mono text-[13px] text-slate-300 h-[320px] flex flex-col justify-between overflow-hidden">
      
      {/* Mac Dots Header */}
      <div className="flex items-center mb-4 border-b border-white/5 pb-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></span>
        </div>
        <span className="ml-3.5 font-mono text-[11px] tracking-widest text-slate-500 font-semibold uppercase">TERMINAL</span>
      </div>

      <div className="overflow-y-auto space-y-3.5 pr-2 flex-grow select-text scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1">
            {entry.command && (
              <div className="flex items-center gap-1.5 font-bold">
                <span className="text-accent-green">naveen@portfolio:~$</span>
                <span className="text-slate-200">{entry.command}</span>
              </div>
            )}
            <div className="pl-1 leading-relaxed whitespace-pre-wrap">{entry.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-[#4c6fff]/40 pt-3 mt-3">
        <span className="text-accent-green font-bold">naveen@portfolio:~$</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow bg-transparent text-slate-100 placeholder-slate-600/70 focus:outline-none border-none p-0 text-xs font-mono ml-2"
          placeholder="Type command ('help', 'ls', 'whoami')..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
