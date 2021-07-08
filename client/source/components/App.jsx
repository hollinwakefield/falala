import React, { useState, useEffect } from "react";
import Game from "./Game.jsx";
import Leaderboard from "./Leaderboard.jsx";

const App = (props) => {
  const [username, setUsername] = useState("");

  return (
    <div className="body">
      <div className="header">
        <h1>Putonghua</h1>
        <h2>普通话</h2>
      </div>
      <div className="app">
        <Game username={username} onChange={(value) => setUsername(value)} />
        <Leaderboard
          username={username}
          onChange={(value) => setUsername(value)}
        />
      </div>
    </div>
  );
};

export default App;
