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
    const { title, password, onDelete, onEdit } = this.props;

    const resPassword = this.state.isVisible
      ? password
      : this.toAsterisk(password);

    const passwordActiveClass = this.state.isVisible ? " active" : "";

    return (
      <div className="password-list-item">
        <div className="password-list-item-data">
          <span className="title">{title} :</span>
          <span
            className={`password-badge badge badge-light${passwordActiveClass}`}
            onClick={this.revealPassword}
          >
            {resPassword}
          </span>
        </div>
        <div className="password-list-item-actions">
          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDelete}
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={onEdit}
          >
            <i className="fa fa-pencil" />
          </button>
        </div>
      </div>
    );
  }
}
