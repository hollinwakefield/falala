import React, { useState, useEffect } from "react";
import randomizeWords from "../helpers/randomizeWords.js";

const Answer = (props) => {
  let toneText = "";
  let response = props.response;
  let correctTone = props.word.tone;
  let audio;

  const getToneText = (tone) => {
    if (tone === 1) {
      toneText = "1st tone";
    } else if (tone === 2) {
      toneText = "2nd tone";
    } else if (tone === 3) {
      toneText = "3rd tone";
    } else if (tone === 4) {
      toneText = "4th tone";
    } else {
      toneText = "neutral tone";
    }
    return toneText;
  };

  // const handleKeyPress = (event) => {
  //   // space = 32
  //   // return = 13
  // };

  const continueGame = (event) => {
    props.updateGameStatus("question");
    props.updateAnswersViewed(props.answersViewed + 1);
  };

  if (props.correctStatus === true) {
    return (
      <div className="last-question">
        <div className="last-question-info">
          <h1>Correct!</h1>
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={() => {
              let audio = new Audio(props.word.femaleAudio);
              audio.play();
            }}
          ></img>
          <br></br>
          <br></br>
          <h3>{props.word.simplifiedword}</h3>
          <br></br>
          <h3>{props.word.pinyin}</h3>
          <br></br>
          <h3>English: {props.word.translation}</h3>
        </div>
        <button className="button" onClick={() => continueGame(event)}>
          Continue
        </button>
      </div>
    );
  } else {
    return (
      <div className="last-question">
        <div className="last-question-info">
          <h1>Not quite, but good try!</h1>
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={() => {
              let audio = new Audio(props.word.femaleAudio);
              audio.play();
            }}
          ></img>
          <br></br>
          <br></br>
          <h3>{props.word.simplifiedword}</h3>
          <br></br>
          <h3>{props.word.pinyin}</h3>
          <br></br>
          <h3>English: {props.word.translation}</h3>
          <h5>
            You selected the {getToneText(response)} <br></br>but this sound is
            the {getToneText(correctTone)} tone.
          </h5>
        </div>
        <button className="button" onClick={() => continueGame(event)}>
          Continue
        </button>
      </div>
    );
  }
};

export default Answer;
