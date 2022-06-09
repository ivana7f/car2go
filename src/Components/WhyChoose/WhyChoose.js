import React from "react";
import classes from "./WhyChoose.module.scss";
import { IoLocationOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { IoHappyOutline } from "react-icons/io5";

function WhyChoose() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Why Choose Rental?</h2>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <IoLocationOutline size="5.5rem" />
            <h3>Many Pickup Locations</h3>
            <p>loksfjsajkf djaijfajnnfa fjoiefe hfh fieijfe jdoiajifja jdi</p>
          </div>
          <div className={classes.box}>
            <IoRocketOutline size="5.5rem" color="#1f5c90" />
            <h3>Fast And Easy Booking</h3>
            <p>
              loksfjsajkf djaijfafje j dj fjeijfmef fjiednw diwd jdoiajifja jdi
            </p>
          </div>
          <div className={classes.box}>
            <IoHappyOutline size="5.5rem" />
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
