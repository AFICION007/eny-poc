import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import EmptyChat from "./home/EmptyChat";
import Chatbot from "./home/Chatbot";
import DirectoryPage from "./myDirectory";
import DocumentPage from "./myDocument";
import CollateralPage from "./collateral";
import CollateralLayout from "./collateral/CollateralLayout";
import ChatResponsePage from "./collateral/ChatResponsePage";
import CoverageUniversePage from "./coverageUniverse";
import CoverageLayout from "./coverageUniverse/CoverageLayout";
import CoverageDetailView from "./coverageUniverse/CoverageDetailView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />}>
            <Route index element={<EmptyChat />} />
            <Route path="thread/:threadId" element={<Chatbot />} />
          </Route>
          <Route path="my-directory" element={<DirectoryPage />} />
          <Route path="/my-documents" element={<DocumentPage />} />
          <Route path="/collaterals" element={<CollateralLayout />}>
            <Route index element={<CollateralPage />} />
            {/* <Route path="thread/:threadId" element={<ChatResponsePage />} /> */}
          </Route>
          <Route path="coverage-universe" element={<CoverageLayout />}>
            <Route index element={<CoverageUniversePage />} />
            <Route path="detail" element={<CoverageDetailView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
