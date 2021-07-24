import React, { useState, useEffect } from "react";
import LeaderboardList from "./LeaderboardList.jsx";

const Leaderboard = (props) => {
  return (
    <div className="leaderboard">
      <h2 className="leaderboard-header">Leaderboard</h2>
      <LeaderboardList className="leaderboard-list" />
    </div>
  );
};

export default Leaderboard;
