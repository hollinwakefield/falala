import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import axios from "axios";
import Gameplay from "./Gameplay.jsx";
import GameResults from "./GameResults.jsx";

const Game = (props) => {
  const [clicked, setClicked] = useState(false);
  const [wordList, setWordList] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get("/beginnerWordList")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("hi, you received an error", error);
      });
  });

  if (clicked === true) {
    console.log(score);
    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        return (
          <div className="gameresults">
            <GameResults />
            <button onClick={(e) => setClicked(false)} className="button">
              Go Home
            </button>
          </div>
        );
      } else {
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
    return <Countdown date={Date.now() + 3000} renderer={renderer} />;
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
