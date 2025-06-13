import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import WorkspaceContext from "../contexts/workspaceContext";
import { getUserMessage } from "../utils/message";

import NewsSection from "./NewsSection";
import ChatInput from "../global/ChatInput";

import styles from "./styles.module.css";
import search from "./assets/search.svg";
import searchAnalytics from "./assets/search-analytics.svg";
import seoAnalysis from "./assets/seo-analysis.svg";

const Home = () => {
  const { query, setQuery, setMessages, selectedModes } =
    useContext(WorkspaceContext);

  const navigate = useNavigate();
  const handleSubmitChat = () => {
    if (selectedModes.length > 0) {
      setMessages([getUserMessage(query)]);

      setQuery("");
      navigate(`thread/threadId?modes=${selectedModes.join(",")}`);
    }
  };

  const filters = [
    "Pitch Books",
    "valuation models",
    "term sheet temaplate",
    "white papers",
    "data & analysis",
    "playbook",
  ];

  return (
    <div className={styles.home}>
      <div className={styles.search_section}>
        <div className={styles.input_container}>
          {/* <Input
            placeholder="Enter a Keyword or a Sentence to find People, Industry, Case Studies, etc."
            suffix={<img src={search} className={styles.search_icon} />}
            className={styles.textarea}
          /> */}
          {/* <div>
            <div className={styles.search_button}>
              <span className={styles.search_text}>Search</span>
            </div>
          </div> */}
          <ChatInput handleSubmit={handleSubmitChat} className="empty_state" />
          <div className={styles.search_filters}>
            <h3 className={styles.filters_title}>
              Select filters for better results
            </h3>
            <div className={styles.filters}>
              {filters.map((filter) => (
                <div key={filter} className={styles.filter}>
                  <span className={styles.filter_text}>{filter}</span>
                </div>
              ))}
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
