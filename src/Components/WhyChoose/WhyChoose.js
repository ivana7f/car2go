import React from "react";
import classes from "./WhyChoose.module.scss";

function WhyChoose() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Why Choose Rental?</h2>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <h3>Many Pickup Locations</h3>
            <p>loksfjsajkf djaijfajnnfa fjoiefe hfh fieijfe jdoiajifja jdi</p>
          </div>
          <div className={classes.box}>
            <h3>Fast And Easy Booking</h3>
            <p>
              loksfjsajkf djaijfafje j dj fjeijfmef fjiednw diwd jdoiajifja jdi
            </p>
          </div>
          <div className={classes.box}>
            <h3>Satisfied Customers</h3>
            <p>
              loksfjsajkf djaijfajfoe jfoej jfojfeifjeijfie jfie jdoiajifja jdi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
