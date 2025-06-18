import React from "react";
import styles from "./styles.module.css";

const CustomButton = ({ text, onClick }) => {
  return (
    <button className={styles.actionButton} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
