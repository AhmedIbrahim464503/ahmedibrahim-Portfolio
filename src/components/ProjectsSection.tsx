import { ExternalLink, Github, Search, Bot, Activity, HardDrive, Map, Layout, Server, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FactFinder",
    icon: Search,
    description:
      "AI-powered research assistant that automates document retrieval, processing, and knowledge extraction for efficient information gathering.",
    problem: "Manual research is time-consuming and inefficient",
    solution: "Automated agent retrieves and synthesizes information",
    tech: ["Python", "AI/ML", "NLP", "Automation"],
    color: "from-blue-500 to-cyan-500",
    github: "https://github.com/AhmedIbrahim464503/FactFinder",
  },
  {
    title: "SmartSubmit",
    icon: Bot,
    description:
      "Automated LMS submission agent for NUST, streamlining the assignment submission process and reducing manual repetitive tasks.",
    problem: "Repetitive manual submissions on LMS",
    solution: "Intelligent agent handles login and valid submissions",
    tech: ["Python", "Selenium", "Web Automation"],
    color: "from-purple-500 to-pink-500",
    github: "https://github.com/AhmedIbrahim464503/SmartSubmit",
  },
  {
    title: "Emergency Resource Allocation",
    icon: Activity,
    description:
      "Intelligent system using graph algorithms and AI to optimally distribute emergency resources across locations based on real-time demand.",
    problem: "Suboptimal dispatch during emergencies",
    solution: "Graph-based AI optimizes resource distribution",
    tech: ["Python", "Graph Algorithms", "AI", "Optimization"],
    color: "from-red-500 to-orange-500",
    github: "https://github.com/AhmedIbrahim464503/AI-Based-Emergency-Resource-Allocation-System",
  },
  {
    title: "LinkMaster",
    icon: HardDrive,
    description:
      "Modular Python application with PyQt5 GUI for filesystem management: analyzing inodes, hard/symbolic links, and secure deletion.",
    problem: "Complex low-level filesystem management",
    solution: "GUI tool for advanced file system operations",
    tech: ["Python", "PyQt5", "Linux", "System Programming"],
    color: "from-green-500 to-emerald-500",
    github: "https://github.com/AhmedIbrahim464503/LinkMaster",
  },
  {
    title: "Congestion Prediction System",
    icon: Map,
    description:
      "AI-driven system for predicting traffic congestion patterns and suggesting smart routing to optimize urban mobility.",
    problem: "Unpredictable urban traffic jams",
    solution: "ML models predict congestion for smart routing",
    tech: ["Python", "Machine Learning", "Data Science"],
    color: "from-yellow-500 to-amber-500",
    github: "https://github.com/AhmedIbrahim464503/Congestion-Prediction-And-Smart-Routing-System",
  },
  {
    title: "My Portfolio",
    icon: Layout,
    description:
      "Modern, responsive personal portfolio website featuring a premium UI, glassmorphism effects, and dynamic animations.",
    problem: "Need for a professional online presence",
    solution: "Showcasing skills and projects in a modern interface",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    color: "from-indigo-500 to-violet-500",
    github: "https://github.com/AhmedIbrahim464503/MyPortfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in AI/ML, automation, and system programming
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-2xl overflow-hidden hover-glow transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full"
              >
                {/* Project Header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.color}`}
                />

                <div className="p-8 flex flex-col flex-grow">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${project.color} opacity-80`}
                    >
                      <project.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold mb-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Problem/Solution */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-1 rounded shrink-0">
                        PROBLEM
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded shrink-0">
                        SOLUTION
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10 w-full"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
