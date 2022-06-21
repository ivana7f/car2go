import React from "react";
import { useState } from "react";
import classes from "./Login.module.scss";

function Login(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [UsernameIsValid, setUsernameisValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const [error, setError] = useState(null);

  function submitHandler(e) {
    e.preventDefault();

    //input validation
    if (enteredUsername.trim().length < 1) {
      setUsernameisValid(false);
    }

    if (enteredPassword.length <= 6) {
      setPasswordIsValid(false);
      return;
    }

    const loginData = {
      username: enteredUsername,
      password: enteredPassword,
    };

    props.onSubmit(loginData);
    setEnteredUsername("");
    setEnteredPassword("");
    setUsernameisValid(true);
    setPasswordIsValid(true);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          required
          onChange={(event) => setEnteredUsername(event.target.value)}
        />
        {!UsernameIsValid && (
          <p className={classes.invalidInput}>Username nust not be empty!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          required
          onChange={(event) => setEnteredPassword(event.target.value)}
        />
        {!passwordIsValid && (
          <p className={classes.invalidInput}>
            Password must contain at least 6 characters!
          </p>
        )}
      </div>
      <div className={classes.actions}>
        <button className={classes.actionBtn}>Login</button>
      </div>
      {error && <p className={classes.error}>{error}</p>}
    </form>
  );
}

export default Login;
