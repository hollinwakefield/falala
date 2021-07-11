import React, { useState, useEffect } from "react";
import randomizeWords from "../helpers/randomizeWords.js";

const Answer = (props) => {
  let toneText = "";
  let audio;

  audio = new Audio(audioFileLink);

  const playAudio = (audio) => {
    audio.play();
  };

  return (
    <div className="answer">
      <h3>Answer</h3>
    </div>
  );
};

export default Answer;

// const getToneText = (toneNumber) => {
//   if (toneNumber === 1) {
//     toneText = "1st tone";
//   } else if (toneNumber === 2) {
//     toneText = "2nd tone";
//   } else if (toneNumber === 3) {
//     toneText = "3rd tone";
//   } else if (toneNumber === 4) {
//     toneText = "4th tone";
//   } else {
//     toneText = "neutral tone";
//   }
//   return toneText;
// };

// const continueGame = (event) => {
//   props.getAccuracyBonus();
//   props.getTotalScore();
//   setCurrentWordIndex(getRandomIndex);
//   // setAudioFile(wordList[currentWordIndex].femaleAudio);
//   setQuestionStatus("question");
//   setCorrectStatus(false);
//   audio.play();
// };
