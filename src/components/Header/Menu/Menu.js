import React, { useContext } from "react";
import styles from "./Menu.module.scss";
import RightArrowIcon from "../../UI/icons/RightArrowIcon";
import Search from "../../Search/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/user/UserContextProvider";
import { removeUserCookie } from "../../../utils/auth";

const Menu = (props) => {
  const { user, signOut } = useContext(UserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, url: "/", title: "HOME" },
    { id: 2, url: "/catalog", title: "CATALOG" },
    // { id: 3, url: "/sale", title: "SALE" },
    { id: 4, url: "/contact", title: "CONTACT US" },
    // { id: 5, url: "/dashboard", title: "MY DASHBOARD" },
  ];

  const closeHandler = () => {
    props.onClose();
  };

  const handleSignOut = () => {
    removeUserCookie();
    signOut();
    navigate("/");
    closeHandler();
  };

  return (
    <>
      <div ref={props.menuRef} className={styles.menu}>
        {pathname === "/catalog" && (
          <div className={styles.search}>
            <Search placeholder="Type something..." />
          </div>
        )}
        <ul className={styles.items}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.url} onClick={closeHandler}>
                {item.title}
              </Link>
              <RightArrowIcon />
            </li>
          ))}
          <li key={6}>
            {user.email.length > 0 ? (
              <span onClick={handleSignOut}>SIGN OUT</span>
            ) : (
              <span onClick={() => props.handleSignIn(true)}>SIGN IN</span>
            )}
            <RightArrowIcon />
          </li>
          {user.email.length === 0 && (
            <li key={7}>
              <Link to={"/signup"} onClick={closeHandler}>
                SIGN UP
              </Link>
              <RightArrowIcon />
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Menu;
