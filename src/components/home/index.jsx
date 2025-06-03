import React from "react";
import { Input } from "antd";

import NewsSection from "./NewsSection";

import styles from "./styles.module.css";
import search from "./assets/search.svg";
import searchAnalytics from "./assets/search-analytics.svg";
import seoAnalysis from "./assets/seo-analysis.svg";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.search_section}>
        <div className={styles.input_container}>
          <Input
            placeholder="Enter a Keyword or a Sentence to find People, Industry, Case Studies, etc."
            suffix={<img src={search} className={styles.search_icon} />}
            className={styles.textarea}
          />
          <div>
            <div className={styles.search_button}>
              <span className={styles.search_text}>Search</span>
            </div>
          </div>
        </div>
        <img src={searchAnalytics} className={styles.search_analytics} />
        <img src={seoAnalysis} className={styles.seo_analysis} />
      </div>
      <NewsSection />
    </div>
  );
};

export default Home;
