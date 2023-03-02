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
    { logo: armaniLogo, id: 1 },
    { logo: burberryLogo, id: 2 },
    { logo: chanelLogo, id: 3 },
    { logo: diorLogo, id: 4 },
    { logo: fendiLogo, id: 5 },
    { logo: gucciLogo, id: 6 },
    { logo: versaceLogo, id: 7 },
  ];
  return (
    <section className={styles.section}>
      <fieldset className={styles.fieldset}>
        <legend>CHOSE YOUR BRAND</legend>
        <ul className={styles.brands}>
          {brandsLogos.map((item) => (
            <li key={item.id}>
              <BrandItem logo={item.logo} />
            </li>
          ))}
        </ul>
      </fieldset>
    </section>
  );
};

export default Brands;
