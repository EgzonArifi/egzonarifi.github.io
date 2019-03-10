import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
    file: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleFileChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="text">Title</label>
            <input type="text" id="title" onChange={this.handleFileChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Project Content</label>
            <textarea
              id="content"
              cols="30"
              rows="10"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="file-field input-field">
            <div className="btn">
              <span>Upload Image</span>
              <input
                type="file"
                multiple
                onChange={event => this.handleFileChange(event)}
              />
              <img width="30" height="30" src={this.state.file} />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Upload one or more files"
              />
            </div>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
