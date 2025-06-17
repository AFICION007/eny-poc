import React from "react";
import styles from "./styles.module.css";

const EditButton = ({ onClick }) => {
  return (
    <button className={styles.actionButton} onClick={onClick}>
      Edit
    </button>
  );
};

export default EditButton;
