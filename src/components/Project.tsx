import React from "react";
import "../assets/styles/Project.scss";

const projectFeatures = [
  "Real-time vehicle position tracking on a track map",
  "Live lap timing and performance metrics",
  "Driver touchscreen interface running on Raspberry Pi",
  "Remote monitoring capability for team members",
  "Real-time telemetry data logging",
  "Cloud-based session storage and synchronization",
];

function Project() {
  const projectVideoUrl = `${process.env.PUBLIC_URL}/chronobox-demo.mp4`;

  return (
    <section className="projects-container section-anchor" id="projects">
      <h1>Featured Project</h1>
      <div className="featured-project-card">
        <div className="project-copy">
          <p className="project-label">ChronoBox</p>
          <h2>Real-Time Track Telemetry and Timing System</h2>
          <p>
            ChronoBox is a real-time GNSS-based telemetry system designed for
            motorsports applications. The system runs on a Raspberry Pi and processes
            live positional data from a GPS receiver at approximately 10 Hz. It
            displays the vehicle&apos;s position on a track map and calculates lap
            timing metrics in real time. The system supports both an in-car driver
            display and a remote team monitoring interface.
          </p>
          <ul className="project-feature-list">
            {projectFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <aside className="project-sidebar">
          <h3>Project Video</h3>
          <div className="project-video">
            <video className="video-frame" controls preload="metadata">
              <source src={projectVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>ChronoBox demo video.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Project;
