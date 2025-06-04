import React from "react";

import styles from "./styles.module.css";
import owner from "./assets/owner.svg";
import calendar from "./assets/calendar.svg";
import modifiedCalendar from "./assets/modified-calendar.svg";
import share from "./assets/share.svg";
import download from "./assets/download.svg";
import view from "./assets/view.svg";

const DocumentCard = () => {
  const document = {
    title: "Swiggy_RelationshipNotes_2024-11-10.docx",
    url: "",
  };

  const { title, url } = document;

  const infos = [
    {
      icon: owner,
      content: " Owner: Rahul Sharma",
    },
    {
      icon: calendar,
      content: "1 May 2025",
    },
    {
      icon: modifiedCalendar,
      content: "Modified Date: 28 April 2025",
    },
  ];

  const buttons = [
    {
      icon: share,
      label: "Share",
      className: "default",
    },
    {
      icon: download,
      label: "Download",
      className: "default",
    },
    {
      icon: view,
      label: "View",
      className: "dark",
    },
  ];

  return (
    <div className={styles.document_card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.subtitle}>
        <span className={styles.text}>Read Time: 20 min |</span>
      </div>
      <div className={styles.informations}>
        {infos.map(({ icon, content }) => (
          <div className={styles.info}>
            <img src={icon} className={styles.info_icon} />
            <span className={styles.text}>{content}</span>
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        {buttons.map(({ icon, label, className }) => (
          <div className={`${styles.button} ${styles[className]}`}>
            <img src={icon} alt="" className={styles.icon} />
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentCard;
