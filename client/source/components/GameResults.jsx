import React, { useState, useEffect } from "react";

const GameResults = (props) => {
  const [username, setUsername] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="game">
        <h3>Your final score!</h3>
        Thanks for playing, {username}! Want to play again?
      </div>
    );
  } else {
    return (
      <div className="game">
        <h3>Your final score!</h3>
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
