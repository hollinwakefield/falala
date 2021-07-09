import React, { useState, useEffect } from "react";
import Timer from "./Timer.jsx";
import randomizeWords from "../helpers/randomizeWords.js";

const Gameplay = (props) => {
  const [word, setWord] = useState({});
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [randomizedWordList, setRandomizedWordList] = useState([]);
  const [logged, setLogged] = useState(false);
  // question / answer status for conditional rendering
  const [questionStatus, setQuestionStatus] = useState("question");
  const [lastQuestion, setLastQuestion] = useState({
    word: "",
    pinyin: "",
    translation: "",
  });

  useEffect(() => {
    if (logged) {
    } else if (randomizedWordList[0]) {
      console.log(randomizedWordList);
      setLogged(true);
    } else {
      setRandomizedWordList(randomizeWords(props.wordList));
    }
  });

  const handleAnswer = (event, optionNumber) => {
    // Can either use state to keep track of which cards have been shown
    // or choose a random card every time
    props.updateQuestionsAnswered();
    if (
      optionNumber === randomizedWordList[currentWordIndex].firstSyllableTone
    ) {
      props.updateScore();
      props.updateQuestionsCorrect();
    }
    props.updateAccuracy();
    setLastQuestion({
      word: randomizedWordList[currentWordIndex].simplifiedword,
      pinyin: randomizedWordList[currentWordIndex].pinyin,
      translation: randomizedWordList[currentWordIndex].translation,
    });
    console.log(randomizedWordList[currentWordIndex + 1].firstSyllableTone);
    setQuestionStatus("answer");
  };

  const continueGame = (event) => {
    props.getAccuracyBonus();
    props.getTotalScore();
    setCurrentWordIndex(currentWordIndex + 1);
    setQuestionStatus("question");
  };

  if (!randomizedWordList[0]) {
    return <span className="load-screen">Game is loading</span>;
  } else if (questionStatus === "question") {
    return (
      <div className="gameplay">
        <div className="game-header">
          <span className="current-score">{props.score} points</span>
          <Timer timer={props.timer} onChange={props.onChange} />
        </div>
        <div className="question-div">
          <span className="question">
            {randomizedWordList[currentWordIndex].simplifiedword}
          </span>
        </div>
        <div className="choices">
          <div className="choice" onClick={() => handleAnswer(event, 1)}>
            1<br></br>¯
          </div>
          <div className="choice" onClick={() => handleAnswer(event, 2)}>
            2 <br></br>´
          </div>
          <div className="choice" onClick={() => handleAnswer(event, 3)}>
            3<br></br>ˇ
          </div>
          <div className="choice" onClick={() => handleAnswer(event, 4)}>
            4<br></br>`
          </div>
          <div className="choice" onClick={() => handleAnswer(event, 5)}>
            5 <br></br>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="last-question">
        <Timer timer={props.timer} onChange={props.onChange} />
        <div className="last-question-info">
          <h1>Correct response:</h1>
          <br></br>
          <h3>{lastQuestion.word}</h3>
          <br></br>
          <h3>{lastQuestion.pinyin}</h3>
          <br></br>
          <h3>{lastQuestion.translation}</h3>
        </div>
        <button className="button" onClick={() => continueGame(event)}>
          Continue
        </button>
      </div>
    );
  }
};

export default Gameplay;
