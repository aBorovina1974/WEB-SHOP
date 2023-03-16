import React from "react";
import MainImage from "../components/MainImage/MainImage";
import SliderNavigation from "../components/Slider/SliderNavigation/SliderNavigation";
import Brands from "../components/Brands/Brands";
import Offers from "../components/Offers/Offers";
import Blog from "../components/Blog/Blog";
import Slider from "../components/Slider/Slider";
const HomePage = () => {
  return (
    <>
      {/* <div> */}
      <MainImage />
      <Slider />
      {/* <SliderNavigation /> */}
      {/* </div> */}
      <Brands />
      <Offers />
      <Blog />
    </>
  );
};

export default HomePage;
