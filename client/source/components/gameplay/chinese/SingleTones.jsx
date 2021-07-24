import React, { useState, useEffect } from "react";
import randomizeWords from "../../helpers/randomizeWords.js";
import Question from "../Question.jsx";
import Answer from "../Answer.jsx";

const Gameplay = (props) => {
  const [wordIndex, setWordIndex] = useState(null);
  const [response, setResponse] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [gameDataToUpdate, setGameDataToUpdate] = useState(true);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("question");
  const [correctStatus, setCorrectStatus] = useState(true);
  const [answersViewed, setAnswersViewed] = useState(0);
  const [currentWord, setCurrentWord] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getRandomIndex = () =>
    Math.floor(Math.random() * props.wordList.length);

  useEffect(() => {
    setWordIndex(getRandomIndex());
  }, []);

  useEffect(() => {
    setWordIndex(getRandomIndex());
  }, [answersViewed]);

  useEffect(() => {
    setCurrentWord(props.wordList[wordIndex]);
  }, [wordIndex]);

  useEffect(() => {
    if (currentWord && wordIndex) {
      let sound = new Audio(currentWord.femaleAudio);
      sound.play();
    }
  }, [currentWord]);

  if (gameStatus === "question") {
    return (
      <Question
        word={currentWord}
        updateCorrectStatus={setCorrectStatus}
        updateQuestionsAnswered={props.updateQuestionsAnswered}
        updateQuestionsCorrect={props.updateQuestionsCorrect}
        updateScore={props.updateScore}
        score={props.score}
        questionsAnswered={props.questionsAnswered}
        questionsCorrect={props.questionsCorrect}
        updateGameStatus={setGameStatus}
        updateResponse={setResponse}
      />
    );
  } else if (gameStatus === "answer") {
    return (
      <Answer
        word={currentWord}
        correctStatus={correctStatus}
        response={response}
        updateGameStatus={setGameStatus}
        answersViewed={answersViewed}
        updateAnswersViewed={setAnswersViewed}
      />
    );
  } else {
    return <h1>Game is loading</h1>;
  }
};

export default Gameplay;
