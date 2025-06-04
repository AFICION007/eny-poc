import React from "react";

import CodeFormatter from "./CodeFormatter";
import MarkdownText from "./MarkdownText";

import styles from "./styles.module.css";

const Chat = ({ sender = "", parsedMessages = [], className = "" }) => {
  return (
    <div
      className={`${styles.chat_container} ${styles[className]} ${
        styles[`${sender}_chat`]
      }`}
    >
      {parsedMessages.map(({ type, lang, content }) => {
        if (type === "MARKDOWN_CODE") {
          return (
            <CodeFormatter
              key={`${content}_code`}
              language={lang}
              code={content}
              className="chat"
            />
          );
        }

        return <MarkdownText content={content} />;
      })}
    </div>
  );
};

export default Chat;
