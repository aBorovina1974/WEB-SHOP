import React from "react";
import styles from "./Newsletter.module.scss";
const Newsletter = () => {
  return (
    <div className={styles.container}>
      <button>JOIN US</button>
      <form>
        <p className={styles.newsletter}>SUBSCRIBE TO OUR NEWSLETTERS</p>
        <input id="email" type="email" placeholder="Email Address" />
        <button className={styles.submit} type="submit">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
