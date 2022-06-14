import React from "react";
import { Link } from "react-router-dom";
import classes from "./CarsList.module.scss";

function CarsList(props) {
  return (
    <section>
      <ul>
        {props.cars.map((car, index) => (
          <li key={index}>
            {car.name.common}
            <Link to={`/cars/${car.name.common}`}>details</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CarsList;
