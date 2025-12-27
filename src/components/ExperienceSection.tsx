import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Your University Name",
    period: "2022 - Present",
    description: "Focusing on software engineering, data structures, and quality assurance. Maintaining strong academic performance while participating in coding clubs and tech events.",
    highlights: ["GPA: 3.5/4.0", "Dean's List", "Programming Club Member"],
  },
  {
    type: "experience",
    title: "Software Testing Intern",
    organization: "Tech Company Name",
    period: "Summer 2024",
    description: "Assisted the QA team with manual testing of web applications. Documented bugs, created test cases, and participated in sprint planning meetings.",
    highlights: ["Manual Testing", "Bug Documentation", "Agile/Scrum"],
  },
  {
    type: "experience",
    title: "IT Support Attachment",
    organization: "Organization Name",
    period: "2023",
    description: "Provided technical support and helped maintain internal systems. Gained hands-on experience with troubleshooting and documentation.",
    highlights: ["Technical Support", "System Maintenance", "Documentation"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in technology and learning
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    {/* Type badge */}
                    <div className="flex items-center gap-2 mb-3">
                      {item.type === "education" ? (
                        <GraduationCap className="w-4 h-4 text-primary" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-primary" />
                      )}
                      <span className="text-xs uppercase tracking-wider text-primary font-medium">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">{item.organization}</p>
                    
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                      <Calendar size={14} />
                      {item.period}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
