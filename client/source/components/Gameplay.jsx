import React, { useState, useEffect } from "react";
import axios from "axios";
import randomizeWords from "../helpers/randomizeWords.js";
import Question from "./Question.jsx";
import Answer from "./Answer.jsx";

// Gameplay should manage state for if currently a question or answer
// Gameplay should determine the current word and audio

const Gameplay = (props) => {
  const [wordList, setWordList] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [response, setResponse] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [gameDataToUpdate, setGameDataToUpdate] = useState(true);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("question");
  const [correctStatus, setCorrectStatus] = useState(true);
  const [answersViewed, setAnswersViewed] = useState(0);
  const [currentWord, setCurrentWord] = useState({});

  const getRandomIndex = () => Math.floor(Math.random() * wordList.length);

  // question prep, step 0
  // handle component mount
  useEffect(() => {
    axios
      .get("/beginnerWordList")
      .then((response) => {
        setWordList(response.data);
      })
      .catch((error) => {
        console.log("hi, you received an error", error);
      });
  }, []);

  useEffect(() => {
    setWordIndex(getRandomIndex());
  }, [wordList, answersViewed]);

  useEffect(() => {
    setCurrentWord(wordList[wordIndex]);
  }, [wordIndex]);

  useEffect(() => {
    if (currentWord) {
      let sound = new Audio(currentWord.femaleAudio);
      sound.play();
    }
  }, [currentWord]);

  // handle response, step 1
  // updateCorrectStatus and questionsAnswered and questionsCorrect upon submit in Question component

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
