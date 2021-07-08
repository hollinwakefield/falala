import React, { useState, useEffect } from "react";

const LeaderboardItem = (props) => {
  return (
    <div className="leaderboardItem">
      <tr>
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
    </div>
  );
};

export default LeaderboardItem;
