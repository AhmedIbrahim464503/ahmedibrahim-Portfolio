import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, Database, Brain, Globe, Bot, Cog, Sparkles, Check, Terminal 
} from "lucide-react";

const skillCategories = [
  {
    title: "AI / ML & Agent Systems",
    icon: Brain,
    skills: [
      { name: "LangChain", role: "Agent Orchestration & RAG Pipelines", level: "Expert" },
      { name: "LangGraph", role: "Stateful Multi-Agent Workflows", level: "Advanced" },
      { name: "RAG Systems", role: "Vector Reranking & Retrieval", level: "Expert" },
      { name: "LayoutLMv3", role: "Multimodal Document Extraction", level: "Advanced" },
      { name: "OpenAI / Gemini API", role: "LLM Reasoning & Function Calling", level: "Expert" },
    ],
    color: "from-violet-500 to-purple-600",
    accent: "text-violet-400"
  },
  {
    title: "Programming & Databases",
    icon: Database,
    skills: [
      { name: "Python", role: "AI Models, Fast APIs & Automation", level: "Expert" },
      { name: "TypeScript", role: "Type-Safe Full-Stack Web Apps", level: "Advanced" },
      { name: "SQL / PostgreSQL", role: "Relational Schemas & Indexing", level: "Advanced" },
      { name: "JavaScript (ES6+)", role: "Asynchronous Event-Driven Logic", level: "Expert" },
    ],
    color: "from-cyan-500 to-blue-600",
    accent: "text-cyan-400"
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "React", role: "Component Architecture & Hooks", level: "Expert" },
      { name: "Next.js", role: "Server-Side Rendering & App Router", level: "Advanced" },
      { name: "Node.js & Express", role: "Scalable REST APIs & Workers", level: "Advanced" },
      { name: "MongoDB / Supabase", role: "NoSQL & Real-time Edge Data", level: "Advanced" },
      { name: "Tailwind CSS", role: "Futuristic Responsive Design System", level: "Expert" },
    ],
    color: "from-emerald-500 to-teal-600",
    accent: "text-emerald-400"
  },
  {
    title: "Automation & Systems",
    icon: Bot,
    skills: [
      { name: "Selenium & BeautifulSoup", role: "Autonomous Web Scraping Agents", level: "Expert" },
      { name: "Task Automation", role: "Cron Workflows & Event Triggers", level: "Expert" },
      { name: "Nginx & Redis", role: "Load Balancing & Distributed Pub/Sub", level: "Advanced" },
      { name: "OpenCV.js", role: "Edge Computer Vision Preprocessing", level: "Advanced" },
    ],
    color: "from-amber-500 to-orange-600",
    accent: "text-amber-400"
  },
  {
    title: "Tools & DevOps",
    icon: Cog,
    skills: [
      { name: "Git & GitHub", role: "Version Control & CI Pipelines", level: "Expert" },
      { name: "Docker", role: "Containerized Microservices", level: "Intermediate" },
      { name: "VS Code & Linux CLI", role: "Kernel Internals & Shell Scripting", level: "Advanced" },
      { name: "Postman", role: "API Debugging & Load Profiling", level: "Expert" },
    ],
    color: "from-rose-500 to-pink-600",
    accent: "text-rose-400"
  },
  {
    title: "Currently Exploring",
    icon: Code2,
    skills: [
      { name: "Advanced MLOps", role: "Automated Model Evaluation & Guardrails", level: "Learning" },
      { name: "Distributed Graph AI", role: "High-Throughput Optimization Solvers", level: "Learning" },
      { name: "Cloud Architecture", role: "AWS / GCP Edge Serverless Scaling", level: "Learning" },
    ],
    color: "from-indigo-500 to-cyan-500",
    accent: "text-indigo-400"
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredCategories = activeCategory === "All"
    ? skillCategories
    : skillCategories.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="py-28 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
              <Sparkles size={13} />
              <span>THE TECHNICAL CONSTELLATION</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Skills &amp; <span className="gradient-text">Architecture Ecosystem</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Every tool and framework in my arsenal is selected for high performance, modularity, and real-world scalability.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === "All"
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  : "glass text-muted-foreground hover:text-white hover:border-white/20"
              }`}
            >
              All Ecosystems
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.title
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "glass text-muted-foreground hover:text-white hover:border-white/20"
                }`}
              >
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredCategories.map((category) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={category.title}
                  className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-white/10 group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          <category.icon size={22} />
                        </div>
                        <h3 className="font-display font-bold text-lg text-white">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {/* Skill Items */}
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 rounded-2xl bg-secondary/40 hover:bg-secondary/80 border border-white/5 transition-colors group/item"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-sm text-slate-200 group-hover/item:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-muted-foreground border border-white/5">
                              {skill.level}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Terminal size={12} className={category.accent} />
                            <span>{skill.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Infinite Marquee Strip */}
          <div className="mt-20 pt-8 border-t border-white/10 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex gap-10 animate-shimmer whitespace-nowrap opacity-40">
              {skillCategories.flatMap(c => c.skills).concat(skillCategories.flatMap(c => c.skills)).map((s, i) => (
                <span key={i} className="text-xl font-display font-black tracking-widest text-slate-400 uppercase">
                  • {s.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
