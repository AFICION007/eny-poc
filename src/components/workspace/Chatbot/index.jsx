import React, { useEffect, useContext, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import SimpleBar from "simplebar-react";

import WorkspaceContext from "../contexts/workspaceContext";
import useMessages from "../../home/Chatbot/hooks/useMessages";

import BotResponse from "./BotResponse";
import Chat from "./Chat";
import ChatInput from "../../home/global/ChatInput";
import Loader from "../../home/global/Loader";

import "simplebar-react/dist/simplebar.min.css";
import styles from "./styles.module.css";

const chatsMap = {
  chat: ({ messageId, ...messageObj }, className) => (
    <Chat key={`${messageId}_chat`} {...messageObj} className={className} />
  ),
  chart: (messageObj, className, updateMessage) => (
    <BotResponse
      key={`${messageObj.messageId}_chart`}
      {...messageObj}
      className={className}
      updateMessage={updateMessage}
    />
  ),
};

// All the references inside this component are stable
const Chatbot = ({ className = "" }) => {
  //   const { selectedModes, modal, setModal, messages, updateMessage } =
  //     useContext(WorkspaceContext);

  //   const { threadId } = useParams();
  //   const [searchParams] = useSearchParams();
  //   const dbId = searchParams.get("dbId");

  const { fetchingMessage, handleSubmitChat } = useMessages();

  //   const chatRef = useRef(null);
  //   useEffect(() => {
  //     if (chatRef.current) {
  //       chatRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, [messages]);

  return (
    <div className={styles.chatbot}>
      <div className={styles.container}>
        <SimpleBar
          style={{
            maxHeight: "calc(100vh - 54px - 78px)",
            flexGrow: 1,
          }}
        >
          <div className={styles.chat_section}>
            {messages &&
              messages.map((messageObj) => {
                return chatsMap[messageObj.type](
                  messageObj,
                  className,
                  updateMessage
                );
              })}

            {fetchingMessage && <Loader />}
            {<div ref={chatRef} />}
          </div>
        </SimpleBar>

        <div className={styles.chat_box_container}>
          <ChatInput handleSubmit={handleSubmitChat} />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
