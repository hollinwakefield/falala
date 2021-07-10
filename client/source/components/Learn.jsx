import React, { useState, useEffect } from "react";

const Learn = (props) => {
  const [voice, setVoice] = useState("female");
  const [speed, setSpeed] = useState("normal");

  const femaleAudio = {
    ma1: "https://putonghua.s3.amazonaws.com/Female-D-1.0/146-%E5%A6%88-1.0-CN-Female-D-.mp3",
    ma2: "https://putonghua.s3.amazonaws.com/learn/317-%E9%BA%BB-1.0-CN-Female-D-.mp3",
    ma3: "https://putonghua.s3.amazonaws.com/Female-D-1.0/147-%E9%A9%AC-1.0-CN-Female-D-.mp3",
    ma4: "https://putonghua.s3.amazonaws.com/learn/318-%E9%AA%82-1.0-CN-Female-D-.mp3",
    ma5: "https://putonghua.s3.amazonaws.com/Female-D-1.0/148-%E5%90%97-1.0-CN-Female-D-.mp3",
  };

  const femaleSlowAudio = {
    ma1: "https://putonghua.s3.amazonaws.com/Female-D-0.7/146-%E5%A6%88-0.7-CN-Female-D-.mp3",
    ma2: "https://putonghua.s3.amazonaws.com/learn/317-%E9%BA%BB-0.7-CN-Female-D-.mp3",
    ma3: "https://putonghua.s3.amazonaws.com/Female-D-0.7/147-%E9%A9%AC-0.7-CN-Female-D-.mp3",
    ma4: "https://putonghua.s3.amazonaws.com/learn/318-%E9%AA%82-0.7-CN-Female-D-.mp3",
    ma5: "https://putonghua.s3.amazonaws.com/Female-D-0.7/148-%E5%90%97-0.7-CN-Female-D-.mp3",
  };

  const maleAudio = {
    ma1: "https://putonghua.s3.amazonaws.com/Male-C-1.0/146-%E5%A6%88-1.0-CN-Male-C-.mp3",
    ma2: "https://putonghua.s3.amazonaws.com/learn/317-%E9%BA%BB-1.0-CN-Male-C-.mp3",
    ma3: "https://putonghua.s3.amazonaws.com/Male-C-1.0/147-%E9%A9%AC-1.0-CN-Male-C-.mp3",
    ma4: "https://putonghua.s3.amazonaws.com/learn/318-%E9%AA%82-1.0-CN-Male-C-.mp3",
    ma5: "https://putonghua.s3.amazonaws.com/Male-C-1.0/148-%E5%90%97-1.0-CN-Male-C-.mp3",
  };

  const maleSlowAudio = {
    ma1: "https://putonghua.s3.amazonaws.com/Male-C-0.7/146-%E5%A6%88-0.7-CN-Male-C-.mp3",
    ma2: "https://putonghua.s3.amazonaws.com/learn/317-%E9%BA%BB-0.7-CN-Male-C-.mp3",
    ma3: "https://putonghua.s3.amazonaws.com/Male-C-0.7/147-%E9%A9%AC-0.7-CN-Male-C-.mp3",
    ma4: "https://putonghua.s3.amazonaws.com/learn/318-%E9%AA%82-0.7-CN-Male-C-.mp3",
    ma5: "https://putonghua.s3.amazonaws.com/Male-C-0.7/148-%E5%90%97-0.7-CN-Male-C-.mp3",
  };

  // const getAudio = (voice, speed) => {
  //   if (voice === "female" && speed === "normal")
  // }

  const maAudio1 = new Audio(femaleAudio.ma1);

  const playAudio1 = () => {
    maAudio1.play();
  };

  const maAudio2 = new Audio(femaleAudio.ma2);

  const playAudio2 = () => {
    maAudio2.play();
  };

  const maAudio3 = new Audio(femaleAudio.ma3);

  const playAudio3 = () => {
    maAudio3.play();
  };

  const maAudio4 = new Audio(femaleAudio.ma4);

  const playAudio4 = () => {
    maAudio4.play();
  };

  const maAudio5 = new Audio(femaleAudio.ma5);

  const playAudio5 = () => {
    maAudio5.play();
  };

  return (
    <div className="learn">
      <h3>Tone Examples</h3>
      <div className="tone-examples">
        <div className="first-tone">
          <p>First Tone</p>
          <br></br>
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={playAudio1}
          ></img>
          <br></br>
          <p className="hanzi">妈</p>
          <br></br>
          mā
          <br></br>
          mom
        </div>
        <div className="second-tone">
          <p>Second Tone</p>
          <br></br>
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={playAudio2}
          ></img>
          <br></br>
          <p className="hanzi">麻</p>
          <br></br>
          má
          <br></br>
          numb / hemp
        </div>
        <div className="third-tone">
          <p>Third Tone</p>
          <br></br>
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={playAudio3}
          ></img>
          <br></br>
          <p className="hanzi">马</p>
          <br></br>
          mǎ
          <br></br>
          horse
        </div>
        <div className="fourth-tone">
          <p>Fourth Tone</p>
          <br></br>
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={playAudio4}
          ></img>
          <br></br>
          <p className="hanzi">骂</p>
          <br></br>
          mà
          <br></br>
          scold / curse / abuse
        </div>
        <div className="neutral-tone">
          <p>Neutral Tone</p>
          <br></br>
          <img
            src="./audio-icon.png"
            className="audio-icon"
            onClick={playAudio5}
          ></img>
          <br></br>
          <p className="hanzi">吗</p>
          <br></br>
          ma
          <br></br>
          ...is that right? / ...is it?
        </div>
      </div>
      <h3>Tone Charts</h3>
      <div className="tone-charts"></div>
      <img
        className="tone-chart"
        src={"https://putonghua.s3.amazonaws.com/tone-chart-1.png"}
      ></img>
      <p>
        Source:{" "}
        <a
          target="_blank"
          href="https://resources.allsetlearning.com/chinese/pronunciation/Pronunciation_diagrams"
        >
          AllSet Learning
        </a>
      </p>
      <h3>Tone Sandhi</h3>
      <img
        className="tone-chart"
        src={"https://putonghua.s3.amazonaws.com/tone-chart-2.png"}
      ></img>
      <p>
        Source:{" "}
        <a
          target="_blank"
          href="
        https://resources.allsetlearning.com/chinese/pronunciation/Pronunciation_diagrams"
        >
          AllSet Learning
        </a>
      </p>
      <p>
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Standard_Chinese_phonology#Tone_sandhi"
        >
          Wikipedia
        </a>{" "}
        has great information on tone sandhi in Chinese
      </p>
    </div>
  );
};

export default Learn;
