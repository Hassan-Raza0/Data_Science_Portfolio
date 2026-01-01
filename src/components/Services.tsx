import { Brain, BarChart3, Bot, Code2 } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning & Deep Learning',
    description: 'Custom ML models tailored to your business needs. From predictive analytics to computer vision and NLP, I build systems that learn and adapt.',
    capabilities: [
      'Neural network architecture design',
      'Model training and optimization',
      'Transfer learning implementation',
      'Production deployment pipelines'
    ]
  },
  {
    icon: BarChart3,
    title: 'Data Science & Analytics',
    description: 'Transform raw data into actionable insights. Advanced statistical analysis, visualization, and reporting systems that drive decision-making.',
    capabilities: [
      'Exploratory data analysis',
      'Statistical modeling',
      'Interactive dashboards',
      'Business intelligence solutions'
    ]
  },
  {
    icon: Bot,
    title: 'Artificial Intelligence Solutions',
    description: 'End-to-end AI system development. Intelligent agents, recommendation engines, and automated decision-making systems for real-world applications.',
    capabilities: [
      'AI strategy and consulting',
      'Intelligent automation',
      'Recommendation systems',
      'Chatbots and virtual assistants'
    ]
  },
  {
    icon: Code2,
    title: 'Python Automation & Systems',
    description: 'Robust automation solutions that save time and eliminate errors. From data pipelines to system integrations and workflow automation.',
    capabilities: [
      'ETL pipeline development',
      'API integrations',
      'Process automation',
      'System monitoring and logging'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized expertise across the full spectrum of AI, ML, and data science.
            Production-ready solutions that scale with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="text-emerald-600 group-hover:text-white transition-colors" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-emerald-600 mr-2">•</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
