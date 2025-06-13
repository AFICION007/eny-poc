import { useEffect, useContext } from "react";

import WorkspaceContext from "../../contexts/workspaceContext";
import usePostChatMessage from "../../services/usePostChatMessage";
import { getUserMessage } from "../../utils/message";

// All the references inside this hook are stable
const useMessages = () => {
  const {
    query,
    setQuery,
    appendMessage,
    selectedModes,
    postChatMessage,
    responseMessage,
    fetchingMessage,
  } = useContext(WorkspaceContext);

  const handleSubmitChat = () => {
    // at least one mode is selected
    if (selectedModes.length > 0) {
      appendMessage(getUserMessage(query));
      postChatMessage(selectedModes, query);
      setQuery("");
    }
  };

  useEffect(() => {
    if (responseMessage) {
      appendMessage(responseMessage);
    }
  }, [responseMessage]);

  return { fetchingMessage, handleSubmitChat };
};

export default useMessages;
