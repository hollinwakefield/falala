import React, { useState, useEffect } from "react";
import randomizeWords from "../helpers/randomizeWords.js";

const Question = (props) => {
  const [played, setPlayed] = useState(false);

  // const handleKeyPress = (event) => {
  //   // 1 = 49
  //   // 2 = 50
  //   // 3 = 51
  //   // 4 = 52
  //   // 5 = 53
  //   // space = 32
  //   console.log("keypress");
  //   if (event.keyCode === 49) {
  //     console.log("hi");
  //   }
  // };

  const handleAnswer = (event, optionNumber) => {
    props.updateQuestionsAnswered(props.questionsAnswered + 1);
    if (optionNumber === props.word.tone) {
      props.updateScore(props.score + 10);
      props.updateQuestionsCorrect(props.questionsCorrect + 1);
      props.updateCorrectStatus(true);
    } else {
      props.updateCorrectStatus(false);
      props.updateResponse(optionNumber);
    }
    props.updateGameStatus("answer");
  };

  if (props.word) {
    return (
      <div className="gameplay">
        <div className="question-div">
          <img
            src="./assets/audio-icon.png"
            className="audio-icon"
            onClick={() => {
              let audio = new Audio(props.word.femaleAudio);
              audio.play();
            }}
          ></img>
          <span className="question">{props.word.simplifiedword}</span>
        </div>
        <div className="choices">
          <div
            className="choice"
            onClick={() => handleAnswer(event, 1)}
            // onKeyPress={() => handleKeyPress(event)}
          >
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
          <div className="choice" onClick={() => handleAnswer(event, 0)}>
            5 <br></br>
          </div>
        </div>
        <p>Select the correct tone</p>
      </div>
    );
  } else {
    return <p>Game is loading</p>;
  }
};

export default Question;
