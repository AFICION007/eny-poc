import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import styles from "../styles.module.css";

const MarkdownText = ({ content = "" }) => {
  return (
    <div className={styles.message}>
      <ReactMarkdown
        key={`${content}_markdown`}
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
};

export default MarkdownText;
