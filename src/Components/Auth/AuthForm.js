import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.scss";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function AuthForm() {
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();

  function loginHandler(loginData) {
    console.log(loginData);
    fetch("https://rentacar-fastapi-deploy.herokuapp.com/users/token", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Authentication failed!");
        }
        return res.json();
      })
      .then((data) => {
        // authCtx.login(data.idToken);
        // console.log(data);
        // setError(null);
        // history.replace("/");
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  function signupHandler(signupData) {
    console.log(signupData);

    fetch("https://rentacar-fastapi-deploy.herokuapp.com/users/create", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(signupData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("Could not send data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setError(false);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }

  return (
    <section className={classes.auth}>
      <div className={classes.authForm}>
        {isLogin && <Login onSubmit={loginHandler} />}
        {!isLogin && <Signup onSubmit={signupHandler} />}
        <button
          type="button"
          className={classes.toggleBtn}
          onClick={() => {
            setIsLogin((prevState) => !prevState);
          }}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
        {error && <p className={classes.error}>Failed!</p>}
      </div>
    </section>
  );
}

export default AuthForm;
