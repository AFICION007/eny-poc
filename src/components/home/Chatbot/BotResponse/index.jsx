import React, { useState } from "react";
import { Tabs } from "antd";

import AnswerSection from "./AnswerSection";
import Sources from "./Sources";
import NewsCard from "./NewsCard";

import styles from "./styles.module.css";

const getTabs = (response, sources) => [
  {
    key: "answer",
    label: "Answer",
    TabContent: <AnswerSection response={response} sources={sources} />,
  },
  {
    key: "sources",
    label: `Sources (${sources.length})`,
    TabContent: <Sources sources={sources} />,
  },
  // { key: "references", label: "References", TabContent: "References Content" },
  // { key: "news", label: "News", TabContent: <NewsCard /> },
];

const BotResponse = ({ response = "", sources = [] }) => {
  const tabs = getTabs(response, sources);
  const [activeTab, setTab] = useState("answer");
  const handleChangeTab = (key) => {
    setTab(key);
  };

  return (
    <div className={styles.bot_response}>
      <div className={styles.bot_tabs}>
        <Tabs
          type="card"
          activeKey={activeTab}
          onChange={handleChangeTab}
          className={styles.tabs}
        >
          {tabs.map(({ key, label, TabContent }) => (
            <Tabs.TabPane tab={label} key={key}>
              {TabContent}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default BotResponse;
