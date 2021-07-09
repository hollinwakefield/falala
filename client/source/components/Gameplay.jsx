import React, { useState, useEffect } from "react";
import Timer from "./Timer.jsx";
import randomizeWords from "../helpers/randomizeWords.js";

const Gameplay = (props) => {
  const [word, setWord] = useState({});
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordList, setWordList] = useState([]);

  // useEffect(() => {
  // const randomizedWordList = randomizeWords(props.wordList);
  // // setWordList(randomizedWordList);
  // // setWord(wordList[currentWordIndex]);
  // // console.log(randomizedWordList);
  // console.log(randomizedWordList);
  // });

  // const handleClick = (event) => {
  // Can either use state to keep track of which cards have been shown
  // or choose a random card every time
  // };

  return (
    <div className="gameplay">
      <Timer timer={props.timer} onChange={props.onChange} />
      <div className="question-div">
        <span className="question">
          {/* {wordList[currentWordIndex].simplifiedword} */}
        </span>
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
          5 <br></br>
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
