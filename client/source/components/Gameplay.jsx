import React, { useState, useEffect } from "react";
import Timer from "./Timer.jsx";
import randomizeWords from "../helpers/randomizeWords.js";

const Gameplay = (props) => {
  const [word, setWord] = useState({});
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [randomizedWordList, setRandomizedWordList] = useState([]);
  const [logged, setLogged] = useState(false);
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

  const handleClick = (event, optionNumber) => {
    // Can either use state to keep track of which cards have been shown
    // or choose a random card every time
    props.updateQuestionsAnswered();
    if (
      optionNumber === randomizedWordList[currentWordIndex].firstSyllableTone
    ) {
      props.updateScore();
      props.updateQuestionsCorrect();
    }
    props.updateAccuracyAndTotalScore();
    setLastQuestion({
      word: randomizedWordList[currentWordIndex].simplifiedword,
      pinyin: randomizedWordList[currentWordIndex].pinyin,
      translation: randomizedWordList[currentWordIndex].translation,
    });
    setCurrentWordIndex(currentWordIndex + 1);
  };

  if (!randomizedWordList[0]) {
    return <span className="load-screen">Game is loading</span>;
  } else {
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
          <div className="choice" onClick={() => handleClick(event, 1)}>
            1<br></br>¯
          </div>
          <div className="choice" onClick={() => handleClick(event, 2)}>
            2 <br></br>´
          </div>
          <div className="choice" onClick={() => handleClick(event, 3)}>
            3<br></br>ˇ
          </div>
          <div className="choice" onClick={() => handleClick(event, 4)}>
            4<br></br>`
          </div>
          <div className="choice" onClick={() => handleClick(event, 5)}>
            5 <br></br>
          </div>
        </div>
        <div className="last-question">
          Last question:
          <br></br>
          {lastQuestion.word}
          <br></br>
          {lastQuestion.pinyin}
          <br></br>
          {lastQuestion.translation}
        </div>
      </div>
    );
  }
};

export default Gameplay;
