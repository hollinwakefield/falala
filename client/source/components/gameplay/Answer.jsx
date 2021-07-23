import React, { useState, useEffect } from "react";
import randomizeWords from "../helpers/randomizeWords.js";
import getToneText from "../helpers/getToneText.js";

const Answer = (props) => {
  // let toneText = "";
  let response = props.response;
  let correctTone = props.word.tone;
  let audio;

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
            src="./assets/audio-icon.png"
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
          <h4>{props.word.pinyin}</h4>
          <br></br>
          <h4>English: {props.word.translation}</h4>
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
          <br></br>
          <img
            src="./assets/audio-icon.png"
            className="audio-icon"
            onClick={() => {
              let audio = new Audio(props.word.femaleAudio);
              audio.play();
            }}
          ></img>
          <h3>{props.word.simplifiedword}</h3>
          <h4>{props.word.pinyin}</h4>
          <h4>English: {props.word.translation}</h4>
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
