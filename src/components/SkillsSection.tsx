const skillCategories = [
  {
    title: "Testing & QA",
    skills: ["Manual Testing", "Bug Identification", "UI/UX Validation", "Test Documentation", "Regression Testing"],
    color: "from-primary to-cyan-400",
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Programming",
    skills: ["Python", "Flask", "Java", "C", "SQL"],
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools"],
    color: "from-orange-400 to-rose-500",
  },
  {
    title: "Concepts",
    skills: ["SDLC", "Agile/Scrum", "Debugging", "Documentation", "API Testing"],
    color: "from-violet-400 to-purple-500",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient accent */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              
              <h3 className="font-heading text-lg font-semibold mb-4 mt-2">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
