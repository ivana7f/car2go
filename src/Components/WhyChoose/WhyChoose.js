import React from "react";
import classes from "./WhyChoose.module.scss";

import { LocationOutline } from "react-ionicons";
import { RocketOutline } from "react-ionicons";
import { HappyOutline } from "react-ionicons";

function WhyChoose() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Why Choose Rental?</h2>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <LocationOutline color={"#00000"} height="70px" width="70px" />
            <h3>Many Pickup Locations</h3>
            <p>loksfjsajkf djaijfajnnfa fjoiefe hfh fieijfe jdoiajifja jdi</p>
          </div>
          <div className={classes.box}>
            <RocketOutline height="70px" width="70px" color={"#297bc0"} />
            <h3>Fast And Easy Booking</h3>
            <p>
              loksfjsajkf djaijfafje j dj fjeijfmef fjiednw diwd jdoiajifja jdi
            </p>
          </div>
          <div className={classes.box}>
            <HappyOutline color={"#00000"} height="70px" width="70px" />
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
