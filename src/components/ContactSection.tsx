import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ahmed.1036ibrahim491@gmail.com",
    href: "mailto:ahmed.1036ibrahim491@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 3429384291",
    href: "tel:+3429384291",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/AhmedIbrahim464503",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ahmed-ibrahim-1165122a3",
    href: "https://linkedin.com",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, 
                  or opportunities to be part of your vision. Let's build something 
                  amazing together!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass rounded-xl p-4 flex items-center gap-4 hover-glow transition-all duration-300 hover:-translate-x-1 group block"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-primary" size={20} />
                  <h4 className="font-semibold">Location</h4>
                </div>
                <p className="text-muted-foreground">
                  Islamabad, Pakistan
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-8 glow-box">
              <h3 className="font-display text-2xl font-bold mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="bg-secondary/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-secondary/50 border-border focus:border-primary min-h-[150px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-glow"
                  size="lg"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
