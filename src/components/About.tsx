import { Button } from "@/components/ui/button";
import { Download, MapPin, GraduationCap, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an <span className="font-semibold text-foreground">ambitious and detail-oriented undergraduate</span> in 
              Artificial Intelligence and Machine Learning with a strong foundation in Python, machine learning algorithms, 
              Linux, and cloud computing.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced with <span className="font-semibold text-accent">AWS, Google Cloud, TensorFlow, and Scikit-learn</span>. 
              Passionate about solving real-world problems and delivering impactful, data-driven solutions.
            </p>

            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card hover:shadow-soft transition-shadow duration-300">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card hover:shadow-soft transition-shadow duration-300">
                <GraduationCap className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Education</p>
                  <p className="text-muted-foreground">AI/ML Engineering</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card hover:shadow-soft transition-shadow duration-300">
                <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">CGPA</p>
                  <p className="text-muted-foreground">7.83/10</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-card hover:shadow-soft transition-shadow duration-300">
                <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Graduation</p>
                  <p className="text-muted-foreground">2026</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button variant="hero" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-accent flex items-center justify-center shadow-glow">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-3xl bg-card flex items-center justify-center border-4 border-white/20">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-elegant">
                      <img 
                        src="/lovable-uploads/43e71f6f-56aa-43b9-b365-0a175bd54885.png" 
                        alt="Syeda Zoha Shaik - AI/ML Engineer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">Syeda Zoha Shaik</h3>
                      <p className="text-accent font-medium">AI/ML Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-float" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-accent/60 rounded-full animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;