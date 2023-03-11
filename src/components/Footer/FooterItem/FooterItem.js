import React, { useState } from "react";
import Newsletter from "../Newsletter/Newsletter";
import useMatchMedia from "../../../hooks/useMatchMedia";
import ExpandIcon from "../../UI/icons/ExpandIcon";
import ColapseIcon from "../../UI/icons/ColapseIcon";
import styles from "./FooterItem.module.scss";

const FooterItem = (props) => {
  const isMatchMedia = useMatchMedia(810);
  const [isOpen, setIsOpen] = useState(false);

  const itemTitle = <span className={styles.title}>{props.title}</span>;

  const toggleHandler = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className={styles.container}>
      {props.toggle === true && !isMatchMedia ? (
        <button
          className={`${styles.toggle} ${isOpen ? styles.open : ""}`}
          onClick={toggleHandler}
        >
          {itemTitle}
          {isOpen ? <ColapseIcon /> : <ExpandIcon />}
        </button>
      ) : (
        itemTitle
      )}
      {(isOpen || isMatchMedia || !props.toggle) && (
        <div className={styles.content}>{props.children}</div>
      )}
    </div>
  );
};

export default FooterItem;
