import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import EmptyChat from "./home/EmptyChat";
import Chatbot from "./home/Chatbot";
import DirectoryPage from "./myDirectory";
import DocumentPage from "./myDocument";
import CollateralPage from "./collateral";
import CollateralLayout from "./collateral/CollateralLayout";
import ChatResponsePage from "./collateral/ChatResponsePage";
import CoverageUniverse from "./coverageUniverse";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}>
            <Route index element={<EmptyChat />} />
            <Route path="thread/:threadId" element={<Chatbot />} />
          </Route>
          <Route path="my-directory" element={<DirectoryPage />} />
          <Route path="/my-documents" element={<DocumentPage />}/>
          <Route path="/collaterals" element= {<CollateralLayout />}>
            <Route index element={<CollateralPage/>} />
            <Route path="thread/:threadId" element={<ChatResponsePage />} />
          </Route>
          <Route path="/coverage-universe" element={<CoverageUniverse />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
