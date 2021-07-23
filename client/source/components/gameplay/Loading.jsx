import React, { useState, useEffect } from "react";
// import LeaderboardList from "./LeaderboardList.jsx.js";

const Loading = (props) => {
  useEffect(() => {
    props.updateTimer(60);
    props.updateScore(0);
    props.updateQuestionsAnswered(0);
    props.updateQuestionsCorrect(0);
  }, [props]);

  return (
    <div className="leaderboard">
      <h1>Get ready!</h1>
      <h3>How to play:</h3>
      <p>Listen to the Chinese sound and select the corresponding tone.</p>
      <p>The more accurate you are, the more bonus points you'll receive!</p>
      <p>
        If you aren't familiar with the 4 tones, check out our Learn section.
      </p>
    </div>
  );
};

export default Loading;
