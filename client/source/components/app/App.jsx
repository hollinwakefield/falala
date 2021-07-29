import React, { useState, useEffect, lazy, Suspense } from "react";
import GameController from "../gameplay/GameController.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import fire from "../../firebase.js";

const LearnComponent = lazy(() => import("../learn/Learn.jsx"));
const LoginComponent = lazy(() => import("./Login.jsx"));
const SignUpComponent = lazy(() => import("./SignUp.jsx"));

const renderLoader = () => <p>Loading</p>;

const App = (props) => {
  const [view, setView] = useState("play");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

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
  } else if (view === "login") {
    return (
      <div className="body">
        <Header view={view} updateView={setView} />
        <div className="app">
          <Suspense fallback={renderLoader()}>
            <LoginComponent
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          </Suspense>
        </div>
      </div>
    );
  } else if (view === "signup") {
    return (
      <div className="body">
        <Header view={view} updateView={setView} />
        <div className="app">
          <Suspense fallback={renderLoader()}>
            <SignUpComponent />
          </Suspense>
        </div>
      </div>
    );
  }
};

export default App;
