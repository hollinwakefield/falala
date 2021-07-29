import React, { useState, useEffect, lazy, Suspense } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderLoader = () => <p>Loading</p>;

  return (
    <Router>
      <div className="header-menu">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img src="./assets/hamburger.png" className="hamburger-icon"></img>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div onClick={(e) => props.updateView("play")}>
            <Suspense fallback={renderLoader()}>
              <Link to="/" style={{ textDecoration: "none", color: "#333333" }}>
                <MenuItem onClick={handleClose}>Play</MenuItem>
              </Link>
            </Suspense>
          </div>
          <div onClick={(e) => props.updateView("learn")}>
            <Suspense fallback={renderLoader()}>
              <Link
                to="/learn"
                style={{ textDecoration: "none", color: "#333333" }}
              >
                <MenuItem onClick={handleClose}>Learn</MenuItem>
              </Link>
            </Suspense>
          </div>
          <div onClick={(e) => props.updateView("login")}>
            <Suspense fallback={renderLoader()}>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#333333" }}
              >
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Link>
            </Suspense>
          </div>
          <div onClick={(e) => props.updateView("signup")}>
            <Suspense fallback={renderLoader()}>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "#333333" }}
              >
                <MenuItem onClick={handleClose}>Sign Up</MenuItem>
              </Link>
            </Suspense>
          </div>
        </Menu>
      </div>
    </Router>
  );
}
