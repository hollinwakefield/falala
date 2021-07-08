import React, { useState, useEffect } from "react";
import LeaderboardItem from "./LeaderboardItem.jsx";

// create map function to render the top 10 ranks

const LeaderboardList = (props) => {
  if (!props.username) {
    return (
      <table>
        <tbody>
          <LeaderboardItem />
        </tbody>
      </table>
    );
  } else {
    return (
      <table>
        <tbody>
          <LeaderboardItem />
          <tr>
            <td>{props.username}</td>
            <td>0%</td>
            <td>0 points</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default LeaderboardList;
