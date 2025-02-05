import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Sensor Data Aggregation & Visualization System",
      description: "Developed a system to collect and process sensor data using Python and APIs, presenting insights through a web-based GUI.",
      tags: ["Python", "APIs", "Visualization"]
    },
    {
      title: "Medical Chatbot (LLM, Pinecone, LangChain)",
      description: "Built a chatbot using LLMs, Pinecone for vector-based retrieval, and LangChain, enhancing patient interactions with AI-driven insights.",
      tags: ["AI", "Machine Learning", "LangChain"]
    },
    {
      title: "COVID-19 Hospital Management System",
      description: "Designed a hospital management system using HTML, CSS, JavaScript, and MySQL for real-time booking of hospital beds.",
      tags: ["HTML", "CSS", "MySQL"]
    }
  ];
  const Achievements = [
    {
      title: "Accenture Pinnacle Award",
      description: "Won it for going the extra mile, putting efforts into solving client's requirements, and providing continuous support in production deployments.",
      
    },
    {
      title: "Event Management",
      description: "Organized and volunteered for various departmental events as a part of my graduate assistant role, including planning and managing an awards ceremony with up to 250+ attendees, including directors, professors, and students at the College of Business.",
      
    },
    {
      title: "Graduate Tuition Waiver Scholarship",
      description: "Received a scholarship for a computer science graduate tuition waiver of up to 80% of the tuition for acknowledgment of academic achievement and research excellence.",
      
    }
  ];


  const skills = [
    "Python", "SQL", "Java", "AWS", "Git", "Docker", "Airflow", "Kubernetes", 
    "Machine Learning", "Data Science", "Power BI", "Tableau"
  ];

  const experience = [
    {
      company: "Energy Aspects",
      position: "Data Engineer Intern",
      duration: "Jul 2024 - Oct 2024",
      location: "One World Trade Center, New York, USA",
      description: [
        " Designed and implemented a comprehensive data pipeline integrating data from various sources such as websites, flatfiles and APIs in diverse formats (CSV, JSON, XML),ensuring data integrity and quality using Python, PostgreSQL, and Amazon S3.",
        "Designed and implemented a data model for US power market data, improving data consistency and reducing query time, with KPIs tracked through Power BI dashboards.",
        "Created a robust data warehousing solution with history tables on GCP, improving data management efficiency and contributing to KPI tracking and reporting.",
        "Collaborated with senior analysts to define data requirements, solution architecture, and integrated Power BI for advanced data visualization and insights, aligning solutions with business KPIs.",
        "Automated ETL processes with Airflow, Kubernetes, and Docker, increasing execution speed and reliability, with performance improvements monitored through key performance indicators (KPIs).", 
        "Utilized Spark for large-scale data processing, optimizing performance and handling large datasets, resulting in enhanced operational KPIs.",
        "Documented solution design, implementation details, and best practices in a comprehensive technical report to ensure knowledge transfer and maintainability.", 
        "Developed and maintained code using VS Code and Git for version control, ensuring efficient monitoring and code management.",
        "Optimized SQL queries, enhancing data retrieval speed and accuracy, and contributed to Power BI dashboards, improving reporting capabilities and data-driven decision-making.",
      ]
    },
    {
      company: "Northern Illinois University",
      position: "Graduate Assistant (Data Analyst)",
      duration: "May 2023 - Jun 2024",
      location: "Illinois, USA",
      description: [
        "Worked as a Marketing Department Graduate Assistant in the College of Business at Northern Illinois University, where I was part of a project aimed at integrating marketing data from various sources to create a unified database for comprehensive analysis.",
        "Consolidated data from multiple marketing channels, such as Google Analytics, social media platforms (Facebook, Twitter), email marketing tools, and CRM systems, into a centralized data warehouse. This project involved extensive use of ETL (Extract, Transform, Load) processes, leveraging Python and SQL to automate and streamline the data integration.",
        "Developed and maintained student database using Python, SQL, and Excel.",
        "Performed statistical analytics of data in SAS Studio using machine learning models for professor research.",
        "Proficient in scripting languages like Python, Shell scripting, or PowerShell for automation of ETL tasks and scheduling workflows.",
        "Created Tableau dashboards, improving decision-making by 20%, and conducted volunteer research on AI’s impact on SCM (Supply chain).",
      ]
    },
    {
      company: "Accenture",
      position: "Data Solutions Engineer",
      duration: "Mar 2021 - Dec 2022",
      location: "Bengaluru, India",
      description: [
        "Collaborated with cross-functional teams in the financial services and banking sector to gather requirements and translate them into technical specifications, improving application code efficiency and ensuring industry compliance.",
        "Developed and maintained SQL scripts, stored procedures, and database components to support banking operations, enhancing operational efficiency and data integrity.",
        "Utilized Oracle 11g/12c/PLSQL to implement table functions, indexes, partitioning, analytical functions, materialized views, and transportable tablespaces, optimizing database performance.",
        "Designed and maintained data extraction, transformation, and loading (ETL) processes, ensuring accurate data integration across systems.",
        "Conducted code reviews and performance analysis, optimizing SQL queries and improving system performance.",
        "Proficient in SQL for data manipulation, refactoring complex joins and subqueries for enhanced performance.",
        "Developed, tested, debugged, and documented Oracle packages and types, ensuring adherence to company policies and GDPR regulations.",
        "Led the development of 12 database projects, delivering on time and under budget.",
        "Implemented and managed backup and recovery strategies using impdp/expdp utilities, ensuring data integrity and business continuity.",
        "Conducted SQL Server installations, updates, configuration, and maintenance, analyzing and optimizing complex queries.",
        "Optimized in-application SQL statements, improving system stability, reliability, and performance.",
        "Performed database defragmentation, significantly enhancing database performance and query execution speed.",
        "Resolved database access and performance issues, ensuring seamless operations across enterprise systems.",
        "Designed and optimized backend infrastructure using Flask, PostgreSQL, and AWS services (EC2, S3, RDS), reducing latency by 40%.",
      ]
    },
    {
      company: "DXC technologies",
      position: "Software Engineer - Data",
      duration: "Mar 2021 - Dec 2022",
      location: "Hyderabad, India",
      description: [
        "Experience in data modeling techniques including conceptual, logical, and physical data modeling. Familiarity with dimensional modeling for data warehousing.",
        "Strong command over SQL queries for data extraction, transformation, and loading tasks and Proficient in using ETL tools like Informatica PowerCenter, Tableau.",
        "Conducted a customer segmentation analysis for an e-commerce client using Python, Scikit-learn, and SQL, enabling targeted marketing campaigns and personalized recommendations.",
        "Built predictive models to forecast sales trends and designed Tableau dashboards, improving inventory management by 15% and streamlining decision-making.",
        "Cleaned and processed large datasets to extract insights into purchasing behaviors, increasing customer retention by 25%.",
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Niharika Prathi</h1>
          <div className="space-x-6">
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#achievements" className="text-gray-600 hover:text-gray-900">Achievements</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Hi, This is Niharika Prathi 👋</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm a Data Engineer & Data Scientist with a knack for building scalable data solutions that make an impact. With hands-on experience in Python, SQL, and AWS, I thrive on solving complex data challenges with a splash of creativity. Passionate about machine learning, predictive analytics, and automation – and yes, I promise I can explain complex topics in an easy-to-understand way (or a meme!). Let's connect!
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/niha3101" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900">
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
          <h3 className="text-2xl font-bold mb-12 text-gray-800">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-12 text-gray-800">Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-sm text-gray-800">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-12 text-gray-800">Experience</h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800">{job.position} @ {job.company}</h4>
                <p className="text-gray-600 mb-4">{job.duration} - {job.location}</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {job.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section id="Achievements" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-12 text-gray-800">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Achievements.map((Achievements, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{Achievements.title}</h4>
                <p className="text-gray-600 mb-4">{Achievements.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Achievements.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-12 text-gray-800">Get in Touch</h3>
          <p className="text-gray-600 mb-8">Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!</p>
          <a href="mailto:niharikaprathi3@gmail.com" className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            <Mail size={20} />
            <span>Email Me</span>niharikaprathi3@gmail.com
          </a>
          <p className="mt-4 text-gray-600">Or reach me directly at: <span className="font-semibold">331-814-7977</span></p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
