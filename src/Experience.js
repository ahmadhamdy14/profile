import { useEffect, useRef } from "react";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Header from "./components/Header";
import "./Experience.css";

export const experiences = [
  {
    company: "Netways",
    title: "Mid-Level Software Developer",
    duration: "March 2026 – Present",
    location: "Cairo, Egypt (Hybrid)",
    current: true,
    responsibilities: [
      "Developing enterprise applications using React, Vue.js, and Liferay DXP.",
      "Building reusable UI components, dashboards, and workflow-driven interfaces.",
      "Integrating REST APIs and backend services.",
      "Collaborating with developers and participating in code reviews.",
      "Supporting frontend architecture and improving application performance.",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Nuxt.js", "Liferay DXP", "Node.js", "NestJS", "PostgreSQL", "Prisma", "REST APIs"],
  },
  {
    company: "Velents.AI",
    title: "Mid-Level Frontend Developer",
    duration: "April 2025 – February 2026",
    location: "Riyadh, Saudi Arabia (Remote)",
    responsibilities: [
      "Developed AI-powered web applications using Vue.js, Nuxt.js, and React.",
      "Built responsive dashboards and reusable UI components.",
      "Integrated REST APIs and AI-powered features.",
      "Collaborated with backend and product teams.",
      "Contributed to performance improvements and frontend technical decisions.",
    ],
    technologies: ["Vue.js", "Nuxt.js", "React", "Next.js", "REST APIs", "AI Integrations", "CI/CD"],
  },
  {
    company: "Hectar App",
    title: "Frontend Developer",
    duration: "September 2024 – March 2025",
    location: "Riyadh, Saudi Arabia (Remote)",
    responsibilities: [
      "Developed and maintained web applications using Vue.js and Nuxt.js.",
      "Built reusable components and responsive interfaces.",
      "Improved existing code and application performance.",
      "Integrated REST APIs and collaborated with development teams.",
    ],
    technologies: ["Vue.js", "Nuxt.js", "REST APIs", "Responsive Design"],
  },
];

export function ExperienceCard({ experience }) {
  return (
    <article className="experience-card" aria-label={`${experience.title} at ${experience.company}`}>
      <div className="experience-card-heading">
        <div>
          <h2>{experience.title}</h2>
          <p className="experience-company">{experience.company}</p>
        </div>
        {experience.current && <span className="experience-current">Current role</span>}
      </div>
      <div className="experience-meta">
        <span><FaRegCalendarAlt aria-hidden="true" />{experience.duration}</span>
        <span><FaMapMarkerAlt aria-hidden="true" />{experience.location}</span>
      </div>
      <ul className="experience-responsibilities">
        {experience.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
      </ul>
      <div className="experience-stack">
        <h3>Technologies</h3>
        <ul className="experience-technologies" aria-label="Technologies">
          {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default function Experience() {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!window.IntersectionObserver || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("experience-pending");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    const items = timelineRef.current.querySelectorAll(".experience-item");
    items.forEach((item) => {
      item.classList.add("experience-pending");
      observer.observe(item);
    });
    return () => {
      observer.disconnect();
      items.forEach((item) => item.classList.remove("experience-pending"));
    };
  }, []);

  return (
    <div>
      <Header />
      <main className="experience-page">
        <header className="experience-intro">
          <p className="experience-eyebrow">Career journey</p>
          <h1>Professional <span>Experience</span></h1>
          <p className="experience-subtitle">My journey as a Software Developer, building modern web applications and enterprise solutions.</p>
        </header>
        <ol className="experience-timeline" ref={timelineRef} aria-label="Professional experience, most recent first">
          {experiences.map((experience) => (
            <li className="experience-item" key={experience.company}>
              <span className="experience-dot" aria-hidden="true" />
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
