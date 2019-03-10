import React from "react";

const ProjectSummary = ({ project }) => (
  <div className="card z-depth.0 project-summary">
    <div className="card-content grey-text text-darken-2">
      <span className="card-title">{project.title}</span>
      <p>Posted by Egzon Arifi</p>
      <p className="grey-text">10th March 2019</p>
    </div>
  </div>
);

export default ProjectSummary;
