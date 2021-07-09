import React, { useState, useEffect } from "react";
import axios from "axios";
import Gameplay from "./Gameplay.jsx";
import GameResults from "./GameResults.jsx";
import Timer from "./Timer.jsx";
import Leaderboard from "./Leaderboard.jsx";

const Game = (props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [wordList, setWordList] = useState([]);
  const [score, setScore] = useState(0);
  const [questionsAnswered, SetQuestionsAnswered] = useState(0);
  const [questionsCorrect, SetQuestionsCorrect] = useState(0);
  const [accuracy, setAccuracy] = useState("0%");
  const [accuracyBonus, setAccuracyBonus] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (wordList[0]) {
    } else {
      axios
        .get("/beginnerWordList")
        .then((response) => {
          setWordList(response.data);
        })
        .catch((error) => {
          console.log("hi, you received an error", error);
        });
    }
  });

  const updateScore = () => {
    setScore(score + 10);
  };

  const updateQuestionsAnswered = () => {
    SetQuestionsAnswered(questionsAnswered + 1);
  };

  const updateQuestionsCorrect = () => {
    SetQuestionsCorrect(questionsCorrect + 1);
  };

  const updateAccuracyAndTotalScore = () => {
    if (questionsAnswered > 0) {
      setAccuracy(
        Math.round((questionsCorrect / questionsAnswered) * 100) + "%"
      );
      if (questionsCorrect > 0) {
        if (questionsCorrect / questionsAnswered > 0.7) {
          setAccuracyBonus(
            Math.round(
              (questionsCorrect / questionsAnswered) * questionsCorrect * 100
            )
          );
        }
      }
      if (score > 0) {
        setTotalScore(Math.round(score + accuracyBonus));
      }
    }
  };

  if (gameStarted === true) {
    if (timer > 0) {
      return (
        <Gameplay
          timer={timer}
          onChange={(value) => setTimer(value)}
          wordList={wordList}
          score={score}
          updateScore={updateScore}
          updateQuestionsAnswered={updateQuestionsAnswered}
          updateQuestionsCorrect={updateQuestionsCorrect}
          updateAccuracyAndTotalScore={updateAccuracyAndTotalScore}
        />
      );
    } else {
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

export default Game;
