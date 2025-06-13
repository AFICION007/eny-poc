import { createContext } from "react";

const WorkspaceContext = createContext({
  query: "",
  setQuery: () => {},

  selectedModes: [],
  setSelectedModes: () => {},

  modal: {},
  setModal: () => {},

  messages: [],
  appendMessage: () => {},
  updateMessage: () => {},
  setMessages: () => {},

  responseMessage: null,
  fetchingMessage: false,
  postChatMessage: () => {},
});

export default WorkspaceContext;
