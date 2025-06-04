import { useEffect, useContext, useCallback } from "react";

import WorkspaceContext from "../../contexts/workspaceContext";
import useFetchMessages from "../../../workspace/services/useFetchMessages";
import usePostChatMessage from "../../../workspace/services/usePostChatMessage";
import { getUserMessage } from "../../utils/message";

// All the references inside this hook are stable
const useMessages = () => {
  const { query, setQuery, appendMessage, selectedMode } =
    useContext(WorkspaceContext);

  const handleSubmitChat = () => {
    if (selectedMode) {
      appendMessage(getUserMessage(query));
      setQuery("");
    }
  };

  return { fetchingMessage: false, handleSubmitChat };
};

export default useMessages;
