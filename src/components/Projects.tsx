import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    category: 'Machine Learning',
    title: 'Predictive Maintenance System',
    description: 'Deep learning model predicting equipment failures 48 hours in advance. Reduced downtime by 37% for manufacturing client, saving $2M annually.',
    tech: ['PyTorch', 'LSTM Networks', 'FastAPI', 'Docker'],
    impact: '37% reduction in downtime',
    type: 'Enterprise'
  },
  {
    category: 'Computer Vision',
    title: 'Quality Control AI',
    description: 'Real-time defect detection system processing 100+ images per second. Achieved 99.2% accuracy in identifying manufacturing defects.',
    tech: ['TensorFlow', 'YOLO v8', 'OpenCV', 'Kubernetes'],
    impact: '99.2% accuracy',
    type: 'Production'
  },
  {
    category: 'Data Science',
    title: 'Customer Analytics Platform',
    description: 'End-to-end analytics pipeline processing 5M+ daily events. Delivered actionable insights through interactive dashboards and automated reporting.',
    tech: ['Python', 'Pandas', 'Plotly', 'PostgreSQL'],
    impact: '5M+ events daily',
    type: 'Enterprise'
  },
  {
    category: 'NLP',
    title: 'Document Intelligence System',
    description: 'Automated document classification and information extraction using transformer models. Reduced manual processing time by 85%.',
    tech: ['BERT', 'spaCy', 'Hugging Face', 'Redis'],
    impact: '85% time reduction',
    type: 'Production'
  },
  {
    category: 'Automation',
    title: 'Multi-Source Data Pipeline',
    description: 'Scalable ETL system integrating 15+ data sources. Automated data validation, transformation, and loading with comprehensive error handling.',
    tech: ['Apache Airflow', 'Python', 'AWS', 'MongoDB'],
    impact: '15+ sources integrated',
    type: 'Enterprise'
  },
  {
    category: 'AI Agent',
    title: 'Intelligent Recommendation Engine',
    description: 'Hybrid recommendation system combining collaborative filtering and content-based approaches. Increased user engagement by 42%.',
    tech: ['Scikit-learn', 'LightGBM', 'Redis', 'Flask'],
    impact: '42% engagement increase',
    type: 'Production'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world solutions delivering measurable impact. From proof-of-concept
            to production deployment at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-emerald-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs font-medium text-gray-500">
                  {project.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-900 mb-2">
                  {project.impact}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-white text-gray-700 rounded border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <button className="flex items-center text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  <Github size={16} className="mr-1" />
                  Code
                </button>
                <button className="flex items-center text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  <ExternalLink size={16} className="mr-1" />
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
