import React from "react";
import styles from "./BlogItem.module.scss";

const BlogItem = (props) => {
  const date = new Date(props.blog.date);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className={styles.item}>
      <h2 className={styles.type}>{props.blog.type}</h2>
      <h2 className={styles.title}>{props.blog.title}</h2>
      <p className={styles.text}>{props.blog.text}</p>
      <hr className={styles.line} />
      <span
        className={styles.span}
      >{`${formattedDate} by ${props.blog.author}`}</span>
    </div>
  );
};

export default BlogItem;
