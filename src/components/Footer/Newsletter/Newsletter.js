import React from "react";
import styles from "./Newsletter.module.scss";
const Newsletter = () => {
  return (
    <form className={styles.newsletter}>
      <p className={styles.title}>SUBSCRIBE TO OUR NEWSLETTERS</p>
      <input id="email" type="email" placeholder="Email Address" />
      <button className={styles.submit} type="submit">
        SUBSCRIBE
      </button>
    </form>
  );
};

export default Newsletter;
