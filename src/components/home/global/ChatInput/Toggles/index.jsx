import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import WorkspaceContext from "../../../contexts/workspaceContext";

import styles from "./styles.module.css";
import Knowledge from "./assets/knowledge";
import Research from "./assets/research";
import Web from "./assets/web";

const Toggles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const { selectedMode, setSelectedMode } = useContext(WorkspaceContext);
  useEffect(() => {
    if (mode) {
      setSelectedMode(mode);
    }
  }, [mode]);

  const onModeClick = (value) => {
    setSelectedMode(value);
    setSearchParams({ mode: value });
  };

  const toggles = [
    {
      value: "knowledge_base",
      Icon: (className) => <Knowledge className={className} />,
      label: "Knowledge base",
    },
    {
      value: "web_search",
      Icon: (className) => <Web className={className} />,
      label: "Web search",
    },
    {
      value: "deep_research",
      Icon: (className) => <Research className={className} />,
      label: "Deep research",
    },
  ];

  return (
    <div className={styles.toggles}>
      {toggles.map(({ Icon, label, value }) => {
        const className = selectedMode === value ? "active" : "default";

        return (
          <div
            onClick={() => onModeClick(value)}
            className={`${styles.toggle}  ${styles[`${className}_toggle`]}`}
          >
            {Icon(className)}
            <span className={styles.label}>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Toggles;
