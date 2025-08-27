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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900"
    >
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
            Syeda Zoha Shaik
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 font-light">
            Full-Stack Developer & AI/ML Enthusiast
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building scalable, user-centric applications with 
            <span className="font-semibold text-cyan-400"> Python</span>, 
            <span className="font-semibold text-violet-400"> React</span>, and 
            <span className="font-semibold text-purple-400"> AI/ML technologies</span>.
            Passionate about implementing innovative solutions and translating concepts into working prototypes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </button>
            
            <button 
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-900/60 hover:border-violet-400/50 rounded-2xl text-slate-200 hover:text-white font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://linkedin.com/in/syeda-zoha-shaik-17645a2b3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-900/60 hover:border-cyan-400/50 hover:scale-110 transition-all duration-300 text-slate-200 hover:text-cyan-400"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/Syedazohashaik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-900/60 hover:border-violet-400/50 hover:scale-110 transition-all duration-300 text-slate-200 hover:text-violet-400"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:zohashaik538@gmail.com"
              className="p-3 rounded-full bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-900/60 hover:border-purple-400/50 hover:scale-110 transition-all duration-300 text-slate-200 hover:text-purple-400"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:scale-110 transition-transform duration-300"
          >
            <ArrowDown className="h-8 w-8 text-slate-400 hover:text-cyan-400 mx-auto transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;