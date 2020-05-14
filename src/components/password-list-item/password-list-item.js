import React, { Component } from "react";
import "./password-list-item.css";

export default class PasswordListItem extends Component {
  state = { isVisible: false };

  revealPassword = () => {
    this.setState({ isVisible: true });
  };

  toAsterisk = (title) => {
    return "*".repeat(title.length);
  };

  render() {
    const { title, password, onDelete } = this.props;

    const resTitle = this.state.isVisible
      ? password
      : this.toAsterisk(password);

    return (
      <span className="password-list-item">
        <span className="title">{title} :</span>
        <span
          className="password-badge badge badge-light"
          onClick={this.revealPassword}
        >
          {resTitle}
        </span>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
