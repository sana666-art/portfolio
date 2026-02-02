import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:khalidsana666@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl float-1" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl float-2" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl float-3" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Name with animation */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Sana <span className="gradient-text">Khalid</span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-xl sm:text-2xl text-text-secondary font-medium mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Machine Learning Engineer & Full-Stack Developer
            </p>

            {/* Description */}
            <p
              className={`text-text-gray text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Early-career ML Engineer with a strong foundation in Python, data analysis, 
              and applied machine learning. Experienced in building data-driven applications, 
              deploying ML-powered dashboards, and integrating ML workflows into web systems.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary group flex items-center justify-center gap-2"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary flex items-center justify-center"
              >
                Download Resume
              </a>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary stat-number">3+</p>
                <p className="text-sm text-text-gray">Months Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary stat-number">5+</p>
                <p className="text-sm text-text-gray">Projects Completed</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary stat-number">10+</p>
                <p className="text-sm text-text-gray">Technologies</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {/* Main Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse-glow" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-card animate-float-slow">
                  <img
                    src="/images/profile.jpg"
                    alt="Sana Khalid"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Orbital Social Links */}
                <div className="absolute inset-0">
                  {socialLinks.map((social, index) => {
                    const angle = (index * 360) / socialLinks.length - 90;
                    const radius = 140;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute w-10 h-10 bg-white rounded-full shadow-card flex items-center justify-center text-dark hover:text-primary hover:shadow-glow transition-all duration-300"
                        style={{
                          left: `calc(50% + ${x}px - 20px)`,
                          top: `calc(50% + ${y}px - 20px)`,
                          animation: `orbit 20s linear infinite`,
                          animationDelay: `${-index * 5}s`,
                        }}
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-card px-4 py-2 float-1">
                <span className="text-sm font-semibold text-primary">Python</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-card px-4 py-2 float-2">
                <span className="text-sm font-semibold text-indigo-500">ML</span>
              </div>
              <div className="absolute top-1/2 -left-8 bg-white rounded-lg shadow-card px-4 py-2 float-3">
                <span className="text-sm font-semibold text-purple-500">Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
