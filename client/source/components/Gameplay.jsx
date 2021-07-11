import React, { useState, useEffect } from "react";
import randomizeWords from "../helpers/randomizeWords.js";

const Gameplay = (props) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [questionStatus, setQuestionStatus] = useState("question");
  const [correctStatus, setCorrectStatus] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [audioFile, setAudioFile] = useState("");
  const [lastQuestion, setLastQuestion] = useState({
    word: "",
    pinyin: "",
    translation: "",
  });

  let toneText = "";

  // useEffect(() => {
  //   console.log("changed word index");
  // }, currentWordIndex);

  const getRandomIndex = Math.floor(Math.random() * props.wordList.length);
  let audio;

  // if (!wordList[0]) {
  //   let audio = new Audio(audioFile);
  // }

  const playAudio = () => {
    audio.play();
  };

  useEffect(() => {
    if (!wordList[0]) {
      audio = new Audio(audioFile);
      setWordList(props.wordList);
      audio.play();
    }
  });

  useEffect(() => {
    setCurrentWordIndex(getRandomIndex);
    audio = new Audio(audioFile);
  }, [wordList]);

  useEffect(() => {
    if (wordList[0] & currentWordIndex)
      setAudioFile(wordList[currentWordIndex].femaleAudio);
  }, [currentWordIndex]);

  const getToneText = (toneNumber) => {
    if (toneNumber === 1) {
      toneText = "1st tone";
    } else if (toneNumber === 2) {
      toneText = "2nd tone";
    } else if (toneNumber === 3) {
      toneText = "3rd tone";
    } else if (toneNumber === 4) {
      toneText = "4th tone";
    } else {
      toneText = "neutral tone";
    }
    return toneText;
  };

  const handleAnswer = (event, optionNumber) => {
    setAnswer(optionNumber);
    props.updateQuestionsAnswered();
    if (optionNumber === wordList[currentWordIndex].tone) {
      props.updateScore();
      props.updateQuestionsCorrect();
      setCorrectStatus(true);
    }
    props.updateAccuracy();
    setLastQuestion({
      word: wordList[currentWordIndex].simplifiedword,
      pinyin: wordList[currentWordIndex].pinyin,
      translation: wordList[currentWordIndex].translation,
    });
    props.getAccuracyBonus();
    props.getTotalScore();
    setQuestionStatus("answer");
  };

  const continueGame = (event) => {
    props.getAccuracyBonus();
    props.getTotalScore();
    setCurrentWordIndex(getRandomIndex);
    // setAudioFile(wordList[currentWordIndex].femaleAudio);
    setQuestionStatus("question");
    setCorrectStatus(false);
    audio.play();
  };

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
  } else if (correctStatus === true) {
    return (
      <div className="last-question">
        <div className="last-question-info">
          <h1>Correct!</h1>
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={playAudio}
          ></img>
          <br></br>
          <br></br>
          <h3>{lastQuestion.word}</h3>
          <br></br>
          <h3>{lastQuestion.pinyin}</h3>
          <br></br>
          <h3>English: {lastQuestion.translation}</h3>
        </div>
        <button className="button" onClick={() => continueGame(event)}>
          Continue
        </button>
      </div>
    );
  } else {
    return (
      <div className="last-question">
        <div className="last-question-info">
          <h1>Not quite, but good try!</h1>
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={playAudio}
          ></img>
          <br></br>
          <br></br>
          <h3>{lastQuestion.word}</h3>
          <br></br>
          <h3>{lastQuestion.pinyin}</h3>
          <br></br>
          <h3>English: {lastQuestion.translation}</h3>
          <h5>
            You selected the {getToneText(answer)} <br></br>but this sound is
            the {getToneText(wordList[currentWordIndex].firstSyllableTone)}{" "}
            tone.
          </h5>
        </div>
        <button className="button" onClick={() => continueGame(event)}>
          Continue
        </button>
      </div>
    );
  }
};

export default Gameplay;
