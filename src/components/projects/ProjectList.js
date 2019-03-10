import React, { Component } from "react";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class-name="project-list section">
        <div class="card z-depth.0 project-summary">
          <div className="card-content grey-text text-darken-2">
            <span className="card-title">Project Title</span>
            <p>Posted by Egzon Arifi</p>
            <p className="grey-text">10th March 2019</p>
          </div>
        </div>
        <div class="card z-depth.0 project-summary">
          <div className="card-content grey-text text-darken-2">
            <span className="card-title">Project Title</span>
            <p>Posted by Egzon Arifi</p>
            <p className="grey-text">10th March 2019</p>
          </div>
        </div>
        <div class="card z-depth.0 project-summary">
          <div className="card-content grey-text text-darken-2">
            <span className="card-title">Project Title</span>
            <p>Posted by Egzon Arifi</p>
            <p className="grey-text">10th March 2019</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectList;
