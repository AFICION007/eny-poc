import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import CodeFormatter from "../../../global/CodeFormatter";

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

                return (
                    <ReactMarkdown
                        key={`${content}_markdown`}
                        children={content}
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}
                        className={styles.message}
                    />
                );
            })}
        </div>
    );
};

export default Chat;
