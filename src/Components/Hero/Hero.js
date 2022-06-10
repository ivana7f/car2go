import React from "react";
import classes from "./Hero.module.scss";
import car from "../../img/car.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__text}>
        <h1 className={classes.h1}>Easy and fast way to rent your car</h1>
        <p className={classes.hero__text__content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.
        </p>
        <Link to="/cars" className={classes.btn}>
          Rent a Car
        </Link>
      </div>
      <div className={classes.color}>
        <img src={car} className={classes.img} />
      </div>
    </section>
  );
}

export default Hero;
