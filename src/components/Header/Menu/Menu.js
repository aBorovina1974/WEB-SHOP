import React from "react";
import styles from "./Menu.module.scss";
import RightArrowIcon from "../../UI/icons/RightArrowIcon";
import Search from "../../Search/Search";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const menuItems = [
    { url: "/", title: "HOME" },
    { url: "/catalog", title: "CATALOG" },
    { url: "/sale", title: "SALE" },
    { url: "/contact", title: "CONTACT US" },
    { url: "/dashboard", title: "MY DASHBOARD" },
    { url: "#", title: "SIGN IN" },
    { url: "new", title: "SIGN UP" },
  ];

  const closeHandler = () => {
    props.onClose();
  };

  return (
    <div ref={props.menuRef} className={styles.menu}>
      <div className={styles.search}>
        <Search placeholder="Type something..." />
      </div>
      <ul className={styles.items}>
        {menuItems.map((item) => (
          <li key={item.title}>
            <Link to={item.url} onClick={closeHandler}>
              {item.title}
            </Link>
            <RightArrowIcon />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
