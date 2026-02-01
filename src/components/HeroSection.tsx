import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/50 glow-box">
              <img 
                src={profileImage} 
                alt="Ahmed Ibrahim" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1
            className="font-display text-5xl md:text-7xl font-bold mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Ahmed <span className="gradient-text">Ibrahim</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            AI/ML Engineer | Building Intelligent Agents & Scalable Systems
          </p>

          {/* Description */}
          <p
            className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Passionate about creating intelligent systems that solve real-world problems.
            Focused on agent-based architectures, RAG systems, and full-stack development.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow text-lg px-8"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-lg px-8"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center gap-6 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ahmed.1036ibrahim491@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
