import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import Gameplay from "./Gameplay.jsx";
import Timer from "./Timer.jsx";
import Leaderboard from "./Leaderboard.jsx";

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
  const [timer, setTimer] = useState(60);
  const [loadingTimer, setLoadingTimer] = useState(10);

  let accuracy;
  let accuracyBonus;
  let totalScore;

  if (gameStarted === true) {
    if (loadingTimer > 0) {
      axios
        .get("/beginnerWordList")
        .then((response) => {
          setWordList(response.data);
        })
        .catch((error) => {
          console.log("hi, you received an error", error);
        });
      return (
        <div className="gameplay">
          <Suspense fallback={renderLoader()}>
            <LoadingTimerComponent
              loadingTimer={loadingTimer}
              onChange={(value) => setLoadingTimer(value)}
            />
          </Suspense>
          <Suspense fallback={renderLoader()}>
            <LoadingComponent />
          </Suspense>
        </div>
      );
    } else if (loadingTimer === 0 && timer > 0) {
      return (
        <div className="gameplay">
          <Timer timer={timer} onChange={(value) => setTimer(value)} />
          <h3>{score} points</h3>
          <Gameplay
            wordList={wordList}
            timer={timer}
            score={score}
            questionsAnswered={questionsAnswered}
            questionsCorrect={questionsCorrect}
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
            />
          </Suspense>
          <button
            onClick={(e) => {
              setGameStarted(false);
              setTimer(60);
              setLoadingTimer(10);
              setScore(0);
              SetQuestionsAnswered(0);
              SetQuestionsCorrect(0);
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
