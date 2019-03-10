import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  console.log(id);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by: Egzon Arifi</div>
          <div className="grey-text">10th March 2019</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
