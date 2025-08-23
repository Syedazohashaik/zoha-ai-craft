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
  Cpu,
  Flame,
  Layers,
  Server,
  Terminal,
  GitBranch,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: Code,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Flask", icon: "🌶️" },
        { name: "React", icon: "⚛️" },
        { name: "Java", icon: "☕" },
        { name: "SQL", icon: "🗃️" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" }
      ],
      color: "text-primary"
    },
    {
      title: "Cloud & Databases",
      icon: Cloud,
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Google Cloud", icon: "🌤️" },
        { name: "Firebase", icon: "🔥" }
      ],
      color: "text-accent"
    },
    {
      title: "AI/ML Libraries",
      icon: Brain,
      skills: [
        { name: "TensorFlow", icon: "🧠" },
        { name: "Scikit-learn", icon: "📊" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "OpenCV", icon: "👁️" },
        { name: "Streamlit", icon: "🚀" }
      ],
      color: "text-primary-glow"
    },
    {
      title: "Tools",
      icon: Zap,
      skills: [
        { name: "Git", icon: "📝" },
        { name: "VS Code", icon: "💻" },
        { name: "Linux", icon: "🐧" }
      ],
      color: "text-secondary-foreground"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Communication", icon: "💬" },
        { name: "Teamwork", icon: "🤝" },
        { name: "Time Management", icon: "⏰" },
        { name: "Work Ethic", icon: "💪" }
      ],
      color: "text-muted-foreground"
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
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-2 px-4 py-2 text-sm font-medium bg-surface text-foreground rounded-xl border border-border hover:bg-gradient-tech hover:text-white hover:border-accent hover:shadow-soft transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="text-lg group-hover/skill:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="group-hover/skill:font-semibold transition-all duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Skills */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { name: "Python Development", icon: "🐍" },
              { name: "Machine Learning", icon: "🤖" },
              { name: "Cloud Computing", icon: "☁️" },
              { name: "Data Analysis", icon: "📈" },
              { name: "Problem Solving", icon: "🧩" }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="group flex items-center gap-3 px-6 py-4 bg-gradient-primary rounded-2xl text-white font-medium hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-xl cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="group-hover:tracking-wide transition-all duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;