import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      category: 'Machine Learning',
      title: 'Predictive Maintenance System',
      client: 'Manufacturing Enterprise',
      description: 'Deep learning LSTM model predicting equipment failures 48 hours in advance. Deployed on AWS with real-time monitoring dashboard.',
      impact: ['37% downtime reduction', '$2M+ savings', '92% accuracy', '15 production lines'],
      tech: ['PyTorch', 'LSTM', 'FastAPI', 'Docker', 'AWS'],
      year: '2024'
    },
    {
      category: 'Computer Vision',
      title: 'Quality Control AI',
      client: 'Electronics Manufacturer',
      description: 'Real-time defect detection using YOLO v8, processing 100+ images per second with exceptional accuracy.',
      impact: ['99.2% accuracy', '85% fewer returns', '3x faster', '40% cost reduction'],
      tech: ['TensorFlow', 'YOLO v8', 'OpenCV', 'Kubernetes'],
      year: '2024'
    },
    {
      category: 'Data Science',
      title: 'Customer Analytics Platform',
      client: 'E-commerce Company',
      description: 'Analytics pipeline processing 5M+ daily events with interactive dashboards and automated insights.',
      impact: ['2M+ customers', '5M+ events daily', '90% time saved', '$3M opportunities'],
      tech: ['Python', 'Pandas', 'Plotly', 'PostgreSQL', 'Airflow'],
      year: '2024'
    },
    {
      category: 'NLP',
      title: 'Document Intelligence System',
      client: 'Legal Services Firm',
      description: 'Automated document classification and extraction using transformer models for contracts and legal documents.',
      impact: ['85% time reduction', '95% accuracy', '1,000+ docs daily', '2,500 hours saved'],
      tech: ['BERT', 'spaCy', 'Hugging Face', 'FastAPI', 'Redis'],
      year: '2023'
    },
    {
      category: 'Automation',
      title: 'Multi-Source Data Pipeline',
      client: 'Healthcare Analytics',
      description: 'Scalable ETL system integrating 15+ healthcare data sources with automated validation and quality checks.',
      impact: ['15+ sources', '99.8% reliability', '70% faster', 'Zero manual processing'],
      tech: ['Apache Airflow', 'Python', 'AWS', 'MongoDB', 'Snowflake'],
      year: '2023'
    },
    {
      category: 'Machine Learning',
      title: 'Recommendation Engine',
      client: 'Streaming Platform',
      description: 'Hybrid recommendation system combining collaborative filtering and content-based approaches for 500K+ users.',
      impact: ['42% engagement increase', '28% more watch time', '500K+ users', '15% churn reduction'],
      tech: ['Scikit-learn', 'LightGBM', 'Redis', 'Flask', 'PostgreSQL'],
      year: '2023'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Computer Vision', 'Data Science', 'NLP', 'Automation'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

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
            <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Production systems delivering real business impact. From concept to deployment,
            these projects showcase technical excellence and measurable results.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">
                <span className="gradient-text">15+</span>
              </div>
              <div className="text-gray-300 font-semibold">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">
                <span className="gradient-text">8</span>
              </div>
              <div className="text-gray-300 font-semibold">Industries Served</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">
                <span className="gradient-text">100%</span>
              </div>
              <div className="text-gray-300 font-semibold">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">
                <span className="gradient-text">$10M+</span>
              </div>
              <div className="text-gray-300 font-semibold">Value Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 lg:px-8 sticky top-20 z-40 backdrop-blur-xl bg-[#0a0e27]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="text-cyan-400 flex-shrink-0" size={20} />
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                    activeFilter === category
                      ? 'gradient-bg text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="card-dark rounded-3xl p-8 md:p-12 hover:scale-[1.01] transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-sm font-bold text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-400 ml-4">
                    {project.year}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button className="p-3 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors border border-gray-700">
                    <Github size={20} className="text-gray-300" />
                  </button>
                  <button className="p-3 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors border border-gray-700">
                    <ExternalLink size={20} className="text-gray-300" />
                  </button>
                </div>
              </div>

              <h2 className="text-3xl font-black text-white mb-2">
                {project.title}
              </h2>
              <p className="text-cyan-400 font-bold mb-6">
                {project.client}
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="gradient-bg rounded-2xl p-8 mb-8">
                <h3 className="text-lg font-black text-white mb-4">
                  Business Impact
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.impact.map((item, idx) => (
                    <div key={idx} className="flex items-start text-white">
                      <span className="mr-2">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Client Feedback
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The predictive maintenance system transformed our operations. Dramatic improvements in uptime and significant cost savings.",
                author: "Director of Operations",
                company: "Manufacturing Enterprise"
              },
              {
                quote: "Exceptional technical expertise combined with clear communication. The quality control AI exceeded our expectations.",
                author: "VP of Engineering",
                company: "Electronics Manufacturer"
              },
              {
                quote: "Finally, a unified view of our customer data. The analytics platform has become indispensable for our decision-making.",
                author: "Head of Analytics",
                company: "E-commerce Company"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="card-dark rounded-2xl p-8"
              >
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-cyan-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
