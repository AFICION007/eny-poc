import { useState } from "react";
import axios from "axios";

const API_HOST = import.meta.env.VITE_API_HOST;

const useGetDocument = (setPdfUrl) => {
  const [loading, setLoading] = useState({ file: null, state: false });

  const fetchPdf = async (documentName = "Annual-Report-FY-2023-24") => {
    try {
      setLoading({ state: true, file: documentName });

      const response = await axios.get(
        `${API_HOST}/api/documents/${documentName}.pdf`,
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

  return { fetchPdf, loading, setLoading };
};

export default useGetDocument;
