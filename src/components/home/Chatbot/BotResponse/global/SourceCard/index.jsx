import React from "react";

import { getDomainFromUrl, getNormalizedString } from "./utils/main";

import SpinLoader from "../../../../../global/SpinLoader";

import styles from "./styles.module.css";
import swiggy from "./assets/swiggy.svg";

// type: answer | source
const SourceCard = ({
  type = "",
  source = {},
  fetchPdf = () => {},
  loading = false,
}) => {
  const getConfigFromSource = ({ sourceType, ...source }) => {
    if (sourceType === "internal") {
      return {
        icon: swiggy,
        title: `${source.count}. ${source.description.split(" ")[0]}`,
        subtitle: "",
        heading: `[PDF] ${getNormalizedString(source.filename)}`,
        description: source.summary,
        filename: source.filename,
      };
    }

    //
    else if (sourceType === "web") {
      return {
        icon: swiggy,
        title: `${source.count}. ${getDomainFromUrl(source.url)}`,
        subtitle: source.url,
        heading: source.title,
        description: source.description,
      };
    }

    //
    else if (sourceType === "api") {
      return {
        icon: swiggy,
        title: source.company,
        subtitle: "",
        heading: `[Endpoints]: ${source.endpoint.join(", ")}`,
        description: "",
      };
    }
  };

  const sourceConfig = getConfigFromSource(source);

  const onClickSource = () => {
    if (source.sourceType === "web") {
      window.open(source.url, "_blank");
    }

    //
    else if (source.sourceType === "internal") {
      fetchPdf(sourceConfig.filename);
    }
  };

  const isDocumentAndLoading = source.sourceType === "internal" && loading;

  const sourcesMap = {
    answer: (
      <div onClick={onClickSource} className={styles.answer_source}>
        {isDocumentAndLoading ? (
          <SpinLoader size="small" />
        ) : (
          <>
            <div className={styles.answer_top}>
              <img
                src={sourceConfig.icon}
                alt="source icon"
                className={styles.answer_icon}
              />
              <span className={styles.answer_title}>{sourceConfig.title}</span>
            </div>
            <span className={styles.answer_heading}>
              {sourceConfig.heading}
            </span>
          </>
        )}
      </div>
    ),

    source: (
      <div onClick={onClickSource} className={styles.source_card}>
        {isDocumentAndLoading ? (
          <SpinLoader size="small" />
        ) : (
          <>
            <div className={styles.source_top}>
              <img
                src={sourceConfig.icon}
                alt="source icon"
                className={styles.source_icon}
              />
              <div className={styles.source_top_right}>
                <span className={styles.source_title}>
                  {sourceConfig.title}
                </span>
                {sourceConfig.subtitle && (
                  <span className={styles.source_subtitle}>
                    {sourceConfig.subtitle}
                  </span>
                )}
              </div>
            </div>
            <span className={styles.source_heading}>
              {sourceConfig.heading}
            </span>
            {sourceConfig.description && (
              <p className={styles.source_description}>
                {sourceConfig.description}
              </p>
            )}
          </>
        )}
      </div>
    ),
  };

  return sourcesMap[type];
};

export default SourceCard;
