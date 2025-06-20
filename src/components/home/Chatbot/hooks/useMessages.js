import { useEffect, useContext } from "react";

import WorkspaceContext from "../../contexts/workspaceContext";
import { getCachedResponse } from "../../global/ChatInput/utils/cachedResponses";
import { getUserMessage, transformMessage } from "../../utils/message";

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

  const handleSubmitChat = async () => {
    const cached = await getCachedResponse(query);
    if (
      cached &&
      selectedModes.length === 1 &&
      selectedModes[0] === "deep_research"
    ) {
      appendMessage(getUserMessage(query));
      setQuery("");
      appendMessage(transformMessage({ ...cached, sender: "friday" }));
    } else {
      // at least one mode is selected
      if (selectedModes.length > 0) {
        appendMessage(getUserMessage(query));
        postChatMessage(selectedModes, query);
        setQuery("");
      }
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
