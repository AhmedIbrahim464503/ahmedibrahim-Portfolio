import { motion } from "framer-motion";
import { 
  GraduationCap, Brain, Rocket, Target, ShieldCheck, 
  Server, Cpu, Sparkles, TerminalSquare, Code2 
} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
              <Sparkles size={13} />
              <span>THE ARCHITECT'S VISION</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4 tracking-tight">
              About <span className="gradient-text">Ahmed Ibrahim</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Bridging cutting-edge Artificial Intelligence with resilient backend systems engineering.
            </p>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Bento Card 1: Main Story & Narrative (Spans 7 cols) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-7 glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden border border-white/10"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    <Brain size={26} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">Driven by Systems & Intelligence</h3>
                    <p className="text-xs text-cyan-300 font-mono">BS Computer Science @ NUST</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  I am a passionate Computer Science undergraduate at the <strong className="text-white">National University of Sciences &amp; Technology (NUST)</strong>, focused on designing systems that do not merely function, but reason and scale autonomously.
                </p>

                <p className="text-muted-foreground text-base leading-relaxed">
                  Whether engineering <strong className="text-cyan-300">zero-hallucination RAG platforms</strong> like Rahbar-e-Deen, solving distributed WebSocket concurrency under heavy traffic, or crafting multimodal edge vision pipelines, my philosophy centers on robustness, clarity, and uncompromising performance.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-lg bg-secondary/80 border border-white/5 text-xs text-slate-300 flex items-center gap-1.5">
                  <Code2 size={13} className="text-cyan-400" /> Clean Architecture
                </span>
                <span className="px-3 py-1 rounded-lg bg-secondary/80 border border-white/5 text-xs text-slate-300 flex items-center gap-1.5">
                  <Server size={13} className="text-violet-400" /> High Availability
                </span>
                <span className="px-3 py-1 rounded-lg bg-secondary/80 border border-white/5 text-xs text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-emerald-400" /> Edge AI Fidelity
                </span>
              </div>
            </motion.div>

            {/* Bento Card 2: Academic Journey & Progress Meter (Spans 5 cols) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-5 glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden border border-white/10"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-violet-600/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    <GraduationCap size={26} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    CLASS OF 2027
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">Academic Foundation</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Pursuing Bachelor of Science in Computer Science at Pakistan's premier engineering university.
                </p>

                {/* Degree Progress Bar */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Degree Progression</span>
                    <span className="text-cyan-400 font-bold">Advanced Standing</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-secondary overflow-hidden border border-white/10 p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>Core CS &amp; Algorithms</span>
                    <span>AI Research &amp; Distributed Systems</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 font-mono text-xs text-slate-300 flex items-center gap-3">
                <TerminalSquare size={18} className="text-cyan-400 shrink-0" />
                <span>Focus: Multi-Agent Systems, Graph Optimization &amp; Linux System Internals.</span>
              </div>
            </motion.div>

            {/* Bento Card 3: Live Engineering Stats (Spans 4 cols) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-4 glass-card rounded-3xl p-6 flex flex-col justify-center items-center text-center border border-white/10 relative overflow-hidden group"
            >
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                <Rocket size={24} />
              </div>
              <span className="font-display text-4xl sm:text-5xl font-black gradient-text mb-1">12+</span>
              <h4 className="text-white font-bold text-base">Production Projects</h4>
              <p className="text-xs text-muted-foreground mt-1">End-to-End AI pipelines, automation scrapers &amp; backends engineered.</p>
            </motion.div>

            {/* Bento Card 4: Performance & Latency Stat (Spans 4 cols) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-4 glass-card rounded-3xl p-6 flex flex-col justify-center items-center text-center border border-white/10 relative overflow-hidden group"
            >
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <span className="font-display text-4xl sm:text-5xl font-black text-emerald-400 mb-1">&lt; 15ms</span>
              <h4 className="text-white font-bold text-base">Messaging Latency</h4>
              <p className="text-xs text-muted-foreground mt-1">Achieved via horizontally scaled Nginx &amp; Redis Pub/Sub architecture.</p>
            </motion.div>

            {/* Bento Card 5: Innovation & Problem Solving (Spans 4 cols) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-4 glass-card rounded-3xl p-6 flex flex-col justify-center items-center text-center border border-white/10 relative overflow-hidden group"
            >
              <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-400 mb-3 group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <span className="font-display text-4xl sm:text-5xl font-black text-violet-300 mb-1">99.4%</span>
              <h4 className="text-white font-bold text-base">Extraction Fidelity</h4>
              <p className="text-xs text-muted-foreground mt-1">Multimodal LayoutLMv3 + Edge Vision document automation precision.</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
