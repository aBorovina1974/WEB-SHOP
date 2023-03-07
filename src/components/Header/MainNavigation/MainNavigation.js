import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.scss";

const mainNavigationItems = [
  { url: "/", title: "HOME" },
  { url: "/catalog", title: "CATALOG" },
  { url: "/sale", title: "SALE" },
  { url: "/contact", title: "CONTACT US" },
  { url: "/dashboard", title: "MY DASHBOARD" },
];

const MainNavigation = () => {
  return (
    <ul className={styles.list}>
      {mainNavigationItems.map((item) => (
        <li key={item.title}>
          <Link to={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNavigation;
