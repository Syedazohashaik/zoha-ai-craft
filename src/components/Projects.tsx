import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, ArrowRight, Zap, Brain, Network, Database, Smartphone, Code, Server, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MedMate",
      subtitle: "Universal Health Assistant App",
      description: "Mobile health assistant app for medication tracking, prescriptions, and doctor appointments with comprehensive health management features.",
      technologies: ["Flutter", "Python", "Firebase", "MongoDB", "React", "Flask", "Node.js"],
      year: 2025,
      type: "Mobile Health App",
      icon: <Smartphone className="h-6 w-6" />,
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    },
    {
      title: "Task Scheduler",
      subtitle: "Email-Based Task Management",
      description: "Task manager with email subscription, verification, and hourly reminders for efficient productivity management.",
      technologies: ["PHP", "CRON", "Gmail SMTP", "PHPMailer"],
      year: 2025,
      type: "Web Application",
      icon: <Server className="h-6 w-6" />,
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    },
    {
      title: "Academic Journal Portal",
      subtitle: "CRUD Journal Management System",
      description: "CRUD system for managing academic journals with user authentication and comprehensive journal management features.",
      technologies: ["Streamlit", "SQLite", "Python"],
      year: 2025,
      type: "Web Application",
      icon: <Database className="h-6 w-6" />,
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    },
    {
      title: "Appliance Control Interface",
      subtitle: "IoT Mobile Controller",
      description: "Android project to control appliances with a mobile app, enabling smart home automation through mobile interface.",
      technologies: ["Kotlin", "IoT", "Android"],
      year: 2025,
      type: "Mobile & IoT",
      icon: <Zap className="h-6 w-6" />,
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    },
    {
      title: "Holoscene",
      subtitle: "Holographic Display System",
      description: "Interactive holographic display system with gesture-controlled features for immersive user experiences and educational demonstrations.",
      technologies: ["ESP8266", "Touch Sensors", "Hardware", "Gesture Control", "Python", "OpenCV"],
      year: 2024,
      type: "IoT & Hardware",
      icon: <Zap className="h-6 w-6" />,
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    },
    {
      title: "Student Chatbot",
      subtitle: "College Office Automation",
      description: "AI-powered chatbot to automate fee payments and office tasks, streamlining administrative processes for students and staff.",
      technologies: ["Python", "AI", "Automation", "Natural Language Processing"],
      year: 2024,
      type: "AI & Automation",
      icon: <Brain className="h-6 w-6" />,
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    },
    {
      title: "Mental Health Prediction",
      subtitle: "R Programming ML System",
      description: "Built ML models to predict mental health status using datasets and statistical techniques with comprehensive data analysis.",
      technologies: ["R Programming", "Machine Learning", "Statistical Analysis"],
      year: 2023,
      type: "Data Science & ML",
      icon: <Brain className="h-6 w-6" />,
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    },
    {
      title: "EZ Trainings: Virtual Network Configuration",
      subtitle: "Network Simulation Project",
      description: "Hands-on implementation of virtual network design and configuration with simulation and setup for academic and practical learning.",
      technologies: ["Networking", "Simulation"],
      year: 2023,
      type: "Networking",
      icon: <Network className="h-6 w-6" />,
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    },
    {
      title: "Virtual Network Configuration",
      subtitle: "Academic Network Project",
      description: "Academic project on network fundamentals with simulation and setup for educational and practical learning purposes.",
      technologies: ["Networking"],
      year: 2023,
      type: "Networking",
      icon: <Network className="h-6 w-6" />,
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    }
  ];

  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {} as Record<number, typeof projects>);

  const sortedYears = Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_hsl(240_100%_70%_/_0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_hsl(280_100%_70%_/_0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_hsl(190_100%_70%_/_0.05),_transparent_50%)]" />
      
      {/* Abstract 3D Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/30 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-violet-400/20 rounded-full blur-sm animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400/40 rounded-full blur-sm animate-pulse delay-500" />
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-purple-400/25 rounded-full blur-sm animate-pulse delay-1500" />
      
      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path d="M 0,200 Q 200,100 400,150 T 800,100" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" />
        <path d="M 0,400 Q 300,300 600,350 T 1200,300" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" />
        <path d="M 200,0 Q 400,200 600,100 T 1000,150" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full mb-6 shadow-lg shadow-cyan-400/20" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Innovative AI/ML solutions and cutting-edge applications showcasing technical expertise in modern technology stacks.
          </p>
        </div>

        {/* Projects by Year */}
        <div className="space-y-16">
          {sortedYears.map((year) => (
            <div key={year} className="animate-fade-in">
              {/* Year Header */}
              <div className="flex items-center mb-12">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 backdrop-blur-sm border border-cyan-400/30 mr-6">
                  <span className="text-2xl font-bold text-cyan-400">{year}</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 via-violet-400/30 to-transparent" />
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsByYear[parseInt(year)].map((project, index) => (
                  <div
                    key={project.title}
                    className="group relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Glassmorphism Card */}
                    <div className="relative h-full bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:bg-slate-900/60 hover:border-violet-400/50 hover:shadow-2xl hover:shadow-violet-400/10">
                      {/* Glowing Border Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
                      
                      {/* Project Icon */}
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 mb-6 group-hover:from-cyan-400/30 group-hover:to-violet-400/30 transition-all duration-300">
                        <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">
                          {project.icon}
                        </div>
                      </div>

                      {/* Project Type Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-400/10 border border-violet-400/20 mb-4">
                        <span className="text-sm font-medium text-violet-300">{project.type}</span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Project Subtitle */}
                      <h4 className="text-lg font-semibold text-violet-300 mb-4">
                        {project.subtitle}
                      </h4>

                      {/* Project Description */}
                      <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h5 className="text-sm font-semibold text-slate-200 mb-3">Tech Stack:</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs bg-cyan-400/10 text-cyan-300 rounded-full border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 mt-auto">
                        <button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-750 hover:from-slate-700 hover:to-slate-650 border border-slate-600 hover:border-cyan-400/50 rounded-xl text-slate-200 hover:text-cyan-400 transition-all duration-300 group/btn"
                        >
                          <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                          <span className="text-sm font-medium">Code</span>
                        </button>
                        
                        {project.liveUrl && (
                          <button
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 hover:from-violet-500/30 hover:to-purple-500/30 border border-violet-400/30 hover:border-violet-400/50 rounded-xl text-violet-300 hover:text-white transition-all duration-300 group/btn"
                          >
                            <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            <span className="text-sm font-medium">Demo</span>
                          </button>
                        )}
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/50 rounded-full" />
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-violet-400/50 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-purple-400/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-slate-300 mb-8 text-lg">
                Let's collaborate on innovative AI/ML solutions and cutting-edge applications.
              </p>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <span>Get In Touch</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;