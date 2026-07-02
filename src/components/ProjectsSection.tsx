import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, Github, Search, Bot, Activity, HardDrive, Map, Layout, 
  Server, Database, GraduationCap, Newspaper, BookOpen, MessageSquare, 
  Calendar, FileText, Sparkles, Terminal, ShieldAlert, CheckCircle2, ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Scalable Real-Time Messaging Infrastructure",
    category: "Distributed Systems & Backend",
    icon: MessageSquare,
    description: "A fault-tolerant, horizontally scalable distributed backend for handling high-concurrency, real-time WebSocket messaging.",
    problem: "Single-server bottleneck and single points of failure under high concurrent traffic",
    solution: "Distributed backend utilizing Nginx, Node.js nodes, and Redis Pub/Sub for state synchronization",
    tech: ["Node.js", "Nginx", "Redis", "Supabase", "Next.js"],
    color: "from-cyan-500 to-blue-600",
    github: "https://github.com/AhmedIbrahim464503/Scalable-Real-Time-Messaging-Infrastructure",
  },
  {
    title: "Rahbar-e-Deen (رہبرِ دین)",
    category: "AI Agents & RAG",
    icon: BookOpen,
    description: "Enterprise-Grade Multi-Sectarian Islamic RAG Intelligence platform providing grounded answers from the Quran, Hadith, and Tafseer.",
    problem: "Scattered and unverified Islamic knowledge sources prone to hallucination",
    solution: "Production-grade RAG pipeline with grounded, zero-hallucination multi-stage generation",
    tech: ["LangChain", "Pinecone", "Llama 3.1", "Gemini", "Next.js"],
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/AhmedIbrahim464503/Rahbar-e-Deen",
  },
  {
    title: "TeacherSync: Smart Timetable Assistant",
    category: "Full-Stack & Automation",
    icon: Calendar,
    description: "AI-assisted timetable management system featuring a Drag-and-Drop dashboard, real-time clash detection, and automated WhatsApp broadcasting.",
    problem: "Rigid traditional timetable generation and confusing master spreadsheets",
    solution: "Constraint programming solver combined with an intuitive matrix grid and automated WhatsApp distribution",
    tech: ["Next.js", "FastAPI", "Google OR-Tools", "PostgreSQL", "whatsapp-web.js"],
    color: "from-violet-500 to-purple-600",
    github: "https://github.com/AhmedIbrahim464503/TeacherSync",
  },
  {
    title: "Intelligent Document Processing (IDP) System",
    category: "AI Agents & RAG",
    icon: FileText,
    description: "An end-to-end Edge-AI document scanning and semantic extraction pipeline that replaces manual data entry.",
    problem: "Manual data entry bottlenecks and OCR ignoring spatial layout context",
    solution: "Edge vision auto-cropping combined with a multimodal LayoutLMv3 pipeline for structured JSON extraction",
    tech: ["Next.js", "OpenCV.js", "FastAPI", "LayoutLMv3", "YOLOv8"],
    color: "from-purple-500 to-pink-600",
    github: "https://github.com/AhmedIbrahim464503/Intelligent-Document-Processing",
  },
  {
    title: "InfoBot",
    category: "AI Agents & RAG",
    icon: Newspaper,
    description: "Autonomous AI news editor built on OpenClaw, delivering high-priority news updates regarding global sports and regional politics.",
    problem: "Information overload and missing crucial niche updates",
    solution: "Autonomous, specialized news editing & curation agent",
    tech: ["Python", "AI Agent", "OpenClaw Framework"],
    color: "from-blue-600 to-indigo-600",
    github: "https://github.com/AhmedIbrahim464503/InfoBot",
  },
  {
    title: "AdmitFlow",
    category: "AI Agents & RAG",
    icon: GraduationCap,
    description: "All-in-One University Admission Ecosystem featuring an advanced AI chatbot using LangChain RAG with enhanced retrieving and reranking techniques.",
    problem: "Complex and scattered admission processes",
    solution: "RAG-based chatbot with reranking provides precise guidance",
    tech: ["LangChain RAG", "Reranking", "Python", "React", "MongoDB"],
    color: "from-cyan-500 to-teal-500",
    github: "https://github.com/AhmedIbrahim464503/AdmitFlow",
  },
  {
    title: "FactFinder",
    category: "AI Agents & RAG",
    icon: Search,
    description: "AI-powered research assistant that automates document retrieval, processing, and knowledge extraction for efficient information gathering.",
    problem: "Manual research is time-consuming and inefficient",
    solution: "Automated agent retrieves and synthesizes information",
    tech: ["Python", "AI/ML", "NLP", "Automation"],
    color: "from-blue-500 to-cyan-500",
    github: "https://github.com/AhmedIbrahim464503/FactFinder",
  },
  {
    title: "SmartSubmit",
    category: "Full-Stack & Automation",
    icon: Bot,
    description: "Automated LMS submission agent for NUST, streamlining the assignment submission process and reducing manual repetitive tasks.",
    problem: "Repetitive manual submissions on LMS",
    solution: "Intelligent agent handles login and valid submissions",
    tech: ["Python", "Selenium", "Web Automation"],
    color: "from-amber-500 to-red-500",
    github: "https://github.com/AhmedIbrahim464503/SmartSubmit",
  },
  {
    title: "Emergency Resource Allocation",
    category: "Distributed Systems & Backend",
    icon: Activity,
    description: "Intelligent system using graph algorithms and AI to optimally distribute emergency resources across locations based on real-time demand.",
    problem: "Suboptimal dispatch during emergencies",
    solution: "Graph-based AI optimizes resource distribution",
    tech: ["Python", "Graph Algorithms", "AI", "Optimization"],
    color: "from-red-500 to-orange-500",
    github: "https://github.com/AhmedIbrahim464503/AI-Based-Emergency-Resource-Allocation-System",
  },
  {
    title: "LinkMaster",
    category: "Distributed Systems & Backend",
    icon: HardDrive,
    description: "Modular Python application with PyQt5 GUI for filesystem management: analyzing inodes, hard/symbolic links, and secure deletion.",
    problem: "Complex low-level filesystem management",
    solution: "GUI tool for advanced file system operations",
    tech: ["Python", "PyQt5", "Linux Internals", "System Programming"],
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/AhmedIbrahim464503/LinkMaster",
  },
  {
    title: "Congestion Prediction System",
    category: "AI Agents & RAG",
    icon: Map,
    description: "AI-driven system for predicting traffic congestion patterns and suggesting smart routing to optimize urban mobility.",
    problem: "Unpredictable urban traffic jams",
    solution: "ML models predict congestion for smart routing",
    tech: ["Python", "Machine Learning", "Data Science"],
    color: "from-yellow-500 to-amber-600",
    github: "https://github.com/AhmedIbrahim464503/Congestion-Prediction-And-Smart-Routing-System",
  },
  {
    title: "My Portfolio",
    category: "Full-Stack & Automation",
    icon: Layout,
    description: "Modern, responsive personal portfolio website featuring a premium UI, glassmorphism effects, and dynamic animations.",
    problem: "Need for a professional online presence",
    solution: "Showcasing skills and projects in a modern interface",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    color: "from-indigo-500 to-violet-600",
    github: "https://github.com/AhmedIbrahim464503/MyPortfolio",
  },
];

const categories = ["All", "AI Agents & RAG", "Distributed Systems & Backend", "Full-Stack & Automation"];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCardDrawer = (title: string) => {
    setExpandedCards((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-28 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
              <Sparkles size={13} />
              <span>PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Featured <span className="gradient-text">Systems &amp; AI</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              End-to-end architectures solved through autonomous AI pipelines, low-latency distributed backends, and full-stack engineering.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                    : "glass text-muted-foreground hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => {
                const isExpanded = expandedCards[project.title];
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    key={project.title}
                    className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 relative group shadow-2xl"
                  >
                    {/* Top Window Bar */}
                    <div className="px-6 py-3.5 bg-black/40 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="text-[11px] font-mono text-muted-foreground ml-2">
                          {project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.sys
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-secondary text-cyan-300 border border-white/5">
                        {project.category}
                      </span>
                    </div>

                    {/* Gradient Header Line */}
                    <div className={`h-1 bg-gradient-to-r ${project.color}`} />

                    {/* Main Content */}
                    <div className="p-7 flex flex-col flex-grow justify-between">
                      <div>
                        {/* Icon & Title */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform`}>
                            <project.icon size={26} />
                          </div>
                          <div>
                            <h3 className="font-display text-2xl font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Interactive Problem / Solution Drawer Toggle */}
                        <div className="mb-6">
                          <button
                            onClick={() => toggleCardDrawer(project.title)}
                            className="w-full py-2.5 px-4 rounded-2xl bg-secondary/60 hover:bg-secondary border border-white/5 text-xs font-semibold text-slate-300 flex items-center justify-between transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <Terminal size={14} className="text-cyan-400" />
                              <span>{isExpanded ? "Hide Architecture Breakdown" : "Inspect Architecture Breakdown"}</span>
                            </span>
                            <span className="text-cyan-400 text-[11px]">
                              {isExpanded ? "▲" : "▼"}
                            </span>
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden mt-3 space-y-3 p-4 rounded-2xl bg-black/50 border border-white/5 font-mono text-xs"
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1.5 text-red-400 font-bold">
                                    <ShieldAlert size={14} />
                                    <span>BOTTLENECK / PROBLEM:</span>
                                  </div>
                                  <p className="text-muted-foreground pl-5 font-sans">
                                    {project.problem}
                                  </p>
                                </div>

                                <div className="space-y-1 pt-2 border-t border-white/5">
                                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                                    <CheckCircle2 size={14} />
                                    <span>SYSTEM SOLUTION:</span>
                                  </div>
                                  <p className="text-slate-200 pl-5 font-sans">
                                    {project.solution}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-xl text-xs font-medium bg-secondary/80 text-cyan-200 border border-white/5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button
                            asChild
                            variant="outline"
                            className="w-full rounded-2xl glass border-cyan-500/30 hover:bg-cyan-500/15 text-white font-semibold py-5 transition-all group/btn"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                              <Github size={18} className="text-cyan-400" />
                              <span>View Repository</span>
                              <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
