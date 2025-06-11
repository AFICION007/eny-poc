import React, { useState } from "react";


import { Modal } from "antd";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


import calendar from "./assets/calendar.svg";
import download from "./assets/download.svg";
import modifiedCalendar from "./assets/modified-calendar.svg";
import owner from "./assets/owner.svg";
import share from "./assets/share.svg";
import view from "./assets/view.svg";


import styles from "./styles.module.css";

const DocumentCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultPluginInstance = defaultLayoutPlugin();

  const document = {
    title: "Swiggy_RelationshipNotes_2024-11-10.docx",
    // url: "/MINSHU_SHAW_CV_2025.pdf", 
    url: ""
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
      onClick: () => {if(url) setIsModalOpen(true)},
    },
  ];

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

      <Modal
        title={title}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        className={styles.modal}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className={styles.pdf_viewer_container}>
            <Viewer fileUrl={url} plugins={[defaultPluginInstance]} />
          </div>
        </Worker>
      </Modal>
    </>
  );
};

export default DocumentCard;
