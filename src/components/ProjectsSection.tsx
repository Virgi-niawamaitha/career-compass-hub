import { ExternalLink, Github, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Professional Portfolio Website",
    description: "A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations, SEO optimization, and deployment via Git/GitHub to production. Demonstrates proficiency in modern web development tools and workflows.",
    technologies: ["React", "TypeScript", "HTML5", "CSS3", "Git", "GitHub Pages"],
    category: "Web",
    demoUrl: "https://virgi-niawamaitha.github.io/career-compass-hub/",
    githubUrl: "https://github.com/virgi-niawamaitha/career-compass-hub",
    isLearning: false,
  },
  {
    title: "File Upload Management System",
    description: "A web-based file upload system with comprehensive input validation, error handling, and multi-format file management. Emphasized manual testing methodologies, edge case identification, and user experience validation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Form Validation", "Git"],
    category: "QA",
    demoUrl: "https://virgi-niawamaitha.github.io/pdf-whisper-scribe/",
    githubUrl: "https://github.com/virgi-niawamaitha/pdf-whisper-scribe",
    isLearning: false,
  },
  {
    title: "Interactive Blog Platform",
    description: "A fully responsive blog platform featuring structured content layout, smooth navigation, and cross-browser compatibility. Built to practice front-end fundamentals and conduct systematic UI/UX testing.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
    category: "Web",
    demoUrl: "https://virgi-niawamaitha.github.io/Tech_Blog/",
    githubUrl: "https://github.com/virgi-niawamaitha/Tech_Blog",
    isLearning: false,
  },
  {
    title: "Intelligent Learning Assistant",
    description: "An AI-powered educational assistant developed as a final-year project. Applied rigorous testing methodologies including system behavior analysis, response validation, and user acceptance testing in academic settings.",
    technologies: ["Python", "AI/ML", "Testing", "Git"],
    category: "AI/Data",
    demoUrl: "#",
    githubUrl: "https://github.com/virgi-niawamaitha",
    isLearning: false,
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
