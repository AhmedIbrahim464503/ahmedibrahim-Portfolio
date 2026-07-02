import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Roadmap" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll spy for active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 pointer-events-none flex justify-center px-4">
      {/* Floating Glass Dock */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 20 }}
        className={`pointer-events-auto flex items-center justify-between gap-4 px-4 py-2.5 rounded-full transition-all duration-500 max-w-5xl w-full ${
          isScrolled
            ? "glass border-cyan-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-2xl bg-card/80"
            : "bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Logo & Availability Pill */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="font-display text-xl font-extrabold tracking-tight flex items-center gap-1 group"
          >
            <span className="gradient-text font-black text-2xl">Ahmed</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform shadow-[0_0_8px_#06b6d4]" />
          </a>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for AI Projects</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/40 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 rounded-full border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-medium shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-white/20 transition-all hover:scale-105"
          >
            <a href="#contact" className="flex items-center gap-1.5 text-xs px-4">
              <Sparkles size={13} className="animate-spin-slow" />
              <span>Let's Build</span>
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-secondary/60 hover:bg-secondary text-foreground border border-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden fixed top-20 left-4 right-4 glass-card rounded-2xl p-6 z-50 border border-cyan-500/20 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs text-emerald-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for AI Projects</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    activeSection === link.href
                      ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.href && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </a>
              ))}

              <Button
                asChild
                className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white py-6"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 font-semibold"
                >
                  <Send size={16} />
                  Let's Connect
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
