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
                {item.icon && <span className={styles.icon}>{item.icon}</span>}
                <span>{item.title}</span>
              </a>
            )}
            {props.items.type === "info" && (
              <>
                <h3>{`${item.title}:`}</h3>
                <p>{item.subtitle}</p>
              </>
            )}
            {props.items.type === "form" && (
              <form>
                <p className={styles.newsletter}>{item.title}</p>
                <input id="email" type="email" placeholder="Email Address" />
                <button className={styles.submit} type="submit">
                  SUBSCRIBE
                </button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
