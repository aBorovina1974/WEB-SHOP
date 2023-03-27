import React, { useState, useEffect } from "react";
import styles from "./Blog.module.scss";
import BlogItem from "./BlogItem/BlogItem";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://web-shop-7d1b6-default-rtdb.firebaseio.com/blog.json"
      );
      const responseData = await response.json();
      console.log(responseData);
      const loadedItems = [];
      for (const key in responseData) {
        loadedItems.push({
          id: key,
          type: responseData[key].type,
          title: responseData[key].title,
          text: responseData[key].text,
          created: responseData[key].created,
          author: responseData[key].author,
        });
      }
      setBlog(loadedItems);
    };
    fetchItems();
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Blog</h1>
      <ul className={styles.items}>
        {blog &&
          blog.map((blogItem) => (
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
