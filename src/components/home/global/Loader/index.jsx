import React from "react";
import styles from "./styles.module.css";

const Loader = ({
  message = "Analyzing request..",
  className = "workspace",
}) => {
  return (
    <div className={`${styles.loader_container} ${styles[className]}`}>
      <span className={styles.message}>{message}</span>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
