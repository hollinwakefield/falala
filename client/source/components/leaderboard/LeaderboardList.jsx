import React, { useState, useEffect } from "react";
import LeaderboardItem from "./LeaderboardItem.jsx";
import axios from "axios";

const LeaderboardList = (props) => {
  const [scores, setScores] = useState([]);

  const leaderboardMap = (score, index) => {
    if (index < 10)
      return <LeaderboardItem score={score} key={score._id} rank={index + 1} />;
  };

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
  }, []);

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
            <td>0</td>
            <td>Leaderboard error</td>
            <td>0%</td>
            <td>0 points</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default LeaderboardList;
