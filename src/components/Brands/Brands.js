import React from "react";
import styles from "./Brands.module.css";
import BrandItem from "./BrandItem/BrandItem";
import armaniLogo from "../../assets/brands/Armani.svg";
import burberryLogo from "../../assets/brands/Burberry.svg";
import chanelLogo from "../../assets/brands/Chanel.svg";
import diorLogo from "../../assets/brands/Dior.svg";
import fendiLogo from "../../assets/brands/Fendi.svg";
import gucciLogo from "../../assets/brands/Gucci.svg";
import versaceLogo from "../../assets/brands/Versace.svg";

const Brands = () => {
  const brandsLogos = [
    armaniLogo,
    burberryLogo,
    chanelLogo,
    diorLogo,
    fendiLogo,
    gucciLogo,
    versaceLogo,
  ];
  return (
    <section className={styles.section}>
      <fieldset className={styles.fieldset}>
        <legend>CHOSE YOUR BRAND</legend>
        <ul className={styles.brands}>
          {brandsLogos.map((item) => (
            <li>
              <BrandItem logo={item} />
            </li>
          ))}
        </ul>
      </fieldset>
    </section>
  );
};

export default Brands;
