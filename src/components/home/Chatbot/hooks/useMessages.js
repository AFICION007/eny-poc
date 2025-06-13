import { useEffect, useContext, useCallback } from "react";

import WorkspaceContext from "../../contexts/workspaceContext";
import useFetchMessages from "../../../workspace/services/useFetchMessages";
import usePostChatMessage from "../../../workspace/services/usePostChatMessage";
import { getUserMessage } from "../../utils/message";

// All the references inside this hook are stable
const useMessages = () => {
  const { query, setQuery, appendMessage, selectedModes } =
    useContext(WorkspaceContext);

  const handleSubmitChat = () => {
    // at least one mode is selected
    if (selectedModes.length > 0) {
      appendMessage(getUserMessage(query));
      setQuery("");
    }
  };

  return { fetchingMessage: false, handleSubmitChat };
};

export default useMessages;
