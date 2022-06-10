import React from "react";

import classes from "./Testimonial.module.scss";

function Testimonial(props) {
  return (
    <div>
      <p className={classes.rating}>{props.rating}</p>
      <p className={classes.text}>{props.text}</p>
    </div>
  );
}

export default Testimonial;
