import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [displayTime, setDisplayTime] = useState(seconds);

  useEffect(() => {
    let interval = null;
    if (seconds > 10) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
        setDisplayTime(seconds);
        props.onChange(seconds);
      }, 1000);
    } else {
      interval = setInterval(() => {
        setSeconds((seconds) => (seconds - 0.01).toFixed(2));
        setDisplayTime(seconds);
        props.onChange(seconds);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const countdown = () => {
    console.log(timer);
    setTimer(timer - 1);
    return timer;
  };

  return (
    <div className="timer-div">
      <span className="timer">{seconds}s</span>
    </div>
  );
};

export default Timer;
