import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, ChevronDown, Briefcase, Phone } from 'lucide-react';
import sensorDataImg from './assets/Sensor Data.jpg';
import medicalChatbotImg from './assets/Medical Chatbot.jpg';
import covidSystemImg from './assets/COVID-19.jpg';
import profilePic from './assets/profile-pic.jpeg'; 
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
      title: "Sensor Data Aggregation & Visualization System",
      description: "Developed a system to collect and process sensor data using Python and APIs, presenting insights through a web-based GUI",
      image: sensorDataImg,
      tags: ["Python", "APIs", "Data Visualization", "GUI"],
      type: "Data Engineering"
    },
    {
      title: "Medical Chatbot Development",
      description: "A medical chatbot utilizing Large Language Models (LLMs), Pinecone for vector-based retrieval, and LangChain for seamless integration, enhancing patient interaction with accurate, context-driven medical insights.",
      image: medicalChatbotImg,
      tags: ["LLM", "Pinecone", "LangChain", "Healthcare"],
      type: "AI/ML"
    },
    {
      title: "COVID-19 Hospital Management System",
      description: "Designed a hospital management system using HTML, CSS, JavaScript, and MySQL to facilitate real-time booking of hospital beds.",
      image: covidSystemImg,
      tags: ["HTML", "CSS", "JavaScript", "MySQL"],
      type: "Web Development"
    }
  ];

  const skills = [
    {
      category: "Programming & Tools",
      items: [
        { name: "Python", level: "Expert" },
        { name: "SQL/PL/SQL,PostgreSQL", level: "Expert" },
        { name: "Java", level: "intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "AWS services (EC2, S3, RDS),", level: "Advanced" },
        { name: "Git, Excel, sharepoint", level: "Advanced" },
        { name: "Tableau, Power BI", level: "Advanced" }
        
      ]
    },
    {
      category: "Data Science & AI",
      items: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
        { name: "PyTorch", level: "Advanced" },
        { name: "EDA", level: "Expert" },
        { name: "scikit-learn", level: "Expert" },
        { name: "statistical analysis", level: "Advanced" },
        { name: "A/B testing", level: "Intermediate" }

      ]
    },
    {
      category: "Data Engineering",
      items: [
        { name: "ETL Pipeline", level: "Expert" },
        { name: "Data Warehousing", level: "Expert" },
        { name: "Kafka", level: "Advanced" },
        { name: "Spark", level: "Advanced" },
        { name: "Data Modeling", level: "Expert" },
        { name: "VS Code", level: "Expert" },
        { name: "Airflow, Docker, Kubernetes", level: "Advanced" }

      ]
    }
  ];

  const experience = [
    {
      company: "Energy Aspects",
      role: "Data Engineer Intern",
      location: "New York, USA",
      period: "Jul 2024 - Oct 2024",
      highlights: [
        "ETL Development: Designed and implemented an ETL pipeline to integrate diverse data formats (CSV, JSON, XML) from websites and APIs using Python, PostgreSQL, and Amazon S3.",
        "Process Automation: Automated ETL workflows using Airflow, Kubernetes, and Docker, improving execution speed and reliability.",
        "Development & Version Control: Utilized VS Code and Git for efficient code management throughout the project lifecycle.",
        "Data Warehousing: Developed a robust data warehousing solution on GCP with history tables, enhancing data management efficiency.",
        "SQL Optimization & Reporting: Optimized SQL queries, improving data retrieval speed and accuracy by 35%, and contributed to Power BI dashboards for KPI tracking and enhanced reporting.",
      ]
    },
    {
      company: "Northern Illinois University",
      role: "Graduate Assistant (Data Analyst)",
      location: "Illinois, USA",
      period: "May 2023 - Jun 2024",
      highlights: [
        "Marketing Data Integration: Developed an ETL pipeline using Python and SQL to unify marketing data from Google Analytics, social media, email, and CRM into a centralized data warehouse for analysis.",
        "Data Visualization: Created Tableau dashboards improving decision-making by 20%.",
        "Statistical Analysis: Implemented ML algorithms in SAS Studio, enhancing precision by 35%.",
        "Database Management: Managed student database using Python and SQL, improving speed by 25%."
        
      ]
    },
    {
      company: "Accenture",
      role: "Data Engineer",
      location: "Bengaluru",
      period: "Mar 2021 - Jul 2022",
      highlights: [
       "Collaboration & Business Impact: Worked closely with cross-functional teams and senior analysts to gather requirements, design data models, and translate business needs into technical solutions, improving application efficiency by 20%.",
       "Streaming & Big Data Processing: Developed scalable ETL pipelines leveraging Python, SQL, Apache Kafka, and Spark, processing 10TB/day and improved ingestion speed.",
       "Database Performance Tuning: Optimized Oracle and PostgreSQL databases with indexing, partitioning, and materialized views, enhancing query speed by 5x.",
       "SQL & Oracle Development: Developed and maintained SQL scripts, stored procedures, and Oracle packages for banking and financial operations (customer data, transactions, regulatory reporting), ensuring GDPR compliance by optimizing queries, including complex joins and subqueries, for efficient data manipulation."
      ]
    },
    {
      company: "Accenture",
      role: "Data Solutions Engineer",
      location: "Bengaluru",
      period: "Jul 2022 - Dec 2022",
      highlights: [
       "AI & Data Engineering: Built a hedge fund recommender system and conducted real estate market analysis using Python, SQL, and ML techniques.",
       "Backend Optimization: Designed and optimized backend infrastructure with Flask, PostgreSQL, AWS (EC2, S3, RDS), and Unix, reducing latency by 40%.",
       "Scripting & Automation: Proficient in Python, Shell scripting, and PowerShell for automating workflows, reducing downtime by 30%.",
      ]
    }
  ];

  const certifications = [
    {
      name: "Microsoft Python Certified",
      provider: "Microsoft",
      icon: <Code className="text-blue-400" size={24} />
    },
    {
      name: "Oracle Cloud Implementation",
      provider: "Oracle",
      icon: <Database className="text-blue-400" size={24} />
    },
    {
      name: "AWS Fundamentals",
      provider: "Amazon Web Services",
      icon: <Code className="text-blue-400" size={24} />
    },
    {
      name: "Data Science Orientation",
      provider: "DataCamp",
      icon: <Database className="text-blue-400" size={24} />
    }
  ];

  const renderProjects = () => {
    const filteredProjects = activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.type === activeFilter);

    return filteredProjects.map((project, index) => (
      <div key={index} className="bg-gray-900 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 border border-gray-800">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h4 className="text-xl font-semibold mb-3 text-white">{project.title}</h4>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-white">
              Niharika Prathi
            </a>
            <div className="flex space-x-8">
              {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map(section => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  onClick={() => setActiveSection(section.toLowerCase())}
                  className={`text-gray-400 hover:text-blue-400 transition-all duration-300 ${
                    activeSection === section.toLowerCase() ? 'text-blue-400' : ''
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
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
  <div className="max-w-6xl mx-auto">
    <div className="text-center md:text-left">
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Hi, I'm Niharika Prathi 👋
      </h2>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl">
        A passionate data enthusiast with a knack for building rock-solid data pipelines, crafting machine learning magic, and making data-driven decisions look easy.
        I thrive on digging deep into data, analyzing trends, and collaborating with business minds to turn numbers into action!
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/niharika-prathi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Linkedin className="mr-2" size={20} /> Connect on LinkedIn
          </a>
          <a
            href="mailto:niharikaprathi3@gmail.com"
            className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Mail className="mr-2" size={20} /> Get in Touch
          </a>
        </div>
        <div className="w-64 h-64 rounded-full border-4 border-blue-400 overflow-hidden">
          <img
            src={profilePic}
            alt="Niharika Prathi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Data Engineering&Analysis', 'AI/ML', 'Web Development'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
      <section id="skills" className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h4 className="text-xl font-semibold mb-6 text-blue-400">{category.category}</h4>
                <div className="space-y-4">
                  {category.items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: skill.level === 'Expert' ? '90%' : '75%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 transform transition-all duration-300 hover:scale-105">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400">{job.company}</h4>
                    <p className="text-lg text-white mb-2">{job.role}</p>
                    <p className="text-gray-400">{job.location}</p>
                  </div>
                  <span className="text-gray-400">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className="text-blue-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 transform transition-all duration-300 hover:scale-105">
                <div className="mb-4">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                <p className="text-gray-400">{cert.provider}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let’s Make Data Magic Together: If you're looking for someone to transform data into powerful insights, craft seamless pipelines, or sprinkle some machine learning magic, don’t hesitate to reach out—I’d love to chat!
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="mailto:niharikaprathi3@gmail.com" 
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 transform transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-8 h-8 mb-4 text-blue-400" />
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-gray-400">niharikaprathi3@gmail.com</p>
            </a>
            <a 
              href="tel:331-814-7977"
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 transform transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-8 h-8 mb-4 text-purple-400" />
              <h4 className="text-lg font-semibold mb-2">Phone</h4>
              <p className="text-gray-400">331-814-7977</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/niharika-prathi/"
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 transform transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-8 h-8 mb-4 text-blue-400" />
              <h4 className="text-lg font-semibold mb-2">LinkedIn</h4>
              <p className="text-gray-400">Connect with me</p>
            </a>
            <a 
              href="https://github.com/niha3101"
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 transform transition-all duration-300 hover:scale-105"
            >
              <Github className="w-8 h-8 mb-4 text-gray-400" />
              <h4 className="text-lg font-semibold mb-2">GitHub</h4>
              <p className="text-gray-400">View my projects</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Niharika Prathi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

