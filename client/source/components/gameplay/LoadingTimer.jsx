import React, { useState, useEffect } from "react";

const LoadingTimer = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [displayTime, setDisplayTime] = useState(seconds);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
      setDisplayTime(seconds);
      props.onChange(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  

  const countdown = () => {
    // console.log(timer);
    setTimer(timer - 1);
    return timer;
  };

  return (
    <div className="timer-div">
      <span className="timer">{seconds}s</span>
    </div>
  );
};

export default LoadingTimer;
