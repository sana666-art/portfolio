import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star, ArrowUpRight, Layers } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
  category: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Churnlytics Analytics Dashboard',
      description:
        'An interactive data-analysis web app that allows users to upload CSV/Excel/JSON/TXT files and explore data without technical skills. Features 10+ visualizations with dynamic filtering, light/dark mode, and full PDF report export.',
      image: '/images/project-churnlytics.jpg',
      techStack: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'Seaborn', 'FPDF'],
      liveLink: 'https://lnkd.in/dg8_sCvG',
      githubLink: 'https://lnkd.in/dZGkwxcx',
      featured: true,
      category: 'Data Science',
    },
    {
      id: 2,
      title: 'Interactive JavaScript Applications',
      description:
        'Collection of interactive web applications including Money Exchange API, Tic-Tac-Toe Game, Rock-Paper-Scissors AI Game, and utility apps.',
      image: '/images/project-javascript.jpg',
      techStack: ['JavaScript', 'HTML', 'CSS', 'REST APIs'],
      githubLink: '#',
      category: 'Web Development',
    },
    {
      id: 3,
      title: 'PHP CRUD Web Application',
      description:
        'Full-featured CRUD application built with PHP Blade template, featuring user management, data operations, and responsive design.',
      image: '/images/project-crud.jpg',
      techStack: ['PHP', 'MySQL', 'CSS', 'XAMPP'],
      githubLink: '#',
      category: 'Web Development',
    },
    {
      id: 4,
      title: 'Urdu Text OCR System',
      description:
        'NLP-based system for converting Urdu text images into editable text documents using OCR techniques and language modeling.',
      image: '/images/project-nlp.jpg',
      techStack: ['Python', 'NLP', 'OCR', 'TensorFlow'],
      githubLink: '#',
      category: 'Machine Learning',
    },
    {
      id: 5,
      title: 'Custom Odoo Module Development',
      description:
        'Developed and customized Odoo modules for business automation, including backend logic development and workflow automation.',
      image: '/images/project-odoo.jpg',
      techStack: ['Python', 'Odoo', 'XML', 'PostgreSQL', 'QWeb'],
      githubLink: '#',
      category: 'ERP Development',
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-dark text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work in machine learning, data science, and web development
          </p>
        </div>

        {/* Featured Project - Large Card */}
        {featuredProject && (
          <div
            className={`mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div 
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(featuredProject.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-80 lg:h-[500px] overflow-hidden">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredProject === featuredProject.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Featured Project
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-lg">
                      {featuredProject.category}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                    {featuredProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/10 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg border border-white/10 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {featuredProject.liveLink && (
                      <a
                        href={featuredProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-glow"
                      >
                        Live Demo
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </a>
                    )}
                    {featuredProject.githubLink && (
                      <a
                        href={featuredProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/10"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredProject === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-dark/60 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark hover:bg-gray-200 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-dark/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/5 text-gray-400 text-xs font-medium px-2 py-1 rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/10"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
