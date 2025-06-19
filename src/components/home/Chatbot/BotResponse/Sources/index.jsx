import React, { useEffect, useState } from "react";

import useGetDocument from "../../../../global/PdfViewer/services/useGetDocument";

import SourceCard from "../global/SourceCard";
import PdfViewer from "../../../../global/PdfViewer";

import styles from "./styles.module.css";

const Sources = ({ sources = [] }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const { fetchPdf, loading, setLoading } = useGetDocument(setPdfUrl);

  useEffect(() => {
    if (pdfUrl) {
      setLoading((prevLoading) => ({ ...prevLoading, state: false }));
      setModalOpen(true);
    }
  }, [pdfUrl]);

  return (
    <>
      <div className={styles.sources}>
        {sources.map((source, index) => (
          <SourceCard
            key={source.title}
            type="source"
            source={{ ...source, count: index + 1 }}
            fetchPdf={fetchPdf}
            loading={loading.file === source.filename && loading.state}
          />
        ))}
      </div>
      <PdfViewer
        documentName={loading.file}
        pdfUrl={pdfUrl}
        isModalOpen={isModalOpen}
        setIsModalOpen={setModalOpen}
      />
    </>
  );
};

export default Sources;
