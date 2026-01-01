import { Award, BookOpen } from 'lucide-react';

const certifications = [
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2024',
    type: 'Professional Certification'
  },
  {
    title: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: '2024',
    type: 'Professional Certification'
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2023',
    type: 'Professional Course'
  },
  {
    title: 'MLOps Specialization',
    issuer: 'DeepLearning.AI',
    date: '2024',
    type: 'Professional Course'
  }
];

const achievements = [
  {
    metric: 'GitHub',
    value: '50+ Repositories',
    description: 'Active contributor to open-source ML projects'
  },
  {
    metric: 'Publications',
    value: '3 Technical Articles',
    description: 'Published on Medium and Towards Data Science'
  },
  {
    metric: 'Speaking',
    value: '2 Conference Talks',
    description: 'Local AI/ML meetups and workshops'
  },
  {
    metric: 'Mentoring',
    value: '10+ Developers',
    description: 'Guiding junior developers in ML/AI'
  }
];

const Certifications = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Professional Development
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Committed to continuous learning and staying at the forefront of AI innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card-dark rounded-xl p-6 hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-white flex-1">
                      {cert.title}
                    </h4>
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded border border-gray-700 ml-2">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-xs text-cyan-400 font-semibold">{cert.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">
                Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card-dark rounded-xl p-6 hover:scale-[1.02] transition-all"
                >
                  <div className="text-sm text-cyan-400 font-bold mb-1">
                    {achievement.metric}
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2">
                    {achievement.value}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gradient-bg rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-black text-white mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              The field of AI evolves rapidly. I dedicate time each week to exploring
              new research papers, experimenting with emerging frameworks, and contributing
              to the community. This commitment ensures my clients benefit from the latest
              techniques and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
