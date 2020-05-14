import React from "react";
import "./dashboard.css";
import AddPasswordForm from "./../add-password-form/";
import PasswordList from "./../password-list";

const Dashboard = ({ passwords, onPasswordDelete, onPasswordAdded }) => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="jumbotron content-wrap">
        <PasswordList
          passwords={passwords}
          onPasswordDelete={onPasswordDelete}
        />
        <AddPasswordForm onPasswordAdded={onPasswordAdded} />
      </div>
    </div>
  );
};

export default Dashboard;
