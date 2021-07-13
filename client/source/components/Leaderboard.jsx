import React, { useState, useEffect } from "react";
import LeaderboardList from "./LeaderboardList.jsx";

const Leaderboard = (props) => {
  return (
    <div className="leaderboard">
      <h3 className="leaderboard-header">Leaderboard</h3>
      <LeaderboardList className="leaderboard-list" />
    </div>
  );
};

export default Leaderboard;
