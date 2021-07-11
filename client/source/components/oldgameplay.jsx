import React, { useState, useEffect } from "react";
import randomizeWords from "../helpers/randomizeWords.js";

const Gameplay = (props) => {
  if (!wordList[0]) {
    return <span className="load-screen">Game is loading</span>;
  } else if (questionStatus === "question") {
    return (
      <div className="gameplay">
        <div className="game-header">
          <span className="current-score">{props.score} points</span>
        </div>
        <div className="question-div">
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={playAudio}
          ></img>
          <span className="question">
            {wordList[currentWordIndex].simplifiedword}
          </span>
        </div>
        <div className="choices">
          <div className="choice" onClick={() => handleAnswer(event, 1)}>
            1<br></br>¯
          </div>
          <div className="choice" onClick={() => handleAnswer(event, 2)}>
            2 <br></br>´
          </div>
          <div className="choice" onClick={() => handleAnswer(event, 3)}>
            3<br></br>ˇ
          </div>
          <div className="choice" onClick={() => handleAnswer(event, 4)}>
            4<br></br>`
          </div>
          <div className="choice" onClick={() => handleAnswer(event, 5)}>
            5 <br></br>
          </div>
        </div>
      </div>
    );
  } else 
};

export default Gameplay;

// const [currentWordIndex, setCurrentWordIndex] = useState(0);
// const [wordList, setWordList] = useState([]);
// const [questionStatus, setQuestionStatus] = useState("question");
// const [correctStatus, setCorrectStatus] = useState(false);
// const [answer, setAnswer] = useState(0);
// const [audioFile, setAudioFile] = useState("");
// const [lastQuestion, setLastQuestion] = useState({
//   word: "",
//   pinyin: "",
//   translation: "",
// });

// let toneText = "";

// useEffect(() => {
//   console.log("changed word index");
// }, currentWordIndex);

// const getRandomIndex = Math.floor(Math.random() * props.wordList.length);

// if (!wordList[0]) {
//   let audio = new Audio(audioFile);
// }

// const playAudio = (audio) => {
//   audio.play();
// };

// useEffect(() => {
//   if (!wordList[0]) {
//     audio = new Audio(audioFile);
//     setWordList(props.wordList);
//     audio.play();
//   }
// });

// useEffect(() => {
//   setCurrentWordIndex(getRandomIndex);
//   audio = new Audio(audioFile);
// }, [wordList]);

// useEffect(() => {
//   if (wordList[0] & currentWordIndex)
//     setAudioFile(wordList[currentWordIndex].femaleAudio);
// }, [currentWordIndex]);
