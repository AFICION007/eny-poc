import { useCallback, useMemo } from "react";

import useAxios from "../../../api/axiosInstance";
import { CHATS_URL } from "../../../api/apiUrls";
import { getAgentFromSelectedModes } from "../utils/modes";
import { transformMessage } from "../utils/message";

const usePostChatMessage = () => {
  const [{ data, loading }, execute] = useAxios(
    {
      url: CHATS_URL,
      method: "POST",
    },
    { manual: true }
  );

  const postChatMessage = useCallback(
    (selectedModes, message) => {
      execute({
        data: {
          mode: getAgentFromSelectedModes(selectedModes),
          question: message,
        },
      });
    },
    [execute]
  );

  const responseMessage = useMemo(
    () => (data ? transformMessage({ ...data, sender: "friday" }) : undefined),
    [data]
  );

  return {
    responseMessage,
    fetchingMessage: loading,
    postChatMessage,
  };
};

export default usePostChatMessage;
