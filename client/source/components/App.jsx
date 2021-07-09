import React, { useState, useEffect } from "react";
import Game from "./Game.jsx";
import Learn from "./Learn.jsx";

const App = (props) => {
  const [view, setView] = useState("play");

  if (view === "play") {
    return (
      <div className="body">
        <div className="header">
          <div className="logo">
            <h1>Putonghua</h1>
            <h2>普通话</h2>
          </div>
          <div className="header-item" onClick={(e) => setView("play")}>
            Play
          </div>
          <div className="header-item" onClick={(e) => setView("learn")}>
            Learn
          </div>
          {/* <div onClick={setView("play")}>Play</div>
          <div onClick={setView("learn")}>Learn</div> */}
        </div>
        <div className="app">
          <Game />
        </div>
      </div>
    );
  } else if (view === "learn") {
    return (
      <div className="body">
        <div className="header">
          <div className="logo">
            <h1>Putonghua</h1>
            <h2>普通话</h2>
          </div>
          <div className="header-item" onClick={(e) => setView("play")}>
            Play
          </div>
          <div className="header-item" onClick={(e) => setView("learn")}>
            Learn
          </div>
        </div>
        <div className="app">
          <Learn className="learn" />
        </div>
      </div>
    );
  }
};

export default App;
