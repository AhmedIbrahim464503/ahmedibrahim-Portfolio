import { GraduationCap, Brain, Rocket, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Focus",
      description: "Building intelligent agents and ML systems",
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Always exploring cutting-edge technologies",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Turning complex problems into elegant solutions",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learner",
      description: "Committed to growth and learning",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">Ahmed Ibrahim</span>, 
                a passionate Computer Science student at the{" "}
                <span className="text-foreground">
                  National University of Sciences & Technology (NUST)
                </span>
                , expected to graduate in 2027.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech is driven by a deep fascination with artificial intelligence 
                and machine learning. I specialize in building intelligent agents, developing 
                RAG-based systems, and creating automation solutions that solve real-world problems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring new AI technologies and frameworks. I believe 
                in writing clean, maintainable code and building products that make a difference.
              </p>

              {/* Education Card */}
              <div className="glass rounded-xl p-6 glow-box">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">
                      BS Computer Science
                    </h3>
                    <p className="text-muted-foreground">
                      National University of Sciences & Technology (NUST)
                    </p>
                    <p className="text-primary text-sm mt-1">
                      Expected Graduation: 2027
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass rounded-xl p-6 hover-glow transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
