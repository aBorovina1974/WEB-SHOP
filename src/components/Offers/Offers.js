import React from "react";
import OfferItem from "./Offer/OfferItem";
import styles from "./Offers.module.scss";
import chooseLookImg from "../../assets/ChooseLook.png";
import newStyleImg from "../../assets/NewStyle.png";
import discountImg from "../../assets/Discount.png";

const Offers = () => {
  return (
    <section className={styles.section}>
      <OfferItem
        content={{
          type: "small",
          image: chooseLookImg,
          backgroundColor: "#f3f0ef",
          title: "CHOOSE YOUR LOOK",
          subtitle: "See our clothing collections",
          action: "SEE OFFERS",
          imgSide: "left",
        }}
      />

      <OfferItem
        content={{
          type: "big",
          image: discountImg,
          backgroundColor: "#DFDCD2",
          title: "UP TO 40% OF",
          subtitle: "Special offers and great deals",
          action: "SHOP NOW",
          imgSide: "right",
        }}
      />

      <OfferItem
        content={{
          type: "small",
          image: newStyleImg,
          backgroundColor: "#f5ded3",
          title: "BRAND NEW STYLE",
          subtitle: "Popular clothing brands",
          action: "SEE OFFERS",
          imgSide: "right",
        }}
      />
    </section>
  );
};

export default Offers;
