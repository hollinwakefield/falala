import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import SimpleMenu from "./Menu.jsx";

const renderLoader = () => <p>Loading</p>;

const Header = (props) => {
  return (
    <Router>
      <div className="header">
        <div className="header-left">
          <div className="logo">
            <h1
              className="logo-latin"
              onClick={(e) => props.updateView("play")}
            >
              <Suspense fallback={renderLoader()}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#333333" }}
                >
                  falala
                </Link>
              </Suspense>
            </h1>
          </div>
          <div
            className="header-item"
            onClick={(e) => props.updateView("play")}
          >
            <Suspense fallback={renderLoader()}>
              <Link to="/" style={{ textDecoration: "none", color: "#333333" }}>
                Play
              </Link>
            </Suspense>
          </div>
          <div
            className="header-item"
            onClick={(e) => props.updateView("learn")}
          >
            <Suspense fallback={renderLoader()}>
              <Link
                to="/learn"
                style={{ textDecoration: "none", color: "#333333" }}
              >
                Learn
              </Link>
            </Suspense>
          </div>
          <SimpleMenu updateView={props.updateView} />
        </div>
        <div className="header-right">
          <div
            className={`header-item auth`}
            onClick={(e) => props.updateView("login")}
          >
            <Suspense fallback={renderLoader()}>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#333333" }}
              >
                Login
              </Link>
            </Suspense>
          </div>
          <div
            className={`header-item auth`}
            onClick={(e) => props.updateView("signup")}
          >
            <Suspense fallback={renderLoader()}>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "#333333" }}
              >
                Sign Up
              </Link>
            </Suspense>
          </div>
          <img
            className="lantern"
            src="../../assets/lantern.png"
            alt="chinese-lantern"
          ></img>
        </div>
      </div>
    </Router>
  );
};

export default Header;
