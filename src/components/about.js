import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  changeEventClick = (value) => {
    this.setState({ isChecked: value });
  };

  render() {
    var { isChecked } = this.state;
    return (
      <div className="container mt-4">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.changeEventClick(false)}
        >
          Cho phép
        </button>
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.changeEventClick(true)}
        >
          Không cho phép
        </button>
        <Prompt
          when={isChecked}
          message={(localtion) => `ban co muon di den ${localtion.pathname}`}
        />
      </div>
    );
  }
}

export default about;
