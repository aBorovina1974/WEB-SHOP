import React, { useState, useEffect } from "react";
import styles from "./Blog.module.scss";
import BlogItem from "./BlogItem/BlogItem";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://web-shop-database-default-rtdb.firebaseio.com/blogs.json/?auth=qFjp2jdh4VV2y0dHQntW4kfwjrpazNbhoTwealRT"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

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
      setBlogs(loadedItems);
      setIsLoading(false);
    };

    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Blog</h1>
      <ul className={styles.items}>
        {blogs &&
          blogs.map((blogItem) => (
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
