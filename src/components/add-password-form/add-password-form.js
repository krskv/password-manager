import React, { Component } from "react";
import "./add-password-form.css";

export default class AddPasswordForm extends Component {
  state = {
    title: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.title && this.state.password) {
      this.props.onPasswordAdded(this.state.title, this.state.password);
      this.setState({
        title: "",
        password: "",
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="add-password-form d-flex" onSubmit={this.onSubmit}>
        <legend>Add new password:</legend>
        <input
          type="text"
          className="form-control"
          id="add-password-form-title"
          name="title"
          onChange={this.handleChange}
          placeholder="Enter title..."
          value={this.state.title}
        />
        <input
          type="text"
          className="form-control"
          onChange={this.handleChange}
          id="add-password-form-password"
          name="password"
          placeholder="Enter password..."
          value={this.state.password}
        />
        <button
          type="submit"
          onSubmit={this.onSubmit}
          className="btn btn-primary"
        >
          <i className="fa fa-plus"></i>
        </button>
      </form>
    );
  }
}
