import { createContext } from "react";

const WorkspaceContext = createContext({
  query: "",
  setQuery: () => {},

  selectedMode: null,
  setSelectedMode: () => {},

  modal: {},
  setModal: () => {},

  messages: [],
  appendMessage: () => {},
  updateMessage: () => {},
  setMessages: () => {},
});

export default WorkspaceContext;
