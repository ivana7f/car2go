import React from "react";
import classes from "./SearchBox.module.scss";

function SearchBox() {
  return (
    <div className={classes.box}>
      <form className={classes.form}>
        <label htmlFor="cars">Select car model</label>
        <select id="cars" name="cars" required>
          <option value="">Please select one option</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="volvo">Volvo</option>
          <option value="renault">Renault</option>
        </select>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
