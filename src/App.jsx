import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import "./index.css";

const App = () => {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 100px 0px" }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Works />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          © 2025 <span style={{ color: "var(--accent)", fontWeight: 700 }}>Karan Tiwari</span> — AI/ML Engineer &amp; Backend Developer.
          Built with ❤️ and React.
        </p>
      </footer>
    </>
  );
};

export default App;
