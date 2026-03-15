import React, { useState } from "react";
// import emailjs from "@emailjs/browser"; // Uncomment when you have keys

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "1297c7ed-c59b-47c0-9f40-6198d2c772b5"); 
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
        console.log("Error", data);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
    
    setLoading(false);
  };

  return (
    <section id="contact" className="section">
      <p className="section-label">Get In Touch</p>
      <h2 className="section-title">
        Contact <span>Me.</span>
      </h2>
      <div className="contact-wrapper">
        <div className="contact-info fade-up">
          <h3>Let's build something amazing together</h3>
          <p>
            I'm currently open to new opportunities. Whether you have a project in mind,
            a question, or just want to say hi — my inbox is always open!
          </p>
          <div className="contact-links">
            <a href="mailto:karantiwari062@gmail.com" className="contact-link">
              <span className="icon">📧</span>
              karantiwari062@gmail.com
            </a>
            <a href="https://linkedin.com/in/karan-tiwari-832024383" target="_blank" rel="noreferrer" className="contact-link">
              <span className="icon">💼</span>
              linkedin.com/in/karan-tiwari-832024383
            </a>
            <a href="https://github.com/Karan546-ai" target="_blank" rel="noreferrer" className="contact-link">
              <span className="icon">🐙</span>
              github.com/Karan546-ai
            </a>
            <div className="contact-link" style={{ cursor: "default" }}>
              <span className="icon">📍</span>
              Chandigarh, Punjab
            </div>
            <div className="contact-link" style={{ cursor: "default" }}>
              <span className="icon">📞</span>
              +91-6388966546
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form fade-up fade-up-delay-2">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" placeholder="Karan Tiwari" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Hi Karan, I'd love to connect..." value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", opacity: loading ? 0.7 : 1 }} disabled={loading}>
            {loading ? "Sending..." : sent ? "✅ Message Sent!" : error ? "❌ Error, Try Again" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
