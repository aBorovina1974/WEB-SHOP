import React, { useState } from "react";
import useMatchMedia from "../../../hooks/useMatchMedia";
import ExpandArrowIcon from "../../UI/icons/ExpandArrowIcon";
import styles from "./DashboardMenu.module.scss";

const DashboardMenu = (props) => {
  const menuItems = [
    "Account Dashboard",
    "Account Information",
    "Address Book",
    "My Orders",
    "Newsletter Subscriptions",
  ];
  const isMatchMedia = useMatchMedia(810);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  const toggleHandler = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const setContentHandler = (index) => {
    props.onSetContent(index);
    setSelectedItem(menuItems[index]);
  };

  const listItemHandler = (index) => {
    setContentHandler(index);
  };

  const dropdownItemHandler = (index) => {
    setContentHandler(index);
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
              className={item === selectedItem ? styles.selected : ""}
              key={index}
              onClick={
                isMatchMedia
                  ? () => listItemHandler(index)
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
