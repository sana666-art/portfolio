import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
      excerpt:
        'An introduction to the fundamentals of machine learning, covering supervised and unsupervised learning, model evaluation, and practical implementation tips.',
      image: '/images/blog-ml.jpg',
      category: 'Innovation',
      readTime: '8 min read',
      date: 'January 2025',
      featured: true,
    },
    {
      id: 2,
      title: 'Building Interactive Dashboards with Streamlit',
      excerpt:
        'Learn how to create beautiful, interactive data dashboards using Python and Streamlit. Includes code examples and best practices.',
      image: '/images/blog-streamlit.jpg',
      category: 'Data Visualization',
      readTime: '6 min read',
      date: 'December 2024',
    },
    {
      id: 3,
      title: 'Natural Language Processing for Urdu Text',
      excerpt:
        'Exploring the challenges and solutions for processing Urdu text using OCR and language modeling techniques.',
      image: '/images/blog-nlp.jpg',
      category: 'Explained Simply',
      readTime: '7 min read',
      date: 'November 2024',
    },
    {
      id: 4,
      title: 'Odoo Development: Best Practices and Tips',
      excerpt:
        'A comprehensive guide to developing custom Odoo modules, from setup to deployment.',
      image: '/images/blog-odoo.jpg',
      category: 'News Centre',
      readTime: '10 min read',
      date: 'October 2024',
    },
  ];

  const featuredPost = blogPosts.find((p) => p.featured);
  const otherPosts = blogPosts.filter((p) => !p.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Innovation': 'from-purple-500 to-indigo-500',
      'Data Visualization': 'from-blue-500 to-cyan-500',
      'Explained Simply': 'from-green-500 to-emerald-500',
      'News Centre': 'from-orange-500 to-amber-500',
    };
    return colors[category] || 'from-primary to-blue-500';
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Header - Yudiz Style */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Insights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-2">
                Insights into <span className="gradient-text">Change</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-xl">
                Thoughts on machine learning, data science, and web development
              </p>
            </div>
            <button className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
              View All Articles
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Blog Grid - Yudiz Style Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post - Large Card */}
          {featuredPost && (
            <div
              className={`lg:row-span-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
              onMouseEnter={() => setHoveredPost(featuredPost.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <article className="group relative h-full bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-border-light">
                {/* Image */}
                <div className="relative h-72 lg:h-80 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredPost === featuredPost.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                  
                  {/* Category Tag - Top */}
                  <div className="absolute top-6 left-6">
                    <span className={`bg-gradient-to-r ${getCategoryColor(featuredPost.category)} text-white text-sm font-semibold px-4 py-2 rounded-full`}>
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-text-gray mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {featuredPost.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  {/* Read More */}
                  <button className="inline-flex items-center gap-2 text-primary font-semibold group/btn">
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            </div>
          )}

          {/* Other Posts - Stacked Cards */}
          <div className="space-y-6">
            {otherPosts.map((post, index) => (
              <div
                key={post.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <article className="group flex flex-col sm:flex-row gap-6 bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-border-light p-4">
                  {/* Image */}
                  <div className="relative w-full sm:w-40 h-40 sm:h-32 flex-shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredPost === post.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center flex-grow py-2">
                    {/* Category */}
                    <span className={`inline-block w-fit bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-semibold px-3 py-1 rounded-full mb-3`}>
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-text-gray">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex items-center">
                    <div className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center text-dark group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
