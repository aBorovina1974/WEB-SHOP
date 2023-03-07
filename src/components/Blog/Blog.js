import React from "react";
import styles from "./Blog.module.scss";
import BlogItem from "./BlogItem/BlogItem";
import Blogs from "../../data/blogs.json";

const Blog = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Blog</h1>
      <ul className={styles.items}>
        {Blogs &&
          Blogs.map((blogItem) => (
            <li key={blogItem.id} className={styles.item}>
              <BlogItem
                blog={{
                  type: blogItem.type,
                  title: blogItem.title,
                  text: blogItem.text,
                  date: blogItem.created,
                  author: blogItem.author,
                }}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Blog;
