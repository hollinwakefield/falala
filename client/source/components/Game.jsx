import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import Gameplay from "./Gameplay.jsx";
import GameResults from "./GameResults.jsx";

const Game = (props) => {
  const [clicked, setClicked] = useState(false);

  if (clicked === true) {
    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return (
          <div className="gameresults">
            <GameResults />
            <button onClick={(e) => setClicked(false)} className="button">
              Go Home
            </button>
          </div>
        );
      } else {
        // Render a countdown
        return (
          <div className="gameplay">
            <span className="countdown">
              {minutes}m {seconds}s
            </span>
            <Gameplay />
          </div>
        );
      }
    };
    return <Countdown date={Date.now() + 5000} renderer={renderer} />;
  } else {
    return (
      <div className="game">
        <h3>Learn Single Tones</h3>
        <button onClick={(e) => setClicked(true)} className="button">
          Start Game
        </button>
      </div>
    );
  }
};

export default Game;
