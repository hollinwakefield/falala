import React, { useState, useEffect } from "react";
import Game from "./Game.jsx";
import Leaderboard from "./Leaderboard.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="header">
          <h1>Putonghua</h1>
          <h3>普通话</h3>
        </div>
        <div className="app">
          <Game />
          <Leaderboard />
        </div>
      </div>
    );
  }
}

export default App;
