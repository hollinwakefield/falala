import React, { useState, useEffect, lazy, Suspense } from "react";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <h1 className="logo-latin" onClick={(e) => props.updateView("play")}>
            Putonghua
          </h1>
          <h2 className="logo-hanzi" onClick={(e) => props.updateView("play")}>
            普通话
          </h2>
        </div>
        <div className="header-item" onClick={(e) => props.updateView("play")}>
          Play
        </div>
        <div className="header-item" onClick={(e) => props.updateView("learn")}>
          Learn
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
  );
};

export default Header;
