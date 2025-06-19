import React from "react";
import { Modal } from "antd";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import useGetDocument from "./services/useGetDocument";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import styles from "./styles.module.css";

const PdfViewer = ({
  documentName = "",
  isModalOpen = false,
  setIsModalOpen = () => {},
}) => {
  const defaultPluginInstance = defaultLayoutPlugin();

  const { pdfUrl } = useGetDocument(documentName);

  return (
    <Modal
      title={documentName}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      width={1000}
      className={styles.modal}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className={styles.pdf_viewer_container}>
          <Viewer fileUrl={pdfUrl} plugins={[defaultPluginInstance]} />
        </div>
      </Worker>
    </Modal>
  );
};

export default PdfViewer;
