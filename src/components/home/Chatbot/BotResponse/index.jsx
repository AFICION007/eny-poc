import React, { useState } from "react";
import { Tabs } from "antd";

import AnswerSection from "./AnswerSection";
import DocumentCard from "./DocumentCard";
import NewsCard from "./NewsCard";

import styles from "./styles.module.css";

const getTabs = () => [
  {
    key: "answer",
    label: "Answer",
    TabContent: <AnswerSection />,
  },
  { key: "documents", label: "Documents", TabContent: <DocumentCard /> },
  { key: "references", label: "References", TabContent: "References Content" },
  { key: "news", label: "News", TabContent: <NewsCard /> },
];

const BotResponse = () => {
  const tabs = getTabs();
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
