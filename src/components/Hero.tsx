import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.9), hsl(var(--accent) / 0.8)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-glow/30 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Syeda Zoha Shaik
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 font-light">
            Full-Stack Developer & AI/ML Enthusiast
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building scalable, user-centric applications with 
            <span className="font-semibold text-white"> Python</span>, 
            <span className="font-semibold text-white"> React</span>, and 
            <span className="font-semibold text-white"> AI/ML technologies</span>.
            Passionate about implementing innovative solutions and translating concepts into working prototypes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="glassmorphism" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://linkedin.com/in/syeda-zoha-shaik-17645a2b3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/Syedazohashaik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:zohashaik538@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:scale-110 transition-transform duration-300"
          >
            <ArrowDown className="h-8 w-8 text-white/70 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;