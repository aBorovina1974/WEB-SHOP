import React from "react";
import styles from "./FooterList.module.scss";

const FooterItem = (props) => {
  return (
    <ul className={styles.items}>
      {props.items.list.map((item) => (
        <li key={item.id}>
          {props.items.type === "nav" && (
            <a>
              {item.icon && (
                <span className={styles.icon}>{props.icons[item.icon]}</span>
              )}
              <span>{item.title}</span>
            </a>
          )}
          {props.items.type === "info" && (
            <>
              <h3>{`${item.title}:`}</h3>
              <p>{item.subtitle}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterItem;
