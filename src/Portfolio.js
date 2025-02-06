import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-10 flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Niharika Prathi
      </motion.h1>
      <p className="mt-4 text-lg text-gray-400">Data Engineer | Data Scientist | Developer</p>
      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/niha3101" className="text-gray-400 hover:text-white">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/niharika-prathi/" className="text-gray-400 hover:text-white">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
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
    <div className="py-20 px-10">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-5 rounded-xl hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="text-gray-400 mt-4">Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!</p>
      <a href="mailto:niharikaprathi3@gmail.com" className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 mt-6 rounded-lg hover:bg-gray-800">
        <Mail size={20} />
        <span>Email Me</span>
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}
