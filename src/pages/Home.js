import React from "react";
import MainImage from "../components/MainImage/MainImage";
import Brands from "../components/Brands/Brands";
import Offers from "../components/Offers/Offers";
import Blog from "../components/Blog/Blog";
import Slider from "../components/Slider/Slider";
const HomePage = () => {
  return (
    <>
      <MainImage />
      <Slider />
      <Brands />
      <Offers />
      <Blog />
    </>
  );
};

export default HomePage;
