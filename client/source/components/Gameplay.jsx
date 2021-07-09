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
    console.log("changed word index");
  }, currentWordIndex);

  const getRandomIndex = Math.floor(Math.random() * props.wordList.length);

  let audio = new Audio(
    "https://putonghua.s3.amazonaws.com/Female-A-1.0/%E4%B8%A4-1.0-CN-Female-A-139.mp3"
  );

  const playAudio = () => {
    audio.play();
  };

  useEffect(() => {
    if (!wordList[0]) {
      setCurrentWordIndex(getRandomIndex);
      setWordList(props.wordList);
      audio.play();
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
    props.getAccuracyBonus();
    props.getTotalScore();
    setQuestionStatus("answer");
  };

  const continueGame = (event) => {
    props.getAccuracyBonus();
    props.getTotalScore();
    setCurrentWordIndex(getRandomIndex);
    setQuestionStatus("question");
    audio.play();
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
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={playAudio}
          ></img>
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
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={playAudio}
          ></img>
          <br></br>
          <br></br>
          <h3>{lastQuestion.word}</h3>
          <br></br>
          <h3>{lastQuestion.pinyin}</h3>
          <br></br>
          <h3>English: {lastQuestion.translation}</h3>
        </div>
        <button className="button" onClick={() => continueGame(event)}>
          Continue
        </button>
      </div>
    );
  }
};

export default Gameplay;
