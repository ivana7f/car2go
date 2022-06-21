import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.scss";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function AuthForm() {
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);

  const history = useHistory();

  function loginHandler(loginData) {
    console.log(loginData);
    //   // sending fetch requests based on logged state
    //   let url;
    //   if (isLogin) {
    //     url =
    //       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAJtOujqCjd22SfQqcW4YJvzn0v5MCT4k";
    //   } else {
    //     url =
    //       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAJtOujqCjd22SfQqcW4YJvzn0v5MCT4k";
    //   }
    //   fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: enteredEmail,
    //       password: enteredPassword,
    //       returnSecureToken: true,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => {
    //       if (!res.ok) {
    //         throw Error("Authentication failed!");
    //       }
    //       return res.json();
    //     })
    //     .then((data) => {
    //       authCtx.login(data.idToken);
    //       console.log(data);
    //       setError(null);
    //       history.replace("/");
    //     })
    //     .catch((err) => setError(err.message));
  }

  function signupHandler(signupData) {
    console.log(signupData);

    //fetch data to server
  }

  return (
    <section className={classes.auth}>
      <div className={classes.authForm}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
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
      </div>
    </section>
  );
}

export default AuthForm;
