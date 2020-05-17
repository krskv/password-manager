import React, { Component } from "react";
import "./password-list.css";
import PasswordListItem from "./../password-list-item/";

export default class PasswordList extends Component {
  noItems = (<p className="text-info text-center">No elements added yet.</p>);

  getElements = ({ passwords, onPasswordDelete, onPasswordEdit }) => {
    const elements = passwords.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="password-list-item list-group-item">
          <PasswordListItem
            {...itemProps}
            onDelete={() => onPasswordDelete(id)}
            onEdit={() => onPasswordEdit(id)}
          />
        </li>
      );
    });
    return elements;
  };

  render() {
    const elements = this.getElements(this.props);

    const res = elements.length ? elements : this.noItems;

    return <ul className="password-list list-group">{res}</ul>;
  }
}
