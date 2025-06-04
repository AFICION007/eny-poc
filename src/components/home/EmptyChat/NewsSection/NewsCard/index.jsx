import React from "react";

import styles from "./styles.module.css";
import redArrow from "./assets/red-arrow.svg";
import whiteArrow from "../assets/white-arrow.svg";

const NewsCard = ({ source, title, description, className = "default" }) => {
  const classNameIconMap = {
    default: redArrow,
    red: whiteArrow,
  };

  return (
    <div className={`${styles.news_card} ${styles[className]}`}>
      <div className={styles.source}>{source}</div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description_container}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer_button}>
        <span className={styles.button_title}>FULL ARTICLE</span>
        <img src={classNameIconMap[className]} className={styles.arrow} />
      </div>
    </div>
  );
};

export default NewsCard;
