import { Calendar, MapPin, Building, Award, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Python Programming Intern",
      company: "EZ Trainings and Technologies",
      location: "India",
      duration: "Apr 2024 - May 2024",
      description: "Worked on developing and automating applications, writing efficient Python code, and contributing to real-world projects. Gained hands-on experience in software development lifecycle and collaborative programming practices.",
      achievements: [
        "Developed and automated applications using Python",
        "Wrote efficient, clean code following best practices",
        "Contributed to real-world software development projects",
        "Enhanced problem-solving skills through practical implementation"
      ],
      skills: ["Python", "Data Structures", "OOP", "Project Development", "Collaboration"]
    }
  ];

  const education = {
    degree: "Bachelor of Engineering",
    specialization: "Artificial Intelligence and Machine Learning",
    institution: "Ballari Institute of Technology and Management",
    cgpa: "7.83",
    duration: "2022 - 2026",
    location: "Karnataka, India"
  };

  const achievements = [
    {
      title: "Project Success in AI, IoT, and Web Development",
      description: "Successfully delivered projects across multiple domains, translating innovative concepts into working prototypes",
      icon: Award,
      date: "2024"
    },
    {
      title: "Heart Disease Prediction System",
      description: "Implemented machine learning algorithms achieving high accuracy in medical prediction models",
      icon: Award,
      date: "2024"
    }
  ];

  const certifications = [
    {
      title: "Google Cloud Engineer",
      issuer: "Google Cloud Platform",
      date: "2024",
      credentialId: "GCP-2024-001",
      skills: ["Cloud Computing", "Google Cloud", "Infrastructure", "DevOps"],
      link: "https://drive.google.com/file/d/1s7Lpd3gjCMrEYmoDfsnbNm1-6bDI1cFN/view?usp=drivesdk"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2025",
      credentialId: "AWS-CP-2025",
      skills: ["AWS", "Cloud Computing", "Cloud Security", "Cost Optimization"],
      link: "https://drive.google.com/file/d/1X8BAWSJY7Qp8A3cQF7puHOsS41e8emdF/view?usp=drivesdk"
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialId: "AWS-SA-2025",
      skills: ["AWS Architecture", "Solution Design", "Cloud Migration", "Best Practices"],
      link: "https://drive.google.com/file/d/1cBTYtmrh9XLYGVQW_KVAXxVnZd4VFOkO/view?usp=drivesdk"
    },
    {
      title: "Cybersecurity Analyst",
      issuer: "Cybersecurity Institute",
      date: "2024",
      credentialId: "CSA-2024-001",
      skills: ["Threat Analysis", "Security Assessment", "Incident Response", "Risk Management"],
      link: "https://drive.google.com/file/d/1y-XGqr0zP62AlpOcWz7qqESO5AN8xiOX/view?usp=drivesdk"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience & Education Timeline */}
          <div className="space-y-8">
            {/* Work Experience */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Building className="mr-3 h-6 w-6 text-accent" />
                Professional Experience
              </h3>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-accent/30 last:border-l-0 last:pb-0">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
                  
                  <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground flex items-center mt-1 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-accent font-semibold mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      {exp.company}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 text-xs bg-accent-soft text-accent rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-accent" />
                Education
              </h3>
              
              <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h4 className="text-xl font-bold text-foreground">{education.degree}</h4>
                  <span className="text-sm text-muted-foreground flex items-center mt-1 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    {education.duration}
                  </span>
                </div>
                
                <p className="text-accent font-semibold mb-2">{education.specialization}</p>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <Building className="h-4 w-4 mr-2" />
                  {education.institution}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {education.location}
                  </div>
                  <div className="px-4 py-2 bg-gradient-accent rounded-lg">
                    <span className="font-bold text-foreground">CGPA: {education.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Award className="mr-3 h-6 w-6 text-accent" />
                Key Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-soft rounded-xl">
                        <achievement.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-foreground">{achievement.title}</h4>
                          <span className="text-sm text-muted-foreground">{achievement.date}</span>
                        </div>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Award className="mr-3 h-6 w-6 text-accent" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gradient-accent p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer group"
                       onClick={() => window.open(cert.link, '_blank')}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">{cert.title}</h4>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    
                    <p className="text-accent font-semibold mb-3">{cert.issuer}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                      Click to view certificate →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;