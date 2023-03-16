import React from "react";
import PencilIcon from "../../UI/icons/PencilIcon";
import styles from "./DashboardItem.module.scss";

const DashboardItem = (props) => {
  return (
    <div className={styles.container} id={styles["item" + props.item.id]}>
      {(props.item.type === "BOOK" || props.item.type === "ACCOUNT") && (
        <h2>
          {props.item.title}
          {props.item.type === "BOOK" && (
            <button className={styles.button}>
              <PencilIcon />
            </button>
          )}
        </h2>
      )}
      <h3>{props.item.subtitle}</h3>
      {props.item.type === "ACCOUNT" ? (
        <div>
          <p>{props.item.name}</p>
          <p>{props.item.email}</p>
        </div>
      ) : (
        <p>{props.item.text}</p>
      )}
      <div>
        <button>{props.item.action}</button>
        {props.item.type === "ACCOUNT" && (
          <button className={styles.button}>Change Password</button>
        )}
      </div>
    </div>
  );
};

export default DashboardItem;
