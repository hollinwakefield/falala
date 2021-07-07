import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import Gameplay from "./Gameplay.jsx";
import GameResults from "./GameResults.jsx";

const Game = (props) => {
  const [clicked, setClicked] = useState(false);

  if (clicked === true) {
    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <GameResults />;
      } else {
        // Render a countdown
        return (
          <>
            <span>
              {minutes}:{seconds}
            </span>
            <Gameplay />
          </>
        );
      }
    };
    return <Countdown date={Date.now() + 100000} renderer={renderer} />;
    // return (
    //   <>
    //     <div className="countdown">
    //       <Countdown date={Date.now() + 10000}>
    //         <Completionist />
    //       </Countdown>
    //     </div>
    //     <Gameplay />
    //   </>
    // );
  } else {
    return (
      <div className="game">
        <h5>HSK Characters</h5>
        <button onClick={(e) => setClicked(true)}>Start Game</button>
      </div>
    );
  }
};

export default Game;
