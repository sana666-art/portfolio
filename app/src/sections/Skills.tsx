import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  Layers, 
  GitBranch, 
  Server,
  LineChart,
  FileCode,
  Globe
} from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  skills: Skill[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('programming');
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

  const categories: SkillCategory[] = [
    {
      id: 'programming',
      label: 'Programming',
      icon: Code,
      skills: [
        { name: 'Python', proficiency: 90 },
        { name: 'JavaScript', proficiency: 75 },
        { name: 'PHP', proficiency: 65 },
        { name: 'C/C++', proficiency: 60 },
      ],
    },
    {
      id: 'ml',
      label: 'ML & Data Science',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', proficiency: 85 },
        { name: 'NLP', proficiency: 70 },
        { name: 'Data Analysis', proficiency: 85 },
        { name: 'Data Visualization', proficiency: 80 },
      ],
    },
    {
      id: 'frameworks',
      label: 'Frameworks & Tools',
      icon: Layers,
      skills: [
        { name: 'Odoo Framework', proficiency: 75 },
        { name: 'Streamlit', proficiency: 80 },
        { name: 'Pandas & NumPy', proficiency: 85 },
        { name: 'Git & GitHub', proficiency: 80 },
      ],
    },
    {
      id: 'databases',
      label: 'Databases & Viz',
      icon: Database,
      skills: [
        { name: 'SQL', proficiency: 80 },
        { name: 'MongoDB', proficiency: 65 },
        { name: 'Power BI', proficiency: 75 },
        { name: 'Matplotlib & Seaborn', proficiency: 80 },
      ],
    },
  ];

  const skillCards = [
    { icon: Brain, title: 'Machine Learning', desc: 'Supervised & Unsupervised Learning' },
    { icon: FileCode, title: 'Natural Language Processing', desc: 'Text processing & OCR' },
    { icon: BarChart3, title: 'Data Analysis', desc: 'Exploratory Data Analysis' },
    { icon: Layers, title: 'Odoo Development', desc: 'Module customization' },
    { icon: Globe, title: 'Web Development', desc: 'Full-stack applications' },
    { icon: Server, title: 'Database Management', desc: 'SQL & NoSQL' },
    { icon: LineChart, title: 'Data Visualization', desc: 'Interactive dashboards' },
    { icon: GitBranch, title: 'API Integration', desc: 'RESTful services' },
  ];

  const activeSkills = categories.find((c) => c.id === activeCategory)?.skills || [];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-primary/10 float-1">
        <Code className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 right-10 text-indigo-500/10 float-2">
        <Database className="w-20 h-20" />
      </div>
      <div className="absolute top-1/2 right-20 text-purple-500/10 float-3">
        <Brain className="w-14 h-14" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Expertise
          </p>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle mt-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-glow'
                  : 'bg-light-gray text-dark hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div
          className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="bg-light-gray/50 rounded-2xl p-8">
            {activeSkills.map((skill, index) => (
              <div key={skill.name} className="mb-6 last:mb-0">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-dark">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.proficiency}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: isVisible ? `${skill.proficiency}%` : '0%',
                      transitionDelay: `${500 + index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCards.map((card, index) => (
            <div
              key={card.title}
              className={`group bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + index * 80}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <card.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-dark mb-2">{card.title}</h3>
              <p className="text-sm text-text-gray">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
