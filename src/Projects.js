import Header from "./components/Header";
import "./Projects.css";
import { useEffect } from "react";

import project2 from "./projects/project2.png";
import project3 from "./projects/project3.png";
import project4 from "./projects/project4.png";
import project5 from "./projects/project5.png";
import project6 from "./projects/project6.png";


const projectsData = [
  
  {
    title: "SAFHA (AI Document Automation Platform)",
    description: "An AI-powered document automation platform for extracting, validating, and structuring complex documents. Developed scalable frontend modules, integrated AI-driven APIs, supported multilingual content including Arabic, and optimized UI performance for enterprise workflows.",
    image: project2,
    live: " https://safha-ai.com/en/",
    github: "#",
  },
  
  
{
  title: "Agent Hub (AI Agents Platform)",
  description: "An enterprise AI platform for building and managing Arabic-first voice and messaging agents across WhatsApp, IVR, and web chat. Developed interactive frontend interfaces, integrated real-time APIs, implemented authentication flows, and optimized UI performance and state management.",
  image: project3,
  live: "https://agent.sa/",
  github: "",
},

  {
    title: "Tafhana Market (React & Firebase)",
    description: "A live, production-deployed Arabic e-commerce PWA built with React.js, Vite, and Firebase, featuring product management, authentication, role-based access, shopping cart, order management, medical services, and responsive RTL design.",
    image: project4,
    live: "https://tafhana-market.vercel.app/",
    github: "",
  },
 
{
  title: "Faltah.ai (AI Interview Platform)",
  description: "An AI-powered interview simulation platform built with Vue.js, featuring interactive interviews, real-time AI responses, and dynamic question flows. Integrated OpenAI APIs, developed reusable UI components, supported multilingual content, and optimized performance and accessibility across devices.",
  image: project5,
  live: "https://faltah.ai/apply",
  github: "",
},
{
  title: "Hectar Plus (Real Estate Management Platform)",
  description: "A real estate management platform built with Vue.js and Vuetify, designed to streamline property management, business operations, and internal workflows. Developed responsive frontend interfaces, built reusable UI components, and collaborated with product teams to deliver scalable, user-friendly solutions.",
  image: project6,
  live: "https://hectarplus.io/",
  github: "",
},


];

export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); 
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="projects-section">
        <h1>Projects</h1>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card fade-in" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.live && project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
                {/* <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
