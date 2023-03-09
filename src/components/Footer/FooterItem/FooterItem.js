import React from "react";
import styles from "./FooterItem.module.scss";

const FooterItem = (props) => {
  return (
    <div className={styles.container}>
      <button>{props.items.main}</button>
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
    </div>
  );
};

export default FooterItem;
