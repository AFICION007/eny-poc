import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import EmptyChat from "./home/EmptyChat";
import Chatbot from "./home/Chatbot";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}>
            <Route index element={<EmptyChat />} />
            <Route path="thread/:threadId" element={<Chatbot />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
