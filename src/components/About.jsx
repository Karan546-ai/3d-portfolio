import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <p className="section-label fade-up">Who I Am</p>
      <h2 className="section-title fade-up fade-up-delay-1">
        About <span>Me.</span>
      </h2>

      <div className="about-grid">
        <div className="about-text fade-up fade-up-delay-2">
          <p>
            I am an <span className="about-highlight">AI/ML Engineer and Backend Developer</span> currently
            pursuing MCA in Artificial Intelligence & Machine Learning at Chandigarh University.
          </p>
          <p>
            I specialize in developing intelligent AI-powered applications, RESTful APIs, and
            LLM-based solutions. I was selected as a{" "}
            <span className="about-highlight">Smart India Hackathon Finalist</span> (Top 45 out of 1000+
            teams) for building an innovative IoT-based real-world AI system.
          </p>
          <p>
            My core strengths lie in machine learning model development, backend system design,
            automation workflows, and scalable AI solution deployment.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="#contact" className="btn-primary">Let's Work Together</a>
          </div>
        </div>

        <div className="about-cards">
          {[
            { icon: "🤖", title: "AI/ML Engineering", desc: "TensorFlow · PyTorch · Scikit-learn · OpenCV" },
            { icon: "⚡", title: "Backend Development", desc: "FastAPI · Flask · Node.js · REST APIs" },
            { icon: "🧠", title: "LLM Solutions", desc: "LangChain · HuggingFace · RAG · LlamaIndex" },
            { icon: "☁️", title: "Cloud & DevOps", desc: "AWS · Azure · Docker · CI/CD · Firebase" },
          ].map((card, i) => (
            <div key={i} className={`about-card fade-up fade-up-delay-${i + 1}`}>
              <div className="about-card-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
