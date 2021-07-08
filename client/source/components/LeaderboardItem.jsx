import React, { useState, useEffect } from "react";

const LeaderboardItem = (props) => {
  return (
    <tr className="leaderboardItem">
      <td>
        <h5>Name</h5>
      </td>
      <td>
        <p>Accuracy</p>
      </td>
      <td>
        <p>Score</p>
      </td>
    </tr>
  );
};

export default LeaderboardItem;
