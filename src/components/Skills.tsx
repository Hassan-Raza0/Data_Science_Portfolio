const skillCategories = [
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'TensorFlow', level: 90 },
      { name: 'Scikit-learn', level: 95 },
      { name: 'Hugging Face', level: 85 },
      { name: 'OpenCV', level: 88 }
    ]
  },
  {
    title: 'Data Science & Analytics',
    skills: [
      { name: 'Pandas', level: 98 },
      { name: 'NumPy', level: 95 },
      { name: 'Matplotlib/Plotly', level: 92 },
      { name: 'SQL', level: 90 },
      { name: 'Apache Spark', level: 82 }
    ]
  },
  {
    title: 'Development & Deployment',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 80 },
      { name: 'FastAPI/Flask', level: 92 },
      { name: 'Git', level: 95 }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'GCP', level: 78 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'Redis', level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="expertise" className="py-24 px-6 lg:px-8 bg-gray-50/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Battle-tested skills across the modern AI and data science stack.
            Continuously learning and adapting to emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-dark rounded-2xl p-8"
            >
              <h3 className="text-xl font-black text-white mb-6">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-sm text-cyan-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden border border-gray-700/50">
                      <div
                        className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 card-dark rounded-2xl p-8">
          <h3 className="text-2xl font-black text-white mb-6 text-center">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Deep Learning',
              'Natural Language Processing',
              'Computer Vision',
              'Time Series Analysis',
              'Feature Engineering',
              'Model Optimization',
              'A/B Testing',
              'Statistical Analysis',
              'Data Visualization',
              'API Development',
              'CI/CD Pipelines',
              'Agile Development',
              'Technical Documentation',
              'Code Review',
              'System Architecture'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
