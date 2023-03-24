import React, { useEffect, useState, useRef } from "react";
import ExpandArrowIcon from "../../icons/ExpandArrowIcon";
import styles from "./FormDropdown.module.scss";

const FormDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const clickOutsideRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        clickOutsideRef.current &&
        !clickOutsideRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickOutsideRef]);

  useEffect(() => {
    if (props.related) {
      setSelectedItem();
    }
  }, [props.options, props.related]);

  const toggleHandler = (event) => {
    event.preventDefault();
    setIsOpen((previousIsOpen) => !previousIsOpen);
  };

  const dropdownItemHandler = (index) => {
    const item = !props.related
      ? props.options[index].name
      : props.options[index];
    setSelectedItem((prevSelectedItem) => (prevSelectedItem = item));

    if (!props.related) {
      props.onRelated(props.options[index].id);
    }
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} ref={clickOutsideRef}>
      <button
        disabled={props.options.length === 0}
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
                {!props.related ? item.name : item}
              </button>
            ))}
        </ul>
      )}
    </div>
  );
};

export default FormDropdown;
