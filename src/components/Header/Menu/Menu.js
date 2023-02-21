import React from "react";
import styles from "./Menu.module.css";
import RightArrowIcon from "../../UI/icons/RightArrowIcon";
import Search from "../../Search/Search";

const Menu = (props) => {
  const menuItems = [
    { url: "#", title: "HOME" },
    { url: "#", title: "CATALOG" },
    { url: "#", title: "SALE" },
    { url: "#", title: "CONTACT US" },
    { url: "#", title: "MY DASHBOARD" },
    { url: "#", title: "SIGN IN" },
    { url: "#", title: "SIGN UP" },
  ];

  return (
    <div className={styles.menu}>
      <div className={styles.search}>
        <Search placeholder="Type something..." />
      </div>
      <ul className={styles.items}>
        {menuItems.map((item) => (
          <li key={item.title}>
            <a href={item.url}>{item.title}</a>
            <RightArrowIcon />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
