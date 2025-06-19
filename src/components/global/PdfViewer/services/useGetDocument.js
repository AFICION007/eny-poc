import { useEffect, useState } from "react";
import axios from "axios";

const useGetDocument = (documentName = "Annual-Report-FY-2023-24.pdf") => {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5001/api/documents/${documentName}`,
          {
            responseType: "blob",
          }
        );

        const blob = new Blob([response.data], { type: "application/pdf" });
        const fileUrl = URL.createObjectURL(blob);
        setPdfUrl(fileUrl);
      } catch (err) {
        console.error("PDF fetch error:", err);
      }
    };

    fetchPdf();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [documentName]);

  return { pdfUrl };
};

export default useGetDocument;
