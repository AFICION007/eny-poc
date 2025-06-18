import React from "react";

import styles from "./styles.module.css";
import Trash from "../assets/trash";


const DeleteButton = ({ onClick }) => {
    return (
      <button className={styles.deleteButton} onClick={onClick} type="button">
        <Trash />
      </button>
    );
  };

export default DeleteButton;
