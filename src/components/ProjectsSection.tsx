import { ExternalLink, Github, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Testing Suite",
    description: "Comprehensive manual testing project for an e-commerce platform, including test cases, bug reports, and regression testing documentation.",
    technologies: ["Manual Testing", "Jira", "Test Documentation", "Excel"],
    category: "QA",
    demoUrl: "#",
    githubUrl: "#",
    isLearning: true,
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio built with React and Tailwind CSS. Features smooth animations and clean design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Web",
    demoUrl: "#",
    githubUrl: "#",
    isLearning: false,
  },
  {
    title: "Task Manager API",
    description: "RESTful API built with Flask for managing tasks and projects. Includes authentication and CRUD operations.",
    technologies: ["Python", "Flask", "SQLite", "REST API"],
    category: "Backend",
    demoUrl: "#",
    githubUrl: "#",
    isLearning: true,
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather application that fetches real-time data from a weather API. Features location search and responsive design.",
    technologies: ["JavaScript", "HTML/CSS", "API Integration"],
    category: "Web",
    demoUrl: "#",
    githubUrl: "#",
    isLearning: true,
  },
  {
    title: "Bug Tracker System",
    description: "A simple bug tracking application with priority levels, status updates, and team assignment features.",
    technologies: ["Java", "JavaFX", "MySQL"],
    category: "Desktop",
    demoUrl: "#",
    githubUrl: "#",
    isLearning: true,
  },
  {
    title: "Data Analysis Scripts",
    description: "Collection of Python scripts for data cleaning, visualization, and basic machine learning experiments.",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    category: "AI/Data",
    demoUrl: "#",
    githubUrl: "#",
    isLearning: true,
  },
];

const categoryColors: Record<string, string> = {
  QA: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Web: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Backend: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Desktop: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "AI/Data": "bg-violet-500/20 text-violet-400 border-violet-500/30",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills and learning journey
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[project.category]}`}>
                  {project.category}
                </span>
                {project.isLearning && (
                  <Badge variant="outline" className="text-xs text-muted-foreground border-muted-foreground/30">
                    <Tag size={12} className="mr-1" />
                    Learning
                  </Badge>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-auto">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="mr-1.5" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={14} className="mr-1.5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
