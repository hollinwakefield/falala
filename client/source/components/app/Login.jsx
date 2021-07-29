import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <>
      <section className="login"></section>
      <div className="login-container">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="errorMessage">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="errorMessage">{passwordError}</p>
      </div>
      <div className="button-container">
        {hasAccount ? (
          <>
            <button onClick={handleLogin}>Login</button>
            <p>
              Don't have an account?{" "}
              <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
            </p>
          </>
        ) : (
          <>
            <button onClick={handleSignUp}>Sign up</button>
            <p>
              Already have an account?{" "}
              <span onClick={() => setHasAccount(!hasAccount)}>Login</span>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
