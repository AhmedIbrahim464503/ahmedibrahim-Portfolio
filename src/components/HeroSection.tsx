import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
        >
            <ParticleBackground />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />

            <div className="container mx-auto px-4 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        {/* Name */}
                        <h1
                            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-6 animate-fade-in tracking-tight"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Ahmed <span className="gradient-text">Ibrahim</span>
                        </h1>

                        {/* Tagline */}
                        <p
                            className="text-2xl md:text-3xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in font-light"
                            style={{ animationDelay: "0.3s" }}
                        >
                            AI/ML Engineer | Building Intelligent Agents & SCALABLE Systems
                        </p>

                        {/* Description */}
                        <p
                            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in leading-relaxed"
                            style={{ animationDelay: "0.4s" }}
                        >
                            Passionate about creating intelligent systems that solve real-world problems.
                            Focused on agent-based architectures, RAG systems, and full-stack development.
                        </p>

                        {/* Contact Info (Phones) */}
                        <div
                            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-10 animate-fade-in text-muted-foreground"
                            style={{ animationDelay: "0.5s" }}
                        >
                            <div className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Phone size={24} />
                                <span className="text-lg">+92 342 9384291</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Phone size={24} />
                                <span className="text-lg">+92 315 1983625</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12 animate-fade-in"
                            style={{ animationDelay: "0.6s" }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow text-xl px-10 py-6 h-auto"
                            >
                                <a href="#projects">View Projects</a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-primary/50 hover:bg-primary/10 text-xl px-10 py-6 h-auto"
                            >
                                <a href="#contact">Contact Me</a>
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div
                            className="flex justify-center lg:justify-start gap-8 animate-fade-in"
                            style={{ animationDelay: "0.7s" }}
                        >
                            <a
                                href="https://github.com/AhmedIbrahim464503"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                            >
                                <Github size={32} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                            >
                                <Linkedin size={32} />
                            </a>
                            <a
                                href="mailto:ahmed.1036ibrahim491@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                            >
                                <Mail size={32} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Avatar */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.1s" }}>
                        <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden ring-4 ring-primary/50 glow-box shadow-2xl relative z-20">
                            <img
                                src={profileImage}
                                alt="Ahmed Ibrahim"
                                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                    <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                        <ArrowDown size={32} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
