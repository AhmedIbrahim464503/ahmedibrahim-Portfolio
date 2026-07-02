import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Network, Bot, HardDrive, GraduationCap, Sparkles, CheckCircle2, ChevronRight 
} from "lucide-react";

const roadmapMilestones = [
  {
    year: "2025 — Present",
    title: "Enterprise AI & Distributed Systems Architecting",
    role: "Lead Systems & AI Engineer",
    icon: Network,
    color: "from-cyan-500 to-blue-600",
    summary: "Designing fault-tolerant backend infrastructures and multi-agent RAG intelligence systems.",
    highlights: [
      "Designed horizontally scalable distributed WebSocket backend utilizing Nginx load balancing and Redis Pub/Sub.",
      "Engineered Rahbar-e-Deen, an enterprise multi-sectarian Islamic RAG platform with zero-hallucination guardrails.",
      "Built AdmitFlow university admission ecosystem powered by reranked LangChain pipelines."
    ],
    tech: ["Node.js", "Redis Pub/Sub", "LangChain", "Pinecone", "Next.js"]
  },
  {
    year: "2024",
    title: "Autonomous Agents & Multimodal Edge AI",
    role: "AI Workflow & Edge Automation Engineer",
    icon: Bot,
    color: "from-violet-500 to-purple-600",
    summary: "Architecting autonomous agents and spatial document understanding pipelines.",
    highlights: [
      "Engineered InfoBot autonomous news curation editor built on the OpenClaw framework.",
      "Developed Intelligent Document Processing (IDP) system combining OpenCV edge auto-cropping with LayoutLMv3.",
      "Built TeacherSync AI timetable constraint programming solver with automated WhatsApp broadcasting."
    ],
    tech: ["Python", "LayoutLMv3", "OpenCV.js", "FastAPI", "OR-Tools"]
  },
  {
    year: "2023 — 2024",
    title: "Low-Level System Programming & Graph Optimization",
    role: "Systems & Algorithms Developer",
    icon: HardDrive,
    color: "from-emerald-500 to-teal-600",
    summary: "Developing system-level desktop applications and optimization algorithms.",
    highlights: [
      "Built LinkMaster Linux filesystem inspection application using Python & PyQt5 for inode and symlink management.",
      "Formulated AI-driven emergency resource allocation models using graph search algorithms.",
      "Created SmartSubmit automated NUST LMS submission agent using Selenium web automation."
    ],
    tech: ["Python", "PyQt5", "Linux Internals", "Graph AI", "Selenium"]
  },
  {
    year: "2023",
    title: "Academic Foundation @ NUST",
    role: "BS Computer Science Scholar",
    icon: GraduationCap,
    color: "from-amber-500 to-orange-600",
    summary: "Commenced undergraduate engineering studies at Pakistan's premier engineering institution.",
    highlights: [
      "Enrolled in Bachelor of Science in Computer Science at National University of Sciences & Technology (NUST).",
      "Mastered Data Structures, Algorithms, Discrete Mathematics, and Object-Oriented Software Design.",
      "Set foundation for specialized research in Autonomous Agents and Distributed Computing."
    ],
    tech: ["C++", "Data Structures", "Algorithms", "Mathematics"]
  }
];

const ExperienceSection = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  return (
    <section id="experience" className="py-28 relative z-10 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-violet-500/20 text-violet-400 text-xs font-semibold mb-3">
              <Sparkles size={13} />
              <span>THE ENGINEERING TIMELINE</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Systems &amp; AI <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Trace my progression from low-level Linux filesystem algorithms to high-concurrency distributed AI pipelines.
            </p>
          </div>

          {/* Interactive Roadmap Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Timeline Nodes */}
            <div className="lg:col-span-5 space-y-4">
              {roadmapMilestones.map((milestone, idx) => {
                const isSelected = selectedMilestone === idx;
                return (
                  <motion.div
                    key={milestone.title}
                    onClick={() => setSelectedMilestone(idx)}
                    whileHover={{ x: 4 }}
                    className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? "glass-card border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.2)] bg-cyan-950/20"
                        : "glass border-white/5 hover:border-white/20 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-secondary text-cyan-300">
                        {milestone.year}
                      </span>
                      <ChevronRight
                        size={18}
                        className={`transition-transform ${isSelected ? "text-cyan-400 translate-x-1" : "text-muted-foreground"}`}
                      />
                    </div>
                    <h3 className={`font-display font-bold text-base ${isSelected ? "text-white" : "text-slate-300"}`}>
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {milestone.role}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Detailed Holographic Roadmap Node Display */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMilestone}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card rounded-3xl p-8 border border-white/15 relative overflow-hidden shadow-2xl"
                >
                  <div className={`h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r ${roadmapMilestones[selectedMilestone].color}`} />

                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                        {roadmapMilestones[selectedMilestone].year}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                        {roadmapMilestones[selectedMilestone].title}
                      </h3>
                      <p className="text-sm font-semibold text-violet-300 mt-1">
                        {roadmapMilestones[selectedMilestone].role}
                      </p>
                    </div>

                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${roadmapMilestones[selectedMilestone].color} text-white shrink-0 shadow-lg`}>
                      {(() => {
                        const Icon = roadmapMilestones[selectedMilestone].icon;
                        return <Icon size={28} />;
                      })()}
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    {roadmapMilestones[selectedMilestone].summary}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-bold">
                      Architectural Achievements:
                    </h4>
                    {roadmapMilestones[selectedMilestone].highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                        <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-6 border-t border-white/10">
                    <span className="text-xs font-mono text-muted-foreground block mb-3">Core Technologies:</span>
                    <div className="flex flex-wrap gap-2">
                      {roadmapMilestones[selectedMilestone].tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-xl bg-secondary/80 border border-white/10 text-xs font-medium text-cyan-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
