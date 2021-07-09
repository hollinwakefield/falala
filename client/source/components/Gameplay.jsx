import React, { useState, useEffect } from "react";
import randomizeWords from "../helpers/randomizeWords.js";

const Gameplay = (props) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [questionStatus, setQuestionStatus] = useState("question");
  const [lastQuestion, setLastQuestion] = useState({
    word: "",
    pinyin: "",
    translation: "",
  });

  useEffect(() => {
    if (!wordList[0]) {
      setCurrentWordIndex(Math.floor(Math.random() * props.wordList.length));
      setWordList(props.wordList);
    }
  });

  const handleAnswer = (event, optionNumber) => {
    props.updateQuestionsAnswered();
    if (optionNumber === wordList[currentWordIndex].firstSyllableTone) {
      props.updateScore();
      props.updateQuestionsCorrect();
    }
    props.updateAccuracy();
    setLastQuestion({
      word: wordList[currentWordIndex].simplifiedword,
      pinyin: wordList[currentWordIndex].pinyin,
      translation: wordList[currentWordIndex].translation,
    });
    console.log(
      wordList[Math.floor(Math.random() * wordList.length)].firstSyllableTone
    );
    setQuestionStatus("answer");
  };

  const continueGame = (event) => {
    props.getAccuracyBonus();
    props.getTotalScore();
    setCurrentWordIndex(Math.floor(Math.random() * wordList.length));
    setQuestionStatus("question");
  };

  if (!wordList[0]) {
    return <span className="load-screen">Game is loading</span>;
  } else if (questionStatus === "question") {
    return (
      <div className="gameplay">
        <div className="game-header">
          <span className="current-score">{props.score} points</span>
        </div>
        <div className="question-div">
          <span className="question">
            {wordList[currentWordIndex].simplifiedword}
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
