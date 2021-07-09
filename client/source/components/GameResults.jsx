import React, { useState, useEffect } from "react";
import axios from "axios";

const GameResults = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    setFormSubmitted(true);
    const scoreObject = {};
    scoreObject.name = username;
    scoreObject.score = props.score;
    scoreObject.questionsAnswered = props.questionsAnswered;
    scoreObject.questionsCorrect = props.questionsCorrect;
    scoreObject.accuracy = props.accuracy;
    scoreObject.totalScore = props.totalScore;
    console.log(scoreObject);
    setTimeout(() => {
      axios
        .post("/scores", scoreObject)
        .then((response) => {
          console.log("hi, you made a successful post", response);
        })
        .catch((error) => {
          console.log("hi, you received an error", error);
        });
    }, 0);
  };

  if (formSubmitted) {
    return (
      <div className="gameresults">
        <h3>Your final score!</h3>
        Thanks for playing, {username}! Want to play again?
      </div>
    );
  } else {
    return (
      <div className="gameresults">
        <div className="score-summary">
          <h3>Score Report</h3>
          <p>{props.score} points</p>
          <p>{props.accuracy} accuracy</p>
          <p>{props.accuracyBonus} accuracy bonus points</p>
          <h4>{props.totalScore} total points</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name to save your score: <br></br>
            <input
              type="text"
              required="required"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            ></input>
          </label>
          <button>Save Score</button>
        </form>
      </div>
    );
  }
};

export default GameResults;
