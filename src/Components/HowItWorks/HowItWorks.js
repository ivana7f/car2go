import React from "react";
import classes from "./HowItWorks.module.scss";
import { CalendarOutline } from "react-ionicons";
import { CarSportOutline } from "react-ionicons";
import { BookOutline } from "react-ionicons";
import { CheckmarkDoneOutline } from "react-ionicons";

function HowItWorks() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <span className={classes.subheading}>How it works </span>
        <h2>Make 4 simple steps to rent a car!</h2>
        <div className={classes.steps}>
          <div className={classes.step}>
            <span className={classes.number}>1</span>
            <CalendarOutline color={"#297bc0"} height="45px" width="45px" />
            <h3>Pick A Date</h3>
            <p>loksfjsajkf djaijfaj jdoiajifja jdi</p>
          </div>
          <div className={classes.step}>
            <span className={classes.number}>2</span>
            <CarSportOutline color={"#297bc0"} height="45px" width="45px" />
            <h3>Choose A Car</h3>
            <p>loksfjsajkf djaijfaj jdoiajifja jdioajdi</p>
          </div>
          <div className={classes.step}>
            <span className={classes.number}>3</span>
            <BookOutline color={"#297bc0"} height="45px" width="45px" />
            <h3>Make A Booking</h3>
            <p>loksfjsajkf djaijfaj jdoiajifja jdioajdi</p>
          </div>
          <div className={classes.step}>
            <span className={classes.number}>4</span>
            <CheckmarkDoneOutline
              color={"#297bc0"}
              height="45px"
              width="45px"
            />
            <h3>Enjoy Your Ride</h3>
            <p>loksfjsajkf djaijfaj jdoiajifja jdioajdi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
