import { Brain, BarChart3, Bot, Code2, CheckCircle, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning & Deep Learning',
      tagline: 'Intelligent systems that learn and adapt',
      description: 'Custom ML models engineered for your specific business needs. From predictive analytics to advanced neural networks, I build systems that continuously improve and deliver measurable results.',
      capabilities: [
        'Neural network architecture design and implementation',
        'Model training, validation, and optimization',
        'Transfer learning and fine-tuning',
        'Production deployment with monitoring',
        'Model versioning and A/B testing',
        'Performance tuning and optimization'
      ],
      useCases: [
        'Predictive maintenance systems',
        'Demand forecasting',
        'Customer churn prediction',
        'Price optimization',
        'Anomaly detection'
      ],
      technologies: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'LightGBM']
    },
    {
      icon: BarChart3,
      title: 'Data Science & Analytics',
      tagline: 'Transform data into strategic advantage',
      description: 'End-to-end data analytics solutions that uncover insights and drive decision-making. From exploratory analysis to automated reporting systems, I turn raw data into actionable intelligence.',
      capabilities: [
        'Exploratory data analysis and visualization',
        'Statistical modeling and hypothesis testing',
        'Interactive dashboard development',
        'Automated reporting pipelines',
        'Business intelligence solutions',
        'Data quality and validation systems'
      ],
      useCases: [
        'Customer behavior analysis',
        'Sales performance tracking',
        'Marketing campaign optimization',
        'Operational efficiency analysis',
        'KPI monitoring systems'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Tableau', 'SQL']
    },
    {
      icon: Bot,
      title: 'Artificial Intelligence Solutions',
      tagline: 'Next-generation intelligent systems',
      description: 'Comprehensive AI solutions that go beyond basic automation. I design and implement intelligent agents, recommendation engines, and decision-making systems that understand context and deliver results.',
      capabilities: [
        'AI strategy and consulting',
        'Natural Language Processing (NLP)',
        'Computer vision systems',
        'Recommendation engines',
        'Chatbots and virtual assistants',
        'Document intelligence and extraction'
      ],
      useCases: [
        'Intelligent document processing',
        'Personalized recommendations',
        'Automated customer support',
        'Quality control automation',
        'Content moderation'
      ],
      technologies: ['Hugging Face', 'BERT', 'GPT', 'YOLO', 'OpenCV', 'spaCy']
    },
    {
      icon: Code2,
      title: 'Python Automation & Systems',
      tagline: 'Eliminate repetitive tasks, maximize efficiency',
      description: 'Robust automation solutions that save time, reduce errors, and scale with your business. From data pipelines to system integrations, I build reliable infrastructure that just works.',
      capabilities: [
        'ETL pipeline development',
        'API development and integration',
        'Workflow automation',
        'Web scraping and data collection',
        'System monitoring and alerting',
        'Task scheduling and orchestration'
      ],
      useCases: [
        'Multi-source data integration',
        'Automated report generation',
        'System health monitoring',
        'Batch processing workflows',
        'Third-party API integration'
      ],
      technologies: ['Python', 'Apache Airflow', 'FastAPI', 'Celery', 'Docker', 'AWS']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start with a detailed consultation to understand your business challenges, goals, and technical requirements.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'I create a comprehensive technical proposal with architecture, timeline, and success metrics.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular check-ins and demos. You stay informed every step of the way.'
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Rigorous testing ensures the solution meets requirements and performs reliably under real conditions.'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Smooth production deployment with monitoring, documentation, and knowledge transfer.'
    },
    {
      step: '06',
      title: 'Support & Optimization',
      description: 'Ongoing support to ensure continued success, with iterative improvements based on real-world performance.'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Time to Value',
      description: 'Efficient development process gets you results quickly without sacrificing quality'
    },
    {
      icon: Shield,
      title: 'Production-Ready',
      description: 'All solutions are built for scale, security, and maintainability from day one'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Impact',
      description: 'Clear metrics and KPIs track the business value delivered by every solution'
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
            Professional <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Specialized AI, ML, and data science solutions that drive real business results.
            From concept to production, I deliver systems that scale.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <Icon className="text-white" size={36} />
                  </div>
                  <h2 className="text-4xl font-black text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xl text-cyan-400 font-bold mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="card-dark rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <CheckCircle className="text-cyan-400 mr-2" size={20} />
                      What I Deliver
                    </h3>
                    <ul className="space-y-3">
                      {service.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-cyan-400 mr-2">•</span>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
                    <h3 className="text-lg font-bold text-white mb-4">
                      Common Use Cases
                    </h3>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-cyan-400 mr-2">→</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Why Choose My Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="card-dark rounded-2xl p-8 hover:scale-105 transition-all"
                >
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven process that delivers results while keeping you informed every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative card-dark rounded-2xl p-8 hover:scale-105 transition-all"
              >
                <div className="text-6xl font-black text-cyan-400/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-black text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="gradient-bg rounded-3xl p-12 md:p-16 text-center shadow-2xl shadow-blue-500/20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's discuss your project and explore how we can work together
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl group text-lg"
            >
              Schedule a Consultation
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
