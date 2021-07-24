import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import Gameplay from "./chinese/SingleTones.jsx";
import Timer from "./Timer.jsx";
import Leaderboard from "../leaderboard/Leaderboard.jsx";
import Timers from "../helpers/timerDuration.js";

const LoadingTimerComponent = lazy(() => import("./LoadingTimer.jsx"));
const LoadingComponent = lazy(() => import("./Loading.jsx"));
const GameResultsComponent = lazy(() => import("./GameResults.jsx"));

const renderLoader = () => <p>Loading</p>;

const GameController = (props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [wordList, setWordList] = useState([]);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [timer, setTimer] = useState(Timers.gameTimer);
  const [loadingTimer, setLoadingTimer] = useState(10);

  let accuracy;
  let accuracyBonus;
  let totalScore;

  if (gameStarted === true) {
    if (loadingTimer > 0) {
      if (wordList.length === 0) {
        axios
          .get("/beginnerWordList")
          .then((response) => {
            setWordList(response.data);
          })
          .catch((error) => {
            console.log("Error fetching data", error);
          });
      }
      return (
        <div className="gameplay">
          <Suspense fallback={renderLoader()}>
            <LoadingTimerComponent
              loadingTimer={loadingTimer}
              onChange={(value) => setLoadingTimer(value)}
            />
          </Suspense>
          <Suspense fallback={renderLoader()}>
            <LoadingComponent
              updateTimer={setTimer}
              updateScore={setScore}
              updateQuestionsAnswered={setQuestionsAnswered}
              updateQuestionsCorrect={setQuestionsCorrect}
            />
          </Suspense>
        </div>
      );
    } else if (loadingTimer === 0 && timer > 0) {
      return (
        <div className="gameplay">
          <Timer timer={timer} onChange={(value) => setTimer(value)} />
          <h2>{score} points</h2>
          <Gameplay
            wordList={wordList}
            timer={timer}
            score={score}
            questionsAnswered={questionsAnswered}
            questionsCorrect={questionsCorrect}
            updateTimer={setTimer}
            updateScore={setScore}
            updateQuestionsAnswered={setQuestionsAnswered}
            updateQuestionsCorrect={setQuestionsCorrect}
          />
        </div>
      );
    } else {
      if (questionsAnswered > 0) {
        accuracy = Math.round((questionsCorrect / questionsAnswered) * 100);
      } else {
        accuracy = 0;
      }
      if (accuracy >= 70) {
        accuracyBonus = Math.round(
          (questionsCorrect / questionsAnswered) * Math.pow(questionsCorrect, 2)
        );
      } else {
        accuracyBonus = 0;
      }
      totalScore = score + accuracyBonus;
      return (
        <div className="gameresults">
          <Suspense fallback={renderLoader()}>
            <GameResultsComponent
              score={score}
              questionsAnswered={questionsAnswered}
              questionsCorrect={questionsCorrect}
              accuracy={accuracy}
              accuracyBonus={accuracyBonus}
              totalScore={totalScore}
              updateTimer={setTimer}
            />
          </Suspense>
          <button
            onClick={(e) => {
              setGameStarted(false);
              setTimer(Timers.gameTimer);
              setLoadingTimer(Timers.loadingTimer);
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
          <h2>Learn Single Tones</h2>
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
