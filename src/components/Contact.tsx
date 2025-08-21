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
    <section id="contact" className="section-padding bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next AI/ML project? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
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
                  className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-card hover:shadow-soft transition-all duration-300"
                >
                  <div className="p-3 bg-accent-soft rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{item.value}</span>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-3 p-4 bg-card rounded-2xl hover:shadow-soft transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                  >
                    <div className="p-2 bg-accent-soft rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <social.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.description}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-accent p-8 rounded-3xl">
              <div className="text-center mb-8">
                <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Send Me a Message
                </h3>
                <p className="text-muted-foreground">
                  I typically respond within 24 hours
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
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
                      className="bg-card/50 border-border focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
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
                      className="bg-card/50 border-border focus:border-accent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-medium">
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
                    className="bg-card/50 border-border focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
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
                    className="bg-card/50 border-border focus:border-accent resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Quick Contact Options */}
              <div className="mt-8 pt-6 border-t border-border/20">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Or reach out directly:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group bg-card/30 hover:bg-card/50"
                    onClick={() => window.open("mailto:zohashaik538@gmail.com?subject=Project Collaboration Inquiry", "_blank")}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group bg-card/30 hover:bg-card/50"
                    onClick={() => window.open("https://linkedin.com/in/syeda-zoha-shaik-17645a2b3", "_blank")}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-6 bg-card/50 p-4 rounded-2xl text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Available for new opportunities</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-card rounded-2xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">What I'm Looking For</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Internship opportunities in AI/ML
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Collaborative projects and hackathons
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Mentorship and learning opportunities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
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