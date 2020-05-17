import React, { Component } from "react";
import "./dashboard.css";
import AddPasswordForm from "./../add-password-form/";
import PasswordList from "./../password-list";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  componentDidUpdate() {
    this.props.onDashboardUpdate();
  }

  render() {
    const {
      isLoggedin,
      passwords,
      onPasswordDelete,
      onPasswordAdded,
      onPasswordEdit,
    } = this.props;

    const passwordlist = isLoggedin ? (
      <PasswordList
        passwords={passwords}
        onPasswordDelete={onPasswordDelete}
        onPasswordEdit={onPasswordEdit}
      />
    ) : null;
    const addPasswordForm = isLoggedin ? (
      <AddPasswordForm onPasswordAdded={onPasswordAdded} />
    ) : null;
    const welcomingScreen = !isLoggedin ? <WelcomingScreen /> : null;

    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="jumbotron content-wrap">
          {welcomingScreen}
          {passwordlist}
          {addPasswordForm}
        </div>
      </div>
    );
  }
}

const WelcomingScreen = () => {
  return (
    <div className="welcoming-screen">
      <h3>Welcome to Password Manager</h3>
      <div className="welcoming-screen-actions">
        <Link type="button" className="btn btn-primary" to="/login">
          Login
        </Link>
        <Link type="button" className="btn btn-info" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};
