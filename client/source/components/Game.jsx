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

  const updateAccuracy = () => {
    if (questionsAnswered > 0) {
      setAccuracy(
        Math.round((questionsCorrect / questionsAnswered) * 100) + "%"
      );
    }
  };

  let accuracyBonusFormula = Math.round(
    (questionsCorrect / questionsAnswered) * questionsCorrect * 100
  );

  const getAccuracyBonus = () => {
    if (questionsCorrect / questionsAnswered > 0.7) {
      setAccuracyBonus(accuracyBonusFormula);
    } else {
      setAccuracyBonus(0);
    }
  };

  const getTotalScore = () => {
    if (questionsCorrect / questionsAnswered > 0.7) {
      setTotalScore(score + accuracyBonusFormula);
    } else {
      setTotalScore(score);
    }
  };

  if (gameStarted === true) {
    if (timer > 0) {
      return (
        <div>
          <Timer timer={timer} onChange={(value) => setTimer(value)} />
          <Gameplay
            timer={timer}
            wordList={wordList}
            score={score}
            updateScore={updateScore}
            updateQuestionsAnswered={updateQuestionsAnswered}
            updateQuestionsCorrect={updateQuestionsCorrect}
            updateAccuracy={updateAccuracy}
            getAccuracyBonus={getAccuracyBonus}
            getTotalScore={getTotalScore}
          />
        </div>
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
              setScore(0);
              SetQuestionsAnswered(0);
              SetQuestionsCorrect(0);
              setAccuracy("0%");
              setAccuracyBonus(0);
              setTotalScore(0);
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
