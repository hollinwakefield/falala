import React, { useState, useEffect } from "react";

const LeaderboardItem = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.score) {
      if (props.score.name) {
        setLoaded(true);
      }
    }
  });

  if (loaded === true) {
    return (
      <tr className="leaderboardItem">
        <td>
          <span>{props.rank}</span>
        </td>
        <td>
          <span>{props.score.name}</span>
        </td>
        <td>
          <span>{props.score.accuracy}</span>
        </td>
        <td>
          <span>{props.score.totalScore} points</span>
        </td>
      </tr>
    );
  } else {
    return (
      <tr className="leaderboardItem">
        <td>
          <span>Rank</span>
        </td>
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
  }
};

export default LeaderboardItem;
