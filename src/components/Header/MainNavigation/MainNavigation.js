import React from "react";
import styles from "./MainNavigation.module.css";

const mainNavigationItems = [
  { url: "#", title: "HOME" },
  { url: "#", title: "CATALOG" },
  { url: "#", title: "SALE" },
  { url: "#", title: "CONTACT US" },
  { url: "#", title: "MY DASHBOARD" },
];

const MainNavigation = () => {
  return (
    <ul className={styles.list}>
      {mainNavigationItems.map((item) => (
        <li key={item.title}>
          <a href="#">{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default MainNavigation;
