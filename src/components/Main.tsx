import React from "react";
import Button from "@mui/material/Button";
import "../assets/styles/Main.scss";

function Main() {
  const headshotUrl = `${process.env.PUBLIC_URL}/chase-headshot.png`;

  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="container section-anchor" id="home">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshotUrl} alt="Chase Dittbenner headshot" />
        </div>
        <div className="content hero-content">
          <p className="section-eyebrow">Software Engineering Portfolio</p>
          <h1>Chase Dittbenner</h1>
          <h2>Software Engineer | Real-Time Systems | Hardware-Software Integration</h2>
          <p className="hero-summary">
            I am a Computer Science and Software Engineering student graduating in
            2026 with hands-on experience developing real-time software systems that
            interact with physical hardware. My work focuses on building reliable,
            performance-driven applications for engineering and technical
            environments. I am particularly interested in real-time data systems,
            embedded computing, and systems integration.
          </p>
          <div className="hero-actions">
            <Button variant="contained" onClick={() => scrollToSection("projects")}>
              Featured Project
            </Button>
            <Button variant="outlined" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </div>
          <div className="hero-highlights">
            <div className="hero-card">
              <span>Education</span>
              <strong>Bachelor of Science in Computer Science / Software Engineering</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
