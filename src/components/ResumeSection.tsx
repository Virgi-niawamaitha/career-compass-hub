import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Download my resume to learn more about my experience, education, and skills
          </p>

          {/* Resume preview card */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-cyan-500/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            
            <div className="relative p-8 sm:p-12 rounded-2xl bg-card border border-border">
              {/* Document icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>

              <h3 className="font-heading text-2xl font-semibold mb-2">
                Your Name - Resume
              </h3>
              <p className="text-muted-foreground mb-8">
                Computer Science Student | QA & Software Testing
              </p>

              {/* Resume highlights */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">Skills</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-2xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="/resume.pdf" download>
                    <Download size={20} className="mr-2" />
                    Download CV
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Eye size={20} className="mr-2" />
                    View Online
                  </a>
                </Button>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                PDF format • Last updated: December 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
