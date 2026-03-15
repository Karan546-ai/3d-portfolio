import React from "react";

const experiences = [
  {
    icon: "🎓",
    title: "MCA (Artificial Intelligence & Machine Learning)",
    org: "Chandigarh University, Chandigarh",
    date: "2024 – 2026",
    points: [
      "Pursuing Master of Computer Applications with specialization in AI & ML.",
      "Developing intelligent AI-powered applications, RESTful APIs, and LLM-based solutions.",
      "Smart India Hackathon Finalist – Top 45 out of 1000+ nationwide teams.",
    ],
  },
  {
    icon: "🏫",
    title: "BCA (Bachelor of Computer Applications)",
    org: "Dayanand Academy of Management Studies, Kanpur",
    date: "2021 – 2024",
    points: [
      "Built foundation in software engineering, data structures, and algorithms.",
      "2nd Place – 24-Hour Hackathon: Recognized for rapid prototyping and problem-solving.",
      "Developed core programming skills in Python, Java, and JavaScript.",
    ],
  },
  {
    icon: "📚",
    title: "Senior Secondary (Class XII)",
    org: "N.L.K Inter College, Kanpur",
    date: "2021",
    points: ["Completed senior secondary education with a focus on science and mathematics."],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <p className="section-label">Background</p>
      <h2 className="section-title">
        Education & <span>Journey.</span>
      </h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item fade-up" style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="timeline-dot">
              <span>{exp.icon}</span>
            </div>
            <div className="timeline-content">
              <p className="timeline-date">{exp.date}</p>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-org">{exp.org}</p>
              <ul className="timeline-points">
                {exp.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
