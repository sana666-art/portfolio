import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  duration: string;
  location?: string;
  description?: string;
  type: 'education' | 'work' | 'internship' | 'training';
}

const Experience = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: 'BS Computer Science and Information Technology',
      organization: 'NED University of Engineering and Technology',
      duration: 'November 2021 - July 2025',
      location: 'Karachi, Pakistan',
      type: 'education',
    },
    {
      id: 2,
      title: 'HEC Pre-Engineering (Intermediate)',
      organization: 'Khursheed Girls Govt. College',
      duration: 'August 2020 - August 2021',
      location: 'Karachi, Pakistan',
      type: 'education',
    },
    {
      id: 3,
      title: 'SSC Computer Science (Matriculation)',
      organization: 'Nexus Schooling System',
      duration: 'July 2018 - July 2019',
      location: 'Karachi, Pakistan',
      type: 'education',
    },
    {
      id: 4,
      title: 'Python Developer',
      organization: 'Odolution Private Limited',
      duration: 'September 2025 - November 2025',
      location: 'Karachi, Pakistan',
      description:
        '3 months of professional experience in Odoo, working on module customization, backend logic development, and automation workflows.',
      type: 'work',
    },
    {
      id: 5,
      title: 'NLP Research Intern',
      organization: 'Neuro-Computational Lab (NCL), NEDUET',
      duration: 'March 2024 - April 2024',
      location: 'Karachi, Pakistan',
      description:
        'Worked on Natural Language Processing to convert Urdu text pictures into text documents using OCR techniques.',
      type: 'internship',
    },
    {
      id: 6,
      title: 'Development Intern',
      organization: 'Karachi Development Authority (KDA)',
      duration: 'March 2024 - May 2024',
      location: 'Karachi, Pakistan',
      description:
        'Worked in the Development and Operational Department, gaining exposure to government technology infrastructure.',
      type: 'internship',
    },
    {
      id: 7,
      title: 'Computer Science Domains Attendee',
      organization: 'TE-Links, NEDUET',
      duration: 'April 2024',
      description: 'Attended online sessions on different domains of Computer Science.',
      type: 'training',
    },
    {
      id: 8,
      title: 'Data Science & Computer Vision Trainee',
      organization: 'NCL, Karachi',
      duration: 'March 2024 - April 2024',
      description: 'Participated in online training sessions on Data Science and Computer Vision.',
      type: 'training',
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'work':
        return Briefcase;
      case 'internship':
        return Award;
      case 'training':
        return Calendar;
      default:
        return Briefcase;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-indigo-500';
      case 'work':
        return 'bg-primary';
      case 'internship':
        return 'bg-purple-500';
      case 'training':
        return 'bg-green-500';
      default:
        return 'bg-primary';
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-light-gray/30 relative overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Journey
          </p>
          <h2 className="section-title">Work Experience & Education</h2>
          <p className="section-subtitle mt-4">
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-light transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = getTypeIcon(item.type);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex items-start transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  {/* Node */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10 ${getTypeColor(
                      item.type
                    )}`}
                  />

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                      {/* Type Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`w-8 h-8 ${getTypeColor(
                            item.type
                          )} rounded-lg flex items-center justify-center`}
                        >
                          <Icon className="w-4 h-4 text-white" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-text-gray">
                          {item.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-dark mb-1">{item.title}</h3>

                      {/* Organization */}
                      <p className="text-primary font-medium mb-3">{item.organization}</p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3 text-sm text-text-gray mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.duration}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
