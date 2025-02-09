import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Sensor Data Aggregation System",
      description: "Developed a system to collect and process sensor data using Python and APIs",
      tags: ["Python", "API", "Data Visualization"],
      type: "Data Engineering"
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
    { name: "Python", level: "Expert" },
    { name: "SQL", level: "Advanced" },
    { name: "AWS", level: "Proficient" },
    { name: "Machine Learning", level: "Advanced" },
    { name: "Data Engineering", level: "Expert" }
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
      <div key={index} className="bg-white rounded-lg shadow-md p-6 transform transition hover:scale-105">
        <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Niharika Prathi</h1>
          <div className="space-x-6">
            {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map(section => (
              <a 
                key={section} 
                href={`#${section.toLowerCase()}`}
                onClick={() => setActiveSection(section.toLowerCase())}
                className={`text-gray-600 hover:text-blue-600 ${activeSection === section.toLowerCase() ? 'text-blue-600 font-bold' : ''}`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Home/Hero Section */}
      <section id="home" className="pt-24 pb-16 max-w-6xl mx-auto px-4 flex items-center">
        <div className="w-full flex items-center">
          <div className="w-2/3">
            <h2 className="text-4xl font-bold mb-4">
              Hi, I'm Niharika Prathi 👋
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Data Engineer & Data Scientist | Python | SQL | Machine Learning
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/niharika-prathi/" 
                target="_blank" 
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Linkedin className="mr-2" /> LinkedIn
              </a>
              <a 
                href="mailto:niharikaprathi3@gmail.com" 
                className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                <Mail className="mr-2" /> Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="flex justify-center mb-8">
            {['All', 'Data Engineering', 'AI/ML', 'Web Development'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`mx-2 px-4 py-2 rounded-full ${activeFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {renderProjects()}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Programming & Tools</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{width: skill.level === 'Expert' ? '90%' : skill.level === 'Advanced' ? '75%' : '60%'}}>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Certifications</h4>
              <div className="space-y-4">
                {[
                  "Microsoft Python Certified",
                  "Oracle Cloud Implementation",
                  "AWS Fundamentals",
                  "Data Science Orientation"
                ].map((cert, index) => (
                  <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center">
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
      <section id="experience" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">{job.company}</h4>
                  <span className="text-gray-600">{job.period}</span>
                </div>
                <h5 className="text-lg mb-3">{job.role}</h5>
                <ul className="list-disc list-inside text-gray-700">
                  {job.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:niharikaprathi3@gmail.com" 
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              <Mail className="mr-2" /> Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/niharika-prathi/" 
              target="_blank" 
              className="flex items-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
            >
              <Linkedin className="mr-2" /> LinkedIn Profile
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
