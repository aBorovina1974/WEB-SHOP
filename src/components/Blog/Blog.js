import React, { useEffect, useState } from "react";
import styles from "./Blog.module.scss";
import BlogItem from "./BlogItem/BlogItem";
import Spinner from "../Spinner/Spinner";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
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
    };

    fetchItems().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  if (!blogs) {
    return <Spinner />;
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
      <div className={styles.items}>
        {blogs.map((blogItem) => (
          <BlogItem
            key={blogItem.id}
            blog={{
              type: blogItem.type,
              title: blogItem.title,
              text: blogItem.text,
              date: blogItem.created,
              author: blogItem.author,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
