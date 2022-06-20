import React from "react";
import { Link } from "react-router-dom";
import classes from "./CarsList.module.scss";
import car1 from "../../../img/car.png";
import { GiCarSeat } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";
import { IoSnow } from "react-icons/io5";
import { FaGasPump } from "react-icons/fa";
import { BsGear } from "react-icons/bs";

function CarsList(props) {
  const cars = props.cars;

  return (
    <section className={classes.container}>
      <ul>
        {Object.keys(cars).map((key) => (
          <li key={key} className={classes.card}>
            <div className={classes.cardItem}>
              <img src={car1} />
            </div>
            <div className={classes.cardItem}>
              <h3>
                {cars[key].brand} {cars[key].model}
              </h3>
              <div className={classes.carDetails}>
                <p>
                  <GiCarSeat /> {cars[key].seats} seats
                </p>
                <p>
                  <GiCarDoor /> {cars[key].doors} doors
                </p>
                {cars[key].ac && (
                  <p>
                    <IoSnow /> A/C
                  </p>
                )}
                <p>
                  <FaGasPump /> {cars[key].fuel}
                </p>
                <p>
                  <BsGear /> {cars[key].gearbox}
                </p>
                {cars[key].abs && (
                  <p>
                    <IoSnow /> abs
                  </p>
                )}
                <p>
                  <BsGear /> {cars[key].year}
                </p>
              </div>
            </div>
            <div className={`${classes.cardItem} ${classes.priceBox}`}>
              <div>
                <p className={classes.price}>{cars[key].price}$</p>
                <p>per day</p>
              </div>
              <Link to={`/cars/${key}`} className={classes.btn}>
                Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CarsList;
