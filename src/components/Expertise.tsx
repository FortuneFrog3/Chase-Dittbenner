import React from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "C++", "TypeScript", "JavaScript", "Java", "Kotlin"],
  },
  {
    title: "Software and Tools",
    items: ["Git", "GitHub", "VS Code", "Linux", "Firebase", "AutoCAD", "Fusion 360", "AI-assisted development tools"],
  },
  {
    title: "Technical Areas",
    items: [
      "Real-time systems",
      "Hardware-software integration",
      "Data processing",
      "Debugging and troubleshooting",
      "Agile / Scrum workflows",
    ],
  },
];

function Expertise() {
  return (
    <section className="section-anchor" id="skills">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill" key={group.title}>
                <h2>{group.title}</h2>
                <div className="flex-chips">
                  {group.items.map((item) => (
                    <Chip key={item} className="chip" label={item} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
