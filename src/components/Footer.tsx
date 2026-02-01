import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="#home"
              className="font-display text-2xl font-bold gradient-text"
            >
              Ahmed<span className="text-foreground">.</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ahmed.1036ibrahim491@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Ahmed Ibrahim. All rights reserved.

            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
