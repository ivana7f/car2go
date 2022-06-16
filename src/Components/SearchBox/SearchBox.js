import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ValuesContext from "../../store/values-context";
import classes from "./SearchBox.module.scss";

function SearchBox() {
  const valuesCtx = useContext(ValuesContext);
  const history = useHistory();

  function submitHandler(e) {
    e.preventDefault();

    history.push("/cars");
  }

  return (
    <div className={classes.box}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="cars">Select car brand</label>
        <select
          id="cars"
          name="cars"
          required
          onChange={(e) => valuesCtx.setCarBrand(e.target.value)}
        >
          <option value="">Please select one option</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="volvo">Volvo</option>
          <option value="renault">Renault</option>
          <option value="fiat">Fiat</option>
          <option value="opel">Opel</option>
        </select>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
