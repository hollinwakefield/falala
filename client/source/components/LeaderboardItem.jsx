import React, { useState, useEffect } from "react";

const LeaderboardItem = (props) => {
  return (
    <tr className="leaderboardItem">
      <td>
        <span>Name</span>
      </td>
      <td>
        <span>Accuracy</span>
      </td>
      <td>
        <span>Score</span>
      </td>
    </tr>
  );
};

export default LeaderboardItem;
