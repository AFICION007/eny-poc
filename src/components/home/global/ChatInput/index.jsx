import React, { useContext } from "react";

import WorkspaceContext from "../../contexts/workspaceContext";
import { cachedResponses } from "./utils/cachedResponses";

import IconButton from "../IconButton";
import InputTextarea from "./InputTextarea";
import Toggles from "./Toggles";

import styles from "./styles.module.css";
import submitActive from "./assets/submit-active.svg";
import submitInactive from "./assets/submit-inactive.svg";

// className: empty_state | chatbot
const ChatInput = ({ handleSubmit = () => {}, className = "" }) => {
  const { query, setQuery, selectedModes } = useContext(WorkspaceContext);

  const handleInputChange = (event) => {
    const updatedQuery = event.target.value;
    setQuery(updatedQuery);
  };

  const isSubmitActive =
    selectedModes && selectedModes.length > 0 && query.length !== 0;

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey && query.length !== 0) {
      event.preventDefault();
      handleSubmit(query);
    }
  };

  const onSubmit = () => {
    if (query.length !== 0) handleSubmit(query);
  };

  const submitButton = (activeIcon) => (
    <IconButton
      icon={isSubmitActive ? activeIcon : submitInactive}
      size={"small"}
      handleClick={onSubmit}
      disabled={!isSubmitActive}
    />
  );

  // Added options
  const options = [
    {
      key: "0",
      type: "group",
      label: "Suggested Questions",
      children: Object.entries(cachedResponses).map(([key, value]) => ({
        key,
        label: key,
      })),
    },
  ];

  const onClickOption = (event) => {
    setQuery(event.key);
  };

  return (
    <div className={`${styles.chat_input_container} ${styles[className]}`}>
      <InputTextarea
        minRows={className === "chatbot" ? 1 : 2}
        maxRows={20}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        options={options}
        onClickOption={onClickOption}
      />

      <div className={styles.bottom_container}>
        <Toggles />
        {submitButton(submitActive)}
      </div>
    </div>
  );
};

export default ChatInput;
