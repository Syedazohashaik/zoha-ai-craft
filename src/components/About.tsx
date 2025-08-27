import { Button } from "@/components/ui/button";
import { Download, MapPin, GraduationCap, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_hsl(240_100%_70%_/_0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_hsl(280_100%_70%_/_0.1),_transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full mb-6 shadow-lg shadow-cyan-400/20" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 space-y-6 animate-slide-up hover:bg-slate-900/60 hover:border-violet-400/50 transition-all duration-500">
            <p className="text-lg text-slate-300 leading-relaxed">
              I am an <span className="font-semibold text-white">ambitious and detail-oriented undergraduate</span> in 
              Artificial Intelligence and Machine Learning with strong expertise in <span className="font-semibold text-cyan-400">Python, Flask, React, and Firebase</span>.
              Passionate about building scalable, user-centric applications.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Experienced with <span className="font-semibold text-violet-400">AWS, Google Cloud, TensorFlow, and Scikit-learn</span>. 
              I excel at implementing ML solutions and translating innovative concepts into working prototypes that solve real-world problems.
            </p>

            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800/50 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300">
                <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-slate-300">Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800/50 border border-slate-600/30 hover:border-violet-400/50 transition-all duration-300">
                <GraduationCap className="h-5 w-5 text-violet-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Education</p>
                  <p className="text-slate-300">AI/ML Engineering</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800/50 border border-slate-600/30 hover:border-purple-400/50 transition-all duration-300">
                <Calendar className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">CGPA</p>
                  <p className="text-slate-300">7.83/10</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800/50 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300">
                <Calendar className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Graduation</p>
                  <p className="text-slate-300">2026</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 group"
                onClick={() => {
                  // Open resume in new tab
                  window.open('/lovable-uploads/022a5b5c-a69d-4dca-a37d-7b5a77ac515c.png', '_blank');
                  // Create download link
                  const link = document.createElement('a');
                  link.href = '/lovable-uploads/022a5b5c-a69d-4dca-a37d-7b5a77ac515c.png';
                  link.download = 'Syeda-Zoha-Shaik-Resume.png';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-900/60 hover:border-violet-400/50 transition-all duration-500">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
                
                <div className="text-center space-y-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
                    <img 
                      src="/lovable-uploads/43e71f6f-56aa-43b9-b365-0a175bd54885.png" 
                      alt="Syeda Zoha Shaik - AI/ML Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Syeda Zoha Shaik</h3>
                    <p className="text-cyan-400 font-semibold text-lg">AI/ML Engineer</p>
                    <div className="flex justify-center gap-2 mt-4">
                      <div className="w-2 h-2 bg-cyan-400/50 rounded-full" />
                      <div className="w-2 h-2 bg-violet-400/50 rounded-full" />
                      <div className="w-2 h-2 bg-purple-400/50 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/30 rounded-full blur-sm animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-400/20 rounded-full blur-sm animate-pulse delay-1000" />
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-purple-400/25 rounded-full blur-sm animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;