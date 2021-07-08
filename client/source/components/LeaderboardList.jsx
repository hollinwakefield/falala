import React, { useState, useEffect } from "react";
import LeaderboardItem from "./LeaderboardItem.jsx";

// create map function to render the top 10 ranks

const LeaderboardList = (props) => {
  return (
    <table>
      <tbody>
        <LeaderboardItem />
      </tbody>
    </table>
  );
};

export default LeaderboardList;
