import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    var { txtUsername, txtPassword } = this.state;
    if (txtUsername === "admin" && txtPassword === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword,
        })
      );
    }
  };

  render() {
    var { txtUsername, txtPassword } = this.state;
    var loggedUser = localStorage.getItem("user");
    var { location } = this.props;

    if (loggedUser !== null) {
      return (
        <Redirect
          to={{
            pathname: "/products",
            state: {
              from: location.pathname,
            },
          }}
        />
      );
    }

    return (
      <div>
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <legend>Form title</legend>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Input field"
                name="txtUsername"
                value={txtUsername}
                onChange={this.onChange}
              />
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Input field"
                name="txtPassword"
                value={txtPassword}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
