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
    axios
      .post("/scores", scoreObject)
      .then((response) => {
        console.log("hi, you made a successful post", response);
      })
      .catch((error) => {
        console.log("hi, you received an error", error);
      });
  };

  if (formSubmitted) {
    return (
      <div className="gameresults">
        <div className="score-summary">
          <h3>Score Report</h3>
          <p>{props.score} points</p>
          <p>{props.accuracy}% accuracy</p>
          <p>{props.accuracyBonus} accuracy bonus points</p>
          <h4>{props.totalScore} total points</h4>
        </div>
        Thanks for playing, {username}! Want to play again?
      </div>
    );
  } else {
    return (
      <div className="gameresults">
        <div className="score-summary">
          <h3>Score Report</h3>
          <p>{props.score} points</p>
          <p>{props.accuracy}% accuracy</p>
          <p>{props.accuracyBonus} accuracy bonus points</p>
          <h4>{props.totalScore} total points</h4>
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
      </div>
    );
  }
};

export default GameResults;
