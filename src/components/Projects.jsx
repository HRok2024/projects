import React from "react";
import p1 from "../assets/birthday.png";
import { projects } from "../data";

function Projects() {
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project"
            key={project.id}
          >
            <img src={project.image} alt={project.title} className="img" />
            <h5>{project.title}</h5>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
