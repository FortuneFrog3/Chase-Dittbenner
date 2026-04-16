import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <section id="experience" className="section-anchor">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="August 2023 - May 2026"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">University of West Florida</h3>
            <h4 className="vertical-timeline-element-subtitle">B.S. Computer Science and Software Engineering</h4>
            <p className="experience-label">Key classes</p>
            <ul className="experience-list">
              <li>Software Engineering 1 and 2.</li>
              <li>Software Engineering Management.</li>
              <li>Linear Algebra.</li>
              <li>Data Structures and Algorithms 1 and 2.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="March 2020 - August 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">EN Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">CAD Designer</h4>
            <ul className="experience-list">
              <li>Designed electrical utility infrastructure using GIS CAD software.</li>
              <li>Performed engineering calculations to ensure safe and reliable system performance.</li>
              <li>Collaborated with engineers and developers to deliver project solutions.</li>
              <li>Managed project timelines and technical deliverables.</li>
              <li>Worked within Agile-style project workflows.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2018 - March 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Production Metal Stampings</h3>
            <h4 className="vertical-timeline-element-subtitle">CAD/CAM Programmer</h4>
            <ul className="experience-list">
              <li>Created 3D CAD models of customer products.</li>
              <li>Developed assembly diagrams for manufacturing processes.</li>
              <li>Programmed CNC mill and lathe tool paths.</li>
              <li>Interpreted engineering drawings and manufacturing specifications.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2016 - December 2018"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Walgreens</h3>
            <h4 className="vertical-timeline-element-subtitle">Shift Manager</h4>
            <ul className="experience-list">
              <li>Supervised daily store operations during assigned shifts, ensuring efficient workflow and customer service standards.</li>
              <li>Managed and trained team members, delegating tasks and monitoring performance.</li>
              <li>Handled cash management, including register reconciliation and safe deposits.</li>
              <li>Opened and closed the store, performing security and operational checks.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
