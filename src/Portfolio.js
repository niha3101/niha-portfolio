import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Home = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-10 flex flex-col justify-center items-center text-center py-20">
      <motion.h1
        className="text-5xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Niharika Prathi
      </motion.h1>
      <p className="mt-4 text-xl text-gray-300">Data Engineer | Data Scientist | Developer</p>
      <div className="flex space-x-6 mt-8">
        <a href="https://github.com/niha3101" className="text-gray-300 hover:text-white transition duration-300">
          <Github size={30} />
        </a>
        <a href="https://www.linkedin.com/in/niharika-prathi/" className="text-gray-300 hover:text-white transition duration-300">
          <Linkedin size={30} />
        </a>
      </div>
      <div className="mt-8 space-x-6">
        <button onClick={() => setActiveSection("projects")} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">View Projects</button>
        <button onClick={() => setActiveSection("contact")} className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">Contact Me</button>
      </div>
    </div>
  );
};

const Projects = ({ setActiveSection }) => {
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

  return (
    <div className="py-20 px-10 bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <button onClick={() => setActiveSection("home")} className="mt-8 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300 block mx-auto">Back</button>
    </div>
  );
};

const Contact = ({ setActiveSection }) => {
  return (
    <div className="py-20 px-10 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold">Get in Touch</h2>
      <p className="text-gray-300 mt-4">Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!</p>
      <a href="mailto:niharikaprathi3@gmail.com" className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 mt-6 rounded-lg hover:bg-blue-700 transition duration-300">
        <Mail size={24} />
        <span>Email Me</span>
      </a>
      <button onClick={() => setActiveSection("home")} className="mt-8 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300 block mx-auto">Back</button>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
      {activeSection === "projects" && <Projects setActiveSection={setActiveSection} />}
      {activeSection === "contact" && <Contact setActiveSection={setActiveSection} />}
    </div>
  );
}
