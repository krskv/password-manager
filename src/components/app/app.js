import React, { Component } from "react";
import "./app.css";
import Header from "./../header";
import Dashboard from "./../dashboard";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./../login";
import Register from "./../register/";
import EditModal from "./../edit-modal";
import Indicator from "./../indicator/";
import ServerService from "./../../services/server-service";

export default class App extends Component {
  server = new ServerService();
  state = {
    isLoggedin: false,
    user: "",
    indicator: {
      show: false,
      type: "",
      message: "",
    },
    editModal: {
      editModalVisible: false,
      entry: {
        title: "",
        password: "",
        id: "",
      },
    },
    passwordsData: [],
  };

  deleteEntry = (id) => {
    this.setState(({ passwordsData }) => {
      const idx = passwordsData.findIndex((el) => el.id === id);
      return {
        passwordsData: [
          ...passwordsData.slice(0, idx),
          ...passwordsData.slice(idx + 1),
        ],
      };
    });
    this.showIndicator("success", "Entry was succefully deleted.");
  };

  createEntry = (title, password) => {
    return {
      title,
      password,
      id: Math.floor(Math.random() * 999),
    };
  };

  addEntry = (title, password) => {
    const newItem = this.createEntry(title, password);
    this.setState(({ passwordsData }) => {
      const newData = [...passwordsData, newItem];
      return {
        passwordsData: newData,
      };
    });
    this.showIndicator("success", "Entry was succefully created.", 3000);
  };

  editEntry = (data) => {
    this.setState(({ passwordsData }) => {
      const idx = passwordsData.findIndex((el) => el.id === data.id);
      return {
        passwordsData: [
          ...passwordsData.slice(0, idx),
          data,
          ...passwordsData.slice(idx + 1),
        ],
      };
    });
    this.showIndicator("success", "Entry was succefully updated.");
  };

  closeEditModal = () => {
    this.setState({
      editModal: { editModalVisible: false },
    });
  };

  updateServerData = () => {
    const { user, passwordsData } = this.state;
    const error = this.server.updateData(user, passwordsData);
    if (error)
      this.showIndicator(
        "primary",
        "There is some database connection problem"
      );
  };

  openEditModal = (id) => {
    const entry = this.state.passwordsData.find((el) => el.id === id);

    this.setState({
      editModal: { editModalVisible: true, entry: entry },
    });
  };

  authorize = (user) => {
    this.setState({
      user: user.email,
      passwordsData: user.data,
      isLoggedin: true,
    });
  };

  showIndicator = async (type, message, timeout = 3000) => {
    this.setState({ indicator: { show: true, type, message } });

    setTimeout(() => {
      this.setState({ indicator: { show: false } });
    }, timeout);
    clearTimeout();
  };

  logout = () => {
    this.setState({ isLoggedin: false });
  };

  render() {
    const {
      isLoggedin,
      indicator: { show, type, message },
      editModal: { editModalVisible, entry },
      passwordsData,
    } = this.state;

    const editModal = editModalVisible ? (
      <EditModal
        entry={entry}
        onModalClose={this.closeEditModal}
        onEntryEdit={this.editEntry}
        onIndicatorShow={this.showIndicator}
      />
    ) : null;

    const indicator = show ? <Indicator message={message} type={type} /> : null;

    return (
      <Router>
        <div className="app-wrap">
          <Header isLoggedin={isLoggedin} onLogout={this.logout} />
          <div className="app-content">
            <div className="container">
              <div className="col-12">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Dashboard
                        onDashboardUpdate={this.updateServerData}
                        isLoggedin={isLoggedin}
                        onPasswordEdit={this.openEditModal}
                        passwords={passwordsData}
                        onPasswordDelete={this.deleteEntry}
                        onPasswordAdded={this.addEntry}
                      />
                    )}
                  />
                  <Route
                    path="/login"
                    component={() =>
                      isLoggedin ? (
                        <Redirect to="/" />
                      ) : (
                        <Login
                          onLoggedin={this.authorize}
                          showIndicator={this.showIndicator}
                        />
                      )
                    }
                  />
                  <Route
                    path="/register"
                    component={() =>
                      isLoggedin ? (
                        <Redirect to="/" />
                      ) : (
                        <Register
                          showIndicator={this.showIndicator}
                          onRegistered={this.authorize}
                        />
                      )
                    }
                  />
                  <Route
                    render={(params) => (
                      <h2 className="text-center">Page not found.</h2>
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
          {editModal}
          {indicator}
        </div>
      </Router>
    );
  }
}
