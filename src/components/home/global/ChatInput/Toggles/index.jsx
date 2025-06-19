import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import WorkspaceContext from "../../../contexts/workspaceContext";

import styles from "./styles.module.css";
import Knowledge from "./assets/knowledge";
import Research from "./assets/research";
import Subscriptions from "./assets/subscriptions";
import Web from "./assets/web";

const Toggles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const modesParam = searchParams.get("modes");

  const { selectedModes, setSelectedModes } = useContext(WorkspaceContext);
  useEffect(() => {
    if (modesParam) {
      const modesArray = modesParam.split(",");
      setSelectedModes(modesArray);
    }
  }, [modesParam]);

  const onModeClick = (value) => {
    let newModes;

    if (selectedModes.includes(value)) {
      // Remove mode if already selected
      newModes = selectedModes.filter((mode) => mode !== value);
    } else {
      // Add mode if not selected
      newModes = [...selectedModes, value];
    }

    setSelectedModes(newModes);

    // Update URL params - join array into comma-separated string
    if (newModes.length > 0) {
      setSearchParams({ modes: newModes.join(",") });
    } else {
      // Remove param if no modes selected
      searchParams.delete("modes");
      setSearchParams(searchParams);
    }
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
    {
      value: "subscriptions",
      Icon: (className) => <Subscriptions className={className} />,
      label: "Subscriptions",
    },
  ];

  return (
    <div className={styles.toggles}>
      {toggles.map(({ Icon, label, value }) => {
        const isActive = selectedModes.includes(value);
        const className = isActive ? "active" : "default";

        return (
          <div
            key={value}
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
