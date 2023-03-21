import React, { useState } from "react";
import ExpandArrowIcon from "../../icons/ExpandArrowIcon";
import styles from "./FormDropdown.module.scss";

const FormDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const toggleHandler = (event) => {
    event.preventDefault();
    setIsOpen((previousIsOpen) => !previousIsOpen);
  };

  const dropdownItemHandler = (index) => {
    setSelectedItem(
      (prevSelectedItem) => (prevSelectedItem = props.options[index])
    );
    if (!props.related) {
      props.onRelated(index);
    }
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={isOpen ? styles.open : styles.closed}
        onClick={toggleHandler}
      >
        <span>{selectedItem ? selectedItem : props.action}</span>
        <ExpandArrowIcon className={isOpen ? styles.icon : ""} />
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {props.options &&
            props.options.length > 0 &&
            props.options.map((item, index) => (
              <button
                key={index}
                className={styles.option}
                onClick={() => dropdownItemHandler(index)}
              >
                {item}
              </button>
            ))}
        </ul>
      )}
    </div>
  );
};

export default FormDropdown;
