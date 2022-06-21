import React from "react";
import { useState } from "react";
import classes from "../Login/Login.module.scss";

function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);

  const [lastName, setLastName] = useState("");
  const [lastNameIsValid, setLastNameIsValid] = useState(true);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(true);

  const [birthYear, setBirthYear] = useState("");
  const [birthYearIsValid, setBirthYearIsValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const [error, setError] = useState(null);

  function submitHandler(e) {
    e.preventDefault();

    //input validation
    if (firstName.trim().length < 1) {
      console.log("1");
      setFirstNameIsValid(false);
    }
    if (lastName.trim().length < 1) {
      console.log("2");
      setLastNameIsValid(false);
    }
    if (phoneNumber.trim().length < 9) {
      console.log("3");
      setPhoneNumberIsValid(false);
    }
    if (new Date().getFullYear() - birthYear < 18 || birthYear < 1950) {
      console.log("4");
      setBirthYearIsValid(false);
    }
    if (enteredPassword.length < 6) {
      console.log(birthYear);
      setPasswordIsValid(false);
    }

    const signupData = {
      first_name: firstName,
      last_name: lastName,
      year_born: birthYear,
      phone_number: phoneNumber,
    };

    console.log(signupData);

    props.onSubmit(signupData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          required
          onChange={(event) => setFirstName(event.target.value)}
        />
        {!firstNameIsValid && (
          <p className={classes.invalidInput}>First Name nust not be empty!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          required
          onChange={(event) => setLastName(event.target.value)}
        />
        {!lastNameIsValid && (
          <p className={classes.invalidInput}>Last Name nust not be empty!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          required
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        {!phoneNumberIsValid && (
          <p className={classes.invalidInput}>
            Phone number must contain at least 9 characters!
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="birthYear">Birth Year</label>
        <input
          type="number"
          id="birthYear"
          required
          onChange={(event) => setBirthYear(Number(event.target.value))}
        />
        {!birthYearIsValid && (
          <p className={classes.invalidInput}>
            You have to be between 18 and 72 years old to rent a car!
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
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
        <button className={classes.actionBtn}>Sign up</button>
      </div>
      {error && <p className={classes.error}>{error}</p>}
    </form>
  );
}

export default Signup;
