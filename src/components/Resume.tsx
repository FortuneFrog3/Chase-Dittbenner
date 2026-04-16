import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import "../assets/styles/Resume.scss";

const resumePath = `${process.env.PUBLIC_URL}/Chase_Dittbenner_Resume.pdf`;

function Resume() {
  return (
    <section id="resume" className="section-anchor">
      <div className="items-container resume-section">
        <div className="resume-card">
          <p className="section-eyebrow">Resume</p>
          <h1>Download a PDF copy of my resume.</h1>
          
          <Button
            component="a"
            href={resumePath}
            download="Chase_Dittbenner_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            startIcon={<DownloadIcon />}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
