import React from "react";
import "../assets/styles/About.scss";

function About() {
  const motorsportsImageUrl = `${process.env.PUBLIC_URL}/chase-motorsports.jpeg`;

  return (
    <section id="about" className="section-anchor">
      <div className="items-container about-container">
        <div className="section-heading">
          <p className="section-eyebrow">About</p>
          <h1>Engineering-minded software development built on hands-on technical work.</h1>
        </div>
        <div className="about-grid">
          <article className="about-card">
            <h2>Background</h2>
            <p>
              My experience combines software development, engineering workflows, and
              hands-on technical problem solving, supported by a lifelong interest in
              motorsports and the automotive industry.
            </p>
            <p>
              I bring a multidisciplinary skill set that spans software, hardware,
              and mechanical design. In addition to building software systems, I
              have professional experience using CAD tools to design and model
              real-world components and infrastructure. This allows me to approach
              engineering challenges from both the digital and physical perspectives.
            </p>
            <p>
              My goal is to apply this cross-functional experience to
              high-performance engineering environments such as motorsports or
              consumer vehicle systems.
            </p>
            <p>
              In addition to my technical work, I have significant real-world 
              experience operating within Agile and Scrum-based development environments. 
              Through both corporate roles and formal coursework, I have worked with iterative 
              development cycles, sprint planning, task tracking, and cross-functional team collaboration. 
              This experience has strengthened my ability to 
              communicate effectively, adapt to changing requirements, and deliver reliable 
              solutions in structured engineering workflows.
            </p>
          </article>
          <div className="about-image-card">
            <img src={motorsportsImageUrl} alt="Chase Dittbenner with car at the track" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
