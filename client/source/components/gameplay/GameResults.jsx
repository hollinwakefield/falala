import React, { useState, useEffect } from "react";
import axios from "axios";

const GameResults = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(username);
    setFormSubmitted(true);
    const scoreObject = {};
    scoreObject.name = username;
    scoreObject.score = props.score;
    scoreObject.questionsAnswered = props.questionsAnswered;
    scoreObject.questionsCorrect = props.questionsCorrect;
    scoreObject.accuracy = props.accuracy + "%";
    scoreObject.totalScore = props.totalScore;
    // console.log(scoreObject);
    axios
      .post("/scores", scoreObject)
      // .then((response) => {
      //   console.log("hi, you made a successful post", response);
      // })
      .catch((error) => {
        console.log("Error sending data", error);
      });
  };

  if (formSubmitted) {
    return (
      <>
        <div className="score-summary">
          <h2>Final Score</h2>
          <h2>{props.totalScore} total points</h2>
          <p>{props.score} points</p>
          <p>{props.accuracy}% accuracy</p>
          <p>{props.accuracyBonus} accuracy bonus points</p>
        </div>
        Thanks for playing, {username}! Want to play again?
      </>
    );
  } else {
    return (
      <>
        <div className="score-summary">
          <h2>Final Score</h2>
          <h2>{props.totalScore} total points</h2>
          <p>{props.score} points</p>
          <p>{props.accuracy}% accuracy</p>
          <p>{props.accuracyBonus} accuracy bonus points</p>
        </div>
        Enter a username to save your score: <br></br>
        <form className="save-score" onSubmit={handleSubmit}>
          {/* <label> */}
          <input
            className="save-input"
            type="text"
            required="required"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          {/* </label> */}
          <button className="save-button">Save Score</button>
        </form>
      </>
    );
  }
};

export default GameResults;
