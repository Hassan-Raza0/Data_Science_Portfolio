import { Briefcase, GraduationCap, Award, Target, Code2, Users, User } from 'lucide-react';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import photo from './photo.jpg';

const About = () => {
  const experience = [
    {
      year: '2024 - Present',
      role: 'AI/ML Consultant',
      company: 'Freelance',
      description: 'Providing end-to-end AI and machine learning solutions for clients across manufacturing, e-commerce, and finance sectors.',
      achievements: [
        'Delivered 15+ production systems with measurable ROI',
        'Maintained 100% client satisfaction rate',
        'Reduced operational costs by avg. 35% for clients'
      ]
    },
    {
      year: '2023 - 2024',
      role: 'Data Science Engineer',
      company: 'Tech Solutions Co.',
      description: 'Led development of ML pipelines and data analytics platforms. Collaborated with cross-functional teams to deploy scalable AI solutions.',
      achievements: [
        'Built real-time analytics processing 10M+ events daily',
        'Improved model accuracy by 23% through advanced feature engineering',
        'Mentored 5 junior developers in ML best practices'
      ]
    },
    {
      year: '2022 - 2023',
      role: 'Python Developer',
      company: 'DataCorp Inc.',
      description: 'Developed automation systems and data pipelines. Focused on ETL processes, API integrations, and workflow optimization.',
      achievements: [
        'Automated 80% of manual data processing tasks',
        'Integrated 20+ external data sources',
        'Reduced data processing time by 60%'
      ]
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Every line of code serves a business purpose. Success measured by impact delivered, not technical complexity.'
    },
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Maintainable, well-documented code that teams understand and extend. Quality over quick fixes, always.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Technical excellence paired with clear communication. Partnering with clients for alignment at every step.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Photo Placeholder */}
      <section className="pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-3xl overflow-hidden card-dark">
                  <img
                    src={photo}
                    alt="Profile"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 gradient-bg-cyan rounded-2xl opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-bg rounded-2xl opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                A Computer Science professional specializing in AI, machine learning, and data science.
                I build production-ready systems that solve real business problems and deliver measurable results.
              </p>
              <div className="flex flex-col gap-4 text-gray-300 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <span className="font-semibold">Computer Science Graduate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-bg-cyan flex items-center justify-center">
                    <Briefcase size={24} className="text-gray-900" />
                  </div>
                  <span className="font-semibold">2+ Years Professional Experience</span>
                </div>
              </div>
              <div className="inline-block px-6 py-3 rounded-full border-2 border-cyan-400/30 bg-cyan-400/5">
                <span className="text-cyan-400 font-bold">Currently accepting new projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-8">
              My Journey
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                My path into AI and data science began during my Computer Science studies,
                where I discovered the power of machine learning to solve complex, real-world problems.
                What started as academic curiosity quickly evolved into professional expertise.
              </p>
              <p>
                Throughout my final year of university, I began taking on freelance projects,
                applying classroom theory to actual business challenges. This hands-on experience
                taught me something crucial: technical excellence is only valuable when it delivers
                measurable business impact.
              </p>
              <p>
                Today, I work with clients ranging from startups to established enterprises,
                building AI systems that don't just work in theory—they perform in production,
                scale with growth, and generate real ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-300">
              Building expertise through real-world challenges
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="card-dark rounded-2xl p-8 hover:scale-[1.02] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 font-bold mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-gray-400 bg-gray-800/50 px-4 py-2 rounded-lg">
                    {exp.year}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-sm font-bold text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <Award className="text-cyan-400 mr-3 flex-shrink-0 mt-1" size={16} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              My Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every project I undertake
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="card-dark rounded-2xl p-8 hover:scale-105 transition-all"
                >
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <Skills />
      <Certifications />
    </div>
  );
};

export default About;
