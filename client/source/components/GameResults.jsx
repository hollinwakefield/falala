import React, { useState, useEffect } from "react";

const GameResults = (props) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
  };

  if (props.username) {
    return (
      <div className="game">
        <h3>Your final score!</h3>
        Nice job, {props.username}!
      </div>
    );
  } else {
    return (
      <div className="game">
        <h3>Your final score!</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your name to save your score:
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
