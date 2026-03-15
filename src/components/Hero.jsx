import React, { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      o: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.o += s.speed;
        if (s.o > 1 || s.o < 0) s.speed = -s.speed;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.abs(s.o)})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      />
      <div className="hero-bg" />

      <div className="hero-inner">
        {/* ── Left: Text ── */}
        <div className="hero-content">
          <p className="hero-greeting">Hello, World! 👋</p>
          <h1 className="hero-name">Karan Tiwari</h1>
          <p className="hero-title">AI/ML Engineer &amp; Backend Developer</p>
          <p className="hero-desc">
            Smart India Hackathon Finalist — building intelligent AI-powered applications,
            RESTful APIs, and LLM-based solutions that solve real-world problems at scale.
          </p>

          {/* Stats row */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">Top 45</span>
              <span className="stat-label">SIH Finalist</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>

        {/* ── Right: Profile Photo ── */}
        <div className="hero-photo-wrap">
          {/* Decorative orbit rings */}
          <div className="hero-orbit hero-orbit-1" />
          <div className="hero-orbit hero-orbit-2" />

          {/* Floating badges */}
          <div className="hero-badge hero-badge-tl">
            <span>🤖</span> AI/ML
          </div>
          <div className="hero-badge hero-badge-br">
            <span>⚡</span> FastAPI
          </div>
          <div className="hero-badge hero-badge-tr">
            <span>🏆</span> SIH
          </div>

          {/* Photo */}
          <div className="hero-photo-ring">
            <img
              src="/profile.jpg"
              alt="Karan Tiwari"
              className="hero-photo"
            />
          </div>
          <div className="hero-photo-glow" />
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
