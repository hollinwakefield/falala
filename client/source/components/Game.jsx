import React, { useState, useEffect } from "react";
import axios from "axios";
import Gameplay from "./Gameplay.jsx";
import GameResults from "./GameResults.jsx";
import Timer from "./Timer.jsx";

const Game = (props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [wordList, setWordList] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    axios
      .get("/beginnerWordList")
      .then((response) => {
        setWordList(response.data);
      })
      .catch((error) => {
        console.log("hi, you received an error", error);
      });
  });

  if (gameStarted === true) {
    if (timer > 0) {
      return (
        <Gameplay
          timer={timer}
          onChange={(value) => setTimer(value)}
          wordList={wordList}
        />
      );
    } else {
      return (
        <GameResults username={props.username} onChange={props.onChange} />
      );
    }
  } else {
    return (
      <div className="game">
        <h3>Learn Single Tones</h3>
        <button onClick={(e) => setGameStarted(true)} className="button">
          Start Game
        </button>
      </div>
    );
  }
};

export default Game;

// const renderer = ({ minutes, seconds, completed }) => {
//   if (completed) {
//     return (
//       <div className="gameresults">
//         <GameResults />
//         <button onClick={(e) => setClicked(false)} className="button">
//           Go Home
//         </button>
//       </div>
//     );
//   } else {
//     return (
//       <div className="gameplay">
//         <span className="countdown">
//           {minutes}m {seconds}s
//         </span>
//         <Gameplay wordlist={wordList} />
//       </div>
//     );
//   }
// };
// return <Countdown date={Date.now() + 15000} renderer={renderer} />;
