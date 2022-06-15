import React, { useState } from "react";

// creating context
const RatingContext = React.createContext({});

// creating context provider
export function RatingContextProvider(props) {
  const [rating, setRating] = useState(null);

  const calculateRating = (testimonials) => {
    let sumRating = 0;
    testimonials.forEach((testimonial) => (sumRating += testimonial.rating));
    setRating(sumRating / testimonials.length);
  };

  const contextValue = {
    rating,
    calculateRating,
  };

  return (
    <RatingContext.Provider value={contextValue}>
      {props.children}
    </RatingContext.Provider>
  );
}

export default RatingContext;
