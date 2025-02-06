import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "./Portfolio.css";

const Home = ({ setActiveSection }) => (
  <div className="home-container">
    <motion.h1 className="title" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      Hi, I'm Niharika Prathi!
    </motion.h1>
    <p className="subtitle">Data Engineer | Data Scientist | Developer</p>
    <div className="social-links">
      <a href="https://github.com/niha3101"><Github size={30} /></a>
      <a href="https://www.linkedin.com/in/niharika-prathi/"><Linkedin size={30} /></a>
    </div>
    <div className="buttons">
      <button onClick={() => setActiveSection("projects")}>View Projects</button>
      <button onClick={() => setActiveSection("contact")}>Contact Me</button>
    </div>
  </div>
);

const Projects = ({ setActiveSection }) => (
  <div className="projects-container">
    <h2>Projects</h2>
    <div className="projects-grid">
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <h3>Sensor Data Aggregation & Visualization System</h3>
        <p>Developed a system to collect and process sensor data using Python and APIs.</p>
      </motion.div>
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <h3>Medical Chatbot (LLM, Pinecone, LangChain)</h3>
        <p>Built a chatbot using LLMs, Pinecone for vector retrieval, and LangChain.</p>
      </motion.div>
    </div>
    <button onClick={() => setActiveSection("home")} className="back-button">Back</button>
  </div>
);

const Contact = ({ setActiveSection }) => (
  <div className="contact-container">
    <h2>Get in Touch</h2>
    <p>Feel free to reach out for collaborations, opportunities, or just a friendly chat!</p>
    <a href="mailto:niharikaprathi3@gmail.com" className="email-button"><Mail size={24} />Email Me</a>
    <button onClick={() => setActiveSection("home")} className="back-button">Back</button>
  </div>
);

export default function Portfolio({ activeSection, setActiveSection }) {
  return (
    <div>
      {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
      {activeSection === "projects" && <Projects setActiveSection={setActiveSection} />}
      {activeSection === "contact" && <Contact setActiveSection={setActiveSection} />}
    </div>
  );
}
