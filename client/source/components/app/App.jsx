import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import GameController from "../gameplay/GameController.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const LearnComponent = lazy(() => import("../learn/Learn.jsx"));

const renderLoader = () => <p>Loading</p>;

const App = (props) => {
  const [view, setView] = useState("play");
  //   <Router>
  //   <Suspense fallback={<div>Loading...</div>}>
  //     <Switch>
  //       <Route exact path="/" component={Home}/>
  //       <Route path="/about" component={About}/>
  //     </Switch>
  //   </Suspense>
  // </Router>

  if (view === "play") {
    return (
      <>
        <div className="body">
          <div className="header">
            <div className="header-left">
              <div className="logo">
                <h1 className="logo-latin" onClick={(e) => setView("play")}>
                  Putonghua
                </h1>
                <h2 className="logo-hanzi" onClick={(e) => setView("play")}>
                  普通话
                </h2>
              </div>
              <div className="header-item" onClick={(e) => setView("play")}>
                Play
              </div>
              <div className="header-item" onClick={(e) => setView("learn")}>
                Learn
              </div>
            </div>
            <div className="header-right">
              <img
                className="lantern"
                src="../../assets/lantern.png"
                alt="chinese-lantern"
              ></img>
            </div>
          </div>
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
        <div className="header">
          <div className="header-left">
            <div className="logo">
              <h1 className="logo-latin" onClick={(e) => setView("play")}>
                Putonghua
              </h1>
              <h2 className="logo-hanzi" onClick={(e) => setView("play")}>
                普通话
              </h2>
            </div>
            <div className="header-item" onClick={(e) => setView("play")}>
              Play
            </div>
            <div className="header-item" onClick={(e) => setView("learn")}>
              Learn
            </div>
          </div>
          <div className="header-right">
            <Footer />
          </div>
        </div>
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
