import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Holoscene",
      subtitle: "Gesture-Controlled Holographic Display",
      description: "Developed a touchless holographic interface using gesture recognition technology. Created an innovative display system that responds to hand gestures without physical contact.",
      technologies: ["Python", "OpenCV", "PySerial", "ESP8266", "IR Sensors"],
      date: "Aug 2024",
      type: "Innovation Project",
      highlights: [
        "Touchless gesture recognition system",
        "Real-time holographic display",
        "Hardware-software integration",
        "IoT sensor implementation"
      ],
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    },
    {
      title: "Virtual Network Configuration",
      subtitle: "Network Simulation & Design",
      description: "Simulated a comprehensive virtual network infrastructure using Cisco Packet Tracer. Designed and implemented complex network topologies with proper routing and security configurations.",
      technologies: ["Cisco Packet Tracer", "Networking Fundamentals", "Network Security", "Routing Protocols"],
      date: "Feb 2023",
      type: "Academic Project",
      highlights: [
        "Complex network topology design",
        "Routing protocol implementation",
        "Network security configuration",
        "Performance optimization"
      ],
      githubUrl: "https://github.com/Syedazohashaik",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing technical expertise and creative problem-solving.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-glow transition-all duration-500 animate-slide-up ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div className="flex-1 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-sm font-medium bg-accent-soft text-accent rounded-full">
                    {project.type}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <h4 className="text-lg text-accent font-semibold mb-4">
                  {project.subtitle}
                </h4>

                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h5 className="font-semibold text-foreground mb-3">Key Features:</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="h-3 w-3 mr-2 text-accent flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h5 className="font-semibold text-foreground mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="hero" 
                    className="group/btn"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Code
                  </Button>
                  
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      className="group/btn"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 lg:max-w-md">
                <div className="h-64 lg:h-full bg-gradient-accent flex items-center justify-center relative overflow-hidden">
                  {/* Project visual placeholder */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold text-primary">
                        {project.title.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-accent/30 rounded-full" />
                  <div className="absolute top-1/2 left-8 w-4 h-4 bg-primary/10 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="p-8 rounded-2xl bg-gradient-accent">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in my work?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Let's discuss how we can collaborate on your next project.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;