"use client";

import { useState, useEffect } from "react";
import MeshBackground from "@/components/MeshBackground";
import TerminalSection from "@/components/sections/TerminalSection";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaAward, 
  FaServer, 
  FaUser, 
  FaThLarge, 
  FaAward as FaAwardIcon, 
  FaBook, 
  FaTerminal, 
  FaSearch, 
  FaSun, 
  FaMoon, 
  FaCheckCircle,
  FaFileAlt
} from "react-icons/fa";

// Translation dictionaries
const translations = {
  en: {
    about: "ABOUT",
    portfolio: "PORTFOLIO",
    resume: "RESUME",
    blog: "BLOG",
    contact: "CONTACT",
    terminal: "TERMINAL",
    infra: "INFRASTRUCTURE",
    overviewTitle: "Portfolio",
    overviewSub: "I design and operate cloud infrastructure end to end — provisioning with Terraform, orchestrating containers on Kubernetes, and building CI/CD pipelines that ship code safely. Recent work spans self-hosted GPU infrastructure, observability stacks, and containerized microservices, with every system reachable at ssh sietllm and monitored through Grafana + Loki.",
    projectsTitle: "Projects",
    projectsSub: "Infrastructure, platforms, and pipelines I've built and operate.",
    credentialsTitle: "Certifications & Badges",
    credentialsSub: "Verified credentials and community recognition.",
    writingTitle: "Writing",
    writingSub: "Notes on infra debugging and build logs — DNS latency fixes, Docker networking quirks, and migration write-ups.",
    infraTitle: "Stack Snapshot",
    infraSub: "Multi-service Docker Compose deployment on a dedicated GPU server (sietllm, RTX 6000 Ada). PostgreSQL, Redis, RabbitMQ, and Kong route traffic to Node/Express microservices, monitored via a self-hosted Grafana + Loki stack, accessed remotely over Tailscale.",
    contactTitle: "Get in touch",
  },
  kn: {
    about: "ಪರಿಚಯ",
    portfolio: "ಯೋಜನೆಗಳು",
    resume: "ರುಜುವಾತು",
    blog: "ಬ್ಲಾಗ್",
    contact: "ಸಂಪರ್ಕ",
    terminal: "ಟರ್ಮಿನಲ್",
    infra: "ಮೂಲಸೌಕರ್ಯ",
    overviewTitle: "ಪೋರ್ಟ್‌ಫೋಲಿಯೋ",
    overviewSub: "ನಾನು ಕ್ಲೌಡ್ ಮೂಲಸೌಕರ್ಯವನ್ನು ಕೊನೆಯಿಂದ ಕೊನೆಯವರೆಗೆ ವಿನ್ಯಾಸಗೊಳಿಸುತ್ತೇನೆ ಮತ್ತು ನಿರ್ವಹಿಸುತ್ತೇನೆ - ಟೆರಾಫಾರ್ಮ್‌ನೊಂದಿಗೆ ನಿಯೋಜನೆ, ಕುಬರ್ನೆಟಿಸ್‌ನಲ್ಲಿ ಕಂಟೈನರ್‌ಗಳನ್ನು ಆರ್ಕೆಸ್ಟ್ರೇಟ್ ಮಾಡುವುದು ಮತ್ತು ಸುಭದ್ರ ಪೈಪ್‌ಲೈನ್‌ಗಳನ್ನು ನಿರ್ಮಿಸುವುದು. ಪ್ರಸ್ತುತ GPU ಮೂಲಸೌಕರ್ಯ, ಅಬ್ಸರ್ವೇಬಿಲಿಟಿ ಸ್ಟಾಕ್‌ಗಳು ಮತ್ತು ಕಂಟೇನರೈಸ್ಡ್ ಮೈಕ್ರೋಸರ್ವೀಸ್‌ಗಳಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದ್ದೇನೆ.",
    projectsTitle: "ಯೋಜನೆಗಳು",
    projectsSub: "ನಾನು ನಿರ್ಮಿಸಿದ ಮತ್ತು ನಿರ್ವಹಿಸುತ್ತಿರುವ ಮೂಲಸೌಕರ್ಯ, ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು ಮತ್ತು ಪೈಪ್‌ಲೈನ್‌ಗಳು.",
    credentialsTitle: "ಪ್ರಮಾಣಪತ್ರಗಳು ಮತ್ತು ಬ್ಯಾಡ್ಜ್‌ಗಳು",
    credentialsSub: "ಪರಿಶೀಲಿಸಿದ ರುಜುವಾತುಗಳು ಮತ್ತು ಸಮುದಾಯದ ಮನ್ನಣೆ.",
    writingTitle: "ಬರಹಗಳು",
    writingSub: "ಮೂಲಸೌಕರ್ಯ ಡೀಬಗ್ ಮಾಡುವಿಕೆ ಮತ್ತು ಬಿಲ್ಡ್ ಲಾಗ್‌ಗಳ ಮೇಲಿನ ಟಿಪ್ಪಣಿಗಳು.",
    infraTitle: "ಮೂಲಸೌಕರ್ಯ ಸ್ನ್ಯಾಪ್‌ಶಾಟ್",
    infraSub: "ಡೆಡಿಕೇಟೆಡ್ ಜಿಪಿಯು ಸರ್ವರ್‌ನಲ್ಲಿ ಮಲ್ಟಿ-ಸರ್ವೀಸ್ ಡಾಕರ್ ಕಂಪೋಸ್ ನಿಯೋಜನೆ. Tailscale ಮತ್ತು Grafana ಮೂಲಕ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲಾಗಿದೆ.",
    contactTitle: "ಸಂಪರ್ಕಿಸಿ",
  }
};

const searchItems = [
  { title: "AI Interview Platform", category: "projects", section: "projects" },
  { title: "CI/CD Pipeline", category: "projects", section: "projects" },
  { title: "Terraform + Kubernetes IaC", category: "projects", section: "projects" },
  { title: "Kannada LLM & OCR Pipeline", category: "projects", section: "projects" },
  { title: "AWS Solutions Architect", category: "certifications", section: "credentials" },
  { title: "Certified Kubernetes Administrator (CKA)", category: "certifications", section: "credentials" },
  { title: "NVIDIA Developer Program", category: "badges", section: "credentials" },
  { title: "Google Developer Group (GDG)", category: "badges", section: "credentials" },
  { title: "Stack Snapshot", category: "infrastructure", section: "infra" },
  { title: "Contact Information", category: "contact", section: "contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lang, setLang] = useState<"en" | "kn">("en");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Sync theme attribute with body class
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Listen to keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const handleSearchSelect = (section: string) => {
    setActiveSection(section);
    setSearchOpen(false);
    setSearchQuery("");
  };

  const filteredSearch = searchItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const t = translations[lang];

  return (
    <div className="relative w-full min-h-screen transition-colors duration-250">
      
      {/* Top Colored strip */}
      <div className="top-strip" />

      {/* Decorative Vector Mesh */}
      <MeshBackground />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Page Shell */}
      <div className="page-shell">
        
        {/* Console Box */}
        <header className="console">
          <div className="console-titlebar">
            <div className="traffic-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="console-label">operator console</span>
          </div>

          <div className="console-header">
            {/* Profile Detail Block */}
            <div className="profile-block">
              <div className="avatar">
                <div className="avatar-inner">N</div>
              </div>
              <div className="profile-text">
                <div className="name font-sans">Naveen S</div>
                <div className="role text-slate-500 font-medium">DevOps Cloud Engineer</div>
                <div className="tag font-mono">engineer/01</div>
              </div>
            </div>

            {/* System Status Block */}
            <div className="status-block font-mono">
              <span className="status-label">System Status</span>
              <div className="status-row">
                <span className="k">status:</span>
                <span className="v available">
                  <span className="dot-live" /> available
                </span>
              </div>
              <div className="status-row">
                <span className="k">tz:</span>
                <span className="v">GMT+5:30</span>
              </div>
              <div className="status-row">
                <span className="k">response:</span>
                <span className="v">&lt;24h</span>
              </div>
            </div>

            {/* Actions Block */}
            <div className="actions-block">
              <div className="cv-row relative">
                <a 
                  href="/resume/Naveen_Resume.pdf" 
                  download 
                  className="btn-cv font-sans"
                >
                  <FaFileAlt className="text-sm" />
                  Download CV
                </a>
                <button 
                  onClick={() => setShowDropdown(prev => !prev)}
                  className="btn-toggle" 
                  aria-label="More actions"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={`transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* CV Action Dropdown */}
                {showDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-bg-window border border-border rounded-md shadow-lg py-1.5 z-40 animate-fadeIn">
                    <a 
                      href="/resume/Naveen_Resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-xs text-text-primary hover:bg-bg-panel-hover"
                    >
                      View CV in Browser
                    </a>
                  </div>
                )}
              </div>
              <div className="email-row font-mono">
                <FaEnvelope className="text-xs" />
                naveen.siddappa44@gmail.com
              </div>
              <div className="social-row">
                <a href="https://github.com/Naveen4421" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/naveen-s-44ns" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Body Shell Grid */}
        <div className="console-body">
          
          {/* Navigation Sidebar */}
          <nav className="sidebar" aria-label="Section navigation">
            <div className="swatches">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="sidebar-divider" />
            
            {/* Sidebar anchors */}
            <div className="side-nav">
              <button 
                onClick={() => setActiveSection("overview")}
                className={activeSection === "overview" ? "active" : ""}
              >
                <FaUser />
                <span className="nav-txt">{t.about}</span>
                <span className="nav-dot" />
              </button>
              
              <button 
                onClick={() => setActiveSection("projects")}
                className={activeSection === "projects" ? "active" : ""}
              >
                <FaThLarge />
                <span className="nav-txt">{t.portfolio}</span>
                <span className="nav-dot" />
              </button>

              <button 
                onClick={() => setActiveSection("credentials")}
                className={activeSection === "credentials" ? "active" : ""}
              >
                <FaAwardIcon />
                <span className="nav-txt">{t.resume}</span>
                <span className="nav-dot" />
              </button>

              <button 
                onClick={() => setActiveSection("blog")}
                className={activeSection === "blog" ? "active" : ""}
              >
                <FaBook />
                <span className="nav-txt">{t.blog}</span>
                <span className="nav-dot" />
              </button>

              <button 
                onClick={() => setActiveSection("terminal")}
                className={activeSection === "terminal" ? "active" : ""}
              >
                <FaTerminal />
                <span className="nav-txt">{t.terminal}</span>
                <span className="nav-dot" />
              </button>

              <button 
                onClick={() => setActiveSection("infra")}
                className={activeSection === "infra" ? "active" : ""}
              >
                <FaServer />
                <span className="nav-txt">{t.infra}</span>
                <span className="nav-dot" />
              </button>

              <button 
                onClick={() => setActiveSection("contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                <FaEnvelope />
                <span className="nav-txt">{t.contact}</span>
                <span className="nav-dot" />
              </button>
            </div>

            {/* Pagination dots (matching side nav length) */}
            <div className="page-dots" aria-hidden="true">
              <span className={activeSection === "overview" ? "on" : ""} />
              <span className={activeSection === "projects" ? "on" : ""} />
              <span className={activeSection === "credentials" ? "on" : ""} />
              <span className={activeSection === "blog" ? "on" : ""} />
              <span className={activeSection === "terminal" ? "on" : ""} />
              <span className={activeSection === "infra" ? "on" : ""} />
              <span className={activeSection === "contact" ? "on" : ""} />
            </div>

            {/* Bottom Utilities */}
            <div className="sidebar-utils">
              <button 
                onClick={() => setSearchOpen(true)}
                className="search-box" 
                id="searchTrigger" 
                type="button"
              >
                <FaSearch className="text-xs" />
                <span className="s-txt">Search</span>
                <span className="kbd">Ctrl+K</span>
              </button>

              <div className="lang-toggle" role="group" aria-label="Language">
                <button 
                  type="button" 
                  onClick={() => setLang("en")}
                  className={lang === "en" ? "active" : ""}
                >
                  EN
                </button>
                <button 
                  type="button" 
                  onClick={() => setLang("kn")}
                  className={lang === "kn" ? "active" : ""}
                >
                  KN
                </button>
              </div>

              <button 
                onClick={toggleTheme}
                className="theme-toggle" 
                id="themeToggle" 
                type="button"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
                <span id="themeLabel">{theme === "dark" ? "Light" : "Dark"}</span>
              </button>
            </div>
          </nav>

          {/* Right Pane Dynamic Viewport */}
          <main id="main-content" className="content">
            
            {/* OVERVIEW SECTION */}
            <section className={activeSection === "overview" ? "active-section" : ""}>
              <span className="eyebrow-num">01 / OVERVIEW</span>
              <h1 className="font-sans">Overview<span className="dot">.</span></h1>
              <div className="underline-bar" />
              <p className="lead font-sans leading-relaxed">
                {t.overviewSub}
              </p>

              <div className="stat-grid font-mono">
                <div className="stat-card">
                  <div className="num">04</div>
                  <div className="label">Projects</div>
                </div>
                <div className="stat-card">
                  <div className="num">03</div>
                  <div className="label">Certifications</div>
                </div>
                <div className="stat-card">
                  <div className="num">02</div>
                  <div className="label">Badges</div>
                </div>
                <div className="stat-card">
                  <div className="num">03</div>
                  <div className="label">Vibe Coding</div>
                </div>
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section className={activeSection === "projects" ? "active-section" : ""}>
              <span className="eyebrow-num">02 / PORTFOLIO</span>
              <h2 className="text-2xl font-bold font-sans text-text-primary mb-2">Projects</h2>
              <p className="lead mb-8 text-slate-500">{t.projectsSub}</p>

              <div className="proj-grid font-sans">
                <article className="proj-card">
                  <div className="proj-icon">
                    <FaServer />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">AI Interview Platform</h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-4">
                    Production-grade microservices platform for AI-driven interviews, self-hosted on a dedicated GPU server — Kong gateway, Dockerized services, PostgreSQL, Redis, RabbitMQ, with self-hosted LLM, STT, and TTS.
                  </p>
                  <div className="proj-tags font-mono mb-4">
                    <span>Docker Compose</span>
                    <span>Kong</span>
                    <span>PostgreSQL</span>
                    <span>RabbitMQ</span>
                  </div>
                  <div className="proj-links">
                    <a href="https://github.com/Naveen4421" target="_blank" rel="noopener noreferrer">Github</a>
                  </div>
                </article>

                <article className="proj-card">
                  <div className="proj-icon">
                    <FaServer />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">CI/CD Pipeline</h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-4">
                    End-to-end pipeline built from scratch — Jenkins orchestrating Maven builds, SonarQube quality gates, Nexus artifact storage, and automated Docker Compose deployment to Tomcat.
                  </p>
                  <div className="proj-tags font-mono mb-4">
                    <span>Jenkins</span>
                    <span>Maven</span>
                    <span>SonarQube</span>
                    <span>Docker</span>
                  </div>
                  <div className="proj-links">
                    <a href="https://github.com/Naveen4421" target="_blank" rel="noopener noreferrer">Github</a>
                  </div>
                </article>

                <article className="proj-card">
                  <div className="proj-icon">
                    <FaServer />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Terraform + Kubernetes IaC</h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-4">
                    Provisioned and managed containerized workloads with Terraform, deploying to a local Kubernetes cluster via Minikube — declarative infra and cluster resource definitions.
                  </p>
                  <div className="proj-tags font-mono mb-4">
                    <span>Terraform</span>
                    <span>Kubernetes</span>
                    <span>Minikube</span>
                  </div>
                  <div className="proj-links">
                    <a href="https://github.com/Naveen4421" target="_blank" rel="noopener noreferrer">Github</a>
                  </div>
                </article>

                <article className="proj-card">
                  <div className="proj-icon">
                    <FaServer />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">Kannada LLM &amp; OCR Pipeline</h3>
                  <p className="text-text-secondary text-xs leading-relaxed mb-4">
                    Building a Kannada-language LLM with a focus on training-data quality, using an OCR pipeline to extract clean text from scanned books and avoid machine-translation hallucinations.
                  </p>
                  <div className="proj-tags font-mono mb-4">
                    <span>vLLM</span>
                    <span>OCR</span>
                    <span>Data Pipelines</span>
                  </div>
                  <div className="proj-links">
                    <a href="https://github.com/Naveen4421" target="_blank" rel="noopener noreferrer">Github</a>
                  </div>
                </article>
              </div>
            </section>

            {/* CREDENTIALS SECTION */}
            <section className={activeSection === "credentials" ? "active-section" : ""}>
              <span className="eyebrow-num">03 / RESUME</span>
              <h2 className="text-2xl font-bold font-sans text-text-primary mb-2">Certifications &amp; Badges</h2>
              <p className="lead mb-8 text-slate-500">{t.credentialsSub}</p>

              <div className="cred-list font-sans">
                <div className="cred-item">
                  <div className="cred-icon"><FaAward /></div>
                  <div className="cred-body">
                    <h3>AWS Certified Solutions Architect &ndash; Associate</h3>
                    <div className="issuer">Amazon Web Services &bull; 2025</div>
                  </div>
                  <div className="cred-links">
                    <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">Verify</a>
                  </div>
                </div>

                <div className="cred-item">
                  <div className="cred-icon"><FaAward /></div>
                  <div className="cred-body">
                    <h3>Certified Kubernetes Administrator (CKA)</h3>
                    <div className="issuer">CNCF / Linux Foundation &bull; 2026</div>
                  </div>
                  <div className="cred-links">
                    <a href="https://www.credly.com" target="_blank" rel="noopener noreferrer">Verify</a>
                  </div>
                </div>

                <div className="cred-item">
                  <div className="cred-icon"><FaCheckCircle /></div>
                  <div className="cred-body">
                    <h3>NVIDIA Developer Program</h3>
                    <div className="issuer">NVIDIA &bull; Community Member</div>
                  </div>
                  <div className="cred-links">
                    <a href="https://developer.nvidia.com" target="_blank" rel="noopener noreferrer">Verify</a>
                  </div>
                </div>

                <div className="cred-item">
                  <div className="cred-icon"><FaCheckCircle /></div>
                  <div className="cred-body">
                    <h3>Google Developer Group (GDG)</h3>
                    <div className="issuer">GDG SIET Campus &bull; Member</div>
                  </div>
                  <div className="cred-links">
                    <a href="https://gdg.community.dev" target="_blank" rel="noopener noreferrer">Verify</a>
                  </div>
                </div>
              </div>
            </section>

            {/* BLOG SECTION */}
            <section className={activeSection === "blog" ? "active-section" : ""}>
              <span className="eyebrow-num">04 / BLOG</span>
              <div className="block-inner rounded-lg p-6 bg-bg-panel border border-border">
                <h2 className="text-xl font-bold font-sans text-text-primary mb-3">Writing</h2>
                <p className="lead leading-relaxed font-sans text-text-secondary text-sm">
                  {t.writingSub} <span className="placeholder-flag font-mono text-[9px] ml-2">No posts yet</span>
                </p>
              </div>
            </section>

            {/* INTERACTIVE TERMINAL SECTION */}
            <section className={activeSection === "terminal" ? "active-section" : ""}>
              <span className="eyebrow-num">05 / TERMINAL</span>
              <h2 className="text-xl font-bold font-sans text-text-primary mb-3">Terminal</h2>
              <p className="lead mb-6 text-slate-500">Interactive sandbox for querying system profiles.</p>
              <TerminalSection />
            </section>

            {/* INFRASTRUCTURE SECTION */}
            <section className={activeSection === "infra" ? "active-section" : ""}>
              <span className="eyebrow-num">06 / INFRASTRUCTURE</span>
              <div className="block-inner rounded-lg p-6 bg-bg-panel border border-border">
                <h2 className="text-xl font-bold font-sans text-text-primary mb-3">Stack Snapshot</h2>
                <p className="lead leading-relaxed text-text-secondary text-sm font-sans">
                  {t.infraSub}
                </p>
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section className={activeSection === "contact" ? "active-section" : ""}>
              <span className="eyebrow-num">07 / CONTACT</span>
              <h2 className="text-2xl font-bold font-sans text-text-primary mb-8">{t.contactTitle}</h2>
              
              <div className="contact-grid font-sans">
                <div className="contact-card">
                  <FaEnvelope />
                  <div>
                    <div className="c-label">Email</div>
                    <div className="c-val font-mono text-xs">naveen.siddappa44@gmail.com</div>
                  </div>
                </div>
                <div className="contact-card">
                  <FaLinkedin />
                  <div>
                    <div className="c-label">LinkedIn</div>
                    <div className="c-val">naveen-s-44ns</div>
                  </div>
                </div>
                <div className="contact-card">
                  <FaGithub />
                  <div>
                    <div className="c-label">GitHub</div>
                    <div className="c-val font-mono text-xs">github.com/Naveen4421</div>
                  </div>
                </div>
              </div>
            </section>

          </main>

        </div>

        {/* Footer */}
        <footer>
          <p>© {new Date().getFullYear()} Naveen S &bull; DevOps Cloud Engineer Console</p>
        </footer>

      </div>

      {/* SEARCH COMMAND PALETTE MODAL OVERLAY */}
      {searchOpen && (
        <div 
          className="modal-overlay" 
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, certs, or pages..."
              className="modal-input"
            />
            <div className="modal-results">
              {filteredSearch.length > 0 ? (
                filteredSearch.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSearchSelect(item.section)}
                    className="modal-result-item"
                  >
                    <span className="title font-sans">{item.title}</span>
                    <span className="category font-mono">{item.category}</span>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-xs text-text-muted">
                  No matching results found
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
