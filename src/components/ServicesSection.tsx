import { motion } from "framer-motion";
import { Bot, Globe, Zap, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bot,
    title: "AI Agent & RAG Engineering",
    description: "Designing autonomous, task-driven LLM agents and enterprise RAG pipelines that synthesize complex knowledge without hallucinations.",
    features: [
      "Custom LangChain & LangGraph multi-agent workflows",
      "Vector reranking & hybrid retrieval (Pinecone / Chroma)",
      "Zero-hallucination citation guardrails",
      "Multimodal OCR & LayoutLMv3 document extraction"
    ],
    color: "from-cyan-500 to-blue-600",
    badge: "Most Requested"
  },
  {
    icon: Globe,
    title: "Distributed Backend & Full-Stack",
    description: "Architecting high-concurrency real-time web applications and fault-tolerant distributed server clusters built for speed.",
    features: [
      "Sub-15ms WebSocket real-time messaging backends",
      "Horizontally scalable Nginx load balancing & Redis Pub/Sub",
      "Modern Next.js & React 18 responsive user interfaces",
      "Relational & vector database optimization"
    ],
    color: "from-violet-500 to-purple-600",
    badge: "Enterprise Grade"
  },
  {
    icon: Zap,
    title: "Autonomous Scraping & Automation",
    description: "Creating intelligent web scrapers and system automation scripts that streamline complex workflows and extract structured data.",
    features: [
      "Autonomous OpenClaw curation agents",
      "Headless Selenium & BeautifulSoup scraping pipelines",
      "Constraint programming (OR-Tools) solvers",
      "Automated WhatsApp & Telegram broadcasting bots"
    ],
    color: "from-emerald-500 to-teal-600",
    badge: "High ROI"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative z-10 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
              <Sparkles size={13} />
              <span>ENGINEERING OFFERINGS</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Professional <span className="gradient-text">Engineering Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Partnering with startups, research teams, and enterprises to ship production-ready intelligent systems.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                key={service.title}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden group shadow-2xl"
              >
                {/* Gradient Top Line */}
                <div className={`h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r ${service.color}`} />

                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <service.icon size={28} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-secondary text-cyan-300 border border-white/5">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className="w-full rounded-2xl bg-secondary/80 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 text-white font-semibold py-6 transition-all group/btn border border-white/5"
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    <span>Initiate Project Consultation</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
