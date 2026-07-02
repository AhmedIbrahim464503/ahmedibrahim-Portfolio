import { Github, Linkedin, Mail, ArrowUp, ShieldCheck, Cpu } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 border-t border-white/10 bg-black/80 backdrop-blur-xl relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & System Status */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#home" className="font-display text-2xl font-black tracking-tight">
              <span className="gradient-text">Ahmed Ibrahim</span>
            </a>
            
            <div className="flex items-center gap-2 px-3 py-1 rounded-full glass border border-emerald-500/20 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span>SYSTEM STATUS: ALL NODES OPERATIONAL • EDGE AI READY</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AhmedIbrahim464503"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:border-cyan-400/50 hover:bg-cyan-500/10 text-muted-foreground hover:text-cyan-300 transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ahmed-ibrahim-1165122a3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:border-violet-400/50 hover:bg-violet-500/10 text-muted-foreground hover:text-violet-300 transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ahmed.1036ibrahim491@gmail.com"
              className="p-3 rounded-xl glass hover:border-emerald-400/50 hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-300 transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Right Action: Copyright & Thruster */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl glass hover:border-cyan-400/40 text-xs text-slate-300 flex items-center gap-2 transition-all hover:-translate-y-1"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="text-cyan-400" />
            </button>

            <p className="text-muted-foreground text-xs font-mono">
              © {currentYear} Ahmed Ibrahim. Engineered with React &amp; Tailwind CSS.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
