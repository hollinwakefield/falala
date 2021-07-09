import React, { useState, useEffect } from "react";

const GameResults = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    setFormSubmitted(true);
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
          <h3>Your final score!</h3>
          <h3>{props.score} points</h3>
          <h3>{props.accuracy} accuracy</h3>
          <h3>{props.accuracyBonus} accuracy bonus</h3>
          <h3>{props.totalScore} total score</h3>
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
