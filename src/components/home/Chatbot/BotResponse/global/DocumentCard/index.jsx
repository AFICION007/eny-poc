import React, { useState } from "react";

import PdfViewer from "./PdfViewer";

import styles from "./styles.module.css";
import calendar from "./assets/calendar.svg";
import download from "./assets/download.svg";
import modifiedCalendar from "./assets/modified-calendar.svg";
import owner from "./assets/owner.svg";
import share from "./assets/share.svg";
import view from "./assets/view.svg";

const DocumentCard = () => {
  const document = {
    title: "1QFY24 Outlook review of Zomato (Rating_ BUY, TP_ Rs. 110).pdf",
    url: "https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Annual-Report-FY-2023-24-1.pdf",
    infos: [
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
    ],
    buttons: [
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
        onClick: () => setIsModalOpen(true),
      },
    ],
  };

  const { title, infos, buttons } = document;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.document_card}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subtitle}>
          <span className={styles.text}>Read Time: 20 min |</span>
        </div>

        <div className={styles.informations}>
          {infos.map(({ icon, content }, index) => (
            <div key={index} className={styles.info}>
              <img src={icon} alt="info-icon" className={styles.info_icon} />
              <span className={styles.text}>{content}</span>
            </div>
          ))}
        </div>

        <div className={styles.buttons}>
          {buttons.map(({ icon, label, className, onClick }) => (
            <div
              key={label}
              className={`${styles.button} ${styles[className]}`}
              onClick={onClick}
            >
              <img src={icon} alt={`${label}-icon`} className={styles.icon} />
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <PdfViewer
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        documentName={title}
      />
    </>
  );
};

export default DocumentCard;
