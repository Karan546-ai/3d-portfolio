import React from "react";

const achievements = [
  {
    icon: "🏆",
    title: "Smart India Hackathon Finalist",
    org: "Top 45 out of 1000+ teams nationwide",
  },
  {
    icon: "🥈",
    title: "2nd Place – 24h Hackathon",
    org: "Rapid prototyping in a high-pressure environment",
  },
  {
    icon: "🎖️",
    title: "Use Generative AI for Software Development",
    org: "IBM SkillsBuild – 2025",
  },
  {
    icon: "🌐",
    title: "Introduction to Generative AI",
    org: "Intel AI Global Impact Festival – 2024/2026",
  },
  {
    icon: "💡",
    title: "Explore AI with Microsoft Copilot",
    org: "Microsoft Learn Student Ambassadors",
  },
  {
    icon: "📊",
    title: "Python for Data Analysis",
    org: "Coursera Certified",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-inner">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">
          Achievements & <span>Certifications.</span>
        </h2>
        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div key={i} className="achievement-card fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="achievement-icon">{item.icon}</div>
              <h4 className="achievement-title">{item.title}</h4>
              <p className="achievement-org">{item.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
