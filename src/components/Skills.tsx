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
    <section id="skills" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_hsl(240_100%_70%_/_0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_hsl(280_100%_70%_/_0.1),_transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full mb-6 shadow-lg shadow-cyan-400/20" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building intelligent solutions and solving complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-900/60 hover:border-violet-400/50 transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
              
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 group-hover:from-cyan-400/30 group-hover:to-violet-400/30 transition-all duration-300">
                  <category.icon className="h-8 w-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white ml-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-800/50 text-slate-300 rounded-xl border border-slate-600/30 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-violet-400/20 hover:text-white hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer"
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

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/50 rounded-full" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-violet-400/50 rounded-full" />
            </div>
          ))}
        </div>

        {/* Featured Skills */}
        <div className="mt-20 text-center animate-fade-in">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              { name: "Python Development", icon: "🐍" },
              { name: "Machine Learning", icon: "🤖" },
              { name: "Cloud Computing", icon: "☁️" },
              { name: "Data Analysis", icon: "📈" },
              { name: "Problem Solving", icon: "🧩" }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 rounded-2xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-400/20 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="group-hover:tracking-wide transition-all duration-300 text-lg">
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