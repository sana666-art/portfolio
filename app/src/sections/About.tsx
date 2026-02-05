import { useEffect, useRef, useState } from 'react';
import { Check, Award, BookOpen, Code } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Code, text: '3+ months professional experience in Odoo development' },
    { icon: Award, text: 'Strong background in Machine Learning and Data Science' },
    { icon: BookOpen, text: 'Experienced in Python, PHP, JavaScript, and modern frameworks' },
    { icon: Check, text: 'Passionate about creating scalable ML solutions' },
  ];

  const stats = [
    { value: '5+', label: 'Projects' },
    { value: '3+', label: 'Internships' },
    { value: '10+', label: 'Certificates' },
    { value: '4', label: 'Languages' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full float-1" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-indigo-500/5 rounded-full float-2" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/images/about.jpg"
                  alt="Sana Khalid Working"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full float-1" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-indigo-500/10 rounded-full float-2" />

              {/* Stats Cards */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`bg-white rounded-xl shadow-card px-4 py-3 text-center transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <p className="text-xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-text-gray">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            {/* Section Title */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                About Me
              </p>
              <h2 className="section-title">
                Passionate About <span className="gradient-text">Technology</span> & Innovation
              </h2>
            </div>

            {/* Description */}
            <div
              className={`space-y-4 mt-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-text-secondary leading-relaxed">
                I'm Sana Khalid, a passionate Machine Learning Engineer and Full-Stack Developer 
                based in Karachi, Pakistan. With a strong foundation in Python, data analysis, 
                and applied machine learning, I specialize in building data-driven applications 
                and deploying ML-powered solutions.
              </p>
              <p className="text-text-secondary leading-relaxed">
                My journey in technology began at NED University, where I pursued my BS in 
                Computer Science. Since then, I've gained hands-on experience in NLP, data 
                science, and full-stack development through various internships and personal projects.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-dark font-medium pt-2">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div
              className={`mt-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <a
                href="/images/resume.pdf"
                download="resume.pdf"
                className="btn-primary inline-flex items-center gap-2"
              >
                Download Resume
                <Award className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
