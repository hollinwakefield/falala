import React, { useState, useEffect, lazy, Suspense } from "react";
import GameController from "../gameplay/GameController.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const LearnComponent = lazy(() => import("../learn/Learn.jsx"));

const renderLoader = () => <p>Loading</p>;

const App = (props) => {
  const [view, setView] = useState("play");

  if (view === "play") {
    return (
      <>
        <div className="body">
          <Header view={view} updateView={setView} />
          <div className="app">
            <GameController />
          </div>
        </div>
        <Footer />
      </>
    );
  } else if (view === "learn") {
    return (
      <div className="body">
        <Header view={view} updateView={setView} />
        <div className="app">
          <Suspense fallback={renderLoader()}>
            <LearnComponent className="learn" />
          </Suspense>
        </div>
      </div>
    );
  }
};

export default App;
