import React from "react";
import mainImg from "../assets/mainImg.png";
import MainImage from "../components/MainImage/MainImage";
import Paging from "../components/Paging/Paging";
const HomePage = () => {
  return (
    <>
      <MainImage>
        <Paging />
      </MainImage>
    </>
  );
};

export default HomePage;
