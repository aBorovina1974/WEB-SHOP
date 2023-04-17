import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.scss";
import { UserContext } from "../../../contexts/user/UserContextProvider";

const mainNavigationItems = [
  { url: "/", title: "HOME" },
  { url: "/catalog", title: "CATALOG" },
  { url: "/sale", title: "SALE" },
  { url: "/contact", title: "CONTACT US" },
  { url: "/dashboard", title: "MY DASHBOARD" },
];

const MainNavigation = () => {
  const { user } = useContext(UserContext);
  return (
    <ul className={styles.list}>
      {mainNavigationItems.map((item) =>
        item.url === "/dashboard" ? (
          user.email.length > 0 ? (
            <li key={item.title}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ) : null
        ) : (
          <li key={item.title}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default MainNavigation;
