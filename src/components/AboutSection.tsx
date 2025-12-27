import { Code, Bug, Lightbulb, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Bug,
    title: "Quality-Focused",
    description: "Dedicated to finding and preventing bugs before they reach production",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, well-documented, and efficient code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Approaching challenges with creativity and analytical thinking",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learner",
    description: "Always expanding skills and staying current with technologies",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of who I am and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a Computer Science student with a strong passion for software quality 
              and development. My journey began with curiosity about how software works, 
              and has evolved into a deep interest in ensuring it works <em>correctly</em>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether I'm writing test cases, debugging code, or building new features, 
              I approach each task with attention to detail and a commitment to excellence. 
              I believe that great software is built on a foundation of thorough testing 
              and thoughtful design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently seeking opportunities in QA Engineering, Software Development, 
              or AI/Data roles where I can contribute my skills while continuing to 
              grow as a professional.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
