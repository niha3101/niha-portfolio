import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, ChevronDown, Phone, Briefcase } from 'lucide-react';
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Sensor Data Aggregation System",
      description: "Developed a system to collect and process sensor data using Python and APIs",
      tags: ["Python", "API", "Data Visualization"],
      type: "Data Engineering and IOT"
    },
    {
      title: "Medical Chatbot",
      description: "Chatbot utilizing LLMs, Pinecone, and LangChain for medical insights",
      tags: ["LLM", "Pinecone", "LangChain"],
      type: "AI/ML"
    },
    {
      title: "COVID-19 Hospital Management System",
      description: "Real-time hospital bed booking system",
      tags: ["HTML", "CSS", "JavaScript", "MySQL"],
      type: "Web Development"
    }
  ];

  const skills = [
    { name: "Python", level: "Expert", percentage: 90 },
    { name: "SQL", level: "Advanced", percentage: 85 },
    { name: "AWS", level: "Proficient", percentage: 75 },
    { name: "Machine Learning", level: "Advanced", percentage: 85 },
    { name: "Data Engineering", level: "Expert", percentage: 90 }
  ];

  const workExperience = [
    {
      company: "Energy Aspects",
      role: "Data Engineer Intern",
      period: "Jul 2024 - Oct 2024",
      highlights: [
        "Designed comprehensive data pipelines",
        "Automated ETL processes with Airflow and Kubernetes",
        "Implemented data warehousing solutions"
      ]
    },
    {
      company: "Accenture",
      role: "Data Solutions Engineer",
      period: "Jul 2022 - Dec 2022",
      highlights: [
        "Built recommender systems",
        "Optimized backend infrastructure",
        "Conducted real estate market analysis"
      ]
    }
  ];

  const renderProjects = () => {
    const filteredProjects = activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.type === activeFilter);

    return filteredProjects.map((project, index) => (
      <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold">
              Niharika Prathi
            </a>
            
            {/* Desktop Navigation */}
            <div className="flex space-x-8">
              {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map(section => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  onClick={() => setActiveSection(section.toLowerCase())}
                  className={`text-gray-600 hover:text-blue-600 transition-all duration-300 text-base ${
                    activeSection === section.toLowerCase() ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
              Hi, I'm Niharika Prathi 👋
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Passionate Data Engineer & Data Scientist specializing in building robust data pipelines
              and deriving meaningful insights through machine learning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/niharika-prathi/"
                target="_blank"
                className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin className="mr-2" size={20} /> Connect on LinkedIn
              </a>
              <a
                href="mailto:niharikaprathi3@gmail.com"
                className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="mr-2" size={20} /> Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Data Engineering', 'AI/ML', 'Web Development'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderProjects()}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Code className="mr-2 text-blue-600" /> Programming & Tools
              </h4>
              {skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-600">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Database className="mr-2 text-blue-600" /> Certifications
              </h4>
              <div className="space-y-4">
                {[
                  "Microsoft Python Certified",
                  "Oracle Cloud Implementation",
                  "AWS Fundamentals",
                  "Data Science Orientation"
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Code className="mr-4 text-blue-600" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold text-blue-600">{job.company}</h4>
                  <span className="text-gray-600">{job.period}</span>
                </div>
                <h5 className="text-lg mb-4 flex items-center">
                  <Briefcase className="mr-2 text-gray-600" size={18} />
                  {job.role}
                </h5>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <a 
              href="tel:331-814-7977"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-gray-600">331-814-7977</p>
            </a>
            <a 
              href="mailto:niharikaprathi3@gmail.com"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">niharikaprathi3@gmail.com</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/niharika-prathi/"
              target="_blank"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Linkedin className="text-indigo-600" />
              </div>
              <h4 className="font-semibold mb-2">LinkedIn</h4>
              <p className="text-blue-600"></p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Niharika Prathi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
