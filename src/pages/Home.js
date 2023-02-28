import React from "react";
import MainImage from "../components/MainImage/MainImage";
import Paging from "../components/Paging/Paging";
import Brands from "../components/Brands/Brands";
import Offers from "../components/Offers/Offers";
const HomePage = () => {
  return (
    <>
      <div>
        <MainImage />
        <Paging />
      </div>
      <Brands />
      <Offers />
    </>
  );
};

export default HomePage;
