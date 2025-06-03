import React from "react";

import NewsCard from "./NewsCard";

import styles from "./styles.module.css";
import whiteArrow from "./assets/white-arrow.svg";

const NewsSection = () => {
  const news = [
    {
      heading: "avendus  updates",
      source: "MINT",
      title:
        "Can Zomato and Swiggy overcome profitability challenges amidst strong competition?",
      description:
        "ET Intelligence Group: Shares of food delivery service providers, Eternal (Zomato) and Swiggy, have shown weakness after the quarterly results following pressure on profitability.",
    },
    {
      heading: "market updates",
      source: "THE ECONOMIC TIMES",
      title:
        "Zomato, Swiggy shares rise up to 3% as platforms drop rain surcharge waiver for members",
      description:
        "Shares of Zomato (Eternal) and Swiggy rose up to 3.3% on Friday after both companies removed the rain surcharge waiver from their membership programs.",
    },
  ];

  const recentSearch = {
    source: "Mint",
    title: "Zomato gets Sebi's go-ahead to float INR 8,250-crore IPO",
    description:
      "Food delivery platform Zomato has received markets regulator Sebi's go-ahead to raise INR 8,250 crore through an initial share-sale.",
  };

  return (
    <div className={styles.news_section}>
      {news.map(({ heading, source, title, description }) => (
        <div className={styles.news_vertical}>
          <h2 className={styles.news_heading}>{heading}</h2>
          <NewsCard source={source} title={title} description={description} />
          <div className={styles.bottom_button}>
            <span className={styles.view_all}>VIEW ALL</span>
            <img
              src={whiteArrow}
              alt="view all arrow"
              className={styles.white_arrow}
            />
          </div>
        </div>
      ))}
      <div className={styles.recent_searches}>
        <div className={styles.recent_searches_header}>
          <h2 className={styles.news_heading}>recent searches</h2>
          <div>
            <div className={styles.bottom_button}>
              <span className={styles.view_all}>VIEW ALL</span>
              <img
                src={whiteArrow}
                alt="view all arrow"
                className={styles.white_arrow}
              />
            </div>
          </div>
        </div>
        <NewsCard {...recentSearch} className="red" />
      </div>
    </div>
  );
};

export default NewsSection;
