import { ArrowRight, FileText, FolderOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10 text-center py-20">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Open to opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-up-delay-1 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text">Virginia Wamaitha</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-delay-2 text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-heading">
          Computer Science Student | QA & Software Testing Enthusiast | Web Developer
        </p>

        {/* Value statement */}
        <p className="animate-fade-up-delay-2 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground/80 mb-10 leading-relaxed">
          Building reliable, quality-focused software with strong foundations in HTML, CSS, JavaScript, and Git. 
          Passionate about Quality Assurance, software testing, and creating robust web applications. 
          Ready to grow and learn in professional engineering environments.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#resume" className="flex items-center gap-2">
              <FileText size={20} />
              View Resume
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#projects" className="flex items-center gap-2">
              <FolderOpen size={20} />
              View Projects
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#contact" className="flex items-center gap-2">
              <Mail size={20} />
              Contact Me
              <ArrowRight size={16} />
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
