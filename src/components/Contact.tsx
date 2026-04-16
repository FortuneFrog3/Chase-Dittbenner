import React from "react";
import "../assets/styles/Contact.scss";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";

function Contact() {
  const linkedInUrl = "https://www.linkedin.com/in/chase-dittbenner-019cd/";

  return (
    <section id="contact" className="section-anchor">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>
            I am seeking entry-level software engineering opportunities in real-time
            systems, motorsports technology, and engineering-focused
            software development.
          </p>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:chase.dittbenner3@gmail.com">
              <EmailIcon className="email-card-icon" />
              <div>
                <h2>Email</h2>
                <p>chase.dittbenner3@gmail.com</p>
              </div>
            </a>
            <div className="contact-card">
              <PhoneIcon />
              <div>
                <h2>Phone</h2>
                <p>813-422-2323</p>
              </div>
            </div>
          </div>
          <div className="contact-links" aria-label="Contact links">
            <a className="linkedin-button" href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
