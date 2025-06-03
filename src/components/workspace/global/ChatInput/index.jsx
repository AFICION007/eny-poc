import React, { useContext } from "react";
import { Input } from "antd";

import WorkspaceContext from "../../contexts/workspaceContext";

import IconButton from "../IconButton";

import styles from "./styles.module.css";
import submitInactive from "./assets/submit-inactive.svg";
import submitActive from "./assets/submit-active.svg";

const ChatInput = ({ handleSubmit = () => {} }) => {
  const { query, setQuery, selectedDb } = useContext(WorkspaceContext);

  const handleInputChange = (event) => {
    const updatedQuery = event.target.value;
    setQuery(updatedQuery);
  };

  const isSubmitActive = selectedDb !== null && query.length !== 0;

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
    <div className={styles.chat_input_container}>
      <Input.TextArea
        autoSize={{ maxRows: 5 }}
        placeholder="Ask Friday Anything.."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={`${styles.chat_box} ${styles.chat_textarea}`}
      />
      <div className={`${styles.chat_buttons} ${styles.absolute}`}>
        {submitButton(submitActive)}
      </div>
    </div>
  );
};

export default ChatInput;
