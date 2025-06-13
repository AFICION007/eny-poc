import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import WorkspaceContext from "./contexts/workspaceContext";
import useChat from "./hooks/useChat";

const Workspace = () => {
  const [query, setQuery] = useState("");
  const [selectedModes, setSelectedModes] = useState([]);
  const [modal, setModal] = useState({ open: false });

  const { messages, appendMessage, updateMessage, setMessages } = useChat();

  return (
    <WorkspaceContext.Provider
      value={{
        query,
        setQuery,
        selectedModes,
        setSelectedModes,
        modal,
        setModal,
        messages,
        appendMessage,
        updateMessage,
        setMessages,
      }}
    >
      <Outlet />
    </WorkspaceContext.Provider>
  );
};

export default Workspace;
