import React from "react";

import {
  web_sources,
  deep_web_sources,
  internal_sources,
} from "../AnswerSection/sources";

import SourceCard from "../global/SourceCard";

import styles from "./styles.module.css";

const Sources = ({ sources = [] }) => {
  return (
    <div className={styles.sources}>
      {sources.map((source, index) => (
        <SourceCard
          key={source.title}
          type="source"
          source={{ ...source, count: index + 1 }}
        />
      ))}
    </div>
  );
};

export default Sources;
