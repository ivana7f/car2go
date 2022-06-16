import React, { useContext, useState } from "react";
import RatingContext from "../../../store/values-context";
import classes from "./Search.module.scss";

function Search() {
  const Ctx = useContext(RatingContext);

  const [car, setCar] = useState(Ctx.carBrand);
  const [sort, setSort] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    console.log(car);
    console.log(sort);
    console.log(minValue);
    console.log(maxValue);
  }

  return (
    <section className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <select
          name="cars"
          className={classes.selectField}
          onChange={(e) => setCar(e.target.value)}
          defaultValue={car}
        >
          <option value="">Car brand</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="volvo">Volvo</option>
          <option value="renault">Renault</option>
        </select>
        <input
          type="number"
          min="1"
          placeholder="Lowest price ($)"
          className={classes.inputField}
          onChange={(e) => setMinValue(e.target.value)}
        />
        <input
          type="number"
          min="1"
          placeholder="Highest price ($)"
          className={classes.inputField}
          onChange={(e) => setMaxValue(e.target.value)}
        />
        <select
          name="sort"
          className={classes.selectField}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="lowest">Lowest price first</option>
          <option value="highest">Highest price first</option>
        </select>
        <button type="submit" className={classes.btn}>
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;
