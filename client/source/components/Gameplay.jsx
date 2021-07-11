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
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [gameDataToUpdate, setGameDataToUpdate] = useState(true);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("question");
  const [correctStatus, setCorrectStatus] = useState(false);
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

  // question prep, step 1
  // get random number
  useEffect(() => {
    setWordIndex(getRandomIndex());
  }, [wordList, answersViewed]);

  // question prep, step 2
  // select word/question object based on random number
  useEffect(() => {
    setCurrentWord(wordList[wordIndex]);
  }, [wordIndex]);

  // handle response, step 1
  // updateCorrectStatus and questionsAnswered and questionsCorrect upon submit in Question component

  // handle response, step 2
  // update accuracy and game status upon questionsAnswered change
  useEffect(() => {}, [questionsAnswered]);

  // handle response, step 3
  // update total score upon game status change
  useEffect(() => {}, [gameStatus]);

  if (gameStatus === "question") {
    // return <Question gameData={props} />;
    return <Question word={currentWord} />;
  } else if (gameStatus === "answer") {
    return <Answer gameData={props} />;
  } else {
    return <h1>Game is loading</h1>;
  }
};

export default Gameplay;
