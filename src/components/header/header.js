import React, { Component } from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const { isLoggedin, onLogout } = this.props;

    const register = !isLoggedin ? (
      <NavLink activeClassName="active" className="nav-link" to="/register">
        Register
      </NavLink>
    ) : null;

    const login = !isLoggedin ? (
      <NavLink activeClassName="active" className="nav-link" to="/login">
        Login
      </NavLink>
    ) : null;

    const logout = isLoggedin ? (
      <NavLink
        onClick={onLogout}
        activeClassName="active"
        className="nav-link logout"
        to="/"
      >
        Logout
        <i className="icon fa fa-sign-out"></i>
      </NavLink>
    ) : null;

    return (
      <header className="header">
        <nav className="header-nav navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <div className="col-12 d-flex flex-nowrap justify-content-between">
              <Link className="header-nav-heading navbar-brand" to="/">
                <i className="icon fa fa-lock"></i>
                Password Manager
              </Link>
              <ul className="header-nav-list navbar-nav d-flex flex-row justify-content-end">
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    exact={true}
                    className="nav-link"
                    to="/"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">{login}</li>
                <li className="nav-item">{register}</li>
                <li className="nav-item">{logout}</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
