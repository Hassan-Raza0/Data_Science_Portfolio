import { Mail, Linkedin, Github, Send, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Available for freelance projects, consulting engagements, and collaborative opportunities.
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need an AI solution, data analytics platform, or automation system,
                I'm here to help bring your vision to life. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:contact@example.com"
                className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors">
                  <Mail className="text-emerald-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-semibold text-gray-900">contact@example.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors">
                  <Linkedin className="text-emerald-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">LinkedIn</div>
                  <div className="font-semibold text-gray-900">Connect Professionally</div>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors">
                  <Github className="text-emerald-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">GitHub</div>
                  <div className="font-semibold text-gray-900">View Code Portfolio</div>
                </div>
              </a>

              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors">
                  <Calendar className="text-emerald-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Schedule</div>
                  <div className="font-semibold text-gray-900">Book a Consultation</div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">Project Inquiry</h4>
              <p className="text-sm text-gray-600 mb-3">
                For project inquiries, please include:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Project scope and timeline</li>
                <li>• Technical requirements</li>
                <li>• Budget range</li>
                <li>• Expected deliverables</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                >
                  <option>Machine Learning Project</option>
                  <option>Data Analytics</option>
                  <option>AI Solution</option>
                  <option>Python Automation</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-semibold py-4 rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-gray-600">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-medium">Currently accepting new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
