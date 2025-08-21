import { Heart, Mail, Github, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/syeda-zoha-shaik-17645a2b3",
      icon: Linkedin
    },
    {
      name: "GitHub", 
      url: "https://github.com/Syedazohashaik",
      icon: Github
    },
    {
      name: "Email",
      url: "mailto:zohashaik538@gmail.com",
      icon: Mail
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Syeda Zoha Shaik</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              AI/ML Engineer passionate about creating innovative solutions that make a difference. 
              Always learning, always building, always improving.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div>
                <p className="font-medium text-primary-foreground">Location</p>
                <p>Karnataka, India</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Email</p>
                <a 
                  href="mailto:zohashaik538@gmail.com"
                  className="hover:text-primary-foreground transition-colors duration-300"
                >
                  zohashaik538@gmail.com
                </a>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Status</p>
                <p className="text-green-400">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-primary-foreground/80 flex items-center justify-center md:justify-start">
                © {currentYear} Syeda Zoha Shaik. Made with 
                <Heart className="h-4 w-4 mx-2 text-red-400 animate-pulse" /> 
                and lots of ☕
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
            >
              <span>Back to top</span>
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 group-hover:-translate-y-1 transition-all duration-300">
                <ArrowUp className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;