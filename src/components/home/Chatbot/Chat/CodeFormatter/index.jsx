import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import styles from "./styles.module.css";

const CodeFormatter = ({ language = "sql", code = "", className = "" }) => {
  return (
    <div className={`${styles.query_container} ${styles[className]}`}>
      <SyntaxHighlighter language={language} style={dracula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeFormatter;
