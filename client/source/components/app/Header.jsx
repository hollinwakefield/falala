import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
//   <Router>
//   <Suspense fallback={<div>Loading...</div>}>
//     <Switch>
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//     </Switch>
//   </Suspense>
// </Router>

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
              <Link to="/" style={{ textDecoration: "none", color: "#333333" }}>
                Putonghua
              </Link>
            </h1>
            <h2
              className="logo-hanzi"
              onClick={(e) => props.updateView("play")}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#333333" }}>
                普通话
              </Link>
            </h2>
          </div>
          <div
            className="header-item"
            onClick={(e) => props.updateView("play")}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#333333" }}>
              Play
            </Link>
          </div>
          <div
            className="header-item"
            onClick={(e) => props.updateView("learn")}
          >
            <Link
              to="/learn"
              style={{ textDecoration: "none", color: "#333333" }}
            >
              Learn
            </Link>
          </div>
        </div>
        <div className="header-right">
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
