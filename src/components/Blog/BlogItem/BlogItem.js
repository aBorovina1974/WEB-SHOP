import React from "react";
import styles from "./BlogItem.module.css";

const BlogItem = (props) => {
  return (
    <>
      <h2 className={styles.type}>{props.blog.type}</h2>
      <h2 className={styles.title}>{props.blog.title}</h2>
      <p className={styles.text}>{props.blog.text}</p>
      <hr className={styles.line} />
      <span
        className={styles.span}
      >{`${props.blog.date} by ${props.blog.author}`}</span>
    </>
  );
};

export default BlogItem;
