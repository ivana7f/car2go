import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.scss";

function AuthForm() {
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailisValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const [error, setError] = useState(null);

  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();

    //input validation
    if (!enteredEmail.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
      setEmailisValid(false);
    }

    if (enteredPassword.length <= 6) {
      setPasswordIsValid(false);
      return;
    }

    // sending fetch requests based on logged state
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAJtOujqCjd22SfQqcW4YJvzn0v5MCT4k";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAJtOujqCjd22SfQqcW4YJvzn0v5MCT4k";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Authentication failed!");
        }
        return res.json();
      })
      .then((data) => {
        authCtx.login(data.idToken);
        console.log(data);
        setError(null);
        history.replace("/");
      })
      .catch((err) => setError(err.message));
  }

  return (
    <section className={classes.auth}>
      <div className={classes.authForm}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              required
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
            {!emailIsValid && (
              <p className={classes.invalidInput}>Email is not valid!</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password:</label>
            <input
              type="password"
              id="password"
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
            <button className={classes.actionBtn}>
              {isLogin ? "Login" : "Create Account"}
            </button>
            <button
              type="button"
              className={classes.toggleBtn}
              onClick={() => {
                setIsLogin((prevState) => !prevState);
              }}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
