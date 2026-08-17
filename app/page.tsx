"use client";

import { useState, useEffect } from "react";
import MeshBackground from "@/components/MeshBackground";
import TerminalSection from "@/components/sections/TerminalSection";
import Tilt3D from "@/components/Tilt3D";
import RadialOrbitalTimelineDemo from "@/components/demo/timeline-demo";
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
    header: {
      overview: { title: "Naveen S", role: "DevOps Cloud Engineer", tag: "engineer/01" },
      projects: { title: "Projects Portfolio", role: "Production Infrastructure & Platforms", tag: "engineer/01/projects" },
      credentials: { title: "Certifications", role: "Verified Credentials & Badges", tag: "engineer/01/credentials" },
      blog: { title: "Operator Blog", role: "System Build Logs & Notes", tag: "engineer/01/blog" },
      terminal: { title: "Terminal Console", role: "Interactive Sandbox Environment", tag: "engineer/01/terminal" },
      infra: { title: "System Infrastructure", role: "sietllm Core Services Topology", tag: "engineer/01/infrastructure" },
      contact: { title: "Get In Touch", role: "ssh, email, & social links", tag: "engineer/01/contact" },
    }
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
    header: {
      overview: { title: "ನವೀನ್ ಎಸ್", role: "ಡೆವಲಪರ್ ಕ್ಲೌಡ್ ಇಂಜಿನಿಯರ್", tag: "engineer/01" },
      projects: { title: "ಯೋಜನೆಗಳ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ", role: "ಉತ್ಪಾದನಾ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು", tag: "engineer/01/projects" },
      credentials: { title: "ಪ್ರಮಾಣಪತ್ರಗಳು", role: "ಪರಿಶೀಲಿಸಿದ ರುಜುವಾತುಗಳು ಮತ್ತು ಬ್ಯಾಡ್ಜ್‌ಗಳು", tag: "engineer/01/credentials" },
      blog: { title: "ಆಪರೇಟರ್ ಬ್ಲಾಗ್", role: "ಸಿಸ್ಟಮ್ ಬಿಲ್ಡ್ ಲಾಗ್‌ಗಳು ಮತ್ತು ಟಿಪ್ಪಣಿಗಳು", tag: "engineer/01/blog" },
      terminal: { title: "ಟರ್ಮಿನಲ್ ಕನ್ಸೋಲ್", role: "ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ ಪರಿಸರ", tag: "engineer/01/terminal" },
      infra: { title: "ಸಿಸ್ಟಮ್ ಮೂಲಸೌಕರ್ಯ", role: "ಕೋರೆ ಸೇವೆಗಳ ಟೋಪೋಲಜಿ", tag: "engineer/01/infrastructure" },
      contact: { title: "ಸಂಪರ್ಕಿಸಿ", role: "ಇಮೇಲ್ ಮತ್ತು ಸಾಮಾಜಿಕ ಲಿಂಕ್‌ಗಳು", tag: "engineer/01/contact" },
    }
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

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Sync theme attribute with body class
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Sync tab page title dynamically
  useEffect(() => {
    const sectionName = activeSection === "overview" ? "Overview" : activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
    document.title = `Naveen — ${sectionName}`;
  }, [activeSection]);

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
            <span className="console-label">operator console : ~/{activeSection}</span>
          </div>

          <div className="console-header">
            {/* Profile Detail Block */}
            <div className="profile-block">
              <div className="avatar">
                <div className="avatar-inner">N</div>
              </div>
              <div className="profile-text">
                <div className="name font-sans">
                  {t.header[activeSection as keyof typeof t.header]?.title || t.header.overview.title}
                </div>
                <div className="role text-slate-500 font-medium">
                  {t.header[activeSection as keyof typeof t.header]?.role || t.header.overview.role}
                </div>
                <div className="tag font-mono">
                  {t.header[activeSection as keyof typeof t.header]?.tag || t.header.overview.tag}
                </div>
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

              <div className="mt-16 w-full relative">
                <RadialOrbitalTimelineDemo />
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
              <h2 className="text-2xl font-bold font-sans text-text-primary mb-2">Contact<span className="dot">.</span></h2>
              <div className="underline-bar" />
              <p className="lead mb-6 text-slate-500">Have a project in mind or just want to say hi? Fill out the form below.</p>

              <div className="mb-8 inline-flex items-center gap-2 border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available for projects
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 font-sans">
                
                {/* Left Card - Collaborate info */}
                <div className="md:col-span-5 flex">
                  <Tilt3D maxTilt={6} className="w-full">
                    <div className="block-inner h-full flex flex-col justify-between" style={{ background: "var(--bg-panel)" }}>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary mb-6">Let's collaborate</h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-text-secondary text-sm">
                            <FaEnvelope className="text-accent-blue" />
                            <span className="font-mono text-xs select-all">naveen.siddappa44@gmail.com</span>
                          </div>
                          <div className="flex items-center gap-3 text-text-secondary text-sm">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent-blue">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>Bangalore, India</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-border">
                        <span className="font-mono text-xs text-text-muted block mb-3 uppercase tracking-wider">Find me on</span>
                        <div className="flex gap-2">
                          <a href="https://github.com/Naveen4421" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border hover:border-accent-blue hover:text-accent-blue rounded-md flex items-center justify-center text-text-secondary transition" aria-label="GitHub">
                            <FaGithub />
                          </a>
                          <a href="https://linkedin.com/in/naveen-s-44ns" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border hover:border-accent-blue hover:text-accent-blue rounded-md flex items-center justify-center text-text-secondary transition" aria-label="LinkedIn">
                            <FaLinkedin />
                          </a>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-text-muted text-xs">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent-green">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          <span>Usually responds within 24 hours</span>
                        </div>
                      </div>
                    </div>
                  </Tilt3D>
                </div>

                {/* Right Card - Form inputs */}
                <div className="md:col-span-7 flex">
                  <Tilt3D maxTilt={6} className="w-full">
                    <div className="block-inner h-full w-full" style={{ background: "var(--bg-panel)" }}>
                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Full Name</label>
                          <input 
                            type="text" 
                            id="name"
                            required
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full px-4 py-3 rounded-md bg-bg-window border border-border text-text-primary text-sm focus:outline-none focus:border-accent-blue input-3d"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Email Address</label>
                          <input 
                            type="email" 
                            id="email"
                            required
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full px-4 py-3 rounded-md bg-bg-window border border-border text-text-primary text-sm focus:outline-none focus:border-accent-blue input-3d"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label htmlFor="message" className="block text-xs font-mono text-text-muted uppercase tracking-wider">Your Message</label>
                            <span className="text-[10px] font-mono text-text-muted">{formData.message.length}/500</span>
                          </div>
                          <textarea 
                            id="message"
                            required
                            rows={5}
                            maxLength={500}
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            className="w-full px-4 py-3 rounded-md bg-bg-window border border-border text-text-primary text-sm focus:outline-none focus:border-accent-blue resize-none input-3d"
                          />
                        </div>

                        {formSubmitted && (
                          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-md font-medium">
                            Message received! Thank you for getting in touch.
                          </div>
                        )}

                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2 btn-3d disabled:opacity-50 cursor-pointer"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </form>
                    </div>
                  </Tilt3D>
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
