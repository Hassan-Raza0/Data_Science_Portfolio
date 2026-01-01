import Hero from '../components/Hero';
import { Shield, Zap, CheckCircle, ArrowRight, Brain, BarChart3, Bot, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const whyChoose = [
    {
      icon: Shield,
      title: 'Production-Ready Systems',
      description: 'All solutions built for scale, security, and reliability. Thoroughly tested and validated before deployment.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Real-time collaboration tools, efficient workflows, and milestone tracking for seamless project execution.'
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed Results',
      description: 'Data-driven approach with measurable KPIs. Regular reporting and continuous optimization for maximum ROI.'
    }
  ];

  const howItWorks = [
    {
      number: '1',
      title: 'Discovery & Planning',
      description: 'Share your requirements, business goals, and technical needs. We analyze and create a comprehensive project brief.'
    },
    {
      number: '2',
      title: 'Solution Design',
      description: 'Review detailed technical proposals, architecture plans, and success metrics tailored to your objectives.'
    },
    {
      number: '3',
      title: 'Build & Deploy',
      description: 'Collaborate in real-time workspace. Milestone-based delivery with rigorous testing and documentation.'
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom neural networks and deep learning models',
      link: '/services'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights',
      link: '/services'
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'Intelligent automation and decision systems',
      link: '/services'
    },
    {
      icon: Code2,
      title: 'Python Systems',
      description: 'Robust automation and system integrations',
      link: '/services'
    }
  ];

  return (
    <div>
      <Hero />

      {/* Why Choose Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Why Choose Me?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The professional choice for AI and ML excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="card-dark rounded-2xl p-10 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <Icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-8 gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Simple process, exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20"
              >
                <div className="w-20 h-20 rounded-2xl gradient-bg-cyan flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-4xl font-black text-gray-900">{step.number}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              What I Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized expertise across the AI and data science spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="card-dark rounded-xl p-8 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-cyan-400 text-sm font-semibold inline-flex items-center">
                    Learn more
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="btn-primary inline-flex items-center px-10 py-5 text-white font-bold rounded-xl transition-all duration-300 group text-lg"
            >
              View All Services
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="gradient-bg rounded-3xl p-12 md:p-16 text-center shadow-2xl shadow-blue-500/20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let's discuss how machine learning and data science can drive your next breakthrough
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group text-lg"
              >
                Get Started
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/20 text-lg"
              >
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
