import React, { useState } from "react";
import useMatchMedia from "../../../hooks/useMatchMedia";
import ExpandArrowIcon from "../../UI/icons/ExpandArrowIcon";
import styles from "./DashboardMenu.module.scss";

const DashboardMenu = () => {
  const menuItems = [
    "Account Dashboard",
    "Account Information",
    "Address Book",
    "My Orders",
    "My Wishlist",
    "Newsletter Subscriptions",
  ];
  const isMatchMedia = useMatchMedia(810);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  const toggleHandler = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const listItemHandler = () => {
    console.log("Content opened from list");
  };

  const dropdownItemHandler = (index) => {
    console.log("Content opened from dropdown");
    setSelectedItem(menuItems[index]);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      {!isMatchMedia && (
        <button
          className={isOpen ? styles.open : styles.closed}
          onClick={toggleHandler}
        >
          <span>{selectedItem}</span>
          <ExpandArrowIcon className={isOpen ? styles.icon : ""} />
        </button>
      )}
      {(isOpen || isMatchMedia) && (
        <ul
          className={`${styles.menu} ${
            isOpen && !isMatchMedia ? styles.dropdown : ""
          }`}
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={styles.selected}
              onClick={
                isMatchMedia
                  ? listItemHandler
                  : () => dropdownItemHandler(index)
              }
            >
              {item}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DashboardMenu;
