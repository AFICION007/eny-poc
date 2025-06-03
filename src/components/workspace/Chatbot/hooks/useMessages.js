import { useEffect, useContext, useCallback } from "react";

import WorkspaceContext from "../../contexts/workspaceContext";
import useFetchMessages from "../../services/useFetchMessages";
import usePostChatMessage from "../../services/usePostChatMessage";
import { getUserMessage } from "../../utils/message";

// All the references inside this hook are stable
const useMessages = () => {
  return { fetchingMessage: false, handleSubmitChat: () => {} };
};

export default useMessages;
