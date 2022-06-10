import React, { useState } from "react";
import classes from "./AddTestimonial.module.scss";
import StarRating from "./StarRating/StarRating";

function AddTestimonial() {
  return (
    <div className={classes.addTestimonial}>
      <StarRating />
      <form>
        <textarea
          placeholder="Enter your feedback"
          rows={10}
          cols={40}
          maxLength={100}
          className={classes.textarea}
        ></textarea>
        <button type="submit" className={classes.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTestimonial;
