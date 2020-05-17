import React, { Component } from "react";
import "./register.css";
import ServerService from "./../../services/server-service";

export default class Login extends Component {
  server = new ServerService();
  state = {
    userName: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { error, user } = this.server.addUser(this.state);

    this.props.showIndicator(
      error.isError ? "warning" : "success",
      error.message
    );
    if (!error.isError) this.props.onRegistered(user);
  };

  render() {
    return (
      <div className="register-page">
        <h1>Register</h1>
        <div className="jumbotron content-wrap">
          <div className="col-4 offset-4">
            <form
              className="register-form d-flex flex-column align-items-center justify-content-start"
              onSubmit={this.onSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="register-form-name"
                  name="userName"
                  placeholder="Enter name"
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="register-form-email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="register-form-password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onSubmit={this.onSubmit}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
