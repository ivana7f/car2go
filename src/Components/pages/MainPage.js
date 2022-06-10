import React from "react";
import AvailableModels from "../AvailableModels/AvailableModels";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
import SearchBox from "../SearchBox/SearchBox";
import Testimonials from "../Testimonials/Testimonials";
import WhyChoose from "../WhyChoose/WhyChoose";

function MainPage() {
  return (
    <main>
      <Hero />
      <SearchBox />
      <AvailableModels />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
    </main>
  );
}

export default MainPage;
