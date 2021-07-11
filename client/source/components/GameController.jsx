import React, { useState, useEffect } from "react";
import Gameplay from "./Gameplay.jsx";
import GameResults from "./GameResults.jsx";
import Timer from "./Timer.jsx";
import Leaderboard from "./Leaderboard.jsx";

const GameController = (props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [timer, setTimer] = useState(20);

  let accuracy;
  let accuracyBonus;
  let totalScore;

  if (gameStarted === true) {
    if (timer > 0) {
      return (
        <div className="gameplay">
          <Timer timer={timer} onChange={(value) => setTimer(value)} />
          {score} points
          <Gameplay
            timer={timer}
            score={score}
            updateScore={setScore}
            updateQuestionsAnswered={setQuestionsAnswered}
            updateQuestionsCorrect={setQuestionsCorrect}
          />
        </div>
      );
    } else {
      accuracy = Math.round((questionsCorrect / questionsAnswered) * 100) + "%";
      accuracyBonus = Math.round(
        (questionsCorrect / questionsAnswered) * Math.pow(questionsCorrect, 2)
      );
      totalScore = score + accuracyBonus;
      return (
        <div className="gameresults">
          <GameResults
            score={score}
            questionsAnswered={questionsAnswered}
            questionsCorrect={questionsCorrect}
            accuracy={accuracy}
            accuracyBonus={accuracyBonus}
            totalScore={totalScore}
          />
          <button
            onClick={(e) => {
              setGameStarted(false);
              setTimer(15);
              setScore(0);
              SetQuestionsAnswered(0);
              SetQuestionsCorrect(0);
              // setAccuracy("0%");
              // setAccuracyBonus(0);
              // setTotalScore(0);
            }}
            className="button"
          >
            Go Home
          </button>
        </div>
      );
    }
  } else {
    return (
      <div className="game">
        <div className="start-game">
          <h3>Learn Single Tones</h3>
          <button onClick={(e) => setGameStarted(true)} className="button">
            Start Game
          </button>
        </div>
        <div className="leaderboard">
          <Leaderboard />
        </div>
      </div>
    );
  }
};

export default GameController;
