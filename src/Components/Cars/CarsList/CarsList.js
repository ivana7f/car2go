import React from "react";
import { Link } from "react-router-dom";
import classes from "./CarsList.module.scss";
import car1 from "../../../img/car.png";
import { GiCarSeat } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";
import { IoSnow } from "react-icons/io5";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { BsGear } from "react-icons/bs";
import { FaSuitcaseRolling } from "react-icons/fa";

function CarsList(props) {
  return (
    <section className={classes.container}>
      <ul>
        {props.cars.map((car) => (
          <li key={car.id} className={classes.card}>
            <div className={classes.cardItem}>
              <img src={car1} />
            </div>
            <div className={classes.cardItem}>
              <h3>{car.name}</h3>
              <div className={classes.carDetails}>
                <p>
                  <GiCarSeat /> {car.seats} seats
                </p>
                <p>
                  <GiCarDoor /> {car.doors} doors
                </p>
                {car.airCond && (
                  <p>
                    <IoSnow /> A/C
                  </p>
                )}
                <p>
                  <MdOutlineLocalGasStation /> {car.fuel}
                </p>
                <p>
                  <BsGear /> {car.transmission}
                </p>
                <p>
                  <FaSuitcaseRolling /> {car.bags} bags
                </p>
              </div>
            </div>
            <div className={`${classes.cardItem} ${classes.priceBox}`}>
              <div>
                <p className={classes.price}>{car.price}$</p>
                <p>per day</p>
              </div>
              <Link to={`/cars/${car.id}`} className={classes.btn}>
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
