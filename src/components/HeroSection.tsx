import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f3a_1px,transparent_1px),linear-gradient(to_bottom,#1a1f3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Status badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-primary">Available for internships</span>
          </div>

          {/* Main heading */}
          <div className="animate-fade-up-delay-1 space-y-4">
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
              Computer Science Student
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Virginia
              <br />
              <span className="gradient-text">Wamaitha</span>
            </h1>
          </div>

          {/* Description */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground/90 leading-relaxed max-w-xl">
            AI Enthusiast exploring software testing and web development. 
            Building projects, learning QA practices, and seeking opportunities to grow in tech.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="lg" asChild className="group">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social links */}
          <div className="animate-fade-up-delay-4 flex items-center gap-4 pt-4">
            <a 
              href="https://github.com/Virgi-niawamaitha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/techgirlvirginia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:wamaithavirginia83@gmail.com"
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="animate-fade-up-delay-2 relative hidden lg:flex items-center justify-center">
          {/* Profile image placeholder with geometric frame */}
          <div className="relative w-[400px] h-[500px]">
            {/* Decorative frame */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl rotate-6"></div>
            <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl -rotate-3"></div>
            
            {/* Main container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-secondary via-secondary/80 to-primary/10 border border-border flex items-center justify-center">
              {/* Replace this div with an actual image: <img src="/your-photo.jpg" alt="Virginia Wamaitha" className="w-full h-full object-cover" /> */}
              <div className="text-center space-y-4 p-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center text-5xl font-bold text-primary">
                  VW
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-24 bg-primary/30 rounded mx-auto"></div>
                  <div className="h-2 w-32 bg-primary/20 rounded mx-auto"></div>
                  <div className="h-2 w-20 bg-primary/10 rounded mx-auto"></div>
                </div>
              </div>
            </div>

            {/* Floating skill badges */}
            <div className="absolute -left-4 top-20 px-4 py-2 rounded-lg bg-card border border-border shadow-lg backdrop-blur-sm animate-float">
              <p className="text-xs font-medium">Web Dev</p>
            </div>
            <div className="absolute -right-4 top-40 px-4 py-2 rounded-lg bg-card border border-border shadow-lg backdrop-blur-sm animate-float-delay">
              <p className="text-xs font-medium">QA Testing</p>
            </div>
            <div className="absolute left-8 -bottom-4 px-4 py-2 rounded-lg bg-card border border-border shadow-lg backdrop-blur-sm animate-float-delay-2">
              <p className="text-xs font-medium">AI/ML</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
