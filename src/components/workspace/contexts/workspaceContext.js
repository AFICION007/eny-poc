import { createContext } from "react";

const WorkspaceContext = createContext({
  query: "",
  setQuery: () => {},

  selectedDb: null,
  setSelectedDb: () => {},

  modal: {},
  setModal: () => {},

  messages: [],
  appendMessage: () => {},
  updateMessage: () => {},
  setMessages: () => {},
});

export default WorkspaceContext;
