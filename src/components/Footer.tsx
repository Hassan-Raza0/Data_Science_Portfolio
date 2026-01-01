import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0e27] border-t border-white/10 text-gray-300 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Code2 className="text-white" size={24} />
              </div>
              <h3 className="text-white font-black text-2xl">
                Hassan <span className="text-cyan-400">Raza</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Data Scientist · AI/ML Engineer · Automation Developer
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Professional platform connecting businesses with cutting-edge AI and machine learning solutions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cyan-400 font-bold mb-6 text-lg uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Me' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors inline-block text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cyan-400 font-bold mb-6 text-lg uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              {[
                { to: '/services', label: 'Machine Learning' },
                { to: '/services', label: 'Data Analytics' },
                { to: '/services', label: 'AI Solutions' },
                { to: '/services', label: 'Python Automation' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors inline-block text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-cyan-400 font-bold mb-6 text-lg uppercase tracking-wide">Resources</h4>
            <ul className="space-y-3">
              {[
                { to: '/portfolio', label: 'Case Studies' },
                { to: '/blog', label: 'Blog' },
                { to: '/contact', label: 'Get in Touch' },
                { to: '/contact', label: 'Schedule Call' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors inline-block text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-base">
            © {new Date().getFullYear()} Hassan Raza. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={20} className="text-white" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} className="text-white" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
              href="mailto:hello@aiportfolio.dev"
              className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
