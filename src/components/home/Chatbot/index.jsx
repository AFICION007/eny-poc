import React, { useEffect, useContext, useRef } from "react";
import SimpleBar from "simplebar-react";

import WorkspaceContext from "../contexts/workspaceContext";
import useMessages from "./hooks/useMessages";

import BotResponse from "./BotResponse";
import Chat from "./Chat";
import ChatInput from "../global/ChatInput";
import Loader from "../global/Loader";

import styles from "./styles.module.css";

const chatsMap = {
  chat: ({ messageId, ...messageObj }, className) => (
    <Chat key={`${messageId}_chat`} {...messageObj} className={className} />
  ),
  chart: ({ messageId, ...messageObj }, className) => (
    <BotResponse
      key={`${messageId}_chart`}
      {...messageObj}
      className={className}
    />
  ),
};

const Chatbot = ({ className = "chatbot" }) => {
  const { messages, appendMessage } = useContext(WorkspaceContext);

  const { fetchingMessage, handleSubmitChat } = useMessages();

  const chatRef = useRef(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className={styles.chatbot}>
      <div className={styles.container}>
        <div className={styles.chat_section}>
          {messages &&
            messages.map((messageObj) => {
              return chatsMap[messageObj.type](messageObj, className);
            })}

          {fetchingMessage && <Loader />}
          {<div ref={chatRef} />}
        </div>

        <div className={styles.chat_box_container}>
          <ChatInput handleSubmit={handleSubmitChat} className={className} />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
