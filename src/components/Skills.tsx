import { 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Globe, 
  Users, 
  Clock, 
  MessageSquare,
  Zap,
  Cpu
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: Code,
      skills: ["Python", "Flask", "React", "Java", "SQL", "HTML", "CSS"],
      color: "text-blue-500"
    },
    {
      title: "Cloud & Databases",
      icon: Cloud,
      skills: ["AWS", "Google Cloud", "Firebase"],
      color: "text-green-500"
    },
    {
      title: "AI/ML Libraries",
      icon: Brain,
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Streamlit"],
      color: "text-purple-500"
    },
    {
      title: "Tools",
      icon: Zap,
      skills: ["Git", "VS Code", "Linux"],
      color: "text-orange-500"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Communication", "Teamwork", "Time Management", "Work Ethic"],
      color: "text-pink-500"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and solving complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-card hover:-translate-y-2 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-accent-soft group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-surface text-foreground rounded-full border border-border hover:bg-accent-soft hover:border-accent transition-colors duration-300"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Skills */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Python Development", "Machine Learning", "Cloud Computing", "Data Analysis", "Problem Solving"].map((skill, index) => (
              <div
                key={skill}
                className="px-6 py-3 bg-gradient-accent rounded-full text-foreground font-medium hover:scale-105 transition-transform duration-300 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;