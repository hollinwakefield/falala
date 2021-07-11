import React, { useState, useEffect } from "react";
import randomizeWords from "../helpers/randomizeWords.js";

const Question = (props) => {
  if (props.word) {
    return (
      <div className="gameplay">
        <div className="question-div">
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={() => {
              let audio = new Audio(props.word.femaleAudio);
              audio.play();
            }}
          ></img>
          <span className="question">{props.word.simplifiedword}</span>
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
    return <p>Game is loading</p>;
  }
};

export default Question;

// const handleAnswer = (event, optionNumber) => {
//   setAnswer(optionNumber);
//   props.updateQuestionsAnswered();
//   if (optionNumber === wordList[currentWordIndex].tone) {
//     props.updateScore();
//     props.updateQuestionsCorrect();
//     setCorrectStatus(true);
//   }
//   props.updateAccuracy();
//   setLastQuestion({
//     word: wordList[currentWordIndex].simplifiedword,
//     pinyin: wordList[currentWordIndex].pinyin,
//     translation: wordList[currentWordIndex].translation,
//   });
//   props.getAccuracyBonus();
//   props.getTotalScore();
//   setQuestionStatus("answer");
// };
