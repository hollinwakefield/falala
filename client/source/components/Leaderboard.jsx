import React, { useState, useEffect } from "react";
import LeaderboardList from "./LeaderboardList.jsx";

const Leaderboard = (props) => {
  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      <LeaderboardList />
    </div>
  );
};

export default Leaderboard;
