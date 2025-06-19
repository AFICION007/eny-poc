import React, { useEffect, useState } from "react";

import useGetDocument from "../../../../global/PdfViewer/services/useGetDocument";

import MarkdownText from "../../Chat/MarkdownText";
import SourceCard from "../global/SourceCard";
import PdfViewer from "../../../../global/PdfViewer";

import styles from "./styles.module.css";

const AnswerSection = ({ response = "", sources = [] }) => {
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
      <div className={styles.answer_section}>
        <div className={styles.answer_sources}>
          {sources.map((source, index) => (
            <SourceCard
              key={source.title}
              type="answer"
              source={{ ...source, count: index + 1 }}
              fetchPdf={fetchPdf}
              loading={loading.file === source.filename && loading.state}
            />
          ))}
        </div>
        <MarkdownText content={response} />
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

export default AnswerSection;
