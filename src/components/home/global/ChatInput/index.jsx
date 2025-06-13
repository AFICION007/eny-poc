import React, { useContext } from "react";
import { Input } from "antd";

import WorkspaceContext from "../../contexts/workspaceContext";

import IconButton from "../IconButton";
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

  return (
    <div className={`${styles.chat_input_container} ${styles[className]}`}>
      <Input.TextArea
        autoSize={{ minRows: className === "chatbot" ? 1 : 2, maxRows: 20 }}
        placeholder="Enter a Keyword or a Sentence to find People, Industry, Case Studies, etc."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={`${styles.chat_box} ${styles.chat_textarea}`}
      />
      <div className={styles.bottom_container}>
        <Toggles />
        {submitButton(submitActive)}
      </div>
    </div>
  );
};

export default ChatInput;
