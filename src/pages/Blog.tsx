import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'Building Production-Ready ML Systems: Lessons from the Field',
      excerpt: 'A deep dive into the challenges of deploying machine learning models in production environments and the strategies that actually work.',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Machine Learning',
      tags: ['MLOps', 'Production', 'Best Practices']
    },
    {
      title: 'The Real Cost of Bad Data: A Data Quality Framework',
      excerpt: 'How poor data quality impacts ML models and business decisions, plus a practical framework for implementing data quality checks.',
      date: 'November 28, 2024',
      readTime: '6 min read',
      category: 'Data Science',
      tags: ['Data Quality', 'ETL', 'Data Engineering']
    },
    {
      title: 'From Notebook to API: Deploying Your First ML Model',
      excerpt: 'Step-by-step guide to taking a Jupyter notebook prototype and turning it into a production-ready API with FastAPI and Docker.',
      date: 'November 10, 2024',
      readTime: '12 min read',
      category: 'Tutorial',
      tags: ['FastAPI', 'Docker', 'Deployment']
    },
    {
      title: 'Computer Vision at Scale: Performance Optimization Techniques',
      excerpt: 'Practical techniques for optimizing computer vision models to achieve real-time performance on edge devices and in cloud environments.',
      date: 'October 22, 2024',
      readTime: '10 min read',
      category: 'Computer Vision',
      tags: ['Optimization', 'Performance', 'Edge Computing']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Blog & <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Practical insights on AI, machine learning, and data science.
            Lessons learned from building production systems.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="gradient-bg rounded-3xl p-12 text-white shadow-2xl shadow-blue-500/20">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
                Featured Article
              </span>
              <h2 className="text-4xl font-black mb-4">
                Building Production-Ready ML Systems: Lessons from the Field
              </h2>
              <p className="text-xl text-white/90 mb-6">
                A comprehensive guide to the challenges and solutions when deploying machine learning
                models in real-world production environments.
              </p>
              <div className="flex items-center gap-6 mb-8 text-white/80">
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  December 15, 2024
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  8 min read
                </div>
              </div>
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all group">
                Read Article
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="card-dark rounded-2xl overflow-hidden hover:scale-105 transition-all group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded border border-gray-700"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <button className="text-cyan-400 font-bold text-sm flex items-center group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get notified when I publish new articles on AI, ML, and data science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-gray-500"
            />
            <button className="btn-primary px-8 py-4 text-white font-bold rounded-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-black text-white mb-4">
            Let's Connect
          </h3>
          <p className="text-gray-300 mb-6">
            Have questions or want to discuss a project?
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center px-10 py-5 text-white font-bold rounded-xl transition-all duration-300 group text-lg"
          >
            Get in Touch
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
