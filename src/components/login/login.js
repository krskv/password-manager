import React, { Component } from "react";
import "./login.css";
import ServerService from "./../../services/server-service";

export default class Login extends Component {
  server = new ServerService();
  state = {
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
    const { email, password } = this.state;
    const { error, user } = this.server.getUser(email, password);
    this.props.showIndicator(
      error.isError ? "warning" : "success",
      error.message
    );
    if (!error.isError) this.props.onLoggedin(user);
  };

  render() {
    return (
      <div className="login-page">
        <h1>Login</h1>
        <div className="jumbotron content-wrap">
          <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <form
              className="login-form d-flex flex-column align-items-center justify-content-start"
              onSubmit={this.onSubmit}
            >
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="login-form-email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="login-form-password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onSubmit={this.onSubmit}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
