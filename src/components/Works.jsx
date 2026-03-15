import React from "react";

const projects = [
  {
    name: "Python X-ray Vision",
    description:
      "Interactive hand-gesture controlled application. Features real-time left/right hand pinch particle effects (fire & hearts) and a two-finger spread X-ray reveal mechanic.",
    tags: ["OpenCV", "MediaPipe", "Python", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/Karan546-ai",
  },
  {
    name: "P.A.I Chatbot",
    description:
      "NLP chatbot managing 500k+ interactions, reducing manual response time by 25%. Built with advanced language modeling and prompt engineering.",
    tags: ["NLP", "Python", "LangChain", "LLM"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/Karan546-ai",
  },
  {
    name: "Hand Sign Recognition",
    description:
      "CNN-based gesture recognition system achieving 92% accuracy with <100ms latency. Real-time inference using deep learning.",
    tags: ["CNN", "TensorFlow", "OpenCV", "Python"],
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/Karan546-ai",
  },

  {
    name: "IoT Smart Monitoring",
    description:
      "IoT-based intelligent monitoring solution with sensors and real-time data processing. Selected among Top 45 teams out of 1000+ nationwide in Smart India Hackathon.",
    tags: ["IoT", "Backend", "Data Analytics", "SIH Finalist"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/Karan546-ai",
  },
];

const Works = () => {
  return (
    <section id="projects" className="section">
      <p className="section-label">Portfolio</p>
      <h2 className="section-title">
        Featured <span>Projects.</span>
      </h2>
      <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 580, marginBottom: 0 }}>
        A selection of real-world projects showcasing AI/ML, backend engineering, and computer vision expertise.
      </p>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card fade-up" style={{ transitionDelay: `${i * 0.1}s` }}
            onClick={() => window.open(project.link, "_blank")}>
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.name} className="project-img" />
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-github"
                onClick={(e) => e.stopPropagation()}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
              </a>
            </div>
            <div className="project-body">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
