import { 
  Code, 
  Database, 
  Cloud, 
  Layers, 
  Zap, 
  Smartphone, 
  Brain, 
  Settings, 
  Shield 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "⚡" },
        { name: "TypeScript", icon: "💎" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "⚙️" },
        { name: "R", icon: "📊" },
        { name: "SQL", icon: "🗃️" },
        { name: "PHP", icon: "🐘" },
        { name: "Kotlin", icon: "🤖" }
      ]
    },
    {
      title: "Web Development",
      icon: Layers,
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "Flask", icon: "🔥" },
        { name: "Django", icon: "🎯" },
        { name: "Express.js", icon: "🚀" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "Tailwind CSS", icon: "💨" }
      ]
    },
    {
      title: "Mobile & App Development",
      icon: Smartphone,
      skills: [
        { name: "Flutter", icon: "💙" },
        { name: "Kotlin", icon: "🤖" },
        { name: "Android Development", icon: "📱" },
        { name: "React Native", icon: "⚛️" },
        { name: "Cross-platform", icon: "🔄" }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: [
        { name: "MySQL", icon: "🐬" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Firebase", icon: "🔥" },
        { name: "SQLite", icon: "📱" },
        { name: "Redis", icon: "❤️" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Google Cloud Platform", icon: "🌐" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" },
        { name: "Serverless", icon: "⚡" },
        { name: "Microservices", icon: "🧩" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "Machine Learning", icon: "🤖" },
        { name: "Deep Learning", icon: "🧠" },
        { name: "Computer Vision", icon: "👁️" },
        { name: "TensorFlow", icon: "🔥" },
        { name: "PyTorch", icon: "🔥" },
        { name: "Scikit-learn", icon: "🧪" },
        { name: "OpenCV", icon: "📷" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      skills: [
        { name: "Git", icon: "🔀" },
        { name: "GitHub Actions", icon: "🤖" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Nginx", icon: "🟢" },
        { name: "Linux", icon: "🐧" },
        { name: "Automation", icon: "⚡" }
      ]
    },
    {
      title: "Cybersecurity & Networking",
      icon: Shield,
      skills: [
        { name: "Cybersecurity", icon: "🔒" },
        { name: "Network Security", icon: "🛡️" },
        { name: "Threat Analysis", icon: "🔍" },
        { name: "Network Configuration", icon: "🌍" },
        { name: "Risk Assessment", icon: "⚠️" },
        { name: "Incident Response", icon: "🚨" }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: Zap,
      skills: [
        { name: "IoT Development", icon: "🌐" },
        { name: "ESP8266", icon: "📡" },
        { name: "Arduino", icon: "🔧" },
        { name: "Sensor Integration", icon: "🔬" },
        { name: "Hardware Prototyping", icon: "⚙️" },
        { name: "Gesture Control", icon: "👋" }
      ]
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
                  <category.icon className="h-6 w-6 text-accent" />
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