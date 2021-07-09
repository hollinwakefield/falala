import React, { useState, useEffect } from "react";
import LeaderboardItem from "./LeaderboardItem.jsx";
import axios from "axios";

const LeaderboardList = (props) => {
  const [scores, setScores] = useState([]);

  const leaderboardMap = (score) => (
    <LeaderboardItem score={score} key={score._id} />
  );

  useEffect(() => {
    if (scores[0]) {
    } else {
      axios
        .get("/scores")
        .then((response) => {
          setScores(response.data);
        })
        .catch((error) => {
          console.log("hi, you received an error", error);
        });
    }
  });

  if (scores[0]) {
    return (
      <table>
        <tbody>{scores.map(leaderboardMap)}</tbody>
      </table>
    );
  } else {
    return (
      <table className="leaderboard-table">
        <tbody>
          <LeaderboardItem />
          <tr>
            <td>Anon</td>
            <td>0%</td>
            <td>0 points</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default LeaderboardList;
