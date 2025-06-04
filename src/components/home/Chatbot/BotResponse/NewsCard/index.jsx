import React from "react";

import styles from "./styles.module.css";

const NewsCard = () => {
  const news = {
    source: "Investment Banking",
    title: "AI Human and India’s Role in this Tech Revolution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  const { source, title, description } = news;

  return (
    <div className={styles.news_card}>
      <div className={styles.source}>{source}</div>
      <span className={styles.read_time}>Read Time: 10 min </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default NewsCard;
