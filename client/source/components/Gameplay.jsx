import React, { useState, useEffect } from "react";
import Timer from "./Timer.jsx";
import randomizeWords from "../helpers/randomizeWords.js";

const Gameplay = (props) => {
  const [word, setWord] = useState({});

  const randomizedWords = randomizeWords(props.wordList);

  return (
    <div className="gameplay">
      <Timer timer={props.timer} onChange={props.onChange} />
      <div className="question-div">
        <span className="question">{randomizedWords[0].simplifiedword}</span>
      </div>
      <div className="choices">
        <div className="choice">
          1<br></br>¯
        </div>
        <div className="choice">
          2 <br></br>´
        </div>
        <div className="choice">
          3<br></br>ˇ
        </div>
        <div className="choice">
          4<br></br>`
        </div>
        <div
          className="choice"
          onClick={() => console.log("You selected the neutral tone.")}
        >
          5 <br></br>x
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
