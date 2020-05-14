import React, { Component } from "react";
import "./app.css";
import Header from "./../header";
import Dashboard from "./../dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./../login";
import Register from "./../register/";

export default class App extends Component {
  idCounter = 200;

  state = {
    passwordsData: [
      { title: "Facebook", password: "qweASD123", id: "101" },
      { title: "Google", password: "qweASD1234", id: "102" },
      { title: "Notebook", password: "qweASD123", id: "103" },
    ],
  };

  deletePassword = (id) => {
    this.setState(({ passwordsData }) => {
      const idx = passwordsData.findIndex((el) => el.id === id);
      return {
        passwordsData: [
          ...passwordsData.slice(0, idx),
          ...passwordsData.slice(idx + 1),
        ],
      };
    });
  };

  createPasswordItem = (title, password) => {
    return {
      title,
      password,
      id: this.idCounter++,
    };
  };

  addPassword = (title, password) => {
    const newItem = this.createPasswordItem(title, password);
    this.setState(({ passwordsData }) => {
      const newData = [...passwordsData, newItem];
      return {
        passwordsData: newData,
      };
    });
  };

  render() {
    const { passwordsData } = this.state;
    return (
      <Router>
        <div className="app-wrap">
          <Header />
          <div className="app-content">
            <div className="container">
              <div className="col-12">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Dashboard
                        passwords={passwordsData}
                        onPasswordDelete={this.deletePassword}
                        onPasswordAdded={this.addPassword}
                      />
                    )}
                  />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route
                    render={(params) => (
                      <h2 className="text-center">Page not found.</h2>
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
