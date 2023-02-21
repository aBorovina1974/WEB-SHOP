import React from "react";
import styles from "./AccountActions.module.css";

const AccountActions = (props) => {
  return (
    <div className={styles.actions}>
      <button onClick={props.onClick}>SIGN IN</button>
      <a href="#">SIGN UP</a>
    </div>
  );
};

export default AccountActions;
