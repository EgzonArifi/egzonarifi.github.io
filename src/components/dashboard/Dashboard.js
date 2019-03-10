import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class-name="dashboard container">
        <div class="row">
          <div class="col s12">
            <ProjectList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
