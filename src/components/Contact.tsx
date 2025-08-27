import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  MessageSquare,
  Clock,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '2f91ceda-5e9c-4ce2-afa5-d38ef10adb34',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zohashaik538@gmail.com",
      href: "mailto:zohashaik538@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8971415505",
      href: "tel:+918971415505",
      description: "Available during business hours"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karnataka, India",
      href: null,
      description: "Open to remote opportunities"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/syeda-zoha-shaik-17645a2b3",
      icon: Linkedin,
      color: "hover:text-blue-600",
      description: "Let's connect professionally"
    },
    {
      name: "GitHub",
      url: "https://github.com/Syedazohashaik",
      icon: Github,
      color: "hover:text-gray-800",
      description: "Check out my code"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_hsl(240_100%_70%_/_0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_hsl(280_100%_70%_/_0.1),_transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full mb-6 shadow-lg shadow-cyan-400/20" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next AI/ML project? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 animate-slide-up hover:bg-slate-900/60 hover:border-violet-400/50 transition-all duration-500">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                or simply connect with fellow AI/ML enthusiasts. Whether you have a 
                project in mind or just want to say hello, don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.label}
                  className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 group-hover:from-cyan-400/30 group-hover:to-violet-400/30 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{item.value}</span>
                    )}
                    <p className="text-sm text-slate-300 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-400/20 group-hover:from-cyan-400/30 group-hover:to-violet-400/30 transition-all duration-300">
                      <social.icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{social.name}</div>
                      <div className="text-sm text-slate-300">{social.description}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-900/60 hover:border-violet-400/50 transition-all duration-500">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-purple-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
              
              <div className="text-center mb-8">
                <MessageSquare className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send Me a Message
                </h3>
                <p className="text-slate-300">
                  I typically respond within 24 hours
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-cyan-400/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-cyan-400/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-cyan-400/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-slate-800/50 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-cyan-400/50 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 group disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Quick Contact Options */}
              <div className="mt-8 pt-6 border-t border-slate-600/30">
                <p className="text-sm text-slate-300 text-center mb-4">
                  Or reach out directly:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    className="flex items-center justify-center gap-2 p-3 bg-slate-800/50 border border-slate-600/30 hover:border-cyan-400/50 rounded-xl text-slate-200 hover:text-cyan-400 transition-all duration-300"
                    onClick={() => window.open("mailto:zohashaik538@gmail.com?subject=Project Collaboration Inquiry", "_blank")}
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </button>
                  
                  <button 
                    className="flex items-center justify-center gap-2 p-3 bg-slate-800/50 border border-slate-600/30 hover:border-violet-400/50 rounded-xl text-slate-200 hover:text-violet-400 transition-all duration-300"
                    onClick={() => window.open("https://linkedin.com/in/syeda-zoha-shaik-17645a2b3", "_blank")}
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </button>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-6 bg-slate-800/50 p-4 rounded-2xl text-center border border-slate-600/30">
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-300">
                  <Clock className="h-4 w-4" />
                  <span>Available for new opportunities</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6">
              <h4 className="font-semibold text-white mb-3">What I'm Looking For</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Internship opportunities in AI/ML
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                  Collaborative projects and hackathons
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Mentorship and learning opportunities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Tech community connections
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;