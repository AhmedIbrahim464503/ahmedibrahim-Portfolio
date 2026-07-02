import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, Github, Linkedin, Send, MapPin, Clock, 
  Copy, Check, Sparkles, Terminal, ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Address",
    value: "ahmed.1036ibrahim491@gmail.com",
    copyValue: "ahmed.1036ibrahim491@gmail.com",
    href: "mailto:ahmed.1036ibrahim491@gmail.com",
  },
  {
    icon: Phone,
    label: "Primary Phone",
    value: "+92 342 9384291",
    copyValue: "+92 342 9384291",
    href: "tel:+923429384291",
  },
  {
    icon: Phone,
    label: "Secondary Phone",
    value: "+92 315 1983625",
    copyValue: "+92 315 1983625",
    href: "tel:+923151983625",
  },
  {
    icon: Github,
    label: "GitHub Profile",
    value: "github.com/AhmedIbrahim464503",
    copyValue: "https://github.com/AhmedIbrahim464503",
    href: "https://github.com/AhmedIbrahim464503",
  },
  {
    icon: Linkedin,
    label: "LinkedIn Profile",
    value: "linkedin.com/in/ahmed-ibrahim-1165122a3",
    copyValue: "https://linkedin.com/in/ahmed-ibrahim-1165122a3",
    href: "https://linkedin.com/in/ahmed-ibrahim-1165122a3",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7a8fc785-05cb-4f44-ac23-be8c739a5d25",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#8b5cf6", "#10b981"],
        });

        toast({
          title: "🚀 Transmission Received!",
          description: "Thank you for reaching out, Ahmed will get back to you shortly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
              <Sparkles size={13} />
              <span>THE COMMAND PORTAL</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Initiate <span className="gradient-text">Connection</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Have a visionary AI pipeline to build, a distributed backend bottleneck to solve, or looking for an exceptional engineer? Let's talk.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Live Status & Interactive Contact Cards (Spans 5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Live Timezone & Availability Widget */}
              <div className="glass-card rounded-3xl p-6 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-gradient-to-br from-cyan-950/20 to-slate-950">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                    <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
                      Available for Hire
                    </span>
                  </div>
                  <ShieldCheck size={18} className="text-cyan-400" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400">
                      <Clock size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-muted-foreground block">ISLAMABAD (PKT • UTC+5)</span>
                      <span className="font-mono text-lg font-bold text-white">{localTime || "Loading..."}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-300 block">Location</span>
                    <span className="text-xs text-cyan-300 flex items-center gap-1 justify-end mt-0.5">
                      <MapPin size={12} /> NUST Campus
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-bold px-1">
                  Direct Communication Channels
                </h3>
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card rounded-2xl p-4 flex items-center justify-between border border-white/10 hover:border-cyan-500/40 transition-all group block"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-secondary/80 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                        <info.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                          {info.value}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleCopy(info.copyValue, info.label, e)}
                      className="p-2 rounded-lg bg-secondary/40 hover:bg-secondary text-muted-foreground hover:text-white transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedKey === info.label ? (
                        <Check size={15} className="text-emerald-400" />
                      ) : (
                        <Copy size={15} />
                      )}
                    </button>
                  </a>
                ))}
              </div>

            </div>

            {/* Right Column: Glass Command Form (Spans 7 cols) */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/15 relative shadow-2xl overflow-hidden"
            >
              <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500" />

              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                    <Terminal size={22} className="text-cyan-400" />
                    <span>Transmit Message</span>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">End-to-end encrypted dispatch directly to Ahmed's terminal.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono font-semibold text-slate-300 mb-2 block">
                      YOUR NAME *
                    </label>
                    <Input
                      placeholder="Alan Turing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black/50 border-white/10 focus:border-cyan-400 rounded-xl py-6 text-sm text-white placeholder:text-muted-foreground/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono font-semibold text-slate-300 mb-2 block">
                      YOUR EMAIL *
                    </label>
                    <Input
                      type="email"
                      placeholder="alan@bletchleypark.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black/50 border-white/10 focus:border-cyan-400 rounded-xl py-6 text-sm text-white placeholder:text-muted-foreground/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-semibold text-slate-300 mb-2 block">
                    PROJECT SUBJECT / INQUIRY *
                  </label>
                  <Input
                    placeholder="e.g. Architecting a Scalable Agentic RAG Platform"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-black/50 border-white/10 focus:border-cyan-400 rounded-xl py-6 text-sm text-white placeholder:text-muted-foreground/50"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-semibold text-slate-300 mb-2 block">
                    MESSAGE CONTENT *
                  </label>
                  <Textarea
                    placeholder="Describe your architecture requirements, timeline, or engineering opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black/50 border-white/10 focus:border-cyan-400 rounded-xl min-h-[160px] resize-none text-sm text-white p-4 placeholder:text-muted-foreground/50"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-violet-600 hover:opacity-95 text-white font-bold py-7 text-base shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2 font-mono text-sm">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-solid border-r-transparent" />
                      <span>Transmitting Payload...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send size={18} />
                      <span>Dispatch Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
