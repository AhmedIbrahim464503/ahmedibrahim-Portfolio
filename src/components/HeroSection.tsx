import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowDown, Github, Linkedin, Mail, Phone, Download, 
  Terminal, Sparkles, CheckCircle2, Copy, Check, Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const agentPrompts = [
  {
    title: "Real-Time WebSocket Architecture",
    query: "Architect a scalable 100k concurrent WebSocket messaging infrastructure.",
    logs: [
      "⚡ [Agent Cluster] Initializing node simulation pool...",
      "🔍 Analyzing bottlenecks: Single Nginx proxy memory limits.",
      "🌐 Solution: Distributed Nginx upstream load balancing + Node.js worker threads.",
      "💾 State Sync: Integrating Redis Pub/Sub cluster for low-latency message propagation.",
      "✅ Result: Fault-tolerant infrastructure achieving sub-15ms messaging latency under peak load."
    ],
    badge: "Distributed Systems"
  },
  {
    title: "Zero-Hallucination Islamic RAG",
    query: "Design an enterprise RAG pipeline grounded strictly in verified Quran & Hadith.",
    logs: [
      "📚 Loading Quran, Hadith & Tafseer embeddings into Pinecone vector index...",
      "🛡️ Applying multi-stage reranking & semantic filtering.",
      "⚙️ Synthesizing prompt with Llama 3.1 & Gemini reasoning guardrails.",
      "🔒 Zero-Hallucination Check: Verifying exact ayah citation match.",
      "✅ Output: 100% verified scholarly grounded answer generated."
    ],
    badge: "LangChain RAG"
  },
  {
    title: "Intelligent Document Processing",
    query: "Extract structured JSON from scanned receipts without layout loss.",
    logs: [
      "👁️ Edge Vision: Auto-cropping & deskewing via OpenCV.js...",
      "🧠 Executing LayoutLMv3 multimodal spatial-text attention model.",
      "📊 Bounding box detection: Mapping line items and totals.",
      "✅ Extracted structured JSON with 99.4% spatial fidelity."
    ],
    badge: "Multimodal AI"
  }
];

const HeroSection = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(agentPrompts[0].logs.length);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const runSimulation = (index: number) => {
    setSelectedPrompt(index);
    setIsRunning(true);
    setCurrentStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setCurrentStep(step);
      if (step >= agentPrompts[index].logs.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 450);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Atmospheric Aurora Beams */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Holographic Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <Sparkles size={14} className="text-cyan-400 animate-spin-slow" />
              <span>BSCS NUST '27 • Agentic AI & Systems Architect</span>
            </div>

            {/* Name & Main Title */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              Hi, I'm <span className="text-white">Ahmed</span>{" "}
              <span className="gradient-text">Ibrahim</span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-300 mb-6 tracking-wide">
              Architecting <span className="text-cyan-400 font-medium">Intelligent AI Agents</span> &amp;{" "}
              <span className="text-violet-400 font-medium">Scalable Backend Systems</span>.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Passionate engineering student crafting production-grade autonomous LLM agents, high-concurrency distributed infrastructures, and advanced RAG pipelines that solve mission-critical real-world problems.
            </p>

            {/* Quick Contact Interactive Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 text-xs sm:text-sm">
              <button 
                onClick={() => copyToClipboard("+92 342 9384291")}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all text-slate-300 group"
              >
                <Phone size={14} className="text-cyan-400" />
                <span>+92 342 9384291</span>
                {copiedPhone === "+92 342 9384291" ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Copy size={13} className="text-muted-foreground group-hover:text-cyan-300 opacity-60" />
                )}
              </button>
              <button 
                onClick={() => copyToClipboard("+92 315 1983625")}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass hover:border-violet-500/40 hover:bg-violet-500/10 transition-all text-slate-300 group"
              >
                <Phone size={14} className="text-violet-400" />
                <span>+92 315 1983625</span>
                {copiedPhone === "+92 315 1983625" ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Copy size={13} className="text-muted-foreground group-hover:text-violet-300 opacity-60" />
                )}
              </button>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:opacity-95 text-slate-950 font-bold text-base px-8 py-6 h-auto shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-transform hover:scale-[1.02]"
              >
                <a href="#projects" className="flex items-center gap-2">
                  <Terminal size={18} />
                  Explore Projects
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl glass border-cyan-500/40 hover:bg-cyan-500/10 text-white font-semibold text-base px-8 py-6 h-auto transition-all"
              >
                <a
                  href="/Ahmed_Ibrahim_Resume.pdf"
                  download="Ahmed_Ibrahim_Resume.pdf"
                  className="flex items-center gap-2"
                >
                  <Download size={18} className="text-cyan-400" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-5 items-center">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Connect:</span>
              <a
                href="https://github.com/AhmedIbrahim464503"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:border-cyan-400/50 hover:bg-cyan-500/10 text-muted-foreground hover:text-cyan-300 transition-all transform hover:scale-110 shadow-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ahmed-ibrahim-1165122a3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:border-violet-400/50 hover:bg-violet-500/10 text-muted-foreground hover:text-violet-300 transition-all transform hover:scale-110 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ahmed.1036ibrahim491@gmail.com"
                className="p-3 rounded-xl glass hover:border-emerald-400/50 hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-300 transition-all transform hover:scale-110 shadow-lg"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Prominent Holographic Profile Picture + AI Simulator Stack */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center gap-6 w-full max-w-md mx-auto"
          >
            {/* Holographic Avatar Card (Permanently Visible Front & Center) */}
            <div className="w-full rounded-3xl glass-card p-6 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/25 transition-all" />
              
              {/* Glowing Avatar Ring */}
              <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-violet-500 to-emerald-400 shadow-[0_0_30px_rgba(6,182,212,0.4)] shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                  <img
                    src={profileImage}
                    alt="Ahmed Ibrahim"
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Profile Details */}
              <div className="relative z-10 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[11px] font-mono font-bold border border-cyan-500/20 mb-2">
                  <CheckCircle2 size={13} className="text-cyan-400" />
                  <span>VERIFIED ARCHITECT</span>
                </div>
                <h3 className="font-display font-black text-2xl text-white">
                  Ahmed Ibrahim
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">NUST Computer Science '27</p>

                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-3">
                  <span className="px-2 py-0.5 rounded bg-secondary/80 text-[10px] font-mono text-cyan-200 border border-white/5">
                    ⚡ LangChain
                  </span>
                  <span className="px-2 py-0.5 rounded bg-secondary/80 text-[10px] font-mono text-violet-200 border border-white/5">
                    🛡️ Distributed Node
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Live AI Agent Console */}
            <div className="w-full rounded-3xl glass-card overflow-hidden flex flex-col border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="p-5 flex flex-col bg-slate-950/90 font-mono text-xs">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] text-muted-foreground font-sans pl-1">live-agent-simulator.sys</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-sans font-semibold">
                    {agentPrompts[selectedPrompt].badge}
                  </span>
                </div>

                {/* Preset Buttons */}
                <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1 font-sans">
                  {agentPrompts.map((p, i) => (
                    <button
                      key={p.title}
                      onClick={() => runSimulation(i)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all flex items-center gap-1 ${
                        selectedPrompt === i
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm"
                          : "bg-secondary/60 text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <Play size={10} className={selectedPrompt === i ? "text-cyan-400" : ""} />
                      {p.title.split(" ")[0]}
                    </button>
                  ))}
                </div>

                {/* Query Prompt */}
                <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-cyan-200 mb-3 font-sans font-medium text-[12px] flex items-start gap-2">
                  <span className="text-cyan-400 font-bold shrink-0">Query:</span>
                  <span>{agentPrompts[selectedPrompt].query}</span>
                </div>

                {/* Live Execution Logs */}
                <div className="h-36 overflow-y-auto space-y-2 pr-1 text-slate-300">
                  {agentPrompts[selectedPrompt].logs.slice(0, currentStep).map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`p-2 rounded bg-black/40 border border-white/5 flex items-start gap-2 leading-relaxed ${
                        idx === agentPrompts[selectedPrompt].logs.length - 1 ? "text-emerald-300 border-emerald-500/20" : ""
                      }`}
                    >
                      <span>{log}</span>
                    </motion.div>
                  ))}
                  {isRunning && (
                    <div className="flex items-center gap-2 text-cyan-400 animate-pulse p-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>Executing autonomous agent loop...</span>
                    </div>
                  )}
                </div>

                {/* Trigger Button */}
                <button
                  onClick={() => runSimulation((selectedPrompt + 1) % agentPrompts.length)}
                  disabled={isRunning}
                  className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 hover:from-cyan-500/30 hover:to-violet-500/30 border border-cyan-500/40 text-cyan-300 font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  <Play size={14} />
                  <span>Simulate Next Architecture Pipeline</span>
                </button>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-cyan-400 transition-colors"
          >
            <span>Explore Architecture</span>
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
