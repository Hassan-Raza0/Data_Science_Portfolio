import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm border-2 border-cyan-400/30 bg-cyan-400/5 px-6 py-3 rounded-full backdrop-blur-sm">
              AI & Machine Learning Specialist
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="text-white">Build the </span>
            <span className="gradient-text block">Future</span>
            <span className="text-white">with Intelligent Systems</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed max-w-4xl mx-auto">
            Transforming businesses through production-ready AI and machine learning solutions.
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            From neural networks to data pipelines, delivering measurable results that drive real business value.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center px-10 py-5 text-white font-bold rounded-xl transition-all duration-300 group text-lg"
            >
              Start Your Project
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary inline-flex items-center px-10 py-5 text-gray-900 font-bold rounded-xl transition-all duration-300 text-lg"
            >
              View Portfolio
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black mb-3">
                <span className="gradient-text">15+</span>
              </div>
              <div className="text-gray-300 font-semibold text-lg">ML Systems Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black mb-3">
                <span className="gradient-text">8+</span>
              </div>
              <div className="text-gray-300 font-semibold text-lg">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black mb-3">
                <span className="gradient-text">$10M+</span>
              </div>
              <div className="text-gray-300 font-semibold text-lg">Value Generated</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl card-dark flex items-center justify-center hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl card-dark flex items-center justify-center hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-gray-300" />
            </a>
            <a
              href="mailto:hello@aiportfolio.dev"
              className="w-14 h-14 rounded-xl card-dark flex items-center justify-center hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} className="text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
