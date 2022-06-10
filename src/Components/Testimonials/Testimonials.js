import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Testimonial/Testimonial";
import classes from "./Testimonials.module.scss";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

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
    rating: 1,
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

function SamplePrevArrow(props) {
  let { className, onClick } = props;
  return <GrFormPrevious className={className} onClick={onClick} />;
}

function SampleNextArrow(props) {
  let { className, onClick } = props;
  return <GrFormNext className={className} onClick={onClick} />;
}

function Testimonials() {
  return (
    <section className={classes.testimonials}>
      <div className={classes.container}>
        <h2>Testimonials</h2>
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
    </section>
  );
}

export default Testimonials;
