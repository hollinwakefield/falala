import React, { useState, useEffect } from "react";

const Learn = (props) => {
  const maAudio1 = new Audio(
    "https://putonghua.s3.amazonaws.com/Male-B-1.0/146-%E5%A6%88-1.0-CN-Male-B-.mp3"
  );

  const playAudio1 = () => {
    maAudio1.play();
  };

  const maAudio2 = new Audio(
    "https://putonghua.s3.amazonaws.com/Male-B-1.0/317-%E9%BA%BB-1.0-CN-Male-B-.mp3"
  );

  const playAudio2 = () => {
    maAudio2.play();
  };

  const maAudio3 = new Audio(
    "https://putonghua.s3.amazonaws.com/Male-B-1.0/147-%E9%A9%AC-1.0-CN-Male-B-.mp3"
  );

  const playAudio3 = () => {
    maAudio3.play();
  };

  const maAudio4 = new Audio(
    "https://putonghua.s3.amazonaws.com/Male-B-1.0/318-%E9%AA%82-1.0-CN-Male-B-.mp3"
  );

  const playAudio4 = () => {
    maAudio4.play();
  };

  const maAudioN = new Audio(
    "https://putonghua.s3.amazonaws.com/Male-B-1.0/148-%E5%90%97-1.0-CN-Male-B-.mp3"
  );

  const playAudioN = () => {
    maAudioN.play();
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
            onClick={playAudioN}
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
        Source:
        https://resources.allsetlearning.com/chinese/pronunciation/Pronunciation_diagrams
      </p>
      <h3>Tone Sandhi</h3>
      <img
        className="tone-chart"
        src={"https://putonghua.s3.amazonaws.com/tone-chart-2.png"}
      ></img>
      <p>
        Source:
        https://resources.allsetlearning.com/chinese/pronunciation/Pronunciation_diagrams
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
