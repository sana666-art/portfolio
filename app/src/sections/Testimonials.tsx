import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  quote: string;
}

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Dr. Muhammad Asif',
      role: 'Assistant Professor',
      organization: 'NEDUET',
      quote:
        'Sana demonstrated exceptional dedication and technical aptitude during her NLP research internship. Her ability to grasp complex concepts and implement practical solutions is remarkable.',
    },
    {
      id: 2,
      name: 'Senior Developer',
      role: 'Technical Lead',
      organization: 'Odolution',
      quote:
        'Working with Sana was a pleasure. She quickly adapted to the Odoo framework and contributed significantly to our module customization projects. Her problem-solving skills are impressive.',
    },
    {
      id: 3,
      name: 'Project Manager',
      role: 'Development Department',
      organization: 'KDA',
      quote:
        'Sana showed great enthusiasm and professionalism during her internship. She was eager to learn and contributed fresh perspectives to our operational workflows.',
    },
    {
      id: 4,
      name: 'Fellow Student',
      role: 'Computer Science',
      organization: 'NEDUET',
      quote:
        "Sana's projects always stand out for their creativity and technical depth. Her Churnlytics dashboard is a perfect example of her ability to combine ML with intuitive UI design.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Quote */}
      <div className="absolute top-20 left-10 text-primary/5 float-1">
        <Quote className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-10 text-indigo-500/5 float-2">
        <Quote className="w-24 h-24 rotate-180" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="section-title">What People Say About Me</h2>
          <p className="section-subtitle mt-4">
            Feedback from colleagues, mentors, and peers
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Main Card */}
          <div className="relative bg-light-gray/50 rounded-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-glow">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Testimonial Content */}
            <div className="pt-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  {/* Quote Text */}
                  <p className="text-lg md:text-xl text-dark leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">{testimonial.name}</h4>
                      <p className="text-sm text-text-gray">
                        {testimonial.role}, {testimonial.organization}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border-light">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-primary w-8'
                        : 'bg-border-light hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-dark hover:text-primary hover:shadow-glow transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-dark hover:text-primary hover:shadow-glow transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Cards (Visual Only) */}
          <div className="hidden lg:block">
            <div
              className="absolute -left-8 top-1/2 -translate-y-1/2 w-64 bg-white rounded-xl p-6 shadow-card opacity-50 transform -rotate-6 scale-90"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <div className="h-16 bg-light-gray rounded" />
            </div>
            <div
              className="absolute -right-8 top-1/2 -translate-y-1/2 w-64 bg-white rounded-xl p-6 shadow-card opacity-50 transform rotate-6 scale-90"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <div className="h-16 bg-light-gray rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
