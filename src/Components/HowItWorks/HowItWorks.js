import React from "react";
import classes from "./HowItWorks.module.scss";

function HowItWorks() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <span className={classes.subheading}>How it works </span>
        <h2>Make 4 simple steps to rent a car!</h2>
        <div className={classes.steps}>
          <div className={classes.step}>
            <span className={classes.number}>1</span>

            <h3>Pick A Date</h3>
            <p>loksfjsajkf djaijfaj jdoiajifja jdi</p>
          </div>
          <div className={classes.step}>
            <span className={classes.number}>2</span>

            <h3>Choose A Car</h3>
            <p>loksfjsajkf djaijfaj jdoiajifja jdioajdi</p>
          </div>
          <div className={classes.step}>
            <span className={classes.number}>3</span>

            <h3>Make A Booking</h3>
            <p>loksfjsajkf djaijfaj jdoiajifja jdioajdi</p>
          </div>
          <div className={classes.step}>
            <span className={classes.number}>4</span>

            <h3>Enjoy Your Ride</h3>
            <p>loksfjsajkf djaijfaj jdoiajifja jdioajdi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
