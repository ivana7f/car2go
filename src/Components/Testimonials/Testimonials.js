import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Testimonial/Testimonial";
import classes from "./Testimonials.module.scss";
import { SamplePrevArrow, SampleNextArrow } from "./CustomArrows/CustomArrows";
import AddTestimonial from "./AddTestimonial/AddTestimonial";
import AuthContext from "../../store/auth-context";
import ValuesContext from "../../store/values-context";

const DUMMY_DATA = [
  {
    id: 1,
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    id: 2,
    rating: 5,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    rating: 1,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    rating: 3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
};

function Testimonials() {
  const [openAddTestimonial, setOpenAddTestimonial] = useState(false);
  const [testimonialAdded, setTestimonialAdded] = useState(false);
  const authCtx = useContext(AuthContext);
  const valuesCtx = useContext(ValuesContext);

  useEffect(() => {
    valuesCtx.calculateRating(DUMMY_DATA);
  }, [valuesCtx]);

  function onSubmitTestimonial() {
    setTestimonialAdded(true);
  }

  return (
    <section className={classes.testimonials}>
      <div className={classes.container}>
        <h2 className={classes.headingTestimonial}>Testimonials</h2>
        <div className={classes.slider}>
          <Slider {...settings}>
            {DUMMY_DATA.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            ))}
          </Slider>
        </div>
      </div>
      {authCtx.isLoggedIn && !openAddTestimonial && (
        <button
          className={classes.btnAdd}
          onClick={() => setOpenAddTestimonial(true)}
        >
          Add testimonial
        </button>
      )}
      {openAddTestimonial && !testimonialAdded && (
        <AddTestimonial onSubmitTestimonial={onSubmitTestimonial} />
      )}
      {testimonialAdded && (
        <div className={classes.added}>Testimonial successfully added!</div>
      )}
    </section>
  );
}

export default Testimonials;
