import React, { useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import WorkspaceContext from "../contexts/workspaceContext";
import usePostChatThread from "../hooks/usePostChatThread";
import { getUserMessage } from "../../home/utils/message";

import ChatInput from "../global/ChatInput";

import styles from "./styles.module.css";
import fridayLogoAnimation from "../assets/fridayLogoAnimation.mp4";

// All the references inside this component are stable
const EmptyChat = () => {
  const {
    setPreviousState,
    query,
    setQuery,
    selectedModes,
    setMessages,
    refetchThreads,
  } = useContext(WorkspaceContext);

  const { threadId, postChatThread } = usePostChatThread();

  const handleSubmit = useCallback(
    (query) => {
      if (selectedModes !== null) {
        postChatThread(query, selectedModes?.split("/")[0]);
        setPreviousState("empty");
      }
    },
    [selectedModes, postChatThread]
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (threadId) {
      refetchThreads();
      setMessages([getUserMessage(query)]);

      setQuery("");
      navigate(`thread/${threadId}?dbId=${selectedModes}`);
    }
  }, [threadId]);

  return (
    <div className={styles.empty_chat}>
      <div className={styles.main_container}>
        <div className={styles.friday_logo_container}>
          <video
            muted
            autoPlay
            src={fridayLogoAnimation}
            className={styles.friday_logo}
          />
          <div className={styles.friday_logo_border} />
        </div>
        <h2 className={styles.title}>How may I assist you today?</h2>
        <ChatInput type="emptyChat" handleSubmit={handleSubmit} />
        <span className={styles.info}>
          Friday AI can make mistakes. Always verify the mission critical
          information
        </span>
      </div>
    </div>
  );
};

export default EmptyChat;
