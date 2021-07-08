import React, { useState, useEffect } from "react";

const Gameplay = (props) => {
  const [word, setWord] = useState({});

  return (
    <div className="gameplay">
      <div className="choices">
        <div
          className="choice"
          onClick={() => console.log("You selected the neutral tone.")}
        >
          0
        </div>
        <div className="choice">
          1<br></br>¯
        </div>
        <div className="choice">
          2 <br></br>´ <br></br>
        </div>
        <div className="choice">
          3<br></br>ˇ<br></br>
        </div>
        <div className="choice">
          4<br></br>`<br></br>
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
