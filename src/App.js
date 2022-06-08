import React from "react";
import AvailableModels from "./Components/AvailableModels/AvailableModels";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import SearchBox from "./Components/SearchBox/SearchBox";
import WhyChoose from "./Components/WhyChoose/WhyChoose";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SearchBox />
      <AvailableModels />
      <HowItWorks />
      <WhyChoose />
    </div>
  );
}

export default App;
