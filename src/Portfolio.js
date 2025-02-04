import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Sensor Data Aggregation & Visualization System",
      description: "Developed a system to collect and process sensor data using Python and APIs, presenting insights through a web-based GUI.",
      tags: ["Python", "APIs", "Visualization"],
      link: "#"
    },
    {
      title: "Medical Chatbot (LLM, Pinecone, LangChain)",
      description: "Built a chatbot using LLMs, Pinecone for vector-based retrieval, and LangChain, enhancing patient interactions with AI-driven insights.",
      tags: ["AI", "Machine Learning", "LangChain"],
      link: "#"
    },
    {
      title: "COVID-19 Hospital Management System",
      description: "Designed a hospital management system using HTML, CSS, JavaScript, and MySQL for real-time booking of hospital beds.",
      tags: ["HTML", "CSS", "MySQL"],
      link: "#"
    }
  ];

  const skills = [
    "Python", "SQL", "Java", "AWS", "Git", "Docker", "Airflow", "Kubernetes", 
    "Machine Learning", "Data Science", "Power BI", "Tableau"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Niharika Prathi</h1>
          <div className="space-x-6">
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Hi, I'm Niharika Prathi 👋</h2>
          <p className="text-xl text-gray-600 mb-8">
            Data Engineer & Data Scientist skilled in Python, SQL, and building scalable data solutions.
            Passionate about machine learning, predictive analytics, and automation.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/your-github" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/niharika-prathi/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-12">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-12">Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-sm">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-12">Get in Touch</h3>
          <p className="text-gray-600 mb-8">Feel free to reach out for collaborations or opportunities.</p>
          <a href="mailto:niharikaprathi3@gmail.com" className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            <Mail size={20} />
            <span>Email Me</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;